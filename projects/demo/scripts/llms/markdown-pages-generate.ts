// Emits one Markdown file per doc page at its route path (e.g. /components/button.md) for the Copy page action.
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

import {
    buildFolderRouteMap,
    getComponentApiFromTable,
    getComponentApiFromTemplates,
    getComponentDescription,
    getComponentExample,
    getComponentHeader,
    getComponentProse,
    getDesignTokenTables,
    getFirstTabProse,
    getImportExamples,
    getInlineCodeSnippets,
    getPageProse,
    getUsageExamples,
    readIndexHtml,
    setPagesPath,
} from './utils';
import {loadConfig} from './utils/config';

interface ComponentHeader {
    header?: string;
    package?: string;
    type?: string;
    deprecated?: boolean;
}

const OUTPUT_DIR = path.resolve(process.cwd(), 'projects/demo/src/markdown-pages');

function plainText(value: string): string {
    return value
        .toLowerCase()
        .replaceAll(/[^a-z0-9]+/g, ' ')
        .trim();
}

function humanizeRoute(route: string): string {
    const segment = route.split('/').pop() ?? route;
    const words = segment.replaceAll('-', ' ').trim();

    return words ? `${words.charAt(0).toUpperCase()}${words.slice(1)}` : route;
}

async function buildPageMarkdown(
    folderPath: string,
    content: string,
    route: string,
): Promise<string | null> {
    const headerData = getComponentHeader(content) as ComponentHeader;

    if (headerData.deprecated) {
        return null;
    }

    // Only component pages carry a package; prose/markup pages don't and may bind [header].
    const isComponentPage = Boolean(headerData.package);
    const header = headerData.header?.trim() || humanizeRoute(route);
    const body: string[] = [];

    if (headerData.package) {
        body.push(`- **Package**: \`${headerData.package}\``);
    }

    if (headerData.type) {
        body.push(`- **Type**: ${headerData.type}`);
    }

    if (isComponentPage) {
        const description = getComponentDescription(content) || getFirstTabProse(content);

        if (description) {
            body.push(description);
        }

        const importExample = await getImportExamples(folderPath);

        if (importExample) {
            body.push(importExample);
        }

        const example = getComponentExample(content);

        if (example) {
            body.push(example);
        }

        const apiFromTable = getComponentApiFromTable(content);

        if (apiFromTable) {
            body.push(apiFromTable);
        }

        const apiFromTemplates = getComponentApiFromTemplates(content);

        if (apiFromTemplates) {
            body.push(apiFromTemplates);
        }

        for (const snippet of await getInlineCodeSnippets(content, folderPath)) {
            const core = snippet
                .replaceAll(/```\w*/g, '')
                .replaceAll('```', '')
                .trim();

            if (core && !body.join('\n').includes(core)) {
                body.push(snippet);
            }
        }
    } else {
        const tokenTables = await getDesignTokenTables(content, folderPath);

        if (tokenTables) {
            body.push(tokenTables);
        }

        const prose = await getPageProse(folderPath, content);

        if (prose) {
            body.push(prose);
        }
    }

    const usageExamples = await getUsageExamples(folderPath, true);

    if (usageExamples) {
        body.push(usageExamples);
    }

    // Component-page prose from other tabs / notes not already captured (incl. in usage examples).
    if (isComponentPage) {
        let seen = plainText(body.join(' '));

        for (const paragraph of getComponentProse(content)) {
            const plain = plainText(paragraph);

            if (plain && !seen.includes(plain)) {
                body.push(paragraph);
                seen += ` ${plain}`;
            }
        }
    }

    // Skip title-only pages so the action never offers an empty document.
    return body.join('\n').trim() ? [`# ${header}`, ...body].join('\n') : null;
}

async function main(): Promise<void> {
    const config = await loadConfig();

    if (config.constants.defaultModulesPath) {
        setPagesPath(config.constants.defaultModulesPath);
    }

    const folderToRoute = await buildFolderRouteMap();

    console.info(`Generating markdown for ${folderToRoute.size} routed pages...`);

    // Clean slate for renamed routes, but keep the dir + .gitkeep so nx serve finds the asset folder.
    await fs.rm(OUTPUT_DIR, {recursive: true, force: true});
    await fs.mkdir(OUTPUT_DIR, {recursive: true});
    await fs.writeFile(path.join(OUTPUT_DIR, '.gitkeep'), '');

    let written = 0;

    for (const [folderPath, route] of folderToRoute) {
        const content = await readIndexHtml(folderPath);

        if (!content) {
            continue;
        }

        const md = await buildPageMarkdown(folderPath, content, route);

        if (!md) {
            continue;
        }

        const outFile = path.join(OUTPUT_DIR, `${route}.md`);

        await fs.mkdir(path.dirname(outFile), {recursive: true});
        await fs.writeFile(outFile, `${md}\n`);
        written++;
    }

    console.info(`Wrote ${written} per-page markdown files to ${OUTPUT_DIR}`);
}

main().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
});
