import fs from 'node:fs/promises';
import path from 'node:path';

interface PackageExports {
    components: Set<string>;
    directives: Set<string>;
    pipes: Set<string>;
    services: Set<string>;
    types: Set<string>;
    tokens: Set<string>;
    utils: Set<string>;
    classes: Set<string>;
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

async function getPackageExports(packageName: string): Promise<PackageExports> {
    const packagePath = path.resolve(process.cwd(), `projects/${packageName}`);
    const result: PackageExports = {
        components: new Set(),
        directives: new Set(),
        pipes: new Set(),
        services: new Set(),
        types: new Set(),
        tokens: new Set(),
        utils: new Set(),
        classes: new Set(),
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
            const exports = await scanDirectory(categoryPath);

            exports.forEach((exp) => {
                // Filter out internal/private exports (starting with underscore)
                if (!exp.startsWith('_')) {
                    result[category as keyof PackageExports].add(exp);
                }
            });
        }
    }

    return result;
}

function formatExportsSection(title: string, exports: Set<string>, perLine = 10): string {
    if (exports.size === 0) {
        return '';
    }

    const sortedExports = Array.from(exports).sort();
    const lines: string[] = [];
    let currentLine: string[] = [];

    for (const exp of sortedExports) {
        currentLine.push(exp);

        if (currentLine.length >= perLine) {
            lines.push(`  ${currentLine.join(', ')},`);
            currentLine = [];
        }
    }

    if (currentLine.length > 0) {
        lines.push(`  ${currentLine.join(', ')});`);
    } else {
        // Remove trailing comma from last line and add closing paren
        lines[lines.length - 1] = lines[lines.length - 1]!.replace(/,$/, ');');
    }

    return `**${title}:**\n\n\`\`\`typescript\n(${lines.join('\n')}\n\`\`\`\n`;
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

        const exports = await getPackageExports(pkg);

        // Skip packages with no exports
        const totalExports =
            exports.components.size +
            exports.directives.size +
            exports.pipes.size +
            exports.services.size +
            exports.types.size;

        if (totalExports === 0) {
            console.info('  ⚠ No exports found, skipping');
            continue;
        }

        output.push('---\n');
        output.push(`## ${packageDisplayName}\n`);

        // Components & Directives (combined for better readability)
        const componentsAndDirectives = new Set([
            ...exports.components,
            ...exports.directives,
        ]);

        if (componentsAndDirectives.size > 0) {
            output.push(
                formatExportsSection('Components & Directives', componentsAndDirectives),
            );
        }

        // Services
        if (exports.services.size > 0) {
            output.push(formatExportsSection('Services', exports.services));
        }

        // Pipes
        if (exports.pipes.size > 0) {
            output.push(formatExportsSection('Pipes', exports.pipes));
        }

        // Types
        if (exports.types.size > 0) {
            output.push(formatExportsSection('Types', exports.types, 5));
        }

        // Tokens
        if (exports.tokens.size > 0) {
            output.push(formatExportsSection('Tokens', exports.tokens, 5));
        }

        // Utils & Classes (if needed)
        if (exports.utils.size > 0) {
            output.push(formatExportsSection('Utilities', exports.utils, 5));
        }

        console.info(
            `  ✓ Found ${componentsAndDirectives.size} components/directives, ${exports.services.size} services, ${exports.pipes.size} pipes, ${exports.types.size} types`,
        );
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
