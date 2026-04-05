import * as fs from 'node:fs/promises';
import * as path from 'node:path';

type SymbolCategory =
    | 'class'
    | 'component'
    | 'directive'
    | 'pipe'
    | 'service'
    | 'token'
    | 'type'
    | 'utility';

interface EntityExports {
    name: string;
    category: SymbolCategory;
    exports: string[];
}

interface PackageEntities {
    entities: EntityExports[];
}

interface ImportMapOptions {
    roots?: string[];
    extraPackageName?: string;
}

interface ParsedSymbol {
    name: string;
    hasTypeModifier: boolean;
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
] as const;

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

const CATEGORY_ORDER: readonly SymbolCategory[] = [
    'component',
    'directive',
    'pipe',
    'service',
    'type',
    'token',
    'utility',
    'class',
];

const CATEGORY_SINGULAR_MAP: Record<string, SymbolCategory> = {
    components: 'component',
    directives: 'directive',
    pipes: 'pipe',
    services: 'service',
    types: 'type',
    tokens: 'token',
    utils: 'utility',
    classes: 'class',
};

const PER_LINE_BY_CATEGORY: Record<SymbolCategory, number> = {
    component: 10,
    directive: 10,
    pipe: 10,
    service: 10,
    type: 5,
    token: 5,
    utility: 5,
    class: 5,
};

const SKIP_DIRS = new Set([
    '__snapshots__',
    '__tests__',
    '.cache',
    '.git',
    'dist',
    'node_modules',
]);

const SOURCE_CATEGORIES = [
    'components',
    'directives',
    'pipes',
    'services',
    'types',
    'tokens',
    'utils',
    'classes',
] as const;

async function fileExists(filePath: string): Promise<boolean> {
    try {
        await fs.access(filePath);

        return true;
    } catch {
        return false;
    }
}

async function collectTsFiles(dirPath: string, depth = 0): Promise<string[]> {
    if (depth > 5) {
        return [];
    }

    const files: string[] = [];

    try {
        const entries = await fs.readdir(dirPath, {withFileTypes: true});

        for (const entry of entries) {
            if (SKIP_DIRS.has(entry.name)) {
                continue;
            }

            const fullPath = path.join(dirPath, entry.name);

            if (entry.isDirectory()) {
                files.push(...(await collectTsFiles(fullPath, depth + 1)));
            } else if (
                entry.isFile() &&
                entry.name.endsWith('.ts') &&
                !entry.name.endsWith('.spec.ts') &&
                !entry.name.endsWith('.d.ts')
            ) {
                files.push(fullPath);
            }
        }
    } catch (error) {
        console.warn(`  ⚠ Could not read directory ${dirPath}: ${error}`);
    }

    return files;
}

async function extractExportsFromFile(filePath: string): Promise<string[]> {
    const content = await fs.readFile(filePath, 'utf-8');
    const exports: string[] = [];

    const exportMatches = Array.from(
        content.matchAll(
            /export\s+(?:class|interface|const|function|enum|type)\s+([A-Z][a-zA-Z0-9]*)/g,
        ),
    );

    for (const match of exportMatches) {
        if (match[1]) {
            const name = match[1];

            if (!/^[A-Z_0-9]+$/.test(name)) {
                exports.push(name);
            }
        }
    }

    return exports;
}

async function scanDirectory(dirPath: string): Promise<string[]> {
    const tsFiles = await collectTsFiles(dirPath);
    const exports: string[] = [];

    for (const file of tsFiles) {
        try {
            const fileExports = await extractExportsFromFile(file);

            exports.push(...fileExports);
        } catch (error) {
            console.warn(`  ⚠ Could not extract exports from ${file}: ${error}`);
        }
    }

    return exports;
}

const TYPE_MODIFIER_RE = /^type\s+/;

function parseSymbols(raw: string): ParsedSymbol[] {
    return raw
        .split(',')
        .map((segment) => {
            const trimmed = segment.trim();
            const hasTypeModifier = TYPE_MODIFIER_RE.test(trimmed);
            const nameWithAlias = hasTypeModifier
                ? trimmed.replace(TYPE_MODIFIER_RE, '')
                : trimmed;
            const name = nameWithAlias.split(/\s+as\s+/)[0]?.trim() ?? '';

            return {name, hasTypeModifier};
        })
        .filter((sym): sym is ParsedSymbol => sym.name.length > 0);
}

function categorizeSymbol(
    name: string,
    isTypeImport: boolean,
    folderHint?: SymbolCategory,
): SymbolCategory {
    if (/^[A-Z][A-Z0-9_]+$/.test(name)) {
        return 'token';
    }

    if (isTypeImport) {
        return 'type';
    }

    if (name.endsWith('Pipe')) {
        return 'pipe';
    }

    if (name.endsWith('Directive')) {
        return 'directive';
    }

    if (name.endsWith('Component')) {
        return 'component';
    }

    if (/^[a-z]/.test(name)) {
        return 'utility';
    }

    return folderHint ?? 'class';
}

function detectFolderCategory(
    filePath: string,
    rootPath: string,
): SymbolCategory | undefined {
    const relative = path.relative(rootPath, filePath);
    const topFolder = relative.split(path.sep)[0] ?? '';

    return CATEGORY_SINGULAR_MAP[topFolder];
}

function buildImportRegex(escapedPkg: string, typeOnly: boolean): RegExp {
    const fromClause = String.raw`from\s*['"]${escapedPkg}(?:/[^'"]*)?['"]`;

    if (typeOnly) {
        return new RegExp(String.raw`import\s+type\s*\{([^}]+)\}\s*${fromClause}`, 'gs');
    }

    return new RegExp(String.raw`import\s+(?!type\s)\{([^}]+)\}\s*${fromClause}`, 'gs');
}

function processTypeImports(
    content: string,
    typeImportRe: RegExp,
    symbolMap: Map<string, boolean>,
): void {
    const matches = Array.from(content.matchAll(typeImportRe));

    for (const match of matches) {
        for (const sym of parseSymbols(match[1] ?? '')) {
            if (!symbolMap.has(sym.name)) {
                symbolMap.set(sym.name, true);
            }
        }
    }
}

function processValueImports(
    content: string,
    valueImportRe: RegExp,
    symbolMap: Map<string, boolean>,
): void {
    const matches = Array.from(content.matchAll(valueImportRe));

    for (const match of matches) {
        for (const sym of parseSymbols(match[1] ?? '')) {
            if (sym.hasTypeModifier) {
                if (!symbolMap.has(sym.name)) {
                    symbolMap.set(sym.name, true);
                }
            } else {
                symbolMap.set(sym.name, false);
            }
        }
    }
}

async function extractImportsFromDemoPages(
    rootPath: string,
    packageName: string,
): Promise<EntityExports[]> {
    const tsFiles = await collectTsFiles(rootPath);

    const symbolMap = new Map<string, boolean>();
    const symbolFolderHint = new Map<string, SymbolCategory | undefined>();

    const escapedPkg = packageName.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`);
    const typeImportRe = buildImportRegex(escapedPkg, true);
    const valueImportRe = buildImportRegex(escapedPkg, false);

    for (const file of tsFiles) {
        let content: string;

        try {
            content = await fs.readFile(file, 'utf-8');
        } catch {
            continue;
        }

        const folderHint = detectFolderCategory(file, rootPath);
        const prevSize = symbolMap.size;

        processTypeImports(content, typeImportRe, symbolMap);
        processValueImports(content, valueImportRe, symbolMap);

        if (symbolMap.size > prevSize) {
            for (const name of symbolMap.keys()) {
                if (!symbolFolderHint.has(name)) {
                    symbolFolderHint.set(name, folderHint);
                }
            }
        }
    }

    const byCategory = new Map<SymbolCategory, string[]>();

    const symbolEntries = Array.from(symbolMap.entries());

    for (const [name, isTypeOnly] of symbolEntries) {
        const category = categorizeSymbol(name, isTypeOnly, symbolFolderHint.get(name));
        let arr = byCategory.get(category);

        if (!arr) {
            arr = [];
            byCategory.set(category, arr);
        }

        arr.push(name);
    }

    const categoryEntries = Array.from(byCategory.entries());

    return categoryEntries.map(([category, symbols]) => ({
        name: 'all',
        category,
        exports: symbols.sort(),
    }));
}

function singularizeCategory(category: string): SymbolCategory {
    return CATEGORY_SINGULAR_MAP[category] ?? (category as SymbolCategory);
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

function sortByCategory<T extends {category: string}>(items: T[]): T[] {
    return [...items].sort((a, b) => {
        const aIdx = CATEGORY_ORDER.indexOf(a.category as SymbolCategory);
        const bIdx = CATEGORY_ORDER.indexOf(b.category as SymbolCategory);

        const aOrder = aIdx === -1 ? Infinity : aIdx;
        const bOrder = bIdx === -1 ? Infinity : bIdx;

        return aOrder === bOrder ? a.category.localeCompare(b.category) : aOrder - bOrder;
    });
}

function categoriesToTitle(category: string): string {
    return `${category[0]?.toUpperCase()}${category.slice(1)}s`;
}

async function collectCategoryEntities(
    categoryPath: string,
    category: string,
): Promise<EntityExports[]> {
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

            continue;
        }

        if (entry.isFile() && entry.name.endsWith('.ts')) {
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

    return categoryEntities;
}

async function getPackageEntities(packageName: string): Promise<PackageEntities> {
    const packagePath = path.resolve(process.cwd(), `projects/${packageName}`);
    const result: PackageEntities = {entities: []};

    for (const category of SOURCE_CATEGORIES) {
        const categoryPath = path.join(packagePath, category);

        if (await fileExists(categoryPath)) {
            const categoryEntities = await collectCategoryEntities(
                categoryPath,
                category,
            );

            result.entities.push(...categoryEntities);
        }
    }

    return result;
}

function renderPackageSection(
    packageDisplayName: string,
    entities: EntityExports[],
): string[] {
    const output: string[] = [];

    output.push('---\n', `## ${packageDisplayName}\n`);

    const byCategory = new Map<string, EntityExports[]>();

    for (const entity of entities) {
        let arr = byCategory.get(entity.category);

        if (!arr) {
            arr = [];
            byCategory.set(entity.category, arr);
        }

        arr.push(entity);
    }

    const sortedCategories = Array.from(byCategory.keys()).sort((a, b) => {
        const aIdx = CATEGORY_ORDER.indexOf(a as SymbolCategory);
        const bIdx = CATEGORY_ORDER.indexOf(b as SymbolCategory);
        const aOrder = aIdx === -1 ? Infinity : aIdx;
        const bOrder = bIdx === -1 ? Infinity : bIdx;

        return aOrder === bOrder ? a.localeCompare(b) : aOrder - bOrder;
    });

    for (const category of sortedCategories) {
        const categoryEntities = byCategory.get(category) ?? [];

        if (categoryEntities.length === 0) {
            continue;
        }

        output.push(`**${categoriesToTitle(category)}:**\n`);

        const sortedEntities = [...categoryEntities].sort((a, b) =>
            a.name.localeCompare(b.name),
        );

        for (const entity of sortedEntities) {
            const perLine = PER_LINE_BY_CATEGORY[entity.category] ?? 10;
            const section = formatEntitySection(entity, perLine);

            if (section) {
                output.push(section);
            }
        }
    }

    return output;
}

function renderExtraPackageSection(
    packageName: string,
    entities: EntityExports[],
): string[] {
    const output: string[] = [];

    output.push('---\n', `## ${packageName}\n`);

    const sorted = sortByCategory(entities);

    for (const entity of sorted) {
        output.push('\n', `**${categoriesToTitle(entity.category)}:**\n`);

        const perLine = PER_LINE_BY_CATEGORY[entity.category] ?? 10;
        const exportsBlock = formatExportsList(entity.exports, perLine);

        if (exportsBlock) {
            output.push(exportsBlock, '');
        }
    }

    return output;
}

function renderAngularCommonSection(): string[] {
    return [
        '---\n',
        '## Angular Common Imports\n',
        '**Structural Directives (consider using Angular 17+ control flow instead):**\n\n',
        '```typescript\n',
        "import {NgIf, NgFor, NgSwitch} from '@angular/common';\n",
        '// Modern alternative: @if, @for, @switch\n',
        '```\n\n',
        '**Forms:**\n\n',
        '```typescript\n',
        "import {FormsModule, ReactiveFormsModule} from '@angular/forms';\n",
        '```\n\n',
        '**Other Common:**\n\n',
        '```typescript\n',
        "import {CommonModule} from '@angular/common';\n",
        "import {AsyncPipe, DatePipe, DecimalPipe} from '@angular/common';\n",
        '```\n',
    ];
}

export async function generateImportMap(options?: ImportMapOptions): Promise<string> {
    const output: string[] = [];

    output.push(
        '# Import Map - Package Exports Reference\n',
        '> **Critical**: Always import from the correct package. This is the #1 cause of compilation errors.\n',
        '> **Auto-generated**: This file is automatically generated from Taiga UI source code.\n',
    );

    for (const pkg of PACKAGES) {
        const packageDisplayName = PACKAGE_DISPLAY_NAMES[pkg] || pkg;

        console.info(`Processing ${packageDisplayName}...`);

        const {entities} = await getPackageEntities(pkg);

        const totalExports = entities.reduce(
            (sum, entity) => sum + entity.exports.length,
            0,
        );

        if (totalExports === 0) {
            console.info('  ⚠ No exports found, skipping');
            continue;
        }

        output.push(...renderPackageSection(packageDisplayName, entities));

        const categoryCounts = entities.reduce<Record<string, number>>((acc, entity) => {
            acc[entity.category] = (acc[entity.category] || 0) + 1;

            return acc;
        }, {});

        const countSummary = Object.entries(categoryCounts)
            .sort(([a], [b]) => {
                const aIdx = CATEGORY_ORDER.indexOf(a as SymbolCategory);
                const bIdx = CATEGORY_ORDER.indexOf(b as SymbolCategory);

                return (aIdx === -1 ? Infinity : aIdx) - (bIdx === -1 ? Infinity : bIdx);
            })
            .map(([category, count]) => `${count} ${category}s`)
            .join(', ');

        console.info(`  ✓ Found ${entities.length} entities (${countSummary})`);
    }

    if (options?.extraPackageName && options.roots && options.roots.length > 1) {
        const extraRoot = options.roots[0]!;

        console.info(
            `Processing ${options.extraPackageName} from demo pages in ${extraRoot}...`,
        );

        const entities = await extractImportsFromDemoPages(
            extraRoot,
            options.extraPackageName,
        );
        const totalExports = entities.reduce((sum, e) => sum + e.exports.length, 0);

        if (totalExports > 0) {
            output.push(...renderExtraPackageSection(options.extraPackageName, entities));
            console.info(
                `  \u2713 Found ${totalExports} symbols in ${options.extraPackageName}`,
            );
        } else {
            console.info(
                `  \u26A0 No symbols found for ${options.extraPackageName} in ${extraRoot}`,
            );
        }
    }

    output.push(...renderAngularCommonSection());

    return output.join('');
}

export async function saveImportMap(
    outputPath?: string,
    options?: ImportMapOptions,
): Promise<void> {
    const importMap = await generateImportMap(options);
    const filePath =
        outputPath ||
        path.resolve(
            process.cwd(),
            'projects/demo/src/llms-header-sections/import-map.md',
        );

    await fs.writeFile(filePath, importMap, 'utf-8');
}
