import fs from 'node:fs/promises';
import path from 'node:path';

interface EntityExports {
    name: string;
    category: string;
    exports: string[];
}

interface PackageEntities {
    entities: EntityExports[];
}

const PACKAGES = [
    'core',
    'kit',
    'cdk',
    'experimental',
    'layout',
    'addon-commerce',
    'addon-mobile',
    'addon-table',
    'addon-charts',
];

const PACKAGE_DISPLAY_NAMES: Record<string, string> = {
    core: '@taiga-ui/core',
    kit: '@taiga-ui/kit',
    cdk: '@taiga-ui/cdk',
    experimental: '@taiga-ui/experimental',
    layout: '@taiga-ui/layout',
    'addon-commerce': '@taiga-ui/addon-commerce',
    'addon-mobile': '@taiga-ui/addon-mobile',
    'addon-table': '@taiga-ui/addon-table',
    'addon-charts': '@taiga-ui/addon-charts',
};

async function fileExists(filePath: string): Promise<boolean> {
    try {
        await fs.access(filePath);

        return true;
    } catch {
        return false;
    }
}

async function extractExportsFromFile(filePath: string): Promise<string[]> {
    const content = await fs.readFile(filePath, 'utf-8');
    const exports: string[] = [];

    // Match: export class ClassName, export interface InterfaceName, export const ConstName
    const exportMatches = content.matchAll(
        /export\s+(?:class|interface|const|function|enum|type)\s+([A-Z][a-zA-Z0-9]*)/g,
    );

    for (const match of exportMatches) {
        if (match[1]) {
            const name = match[1];

            // Filter out all-caps constants (e.g., SCROLL, TUI, ANDROID, etc.)
            if (!/^[A-Z_0-9]+$/.test(name)) {
                exports.push(name);
            }
        }
    }

    return exports;
}

async function scanDirectory(dirPath: string, depth = 0): Promise<string[]> {
    if (depth > 5) {
        return [];
    }

    const exports: string[] = [];

    try {
        const entries = await fs.readdir(dirPath, {withFileTypes: true});

        for (const entry of entries) {
            const fullPath = path.join(dirPath, entry.name);

            if (entry.isDirectory()) {
                const subExports = await scanDirectory(fullPath, depth + 1);

                exports.push(...subExports);
            } else if (entry.isFile() && entry.name.endsWith('.ts')) {
                const fileExports = await extractExportsFromFile(fullPath);

                exports.push(...fileExports);
            }
        }
    } catch (error) {
        console.warn(`  ⚠ Warning: Could not read directory ${dirPath}: ${error}`);
        // Ignore errors for directories we can't read
    }

    return exports;
}

function singularizeCategory(category: string): string {
    const map: Record<string, string> = {
        components: 'component',
        directives: 'directive',
        pipes: 'pipe',
        services: 'service',
        types: 'type',
        tokens: 'token',
        utils: 'utility',
        classes: 'class',
    };

    return map[category] || category;
}

function formatExportsList(exports: string[], perLine = 10): string {
    if (exports.length === 0) {
        return '';
    }

    const lines: string[] = [];
    let currentLine: string[] = [];

    for (const exp of exports) {
        currentLine.push(exp);

        if (currentLine.length >= perLine) {
            lines.push(`  ${currentLine.join(', ')}`);
            currentLine = [];
        }
    }

    if (currentLine.length > 0) {
        lines.push(`  ${currentLine.join(', ')}`);
    }

    return `\`\`\`text\n${lines.join('\n')}\n\`\`\``;
}

function formatEntitySection(entity: EntityExports, perLine = 10): string {
    const exportsBlock = formatExportsList(entity.exports, perLine);

    if (!exportsBlock) {
        return '';
    }

    return `### ${entity.name}\n\n${exportsBlock}\n`;
}

async function getPackageEntities(packageName: string): Promise<PackageEntities> {
    const packagePath = path.resolve(process.cwd(), `projects/${packageName}`);
    const result: PackageEntities = {
        entities: [],
    };

    const categories = [
        'components',
        'directives',
        'pipes',
        'services',
        'types',
        'tokens',
        'utils',
        'classes',
    ];

    for (const category of categories) {
        const categoryPath = path.join(packagePath, category);

        if (await fileExists(categoryPath)) {
            const entries = await fs.readdir(categoryPath, {withFileTypes: true});
            const categoryEntities: EntityExports[] = [];
            const rootExports: string[] = [];

            for (const entry of entries) {
                const fullPath = path.join(categoryPath, entry.name);

                if (entry.isDirectory()) {
                    const exports = await scanDirectory(fullPath);
                    const filtered = exports.filter((exp) => !exp.startsWith('_')).sort();

                    if (filtered.length > 0) {
                        categoryEntities.push({
                            name: entry.name,
                            category: singularizeCategory(category),
                            exports: filtered,
                        });
                    }
                } else if (entry.isFile() && entry.name.endsWith('.ts')) {
                    const exports = await extractExportsFromFile(fullPath);

                    rootExports.push(...exports.filter((exp) => !exp.startsWith('_')));
                }
            }

            if (rootExports.length > 0) {
                categoryEntities.push({
                    name: 'root',
                    category: singularizeCategory(category),
                    exports: rootExports.sort(),
                });
            }

            result.entities.push(...categoryEntities);
        }
    }

    return result;
}

export async function generateImportMap(): Promise<string> {
    const output: string[] = [];

    output.push('# Import Map - Package Exports Reference\n');
    output.push(
        '> **Critical**: Always import from the correct package. This is the #1 cause of compilation errors.\n',
    );
    output.push(
        '> **Auto-generated**: This file is automatically generated from Taiga UI source code.\n',
    );

    for (const pkg of PACKAGES) {
        const packageDisplayName = PACKAGE_DISPLAY_NAMES[pkg] || pkg;

        console.info(`Processing ${packageDisplayName}...`);

        const {entities} = await getPackageEntities(pkg);

        // Skip packages with no exports
        const totalExports = entities.reduce(
            (sum, entity) => sum + entity.exports.length,
            0,
        );

        if (totalExports === 0) {
            console.info('  ⚠ No exports found, skipping');
            continue;
        }

        output.push('---\n');
        output.push(`## ${packageDisplayName}\n`);

        const perLineByCategory: Record<string, number> = {
            component: 10,
            directive: 10,
            pipe: 10,
            service: 10,
            type: 5,
            token: 5,
            utility: 5,
            class: 5,
        };

        const categoryOrder = [
            'component',
            'directive',
            'pipe',
            'service',
            'type',
            'token',
            'utility',
            'class',
        ];

        const byCategory = entities.reduce<Record<string, EntityExports[]>>(
            (acc, entity) => {
                if (!acc[entity.category]) {
                    acc[entity.category] = [];
                }

                acc[entity.category]!.push(entity);

                return acc;
            },
            {},
        );

        const sortedCategories = Object.keys(byCategory).sort((a, b) => {
            const aIdx = categoryOrder.indexOf(a);
            const bIdx = categoryOrder.indexOf(b);

            if (aIdx === -1 && bIdx === -1) {
                return a.localeCompare(b);
            }

            if (aIdx === -1) {
                return 1;
            }

            if (bIdx === -1) {
                return -1;
            }

            return aIdx - bIdx;
        });

        for (const category of sortedCategories) {
            const categoryEntities = byCategory[category] || [];

            if (categoryEntities.length === 0) {
                continue;
            }

            const title = `${category[0]?.toUpperCase()}${category.slice(1)}s`;

            output.push(`**${title}:**\n`);

            const sortedEntities = categoryEntities.sort((a, b) =>
                a.name.localeCompare(b.name),
            );

            for (const entity of sortedEntities) {
                const perLine = perLineByCategory[entity.category] ?? 10;
                const section = formatEntitySection(entity, perLine);

                if (section) {
                    output.push(section);
                }
            }
        }

        const categoryCounts = entities.reduce<Record<string, number>>((acc, entity) => {
            acc[entity.category] = (acc[entity.category] || 0) + 1;

            return acc;
        }, {});

        const countSummary = Object.entries(categoryCounts)
            .sort(([a], [b]) => {
                const aIdx = categoryOrder.indexOf(a);
                const bIdx = categoryOrder.indexOf(b);

                if (aIdx === -1 && bIdx === -1) {
                    return a.localeCompare(b);
                }

                if (aIdx === -1) {
                    return 1;
                }

                if (bIdx === -1) {
                    return -1;
                }

                return aIdx - bIdx;
            })
            .map(([category, count]) => `${count} ${category}s`)
            .join(', ');

        console.info(`  ✓ Found ${entities.length} entities (${countSummary})`);
    }

    // Add Angular common imports section
    output.push('---\n');
    output.push('## Angular Common Imports\n');
    output.push(
        '**Structural Directives (consider using Angular 17+ control flow instead):**\n\n',
    );
    output.push('```typescript\n');
    output.push("import {NgIf, NgFor, NgSwitch} from '@angular/common';\n");
    output.push('// Modern alternative: @if, @for, @switch\n');
    output.push('```\n\n');
    output.push('**Forms:**\n\n');
    output.push('```typescript\n');
    output.push("import {FormsModule, ReactiveFormsModule} from '@angular/forms';\n");
    output.push('```\n\n');
    output.push('**Other Common:**\n\n');
    output.push('```typescript\n');
    output.push("import {CommonModule} from '@angular/common';\n");
    output.push("import {AsyncPipe, DatePipe, DecimalPipe} from '@angular/common';\n");
    output.push('```\n');

    return output.join('');
}

export async function saveImportMap(outputPath?: string): Promise<void> {
    const importMap = await generateImportMap();
    const filePath =
        outputPath ||
        path.resolve(
            process.cwd(),
            'projects/demo/src/llms-header-sections/import-map.md',
        );

    await fs.writeFile(filePath, importMap, 'utf-8');
}
