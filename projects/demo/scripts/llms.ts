import fs from 'node:fs/promises';
import path from 'node:path';

const MODULES_PATH = path.resolve(process.cwd(), 'projects/demo/src/modules');
const OUTPUT_FILE = path.resolve(process.cwd(), 'projects/demo/src/llms-full.txt');

// child folders of the main `modules` folder from which the content will be taken
const FOLDERS_TO_SCAN = ['components', 'directives', 'tokens', 'customization', 'pipes'];

interface ComponentHeader {
    header: string | null;
    package: string | null;
    type: string | null;
    deprecated: boolean;
}

async function fileExists(filePath: string): Promise<boolean> {
    try {
        await fs.access(filePath);

        return true;
    } catch {
        return false;
    }
}

async function readIndexHtml(folderPath: string): Promise<string> {
    const indexPath = path.join(folderPath, 'index.html');

    if (!(await fileExists(indexPath))) {
        return '';
    }

    return fs.readFile(indexPath, 'utf-8');
}

// parse metadata from tui-doc-page
function getComponentHeader(content: string): ComponentHeader {
    const tagMatch = /<tui-doc-page\s+([^>]*)>/i.exec(content);

    if (!tagMatch?.[1]) {
        return {header: null, package: null, type: null, deprecated: false};
    }

    const tagContent = tagMatch[1];
    const deprecated = /(^|\s)deprecated(\s|$)/i.test(tagContent);

    const headerMatch = /header="([^"]*)"/i.exec(tagContent);
    const header = headerMatch?.[1]?.trim() || null;

    const packageMatch = /package="([^"]*)"/i.exec(tagContent);
    const packageValue = packageMatch?.[1]?.trim() || null;

    const typeMatch = /type="([^"]*)"/i.exec(tagContent);
    const type = typeMatch?.[1]?.trim() || null;

    return {header, package: packageValue, type, deprecated};
}

// parse component text from tui-doc-page
function getComponentDescription(content: string): string | undefined {
    const templateMatch =
        /<ng-template[^>]+pageTab[^>]*>([\s\S]*?)<tui-doc-example/i.exec(content);

    if (!templateMatch) {
        return '';
    }

    const templateContent = templateMatch[1];

    const cleanContent = templateContent
        ?.replaceAll(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
        .replaceAll(/<ng-template[^>]*>[\s\S]*?<\/ng-template>/gi, '')
        .replaceAll(/<((\/?)(p|div|ul|ol|li|code|a|button|tui-[^>]+))/gi, '<$1')
        .replaceAll(/<[^>]+>/g, '')
        .trim();

    return cleanContent;
}

// parse example import.md and template.md
async function getImportExamples(folderPath: string): Promise<string> {
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

// parse example from tui-doc-demo
function getComponentExample(content: string): string {
    const match = /<tui-doc-demo[^>]*>([\s\S]*?)<\/tui-doc-demo>/i.exec(content);

    if (!match) {
        return '';
    }

    const html = match[1]
        ?.replaceAll(/<(\/?(tui-|button|input|a|code|span|div)[^>]+)>/gi, '<$1>')
        .trim();

    return `\n### Example\n\n\`\`\`html\n${html}\n\`\`\``;
}

// parse API properties from tuiDocAPI
function getComponentApiFromTable(content: string): string {
    const tableMatch = /<table tuiDocAPI[^>]*>([\s\S]*?)<\/table>/i.exec(content);

    if (!tableMatch) {
        return '';
    }

    const tableContent = tableMatch[1];
    const apiRows = tableContent?.match(/<tr[^>]+name="([^"]+)"[^>]*>[\s\S]*?<\/tr>/gi);

    if (!apiRows) {
        return '';
    }

    const rows: string[] = [];

    for (const row of apiRows) {
        const nameMatch = /name="([^"]+)"/i.exec(row);
        const typeMatch = /type="([^"]+)"/i.exec(row);
        const descriptionMatch = />([^<>]+?)<\/tr>/i.exec(row);

        if (nameMatch && typeMatch) {
            const name = nameMatch[1]?.trim();
            const type = typeMatch[1]?.trim();
            const description = descriptionMatch?.[1] ? descriptionMatch[1].trim() : '—';

            rows.push(`| ${name} | \`${type}\` | ${description} |`);
        }
    }

    if (rows.length === 0) {
        return '';
    }

    return `\n### API\n\n| Property | Type | Description |\n|----------|-----|----------|\n${rows.join('\n')}`;
}

// parse API properties from tui-doc-documentation
function getComponentApiFromTemplates(content: string): string {
    const templateMatch =
        /<tui-doc-documentation[^>]*>([\s\S]*?)<\/tui-doc-documentation>/i.exec(content);

    if (!templateMatch) {
        return '';
    }

    const templatesContent = templateMatch[1];
    const templateRows = templatesContent?.match(
        /<ng-template[^>]+documentationPropertyName="([^"]+)"[^>]+documentationPropertyType="([^"]+)"[^>]*>([\s\S]*?)<\/ng-template>/gi,
    );

    if (!templateRows) {
        return '';
    }

    const rows: string[] = [];

    for (const row of templateRows) {
        const nameMatch = /documentationPropertyName="([^"]+)"/i.exec(row);
        const typeMatch = /documentationPropertyType="([^"]+)"/i.exec(row);
        const innerContentMatch = />([\s\S]*?)<\/ng-template>/i.exec(row);

        if (nameMatch && typeMatch) {
            const name = nameMatch[1]?.trim();
            const type = typeMatch[1]?.trim();

            let description = innerContentMatch?.[1]
                ? innerContentMatch[1].replaceAll(/<[^>]+>/g, '').trim()
                : '—';

            description = description.replaceAll(/\s+/g, ' ');

            rows.push(`| ${name} | \`${type}\` | ${description} |`);
        }
    }

    if (rows.length === 0) {
        return '';
    }

    return `\n### API\n\n| Property | Type | Description |\n|----------|-----|----------|\n${rows.join('\n')}`;
}

// parse example index.ts and index.less files
async function getComponentSourceFiles(
    folderPath: string,
    hasExample: boolean,
): Promise<string> {
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

async function getAllFolders(): Promise<string[]> {
    const folders: string[] = [];
    const SKIP_FOLDERS = [
        'examples',
        'assets',
        'src',
        'data',
        'mocks',
        'test',
        '__test__',
        'node_modules',
        'dist',
        'lib',
        'build',
        'coverage',
        'docs',
    ];

    async function scanDir(currentPath: string, depth = 0): Promise<void> {
        // limiting the depth of recursion
        if (depth > 3) {
            return;
        }

        const entries = await fs.readdir(currentPath, {withFileTypes: true});

        for (const entry of entries) {
            const fullPath = path.join(currentPath, entry.name);

            if (entry.isDirectory()) {
                const lowerName = entry.name.toLowerCase();

                if (SKIP_FOLDERS.includes(lowerName)) {
                    continue;
                }

                const indexPath = path.join(fullPath, 'index.html');
                const exists = await fileExists(indexPath);

                if (exists) {
                    folders.push(fullPath);
                }

                await scanDir(fullPath, depth + 1);
            }
        }
    }

    for (const subFolder of FOLDERS_TO_SCAN) {
        const dirPath = path.join(MODULES_PATH, subFolder);

        if (await fileExists(dirPath)) {
            await scanDir(dirPath, 0);
        } else {
            console.warn(`Folder ${subFolder} not found in ${MODULES_PATH}`);
        }
    }

    return folders;
}

// recursive get all .md files from startPath
async function getMarkdownFiles(startPath: string): Promise<string[]> {
    const result: string[] = [];

    async function scanDir(currentPath: string): Promise<void> {
        const entries = await fs.readdir(currentPath, {withFileTypes: true});

        for (const entry of entries) {
            const fullPath = path.join(currentPath, entry.name);

            if (entry.isDirectory()) {
                await scanDir(fullPath);
            } else if (
                entry.isFile() &&
                path.extname(entry.name).toLowerCase() === '.md'
            ) {
                result.push(fullPath);
            }
        }
    }

    await scanDir(startPath);

    return result;
}

// parse markdown files content
async function processMarkdownFile(filePath: string): Promise<string> {
    const content = await fs.readFile(filePath, 'utf-8');

    const relativePath = path.relative(MODULES_PATH, filePath);
    const title = `# ${relativePath}`;

    return `${title}\n\n${content.trim()}\n`;
}

async function main(): Promise<void> {
    const EXAMPLES_MD_PATH = path.join(MODULES_PATH, 'app', 'home', 'examples');

    console.info(`Search .md files in: ${EXAMPLES_MD_PATH}`);

    const exampleMarkdownFiles = await getMarkdownFiles(EXAMPLES_MD_PATH);

    console.info(`Found .md files in examples: ${exampleMarkdownFiles.length}`);

    const output: string[] = [];

    for (const mdFile of exampleMarkdownFiles) {
        output.push(await processMarkdownFile(mdFile));
    }

    console.info(`Scanning component folders in: ${MODULES_PATH}`);
    const allFolders = await getAllFolders();

    if (allFolders.length === 0) {
        console.warn(`Folders with content not found in ${MODULES_PATH}`);

        return;
    }

    console.info(`Total component folders found: ${allFolders.length}`);

    // statistics
    let includedCount = 0;
    let skippedDeprecated = 0;
    let skippedLegacy = 0;

    for (const folderPath of allFolders) {
        const content = await readIndexHtml(folderPath);

        if (!content) {
            continue;
        }

        const headerData = getComponentHeader(content);

        // skip deprecated
        if (headerData.deprecated) {
            skippedDeprecated++;

            console.warn(`[SKIPPED] Deprecated component: ${path.basename(folderPath)}`);

            continue;
        }

        // skip legacy
        if ((headerData.package || '').toUpperCase() === 'LEGACY') {
            skippedLegacy++;

            console.warn(`[SKIPPED] Legacy component: ${path.basename(folderPath)}`);

            continue;
        }

        if (!headerData?.header) {
            continue;
        }

        // success validated component
        includedCount++;

        const parentFolder = path.basename(path.dirname(folderPath));
        const title = `${parentFolder}/${headerData.header}`;

        output.push(`# ${title}\n`);

        if (headerData.deprecated) {
            output.push(
                '> ⚠️ **Deprecated** — use the new version from experimental package\n',
            );
        }

        output.push(`- **Package**: \`${headerData.package}\``);
        output.push(`- **Type**: ${headerData.type}`);
        output.push('');

        const description = getComponentDescription(content);

        if (description) {
            output.push(`${description}\n`);
        }

        const importExample = await getImportExamples(folderPath);

        if (importExample) {
            output.push(importExample);
        }

        const example = getComponentExample(content);

        if (example) {
            output.push(example);
        }

        const apiFromTable = getComponentApiFromTable(content);

        if (apiFromTable) {
            output.push(apiFromTable);
        }

        const apiFromTemplates = getComponentApiFromTemplates(content);

        if (apiFromTemplates) {
            output.push(apiFromTemplates);
        }

        const sourceFiles = await getComponentSourceFiles(folderPath, !!example);

        if (sourceFiles) {
            output.push(sourceFiles);
        }

        output.push('\n---\n');
    }

    console.info('\n====== COMPONENT PROCESSING SUMMARY ======');
    console.info(`Total components found: ${allFolders.length}`);
    console.info(`- Included in output: ${includedCount}`);
    console.info(`- Skipped (deprecated): ${skippedDeprecated}`);
    console.info(`- Skipped (legacy): ${skippedLegacy}`);
    console.info('========================================');

    await fs.writeFile(OUTPUT_FILE, output.join('\n'), 'utf-8');

    console.info(`Successfully file saved: ${OUTPUT_FILE}`);
    console.info(`Total components in output: ${includedCount}`);
}

main().catch(console.error);
