// The purpose of this script is to generate a llms-full.txt
// Run with `node projects/demo/scripts/llms.mjs` to generate llms-full.txt based on documentation

import fs from 'fs/promises';
import path from 'path';

const MODULES_PATH = path.resolve(new URL('.', import.meta.url).pathname, '../src/modules');
const OUTPUT_FILE = path.resolve(new URL('.', import.meta.url).pathname, '../src/llms-full.txt');

const FOLDERS_TO_SCAN = ['components', 'directives', 'tokens', 'customization', 'pipes'];

async function fileExists(filePath) {
    try {
        await fs.access(filePath);
        return true;
    } catch {
        return false;
    }
}

async function readIndexHtml(folderPath) {
    const indexPath = path.join(folderPath, 'index.html');

    if (!(await fileExists(indexPath))) {
        return '';
    }

    return await fs.readFile(indexPath, 'utf-8');
}

// parse header from tui-doc-page
function getComponentHeader(content) {
    const match = content.match(
        /<tui-doc-page[^>]*(deprecated)?[^>]*header="([^"]+)"[^>]*package="([^"]+)"[^>]*type="([^"]+)"[^>]*>/i,
    );

    if (!match) {
        return null;
    }

    const deprecated = !!match[1];
    const header = match[2]?.trim();
    const packageValue = match[3]?.trim();
    const type = match[4]?.trim();

    return {
        header,
        package: packageValue,
        type,
        deprecated,
    };
}

// parse description from first <ng-template pageTab> to <tui-doc-example>
function getComponentDescription(content) {
    const templateMatch = content.match(/<ng-template[^>]+pageTab[^>]*>([\s\S]*?)<tui-doc-example/i);

    if (!templateMatch) {
        return '';
    }

    const templateContent = templateMatch[1];

    // remove all ng-template and script-tags
    const cleanContent = templateContent
        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<ng-template[^>]*>[\s\S]*?<\/ng-template>/gi, '')
        .replace(/<(\/?(p|div|ul|ol|li|code|a|button|tui-[^>]+))/gi, '<$1')
        .replace(/<[^>]+>/g, '')
        .trim();

    return cleanContent;
}

// parse import.md and template.md
async function getImportExamples(folderPath) {
    const importFolderPath = path.join(folderPath, 'examples', 'import');

    if (!(await fileExists(importFolderPath))) {
        return '';
    }

    let result = '';
    const importMdPath = path.join(importFolderPath, 'import.md');
    const templateMdPath = path.join(importFolderPath, 'template.md');

    if (await fileExists(importMdPath)) {
        const content = await fs.readFile(importMdPath, 'utf-8');
        result += `\n### How to Use (Import)\n\n${content.trim()}`;
    }

    if (await fileExists(templateMdPath)) {
        const content = await fs.readFile(templateMdPath, 'utf-8');
        result += `\n### How to Use (Template)\n\n${content.trim()}`;
    }

    return result;
}

// parse example from <tui-doc-demo>
function getComponentExample(content) {
    const match = content.match(/<tui-doc-demo[^>]*>([\s\S]*?)<\/tui-doc-demo>/i);

    if (!match) {
        return '';
    }

    const html = match[1].replace(/<(\/?(tui-|button|input|a|code|span|div)[^>]+)>/gi, '<$1>').trim();

    return `\n### Example\n\n\`\`\`html\n${html}\n\`\`\``;
}

// parse API from <table tuiDocAPI>
function getComponentApiFromTable(content) {
    const tableMatch = content.match(/<table tuiDocAPI[^>]*>([\s\S]*?)<\/table>/i);

    if (!tableMatch) {
        return '';
    }

    const tableContent = tableMatch[1];
    const apiRows = tableContent.match(/<tr[^>]+name="([^"]+)"[^>]*>[\s\S]*?<\/tr>/gi);

    if (!apiRows) {
        return '';
    }

    const rows = [];

    for (const row of apiRows) {
        const nameMatch = row.match(/name="([^"]+)"/i);
        const typeMatch = row.match(/type="([^"]+)"/i);
        const descriptionMatch = row.match(/>([^<>]+?)<\/tr>/i);

        if (nameMatch && typeMatch) {
            const name = nameMatch[1].trim();
            const type = typeMatch[1].trim();
            const description = descriptionMatch && descriptionMatch[1] ? descriptionMatch[1].trim() : '—';

            rows.push(`| ${name} | \`${type}\` | ${description} |`);
        }
    }

    if (rows.length === 0) {
        return '';
    }

    return `\n### API\n\n| Property | Type | Description |\n|----------|-----|----------|\n${rows.join('\n')}`;
}

// parse API from <tui-doc-documentation> with <ng-template documentationPropertyName="...">
function getComponentApiFromTemplates(content) {
    const templateMatch = content.match(/<tui-doc-documentation[^>]*>([\s\S]*?)<\/tui-doc-documentation>/i);

    if (!templateMatch) {
        return '';
    }

    const templatesContent = templateMatch[1];
    const templateRows = templatesContent.match(
        /<ng-template[^>]+documentationPropertyName="([^"]+)"[^>]+documentationPropertyType="([^"]+)"[^>]*>([\s\S]*?)<\/ng-template>/gi,
    );

    if (!templateRows) {
        return '';
    }

    const rows = [];

    for (const row of templateRows) {
        const nameMatch = row.match(/documentationPropertyName="([^"]+)"/i);
        const typeMatch = row.match(/documentationPropertyType="([^"]+)"/i);
        const innerContentMatch = row.match(/>([\s\S]*?)<\/ng-template>/i);

        if (nameMatch && typeMatch) {
            const name = nameMatch[1].trim();
            const type = typeMatch[1].trim();

            let description =
                innerContentMatch && innerContentMatch[1] ? innerContentMatch[1].replace(/<[^>]+>/g, '').trim() : '—';

            description = description.replace(/\s+/g, ' ');

            rows.push(`| ${name} | \`${type}\` | ${description} |`);
        }
    }

    if (rows.length === 0) {
        return '';
    }

    return `\n### API\n\n| Property | Type | Description |\n|----------|-----|----------|\n${rows.join('\n')}`;
}

// parse content from index.ts and index.less
async function getComponentSourceFiles(folderPath, hasExample) {
    if (!hasExample) {
        return '';
    }

    const tsPath = path.join(folderPath, 'index.ts');
    const lessPath = path.join(folderPath, 'index.less');

    let result = '';

    if (await fileExists(tsPath)) {
        const tsContent = await fs.readFile(tsPath, 'utf-8');
        result += `\n### TypeScript\n\n\`\`\`ts\n${tsContent.trim()}\n\`\`\``;
    }

    if (await fileExists(lessPath)) {
        const lessContent = await fs.readFile(lessPath, 'utf-8');
        result += `\n### LESS\n\n\`\`\`less\n${lessContent.trim()}\n\`\`\``;
    }

    return result;
}

async function getAllFolders() {
    let folders = [];

    for (const subFolder of FOLDERS_TO_SCAN) {
        const dirPath = path.join(MODULES_PATH, subFolder);
        const exists = await fileExists(dirPath);

        if (exists) {
            await scanDir(dirPath);
        } else {
            console.warn(`Folder ${subFolder} not found in ${MODULES_PATH}`);
        }
    }

    return folders;

    async function scanDir(currentPath) {
        const entries = await fs.readdir(currentPath, {withFileTypes: true});

        for (const entry of entries) {
            const fullPath = path.join(currentPath, entry.name);

            if (entry.isDirectory()) {
                const indexPath = path.join(fullPath, 'index.html');
                const exists = await fileExists(indexPath);

                if (exists) {
                    folders.push(fullPath);
                }

                await scanDir(fullPath);
            }
        }
    }
}

// recursive get .md files in folder and subfolders
async function getMarkdownFiles(startPath) {
    const result = [];

    async function scanDir(currentPath) {
        const entries = await fs.readdir(currentPath, {withFileTypes: true});

        for (const entry of entries) {
            const fullPath = path.join(currentPath, entry.name);

            if (entry.isDirectory()) {
                await scanDir(fullPath);
            } else if (entry.isFile() && path.extname(entry.name).toLowerCase() === '.md') {
                result.push(fullPath);
            }
        }
    }

    await scanDir(startPath);

    return result;
}

// parse content from .md file
async function processMarkdownFile(filePath) {
    const content = await fs.readFile(filePath, 'utf-8');

    const relativePath = path.relative(MODULES_PATH, filePath);
    const title = `# ${relativePath}`;

    return `${title}\n\n${content.trim()}\n`;
}

async function main() {
    const EXAMPLES_MD_PATH = path.join(MODULES_PATH, 'app', 'home', 'examples');
    console.log(`Search .md files in: ${EXAMPLES_MD_PATH}`);

    const exampleMarkdownFiles = await getMarkdownFiles(EXAMPLES_MD_PATH);
    console.log(`Found .md files in examples: ${exampleMarkdownFiles.length}`);

    const output = [];

    for (const mdFile of exampleMarkdownFiles) {
        const processed = await processMarkdownFile(mdFile);

        output.push(processed);
    }

    const allFolders = await getAllFolders();

    if (allFolders.length === 0) {
        console.warn(`Folders with content not found in ${MODULES_PATH}`);
        return;
    }

    console.log(`Found folders with content: ${allFolders.length}`);

    for (const folderPath of allFolders) {
        const content = await readIndexHtml(folderPath);
        if (!content) continue;

        const headerData = getComponentHeader(content);
        if (!headerData) continue;

        const parentFolder = path.basename(path.dirname(folderPath));
        const title = `${parentFolder}/${headerData.header}`;

        output.push(`# ${title}\n`);

        if (headerData.deprecated) {
            output.push(`> ⚠️ **Deprecated** — use the new version from experimental package\n`);
        }

        output.push(`- **Package**: \`${headerData.package}\``);
        output.push(`- **Type**: ${headerData.type}`);
        output.push('');

        const description = getComponentDescription(content);
        if (description) output.push(`${description}\n`);

        const importExample = await getImportExamples(folderPath);
        if (importExample) output.push(importExample);

        const example = getComponentExample(content);
        if (example) output.push(example);

        const apiFromTable = getComponentApiFromTable(content);
        if (apiFromTable) output.push(apiFromTable);

        const apiFromTemplates = getComponentApiFromTemplates(content);
        if (apiFromTemplates) output.push(apiFromTemplates);

        const sourceFiles = await getComponentSourceFiles(folderPath, !!example);
        if (sourceFiles) {
            output.push(`${sourceFiles}\n`);
        }

        output.push('\n---\n');
    }

    await fs.writeFile(OUTPUT_FILE, output.join('\n'), 'utf-8');
    console.log(`Successfully file saved: ${OUTPUT_FILE}`);
}

main().catch(console.error);
