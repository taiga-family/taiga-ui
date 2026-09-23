// Emits one Markdown file per doc page at its route path (e.g. /components/button.md) for the Copy page action.
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

import {
    buildFolderRouteMap,
    DEFAULT_PATH_FILES,
    DEFAULT_ROUTE_FILES,
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
    getPagesPath,
    getUsageExamples,
    type PagesRoot,
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

interface CliOptions {
    /** Pages folders to read, in priority order: the first to claim a URL keeps it. */
    roots: string[];
    output: string;
    config?: string;
    routeFiles: string[];
    pathFiles: string[];
}

function list(value: string): string[] {
    return value
        .split(',')
        .map((item) => item.trim())
        .filter(Boolean);
}

/**
 * `--root=a,b --output=dir --config=file --routeFiles=x.ts --pathFiles=y.ts`, matching the
 * flags {@link ../llms-full-generate.ts} already takes, so an app outside this repository can
 * drive the generator over its own pages instead of forking it.
 */
function parseArgs(argv: string[]): CliOptions {
    const options: CliOptions = {
        roots: [],
        output: OUTPUT_DIR,
        routeFiles: [...DEFAULT_ROUTE_FILES],
        pathFiles: [...DEFAULT_PATH_FILES],
    };

    for (const arg of argv.slice(2)) {
        const index = arg.startsWith('--') ? arg.indexOf('=') : -1;
        const key = index === -1 ? '' : arg.slice(2, index);
        const value = index === -1 ? '' : arg.slice(index + 1);

        switch (key) {
            case 'config':
                options.config = path.resolve(process.cwd(), value);
                break;
            case 'output':
                options.output = path.resolve(process.cwd(), value);
                break;
            case 'pathFiles':
                options.pathFiles = list(value);
                break;
            case 'root':
                options.roots = list(value).map((root) =>
                    path.resolve(process.cwd(), root),
                );
                break;
            case 'routeFiles':
                options.routeFiles = list(value);
                break;
            default:
                break;
        }
    }

    return options;
}

function plainText(value: string): string {
    return (
        value
            // Collapse markdown links to their text so a link URL can't defeat the dedupe below
            // (e.g. an intro repeated as prose with a `[<select>](url)` link).
            .replaceAll(/\[([^\]]*)\]\([^)]*\)/g, '$1')
            .toLowerCase()
            .replaceAll(/[^a-z0-9]+/g, ' ')
            .trim()
    );
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
    const meta: string[] = [];

    if (headerData.package) {
        meta.push(`- **Package**: \`${headerData.package}\``);
    }

    if (headerData.type) {
        meta.push(`- **Type**: ${headerData.type}`);
    }

    if (meta.length) {
        body.push(meta.join('\n'));
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

    // Blank line between every section; skip title-only pages so the action never offers an empty document.
    const sections = [`# ${header}`, ...body]
        .map((section) => section.trim())
        .filter(Boolean);

    return sections.length > 1 ? sections.join('\n\n') : null;
}

async function main(): Promise<void> {
    const options = parseArgs(process.argv);
    const config = await loadConfig(options.config);

    if (config.constants?.defaultModulesPath) {
        setPagesPath(config.constants.defaultModulesPath);
    }

    // Examples and API tables are read relative to each page's own folder, so only the
    // pages root differs between apps — the rest of the pipeline is root-agnostic.
    const roots: PagesRoot[] = (
        options.roots.length ? options.roots : [getPagesPath()]
    ).map((pagesPath) => ({
        pagesPath,
        routeFiles: options.routeFiles,
        pathFiles: options.pathFiles,
    }));

    const folderToRoute = await buildFolderRouteMap(roots);

    console.info(`Generating markdown for ${folderToRoute.size} routed pages...`);

    // Clean slate for renamed routes, but keep the dir + .gitkeep so nx serve finds the asset folder.
    await fs.rm(options.output, {recursive: true, force: true});
    await fs.mkdir(options.output, {recursive: true});
    await fs.writeFile(path.join(options.output, '.gitkeep'), '');

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

        const outFile = path.join(options.output, `${route}.md`);

        await fs.mkdir(path.dirname(outFile), {recursive: true});
        await fs.writeFile(outFile, `${md}\n`);
        written++;
    }

    console.info(`Wrote ${written} per-page markdown files to ${options.output}`);
}

main().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
});
