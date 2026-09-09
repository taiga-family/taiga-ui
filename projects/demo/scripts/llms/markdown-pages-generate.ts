/**
 * Additive generator: emits one Markdown file per documentation page into
 * `projects/demo/src/markdown-pages/<route>.md`, mirroring the page URL.
 *
 * These files are copied to the build output root via a Markdown asset glob in
 * `project.json`, so each page's Markdown is served at the page path plus `.md` —
 * e.g. `/components/button` → `/components/button.md` (shadcn-style URLs).
 *
 * Generation is driven by the route table (`buildFolderRouteMap`), not by folder
 * scanning, so the output path always matches the URL the page is served at — even
 * when the folder differs from the route (e.g. `components/action-bar` →
 * `/components/actions-bar`, every `components/*-chart` → `/charts/...`). This is what
 * lets the docs "Copy page" action fetch `/<current-route>.md`.
 *
 * Reuses the same extraction utilities as `llms-full-generate.ts`. It does NOT touch
 * `llms-full.txt`.
 */
import * as fs from 'node:fs/promises';
import * as path from 'node:path';

import {
    buildFolderRouteMap,
    getComponentApiFromTable,
    getComponentApiFromTemplates,
    getComponentDescription,
    getComponentExample,
    getComponentHeader,
    getImportExamples,
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

    // Component pages carry `package`/`type`; info/prose pages (About, SSR, Migration
    // guide, AI pages, …) do not. The bound `[header]` on some prose pages leaves the
    // header empty, so fall back to a humanized route.
    const isComponentPage = Boolean(headerData.package || headerData.type);
    const header = headerData.header?.trim() || humanizeRoute(route);
    const body: string[] = [];

    if (headerData.package) {
        body.push(`- **Package**: \`${headerData.package}\``);
    }

    if (headerData.type) {
        body.push(`- **Type**: ${headerData.type}`);
    }

    if (isComponentPage) {
        const description = getComponentDescription(content);

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
    } else {
        const prose = await getPageProse(folderPath, content);

        if (prose) {
            body.push(prose);
        }
    }

    const usageExamples = await getUsageExamples(folderPath, true);

    if (usageExamples) {
        body.push(usageExamples);
    }

    // Skip pages that would render as just a title, so the "Copy page" action never
    // offers an empty document.
    return body.join('\n').trim() ? [`# ${header}`, ...body].join('\n') : null;
}

async function main(): Promise<void> {
    const config = await loadConfig();

    if (config.constants.defaultModulesPath) {
        setPagesPath(config.constants.defaultModulesPath);
    }

    const folderToRoute = await buildFolderRouteMap();

    console.info(`Generating markdown for ${folderToRoute.size} routed pages...`);

    // Start from a clean slate so stale files from renamed routes never linger, but
    // keep the directory and its `.gitkeep` so `nx serve` — which does not run this
    // generator — still finds the asset input folder.
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
