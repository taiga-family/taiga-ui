import fs from 'node:fs/promises';
import path from 'node:path';

import {
    getAllFolders,
    getComponentApiFromTable,
    getComponentApiFromTemplates,
    getComponentDescription,
    getComponentExample,
    getComponentHeader,
    getComponentSourceFiles,
    getConfigValue,
    getImportExamples,
    getMarkdownFiles,
    getUsageExamples,
    loadConfig,
    processMarkdownFile,
    readIndexHtml,
    setFoldersToScan,
    setPagesPath,
    shouldIncludeSection,
} from './utils';
import {saveImportMap} from './utils/generate-import-map';

// These will be loaded from config
let DEFAULT_MODULES_PATH: string;
let DEFAULT_OUTPUT_FILE: string;
let DEFAULT_OUTPUT_FILE_HTML: string;

interface CliOptions {
    roots: string[];
    output: string;
    outputHtml?: string;
    configFile?: string;
    overrides: Record<string, boolean>;
    markdownDirs?: string[];
    importMdNames?: string[];
    templateMdNames?: string[];
}

function parseArgs(argv: string[]): CliOptions {
    const options: CliOptions = {
        roots: [],
        output: '', // Will be set later from config
        outputHtml: '', // Will be set later from config
        overrides: {},
    };

    const rawArgs = argv.slice(2);

    for (const rawArg of rawArgs) {
        if (!rawArg.startsWith('--')) {
            continue;
        }

        if (rawArg.startsWith('--root=')) {
            const value = rawArg.split('=')[1] || '';

            options.roots = value
                .split(',')
                .map((segment) => path.resolve(process.cwd(), segment.trim()))
                .filter(Boolean);

            continue;
        }

        if (rawArg.startsWith('--output=')) {
            options.output = path.resolve(process.cwd(), rawArg.split('=')[1]!);

            continue;
        }

        if (rawArg.startsWith('--outputHtml=')) {
            options.outputHtml = path.resolve(process.cwd(), rawArg.split('=')[1]!);

            continue;
        }

        if (rawArg.startsWith('--config=')) {
            options.configFile = path.resolve(process.cwd(), rawArg.split('=')[1]!);
            continue;
        }

        if (rawArg.startsWith('--markdownDirs=')) {
            const value = rawArg.split('=')[1] || '';

            options.markdownDirs = value
                .split(',')
                .map((segment) => segment.trim())
                .filter(Boolean);
            continue;
        }

        if (rawArg.startsWith('--importMdNames=')) {
            const value = rawArg.split('=')[1] || '';

            options.importMdNames = value
                .split(',')
                .map((segment) => segment.trim())
                .filter(Boolean);
            continue;
        }

        if (rawArg.startsWith('--templateMdNames=')) {
            const value = rawArg.split('=')[1] || '';

            options.templateMdNames = value
                .split(',')
                .map((segment) => segment.trim())
                .filter(Boolean);
            continue;
        }

        const parts = rawArg.split('=');

        if (parts.length === 2 && parts[0] && parts[1]) {
            const key = (parts[0] || '').replace(/^--/, '').trim();
            const rawValue = (parts[1] || '').trim();

            if (rawValue === 'true' || rawValue === 'false') {
                options.overrides[key] = rawValue === 'true';
            }
        }
    }

    return options;
}

function shouldIncludeComponent(headerData: any, excludeSections: string[]): boolean {
    if (headerData.deprecated && excludeSections.includes('deprecated')) {
        return false;
    }

    if (
        (headerData.package || '').toUpperCase() === 'LEGACY' &&
        excludeSections.includes('legacy')
    ) {
        return false;
    }

    return true;
}

async function main(): Promise<void> {
    const cliOptions = parseArgs(process.argv);

    const defaultConfigPath = path.resolve(
        process.cwd(),
        'projects/demo/src/llms-config.json',
    );

    const config: any = await (async () => {
        if (cliOptions.configFile) {
            try {
                const raw = await fs.readFile(cliOptions.configFile, 'utf-8');
                const parsed = JSON.parse(raw);

                console.info(`Loaded custom config: ${cliOptions.configFile}`);

                return parsed;
            } catch (e) {
                console.error(
                    `Failed to read custom config at ${cliOptions.configFile}: ${(e as Error).message}`,
                );
            }
        }

        const fallback = await loadConfig();

        console.info(`Loaded default config: ${defaultConfigPath}`);

        return fallback;
    })();

    // Initialize constants from config
    DEFAULT_MODULES_PATH = path.resolve(
        process.cwd(),
        config.constants?.defaultModulesPath,
    );
    DEFAULT_OUTPUT_FILE = path.resolve(
        process.cwd(),
        config.constants?.defaultOutputFile,
    );
    DEFAULT_OUTPUT_FILE_HTML = path.resolve(
        process.cwd(),
        config.constants?.defaultOutputFileHtml,
    );

    // Initialize file system path from config
    if (config.constants?.defaultModulesPath) {
        setPagesPath(config.constants.defaultModulesPath);
    }

    if (config.constants?.childFolders && Array.isArray(config.constants.childFolders)) {
        setFoldersToScan(config.constants.childFolders);
    }

    // Apply defaults to cliOptions if not provided
    if (cliOptions.roots.length === 0) {
        cliOptions.roots = [DEFAULT_MODULES_PATH];
    }

    if (!cliOptions.output) {
        cliOptions.output = DEFAULT_OUTPUT_FILE;
    }

    if (!cliOptions.outputHtml) {
        cliOptions.outputHtml = DEFAULT_OUTPUT_FILE_HTML;
    }

    const overrideKeysApplied: string[] = [];

    for (const [key, value] of Object.entries(cliOptions.overrides)) {
        const target = config.llmsFull[key];

        if (target && typeof target.value === 'boolean') {
            target.value = value;

            overrideKeysApplied.push(`${key}=${value}`);
        } else if (key in config.llmsFull) {
            console.warn(
                `Override ignored for '${key}': target does not have a boolean 'value' field`,
            );
        }
    }

    if (overrideKeysApplied.length) {
        console.info(`Applied overrides: ${overrideKeysApplied.join(', ')}`);
    }

    console.info('Generating full documentation...');
    console.info(`Exclude sections: ${config.llmsFull.excludeSections.join(', ')}`);
    console.info(`Include examples: ${getConfigValue(config.llmsFull.includeExamples)}`);
    console.info(`Include API: ${getConfigValue(config.llmsFull.includeApi)}`);
    console.info(
        `Include source code: ${getConfigValue(config.llmsFull.includeSourceCode)}`,
    );
    console.info(
        `Include import examples: ${getConfigValue(config.llmsFull.includeImportExamples)}`,
    );
    console.info(
        `Include markdown files: ${getConfigValue(config.llmsFull.includeMarkdownFiles)}`,
    );
    console.info(
        `Include usage examples: ${getConfigValue(config.llmsFull.includeUsageExamples)}`,
    );
    console.info(
        `Include all examples: ${getConfigValue(config.llmsFull.includeAllExamples)}`,
    );

    const output: string[] = [];

    // Generate fresh import map from source code
    console.info('Generating import map from Taiga UI source code...');

    try {
        await saveImportMap();
        console.info('  ✓ Import map regenerated');
    } catch (error) {
        console.warn(`  ⚠ Could not generate import map: ${error}`);
    }

    // Add header sections with critical information
    console.info('Adding header sections...');
    const headerSectionsPath = path.resolve(
        process.cwd(),
        config.constants?.headerSectionsPath,
    );

    const headerFiles = config.constants?.headerFiles;

    if (headerFiles && Array.isArray(headerFiles)) {
        for (const headerFile of headerFiles) {
            const headerPath = path.join(headerSectionsPath, headerFile);

            try {
                const headerContent = await fs.readFile(headerPath, 'utf-8');

                output.push(headerContent);
                output.push('\n---\n');
                console.info(`  ✓ Added header section: ${headerFile}`);
            } catch (error) {
                console.warn(`  ⚠ Could not load header section ${headerFile}: ${error}`);
            }
        }
    }

    if (getConfigValue(config.llmsFull.includeMarkdownFiles)) {
        for (const [idx, rootCandidate] of cliOptions.roots.entries()) {
            if (cliOptions.markdownDirs && !cliOptions.markdownDirs[idx]) {
                console.info(
                    `Skip markdown scanning for root ${rootCandidate} (no dir specified)`,
                );
                continue;
            }

            const dirName = cliOptions.markdownDirs
                ? cliOptions.markdownDirs[idx] || 'getting-started'
                : 'getting-started';

            const examplesPath = path.join(rootCandidate, 'app', dirName, 'examples');

            console.info(`Search .md files in: ${examplesPath}`);

            try {
                const exampleMarkdownFiles = await getMarkdownFiles(examplesPath);

                console.info(
                    `Found .md files in examples: ${exampleMarkdownFiles.length}`,
                );

                for (const mdFile of exampleMarkdownFiles) {
                    output.push(await processMarkdownFile(mdFile));
                }
            } catch (error) {
                console.warn(
                    `Warning: Could not process markdown files from ${examplesPath}: ${error}`,
                );
            }
        }
    }

    async function scanAdditionalRoot(root: string): Promise<string[]> {
        if (root === DEFAULT_MODULES_PATH) {
            return getAllFolders();
        }

        const folders: string[] = [];
        const SKIP_FOLDERS = new Set(config.constants?.skipFolders);
        const rawChildFolders = config.constants?.childFolders;
        const CHILD_FOLDERS = Array.isArray(rawChildFolders) ? rawChildFolders : [];

        async function fileExistsLocal(p: string): Promise<boolean> {
            try {
                await fs.access(p);

                return true;
            } catch {
                return false;
            }
        }

        async function scanDir(currentPath: string, depth = 0): Promise<void> {
            if (depth > 3) {
                return;
            }

            const entries = await fs.readdir(currentPath, {withFileTypes: true});

            for (const entry of entries) {
                if (!entry.isDirectory()) {
                    continue;
                }

                const fullPath = path.join(currentPath, entry.name);

                if (SKIP_FOLDERS.has(entry.name.toLowerCase())) {
                    continue;
                }

                const indexPath = path.join(fullPath, 'index.html');

                if (await fileExistsLocal(indexPath)) {
                    folders.push(fullPath);
                }

                await scanDir(fullPath, depth + 1);
            }
        }

        for (const sub of CHILD_FOLDERS) {
            const dirPath = path.join(root, sub);

            if (await fileExistsLocal(dirPath)) {
                await scanDir(dirPath, 0);
            }
        }

        return folders;
    }

    const collectedFolders: string[] = [];

    for (const rootPath of cliOptions.roots) {
        console.info(`Scanning component folders in: ${rootPath}`);
        const candidateFolders = await scanAdditionalRoot(rootPath);

        console.info(`Found ${candidateFolders.length} candidate folders in ${rootPath}`);
        collectedFolders.push(...candidateFolders);
    }

    const allFolders = Array.from(new Set(collectedFolders));

    if (allFolders.length === 0) {
        console.warn(
            `Folders with content not found in provided roots: ${cliOptions.roots.join(', ')}`,
        );

        return;
    }

    console.info(`Total component folders found: ${allFolders.length}`);

    const stats = {
        included: 0,
        skippedDeprecated: 0,
        skippedLegacy: 0,
        skippedNoContent: 0,
        skippedExcludedSection: 0,
        skippedNoHeader: 0,
    };

    for (const folderPath of allFolders) {
        const content = await readIndexHtml(folderPath);

        if (!content) {
            stats.skippedNoContent++;
            console.warn(`[SKIPPED] No content: ${path.basename(folderPath)}`);
            continue;
        }

        const headerData = getComponentHeader(content);

        if (!shouldIncludeComponent(headerData, config.llmsFull.excludeSections)) {
            if (headerData.deprecated) {
                stats.skippedDeprecated++;

                console.warn(
                    `[SKIPPED] Deprecated component: ${path.basename(folderPath)}`,
                );
            } else if ((headerData.package || '').toUpperCase() === 'LEGACY') {
                stats.skippedLegacy++;

                console.warn(`[SKIPPED] Legacy component: ${path.basename(folderPath)}`);
            }

            continue;
        }

        const parentFolder = path.basename(path.dirname(folderPath));

        if (!shouldIncludeSection(parentFolder, config.llmsFull.excludeSections)) {
            stats.skippedExcludedSection++;
            console.warn(
                `[SKIPPED] Excluded section '${parentFolder}': ${path.basename(folderPath)}`,
            );
            continue;
        }

        if (!headerData?.header) {
            stats.skippedNoHeader++;
            console.warn(`[SKIPPED] No header: ${path.basename(folderPath)}`);
            continue;
        }

        stats.included++;

        const title = `${parentFolder}/${headerData.header}`;

        output.push(`# ${title}`);
        output.push(`- **Package**: \`${headerData.package}\``);
        output.push(`- **Type**: ${headerData.type}`);

        const description = getComponentDescription(content);

        if (description) {
            output.push(description);
        }

        if (getConfigValue(config.llmsFull.includeImportExamples)) {
            const importExample = await getImportExamples(
                folderPath,
                cliOptions.importMdNames,
                cliOptions.templateMdNames,
            );

            if (importExample) {
                output.push(importExample);
            }
        }

        if (getConfigValue(config.llmsFull.includeExamples)) {
            const example = getComponentExample(content);

            if (example) {
                output.push(example);
            }
        }

        if (getConfigValue(config.llmsFull.includeApi)) {
            const apiFromTable = getComponentApiFromTable(content);

            if (apiFromTable) {
                output.push(apiFromTable);
            }

            const apiFromTemplates = getComponentApiFromTemplates(content);

            if (apiFromTemplates) {
                output.push(apiFromTemplates);
            }
        }

        if (getConfigValue(config.llmsFull.includeUsageExamples)) {
            const usageExamples = await getUsageExamples(
                folderPath,
                getConfigValue(config.llmsFull.includeAllExamples),
            );

            if (usageExamples) {
                output.push(usageExamples);
            }
        }

        if (getConfigValue(config.llmsFull.includeSourceCode)) {
            const sourceFiles = await getComponentSourceFiles(
                folderPath,
                getConfigValue(config.llmsFull.includeExamples),
            );

            if (sourceFiles) {
                output.push(sourceFiles);
            }
        }

        output.push('\n---');
    }

    console.info('\n====== COMPONENT PROCESSING SUMMARY ======');
    console.info(`Total components found: ${allFolders.length}`);
    console.info(`- Included in output: ${stats.included}`);
    console.info(`- Skipped (deprecated): ${stats.skippedDeprecated}`);
    console.info(`- Skipped (legacy): ${stats.skippedLegacy}`);
    console.info(`- Skipped (no content): ${stats.skippedNoContent}`);
    console.info(`- Skipped (excluded section): ${stats.skippedExcludedSection}`);
    console.info(`- Skipped (no header): ${stats.skippedNoHeader}`);
    console.info('========================================');

    await fs.writeFile(cliOptions.output, output.join('\n'), 'utf-8');

    console.info(`Successfully file saved: ${cliOptions.output}`);
    console.info(`Total components in output: ${stats.included}`);
}

main().catch(console.error);
