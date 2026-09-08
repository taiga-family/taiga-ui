/**
 * Additive generator: emits one Markdown file per documentation page into
 * `projects/demo/src/assets/llms-pages/<section>/<name>.md`, mirroring the page route.
 *
 * Reuses the same extraction utilities as `llms-full-generate.ts` but writes per-page
 * files instead of a single bundle — this powers the "Copy Page" action in the docs.
 * It does NOT touch `llms-full.txt`.
 */
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

import {
    getAllFolders,
    getComponentApiFromTable,
    getComponentApiFromTemplates,
    getComponentDescription,
    getComponentExample,
    getComponentHeader,
    getImportExamples,
    getUsageExamples,
    readIndexHtml,
    setFoldersToScan,
    setPagesPath,
} from './utils';
import {loadConfig} from './utils/config';

interface ComponentHeader {
    header?: string;
    package?: string;
    type?: string;
    deprecated?: boolean;
}

const OUTPUT_DIR = path.resolve(process.cwd(), 'projects/demo/src/assets/llms-pages');

async function buildPageMarkdown(
    folderPath: string,
    content: string,
): Promise<{section: string; name: string; md: string} | null> {
    const headerData = getComponentHeader(content) as ComponentHeader;

    if (!headerData?.header || headerData.deprecated) {
        return null;
    }

    const section = path.basename(path.dirname(folderPath));
    const name = path.basename(folderPath);
    const block = [
        `# ${headerData.header}`,
        `- **Package**: \`${headerData.package}\``,
        `- **Type**: ${headerData.type}`,
    ];

    const description = getComponentDescription(content);

    if (description) {
        block.push(description);
    }

    const importExample = await getImportExamples(folderPath);

    if (importExample) {
        block.push(importExample);
    }

    const example = getComponentExample(content);

    if (example) {
        block.push(example);
    }

    const apiFromTable = getComponentApiFromTable(content);

    if (apiFromTable) {
        block.push(apiFromTable);
    }

    const apiFromTemplates = getComponentApiFromTemplates(content);

    if (apiFromTemplates) {
        block.push(apiFromTemplates);
    }

    const usageExamples = await getUsageExamples(folderPath, true);

    if (usageExamples) {
        block.push(usageExamples);
    }

    return {section, name, md: block.join('\n')};
}

async function main(): Promise<void> {
    const config = await loadConfig();

    if (config.constants.defaultModulesPath) {
        setPagesPath(config.constants.defaultModulesPath);
    }

    if (Array.isArray(config.constants.childFolders)) {
        setFoldersToScan(config.constants.childFolders);
    }

    const folders = await getAllFolders();

    console.info(`Scanning ${folders.length} page folders...`);

    let written = 0;

    for (const folderPath of folders) {
        const content = await readIndexHtml(folderPath);

        if (!content) {
            continue;
        }

        const page = await buildPageMarkdown(folderPath, content);

        if (!page) {
            continue;
        }

        const dir = path.join(OUTPUT_DIR, page.section);

        await fs.mkdir(dir, {recursive: true});
        await fs.writeFile(path.join(dir, `${page.name}.md`), `${page.md}\n`);
        written++;
    }

    console.info(`Wrote ${written} per-page markdown files to ${OUTPUT_DIR}`);
}

main().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
});
