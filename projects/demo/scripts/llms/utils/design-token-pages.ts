// Rebuilds the Colors/Typography data tables from static token sources (the browser computes
// these at runtime via getComputedStyle, so the generic prose converter can't see the values).
import path from 'node:path';

import {readIfExists} from './file-system';

const THEME_DIR = path.resolve(process.cwd(), 'projects/styles/mixins/theme');
const SAMPLE = 'Taiga UI is a modern UI kit for Angular';

function parseThemeBlock(source: string, mixin: string): Map<string, string> {
    const block =
        new RegExp(String.raw`\.${mixin}\(\)\s*\{([\s\S]*?)\n\}`).exec(source)?.[1] ?? '';

    const map = new Map<string, string>();

    for (const [, name = '', value = ''] of block.matchAll(/(--[\w-]+):([^;]+);/g)) {
        map.set(name, value.trim());
    }

    return map;
}

// The page renders opaque rgba(r, g, b, 1) as a hex color; alpha colors and literal hex stay as-is.
function normalizeColor(value: string): string {
    const opaque = /^rgba\(\s*(\d+),\s*(\d+),\s*(\d+),\s*1\)$/.exec(value);

    if (!opaque) {
        return value;
    }

    const [, red = '0', green = '0', blue = '0'] = opaque;
    const hex = (channel: string): string =>
        Number(channel).toString(16).padStart(2, '0');

    return `#${hex(red)}${hex(green)}${hex(blue)}`;
}

function parseBindings(componentTs: string): Map<string, string> {
    const map = new Map<string, string>();

    for (const [, binding = '', constant = ''] of componentTs.matchAll(
        /readonly (\w+) = (\w+);/g,
    )) {
        map.set(binding, constant);
    }

    return map;
}

function parseConstantArrays(source: string): Map<string, readonly string[]> {
    const map = new Map<string, readonly string[]>();

    for (const [, name = '', body = ''] of source.matchAll(
        /export const (\w+)\s*=\s*\[([\s\S]*?)\];/g,
    )) {
        map.set(
            name,
            [...body.matchAll(/['"]([^'"]+)['"]/g)].map(([, item = '']) => item),
        );
    }

    const charts = /export const (\w+)\s*=\s*Array\.from\(\s*\{length:\s*(\d+)\}/.exec(
        source,
    );

    if (charts) {
        const [, name = '', length = '0'] = charts;

        map.set(
            name,
            Array.from(
                {length: Number(length)},
                (_, index) => `--tui-chart-categorical-${String(index).padStart(2, '0')}`,
            ),
        );
    }

    return map;
}

export async function getColorsMarkdown(
    content: string,
    folderPath: string,
): Promise<string | null> {
    if (!content.includes('[colors]=')) {
        return null;
    }

    const palette = await readIfExists(path.join(THEME_DIR, 'palette.less'));
    const componentTs = await readIfExists(path.join(folderPath, 'index.ts'));
    const constantsTs = await readIfExists(path.join(folderPath, 'constants.ts'));

    if (!palette || !componentTs || !constantsTs) {
        return null;
    }

    const light = parseThemeBlock(palette, 'tui-theme-light');
    const dark = parseThemeBlock(palette, 'tui-theme-dark');
    const bindings = parseBindings(componentTs);
    const arrays = parseConstantArrays(constantsTs);
    const sections: string[] = [];

    for (const [, label = '', body = ''] of content.matchAll(
        /<ng-template\s+pageTab="([^"]+)">([\s\S]*?)<\/ng-template>/gi,
    )) {
        const binding = /\[colors\]="(\w+)"/.exec(body)?.[1];
        const variables = binding ? arrays.get(bindings.get(binding) ?? '') : undefined;

        if (!variables?.length) {
            continue;
        }

        const themed = /tuiTheme/i.test(body);
        const header = themed
            ? '| Variable | Light | Dark |\n| --- | --- | --- |'
            : '| Variable | Value |\n| --- | --- |';

        const rows = variables
            .map((variable) => {
                const value = light.get(variable);

                if (!value) {
                    return '';
                }

                const lightValue = normalizeColor(value);

                if (!themed) {
                    return `| \`${variable}\` | ${lightValue} |`;
                }

                const darkValue = normalizeColor(dark.get(variable) ?? value);

                return `| \`${variable}\` | ${lightValue} | ${darkValue} |`;
            })
            .filter(Boolean);

        if (rows.length) {
            sections.push([`## ${label}`, '', header, ...rows].join('\n'));
        }
    }

    return sections.length ? sections.join('\n\n') : null;
}

function parseTypographyTokens(
    source: string,
): Map<string, {weight: string; fontSize: string; lineHeight: string}> {
    const map = new Map<string, {weight: string; fontSize: string; lineHeight: string}>();

    for (const [, name = '', weight, numerator, denominator] of source.matchAll(
        /(--tui-typography-[\w-]+):\s*(bold|normal)\b.+?calc\((\d+) \/ (\d+)\)/g,
    )) {
        const size = Number(denominator);
        const height = Number(numerator);

        map.set(name, {
            weight: weight === 'bold' ? 'Bold' : 'Regular',
            fontSize: `${size}px`,
            lineHeight: `${height}px (${(height / size).toFixed(2)})`,
        });
    }

    return map;
}

function parseGroups(componentTs: string): Array<{tab: string; variables: string[]}> {
    const block = /groups\s*=\s*\{([\s\S]*?)\n {4}\};/.exec(componentTs)?.[1] ?? '';
    const groups: Array<{tab: string; variables: string[]}> = [];

    for (const [, tab = '', body = ''] of block.matchAll(/(\w+):\s*\[([\s\S]*?)\]/g)) {
        groups.push({
            tab,
            variables: [...body.matchAll(/'([^']+)'/g)].map(([, item = '']) => item),
        });
    }

    return groups;
}

function parseTabHeadings(content: string): Map<string, string> {
    const map = new Map<string, string>();

    for (const [, tab = '', heading = ''] of content.matchAll(
        /@case \('(\w+)'\)\s*\{([^}]+)\}/g,
    )) {
        map.set(tab, heading.trim());
    }

    return map;
}

export async function getTypographyMarkdown(
    content: string,
    folderPath: string,
): Promise<string | null> {
    if (!/\btuiFont\b/.test(content)) {
        return null;
    }

    const variables = await readIfExists(path.join(THEME_DIR, 'variables.less'));
    const componentTs = await readIfExists(path.join(folderPath, 'index.ts'));

    if (!variables || !componentTs) {
        return null;
    }

    const tokens = parseTypographyTokens(variables);
    const headings = parseTabHeadings(content);
    const sections: string[] = [];

    for (const {tab, variables: names} of parseGroups(componentTs)) {
        const rows = names
            .map((name) => {
                const token = tokens.get(name);

                return token
                    ? `| ${SAMPLE} | \`${name}\` | ${token.weight} | ${token.fontSize} | ${token.lineHeight} |`
                    : '';
            })
            .filter(Boolean);

        if (rows.length) {
            sections.push(
                [
                    `## ${tab}`,
                    '',
                    `| ${headings.get(tab) ?? tab} | Variable name | font-weight | font-size | line-height |`,
                    '| --- | --- | --- | --- | --- |',
                    ...rows,
                ].join('\n'),
            );
        }
    }

    return sections.length ? sections.join('\n\n') : null;
}

// Rebuilt Colors/Typography token tables, or null for any other page.
export async function getDesignTokenTables(
    content: string,
    folderPath: string,
): Promise<string | null> {
    return (
        (await getColorsMarkdown(content, folderPath)) ??
        (await getTypographyMarkdown(content, folderPath))
    );
}
