import fs from 'node:fs/promises';
import path from 'node:path';

import {
    extractComponentsFromRoutes,
    getComponentDescription,
    loadConfig,
    readIndexHtml,
    shouldIncludeComponent,
    shouldIncludeSection,
} from './utils';

const OUTPUT_FILE = path.resolve(process.cwd(), 'projects/demo/src/llms.txt');
const TEMPLATE_FILE = path.resolve(process.cwd(), 'projects/demo/src/llms.template.txt');
const PAGES_PATH = path.resolve(process.cwd(), 'projects/demo/src/pages');

function prettifyTitle(name: string): string {
    return name.replaceAll('-', ' ').replaceAll(/\b\w/g, (c) => c.toUpperCase());
}

async function main(): Promise<void> {
    const config = await loadConfig();

    console.info('Extracting components from routing files...');
    console.info(`Exclude sections: ${config.llms.excludeSections.join(', ')}`);

    const allComponents = await extractComponentsFromRoutes();

    if (allComponents.length === 0) {
        console.warn('No routes found');

        return;
    }

    console.info(`Total components found in routes: ${allComponents.length}`);

    // Filter components based on config
    const filteredComponents = allComponents.filter((c) =>
        shouldIncludeComponent(c, config.llms.excludeSections),
    );

    console.info(
        `Filtered out ${allComponents.length - filteredComponents.length} excluded components`,
    );

    // Group by first segment of the route, but group all single-segment routes under 'Documentation'
    const bySegment: Record<string, typeof filteredComponents> = {};

    for (const c of filteredComponents) {
        const routeParts = c.route.split('/').filter(Boolean);
        let group: string;

        if (routeParts.length === 1) {
            group = 'documentation';
        } else {
            group = routeParts[0] || 'other';
        }

        if (!bySegment[group]) {
            bySegment[group] = [];
        }

        bySegment[group]!.push(c);
    }

    // Sort groups alphabetically, but put 'documentation' first
    const sortedGroups = Object.keys(bySegment).sort((a, b) => {
        if (a === 'documentation') {
            return -1;
        }

        if (b === 'documentation') {
            return 1;
        }

        return a.localeCompare(b);
    });

    const output: string[] = [];

    // Always generate fresh content from template
    const staticPreface = await fs.readFile(TEMPLATE_FILE, 'utf-8');

    output.push(staticPreface, '');

    for (const group of sortedGroups) {
        // Check if section should be included based on config
        if (!shouldIncludeSection(group, config.llms.excludeSections)) {
            continue;
        }

        output.push(`### ${prettifyTitle(group)}`);
        output.push('');
        // Sort links alphabetically by title
        const sortedLinks = bySegment[group]!.sort((a, b) =>
            prettifyTitle(a.name).localeCompare(prettifyTitle(b.name)),
        );

        for (const c of sortedLinks) {
            const url = `https://taiga-ui.dev${c.route}`;
            // Try to extract a per-entity description from its index.html
            const folderPath = path.join(PAGES_PATH, c.route.replace(/^\//, ''));
            let brief = '';

            try {
                const content = await readIndexHtml(folderPath);
                const desc = content ? getComponentDescription(content) : '';

                brief = desc ? ` — ${desc.replaceAll(/\s+/g, ' ').trim()}` : '';
            } catch {
                // If reading fails, omit description silently
                brief = '';
            }

            output.push(`- [${prettifyTitle(c.name)}](${url})${brief}`);
        }

        output.push('');
    }

    await fs.writeFile(OUTPUT_FILE, output.join('\n'), 'utf-8');
    console.info(`Successfully saved: ${OUTPUT_FILE}`);
}

main().catch(console.error);
