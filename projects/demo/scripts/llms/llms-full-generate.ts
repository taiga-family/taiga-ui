import * as fs from 'node:fs/promises';
import * as path from 'node:path';

import {
    getAllFolders,
    getComponentApiFromTable,
    getComponentApiFromTemplates,
    getComponentDescription,
    getComponentExample,
    getComponentHeader,
    getComponentSourceFiles,
    getImportExamples,
    getMarkdownFiles,
    getUsageExamples,
    processMarkdownFile,
    readIndexHtml,
    setFoldersToScan,
    setPagesPath,
} from './utils';
import {escapeHTML} from './utils/escaped-html';
import {getConfigValue, loadConfig, shouldIncludeSection} from './utils/config';
import {saveImportMap} from './utils/generate-import-map';

interface CliOptions {
    roots: string[];
    output: string;
    outputHtml?: string;
    configFile?: string;
    overrides: Record<string, boolean>;
    markdownDirs?: string[];
    importMdNames?: string[];
    templateMdNames?: string[];
    importMapExtraPackage?: string;
}

interface ConfigConstants {
    defaultModulesPath: string;
    defaultOutputFile: string;
    defaultOutputFileHtml: string;
    headerSectionsPath: string;
    headerFiles?: string[];
    childFolders?: string[];
    skipFolders?: string[];
}

interface ConfigToggle {
    value: boolean;
    description: string;
}

interface LlmsFullConfig {
    excludeSections: string[];
    includeExamples: ConfigToggle;
    includeApi: ConfigToggle;
    includeSourceCode: ConfigToggle;
    includeImportExamples: ConfigToggle;
    includeMarkdownFiles: ConfigToggle;
    includeUsageExamples: ConfigToggle;
    includeAllExamples: ConfigToggle;
    [key: string]: unknown;
}

interface AppConfig {
    constants: ConfigConstants;
    llmsFull: LlmsFullConfig;
}

interface ComponentHeader {
    header?: string;
    package?: string;
    type?: string;
    deprecated?: boolean;
}

interface ProcessingStats {
    included: number;
    skippedDeprecated: number;
    skippedLegacy: number;
    skippedNoContent: number;
    skippedExcludedSection: number;
    skippedNoHeader: number;
}

const CLI_FLAG_PARSERS: Record<string, (value: string, options: CliOptions) => void> = {
    root(value, options) {
        options.roots = value
            .split(',')
            .map((segment) => path.resolve(process.cwd(), segment.trim()))
            .filter(Boolean);
    },
    output(value, options) {
        options.output = path.resolve(process.cwd(), value);
    },
    outputHtml(value, options) {
        options.outputHtml = path.resolve(process.cwd(), value);
    },
    config(value, options) {
        options.configFile = path.resolve(process.cwd(), value);
    },
    markdownDirs(value, options) {
        options.markdownDirs = value
            .split(',')
            .map((s) => s.trim())
            .filter(Boolean);
    },
    importMdNames(value, options) {
        options.importMdNames = value
            .split(',')
            .map((s) => s.trim())
            .filter(Boolean);
    },
    templateMdNames(value, options) {
        options.templateMdNames = value
            .split(',')
            .map((s) => s.trim())
            .filter(Boolean);
    },
    importMapExtraPackage(value, options) {
        options.importMapExtraPackage = value.trim();
    },
};

function parseArgs(argv: string[]): CliOptions {
    const options: CliOptions = {
        roots: [],
        output: '',
        outputHtml: '',
        overrides: {},
    };

    for (const rawArg of argv.slice(2)) {
        if (!rawArg.startsWith('--')) {
            continue;
        }

        const eqIndex = rawArg.indexOf('=');

        if (eqIndex === -1) {
            continue;
        }

        const key = rawArg.slice(2, eqIndex);
        const value = rawArg.slice(eqIndex + 1);

        if (!key || !value) {
            continue;
        }

        const parser = CLI_FLAG_PARSERS[key];

        if (parser) {
            parser(value, options);
            continue;
        }

        if (value === 'true' || value === 'false') {
            options.overrides[key] = value === 'true';
        }
    }

    return options;
}

const DEFAULT_CONFIG_PATH = path.resolve(
    process.cwd(),
    'projects/demo/src/llms-config.json',
);

async function resolveConfig(configFile?: string): Promise<AppConfig> {
    if (configFile) {
        try {
            const raw = await fs.readFile(configFile, 'utf-8');
            const parsed = JSON.parse(raw) as AppConfig;

            console.info(`Loaded custom config: ${configFile}`);

            return parsed;
        } catch (error) {
            console.error(
                `Failed to read custom config at ${configFile}: ${(error as Error).message}`,
            );
        }
    }

    const fallback = (await loadConfig()) as AppConfig;

    console.info(`Loaded default config: ${DEFAULT_CONFIG_PATH}`);

    return fallback;
}

function resolvePathsFromConfig(config: AppConfig): {
    modulesPath: string;
    outputFile: string;
    outputFileHtml: string;
} {
    const {constants} = config;

    return {
        modulesPath: path.resolve(process.cwd(), constants.defaultModulesPath),
        outputFile: path.resolve(process.cwd(), constants.defaultOutputFile),
        outputFileHtml: path.resolve(process.cwd(), constants.defaultOutputFileHtml),
    };
}

function applyCliDefaults(
    cliOptions: CliOptions,
    defaults: {modulesPath: string; outputFile: string; outputFileHtml: string},
): void {
    if (cliOptions.roots.length === 0) {
        cliOptions.roots = [defaults.modulesPath];
    }

    if (!cliOptions.output) {
        cliOptions.output = defaults.outputFile;
    }

    if (!cliOptions.outputHtml) {
        cliOptions.outputHtml = defaults.outputFileHtml;
    }
}

function applyConfigOverrides(
    llmsFull: LlmsFullConfig,
    overrides: Record<string, boolean>,
): void {
    const applied: string[] = [];

    for (const [key, value] of Object.entries(overrides)) {
        const target = llmsFull[key];

        if (target && typeof target === 'object' && 'value' in target) {
            const toggle = target as ConfigToggle;

            if (typeof toggle.value === 'boolean') {
                toggle.value = value;
                applied.push(`${key}=${value}`);
            } else {
                console.warn(
                    `Override ignored for '${key}': target.value is not boolean`,
                );
            }
        }
    }

    if (applied.length > 0) {
        console.info(`Applied overrides: ${applied.join(', ')}`);
    }
}

function shouldIncludeComponent(
    headerData: ComponentHeader,
    excludeSections: string[],
): boolean {
    if (headerData.deprecated && excludeSections.includes('deprecated')) {
        return false;
    }

    if (
        (headerData.package ?? '').toUpperCase() === 'LEGACY' &&
        excludeSections.includes('legacy')
    ) {
        return false;
    }

    return true;
}

function classifySkipReason(headerData: ComponentHeader): 'deprecated' | 'legacy' | null {
    if (headerData.deprecated) {
        return 'deprecated';
    }

    if ((headerData.package ?? '').toUpperCase() === 'LEGACY') {
        return 'legacy';
    }

    return null;
}

async function fileExists(filePath: string): Promise<boolean> {
    try {
        await fs.access(filePath);

        return true;
    } catch {
        return false;
    }
}

async function scanDirForIndexHtml(
    currentPath: string,
    skipFolders: ReadonlySet<string>,
    depth = 0,
    maxDepth = 3,
): Promise<string[]> {
    if (depth > maxDepth) {
        return [];
    }

    const folders: string[] = [];

    try {
        const entries = await fs.readdir(currentPath, {withFileTypes: true});

        for (const entry of entries) {
            if (!entry.isDirectory()) {
                continue;
            }

            const fullPath = path.join(currentPath, entry.name);

            if (skipFolders.has(entry.name.toLowerCase())) {
                continue;
            }

            const indexPath = path.join(fullPath, 'index.html');

            if (await fileExists(indexPath)) {
                folders.push(fullPath);
            }

            folders.push(
                ...(await scanDirForIndexHtml(
                    fullPath,
                    skipFolders,
                    depth + 1,
                    maxDepth,
                )),
            );
        }
    } catch (error) {
        console.warn(`  ⚠ Could not read directory ${currentPath}: ${error}`);
    }

    return folders;
}

async function collectComponentFolders(
    root: string,
    defaultModulesPath: string,
    config: AppConfig,
): Promise<string[]> {
    if (root === defaultModulesPath) {
        return getAllFolders();
    }

    const skipFolders = new Set<string>(
        (config.constants.skipFolders ?? []).map((f) => f.toLowerCase()),
    );
    const childFolders = config.constants.childFolders ?? [];
    const folders: string[] = [];

    for (const sub of childFolders) {
        const dirPath = path.join(root, sub);

        if (await fileExists(dirPath)) {
            folders.push(...(await scanDirForIndexHtml(dirPath, skipFolders)));
        }
    }

    return folders;
}

async function collectHeaderSections(config: AppConfig): Promise<string[]> {
    const output: string[] = [];
    const headerSectionsPath = path.resolve(
        process.cwd(),
        config.constants.headerSectionsPath,
    );
    const headerFiles = config.constants.headerFiles ?? [];

    console.info('Adding header sections...');

    for (const headerFile of headerFiles) {
        const headerPath = path.join(headerSectionsPath, headerFile);

        try {
            const content = await fs.readFile(headerPath, 'utf-8');

            output.push(content);
            output.push('\n---\n');
            console.info(`  ✓ Added header section: ${headerFile}`);
        } catch (error) {
            console.warn(`  ⚠ Could not load header section ${headerFile}: ${error}`);
        }
    }

    return output;
}

async function collectMarkdownSections(cliOptions: CliOptions): Promise<string[]> {
    const output: string[] = [];
    let hasMarkdownContent = false;

    const entries = Array.from(cliOptions.roots.entries());

    for (const [idx, rootCandidate] of entries) {
        if (cliOptions.markdownDirs && !cliOptions.markdownDirs[idx]) {
            console.info(
                `Skip markdown scanning for root ${rootCandidate} (no dir specified)`,
            );
            continue;
        }

        const configuredDir = cliOptions.markdownDirs?.[idx];
        const scanDirs = configuredDir ? [configuredDir] : ['getting-started', 'home'];
        const markdownFiles = new Set<string>();

        for (const dirName of scanDirs) {
            const examplesPath = path.join(rootCandidate, 'app', dirName, 'examples');

            console.info(`Search .md files in: ${examplesPath}`);

            try {
                const mdFiles = await getMarkdownFiles(examplesPath);

                console.info(`Found .md files in examples: ${mdFiles.length}`);

                for (const mdFile of mdFiles) {
                    markdownFiles.add(mdFile);
                }
            } catch (error) {
                console.warn(
                    `Warning: Could not process markdown files from ${examplesPath}: ${error}`,
                );
            }
        }

        if (markdownFiles.size > 0 && !hasMarkdownContent) {
            output.push('# Getting Started');
            output.push('');
            hasMarkdownContent = true;
        }

        for (const mdFile of markdownFiles) {
            output.push(await processMarkdownFile(mdFile, 2));
        }
    }

    return output;
}

async function buildComponentBlock(
    folderPath: string,
    content: string,
    cliOptions: CliOptions,
    llmsFull: LlmsFullConfig,
): Promise<string[] | null> {
    const headerData = getComponentHeader(content) as ComponentHeader;

    if (!headerData?.header) {
        return null;
    }

    const parentFolder = path.basename(path.dirname(folderPath));
    const title = `${parentFolder}/${headerData.header}`;
    const block: string[] = [];

    block.push(`# ${title}`);
    block.push(`- **Package**: \`${headerData.package}\``);
    block.push(`- **Type**: ${headerData.type}`);

    const description = getComponentDescription(content);

    if (description) {
        block.push(description);
    }

    if (getConfigValue(llmsFull.includeImportExamples)) {
        const importExample = await getImportExamples(
            folderPath,
            cliOptions.importMdNames,
            cliOptions.templateMdNames,
        );

        if (importExample) {
            block.push(importExample);
        }
    }

    if (getConfigValue(llmsFull.includeExamples)) {
        const example = getComponentExample(content);

        if (example) {
            block.push(example);
        }
    }

    if (getConfigValue(llmsFull.includeApi)) {
        const apiFromTable = getComponentApiFromTable(content);

        if (apiFromTable) {
            block.push(apiFromTable);
        }

        const apiFromTemplates = getComponentApiFromTemplates(content);

        if (apiFromTemplates) {
            block.push(apiFromTemplates);
        }
    }

    if (getConfigValue(llmsFull.includeUsageExamples)) {
        const usageExamples = await getUsageExamples(
            folderPath,
            getConfigValue(llmsFull.includeAllExamples),
        );

        if (usageExamples) {
            block.push(usageExamples);
        }
    }

    if (getConfigValue(llmsFull.includeSourceCode)) {
        const sourceFiles = await getComponentSourceFiles(
            folderPath,
            getConfigValue(llmsFull.includeExamples),
        );

        if (sourceFiles) {
            block.push(sourceFiles);
        }
    }

    block.push('\n---');

    return block;
}

function logConfigSummary(llmsFull: LlmsFullConfig): void {
    console.info('Generating full documentation...');
    console.info(`Exclude sections: ${llmsFull.excludeSections.join(', ')}`);

    const toggleKeys = [
        'includeExamples',
        'includeApi',
        'includeSourceCode',
        'includeImportExamples',
        'includeMarkdownFiles',
        'includeUsageExamples',
        'includeAllExamples',
    ] as const;

    for (const key of toggleKeys) {
        const label = key.replaceAll(/([A-Z])/g, ' $1').toLowerCase();

        console.info(`  ${label}: ${getConfigValue(llmsFull[key])}`);
    }
}

function logProcessingSummary(totalFolders: number, stats: ProcessingStats): void {
    console.info('\n====== COMPONENT PROCESSING SUMMARY ======');
    console.info(`Total components found: ${totalFolders}`);
    console.info(`- Included in output: ${stats.included}`);
    console.info(`- Skipped (deprecated): ${stats.skippedDeprecated}`);
    console.info(`- Skipped (legacy): ${stats.skippedLegacy}`);
    console.info(`- Skipped (no content): ${stats.skippedNoContent}`);
    console.info(`- Skipped (excluded section): ${stats.skippedExcludedSection}`);
    console.info(`- Skipped (no header): ${stats.skippedNoHeader}`);
    console.info('==========================================');
}

async function main(): Promise<void> {
    const cliOptions = parseArgs(process.argv);
    const config = await resolveConfig(cliOptions.configFile);

    if (config.constants.defaultModulesPath) {
        setPagesPath(config.constants.defaultModulesPath);
    }

    if (Array.isArray(config.constants.childFolders)) {
        setFoldersToScan(config.constants.childFolders);
    }

    const resolvedPaths = resolvePathsFromConfig(config);

    applyCliDefaults(cliOptions, resolvedPaths);
    applyConfigOverrides(config.llmsFull, cliOptions.overrides);
    logConfigSummary(config.llmsFull);

    const output: string[] = [];

    console.info('Generating import map from Taiga UI source code...');

    try {
        await saveImportMap(undefined, {
            roots: cliOptions.roots,
            extraPackageName: cliOptions.importMapExtraPackage,
        });
        console.info('  ✓ Import map regenerated');
    } catch (error) {
        console.warn(`  ⚠ Could not generate import map: ${error}`);
    }

    output.push(...(await collectHeaderSections(config)));

    if (getConfigValue(config.llmsFull.includeMarkdownFiles)) {
        output.push(...(await collectMarkdownSections(cliOptions)));
    }

    const collectedFolders: string[] = [];

    for (const rootPath of cliOptions.roots) {
        console.info(`Scanning component folders in: ${rootPath}`);

        const folders = await collectComponentFolders(
            rootPath,
            resolvedPaths.modulesPath,
            config,
        );

        console.info(`Found ${folders.length} candidate folders in ${rootPath}`);
        collectedFolders.push(...folders);
    }

    const allFolders = Array.from(new Set(collectedFolders));

    if (allFolders.length === 0) {
        console.warn(
            `Folders with content not found in provided roots: ${cliOptions.roots.join(', ')}`,
        );

        return;
    }

    console.info(`Total component folders found: ${allFolders.length}`);

    const stats: ProcessingStats = {
        included: 0,
        skippedDeprecated: 0,
        skippedLegacy: 0,
        skippedNoContent: 0,
        skippedExcludedSection: 0,
        skippedNoHeader: 0,
    };

    const {excludeSections} = config.llmsFull;

    for (const folderPath of allFolders) {
        const folderName = path.basename(folderPath);
        const content = await readIndexHtml(folderPath);

        if (!content) {
            stats.skippedNoContent++;
            console.warn(`[SKIPPED] No content: ${folderName}`);
            continue;
        }

        const headerData = getComponentHeader(content) as ComponentHeader;

        if (!shouldIncludeComponent(headerData, excludeSections)) {
            const reason = classifySkipReason(headerData);

            if (reason === 'deprecated') {
                stats.skippedDeprecated++;
                console.warn(`[SKIPPED] Deprecated component: ${folderName}`);
            } else if (reason === 'legacy') {
                stats.skippedLegacy++;
                console.warn(`[SKIPPED] Legacy component: ${folderName}`);
            }

            continue;
        }

        const parentFolder = path.basename(path.dirname(folderPath));

        if (!shouldIncludeSection(parentFolder, excludeSections)) {
            stats.skippedExcludedSection++;
            console.warn(`[SKIPPED] Excluded section '${parentFolder}': ${folderName}`);
            continue;
        }

        if (!headerData?.header) {
            stats.skippedNoHeader++;
            console.warn(`[SKIPPED] No header: ${folderName}`);
            continue;
        }

        const block = await buildComponentBlock(
            folderPath,
            content,
            cliOptions,
            config.llmsFull,
        );

        if (block) {
            stats.included++;
            output.push(...block);
        } else {
            stats.skippedNoHeader++;
            console.warn(`[SKIPPED] Could not build block: ${folderName}`);
        }
    }

    logProcessingSummary(allFolders.length, stats);

    await fs.writeFile(cliOptions.output, output.join('\n'), 'utf-8');

    if (cliOptions.outputHtml) {
        await fs.writeFile(
            cliOptions.outputHtml,
            `<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>llm-full</title>
</head>
<body>
  <main>
    <pre>${output.map(escapeHTML).join('\n')}</pre>
  </main>
</body>
</html>`,
            'utf-8',
        );
        console.info(`Successfully saved: ${cliOptions.outputHtml}`);
    }

    console.info(`Successfully saved: ${cliOptions.output}`);
    console.info(`Total components in output: ${stats.included}`);
}

main().catch(console.error);
