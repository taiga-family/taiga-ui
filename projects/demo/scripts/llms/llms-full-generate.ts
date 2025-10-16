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
    shouldIncludeSection,
} from './utils';

const MODULES_PATH = path.resolve(process.cwd(), 'projects/demo/src/modules');
const OUTPUT_FILE = path.resolve(process.cwd(), 'projects/demo/src/llms-full.txt');

function shouldIncludeComponent(headerData: any, excludeSections: string[]): boolean {
    // Check if component is deprecated and deprecated sections are excluded
    if (headerData.deprecated && excludeSections.includes('deprecated')) {
        return false;
    }

    // Check if component is legacy and legacy sections are excluded
    if (
        (headerData.package || '').toUpperCase() === 'LEGACY' &&
        excludeSections.includes('legacy')
    ) {
        return false;
    }

    return true;
}

async function main(): Promise<void> {
    const config = await loadConfig();

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

    // Add markdown files if enabled
    if (getConfigValue(config.llmsFull.includeMarkdownFiles)) {
        const EXAMPLES_MD_PATH = path.join(MODULES_PATH, 'app', 'home', 'examples');

        console.info(`Search .md files in: ${EXAMPLES_MD_PATH}`);

        try {
            const exampleMarkdownFiles = await getMarkdownFiles(EXAMPLES_MD_PATH);

            console.info(`Found .md files in examples: ${exampleMarkdownFiles.length}`);

            for (const mdFile of exampleMarkdownFiles) {
                output.push(await processMarkdownFile(mdFile));
            }
        } catch (error) {
            console.warn(
                `Warning: Could not process markdown files from ${EXAMPLES_MD_PATH}: ${error}`,
            );
            console.info('Continuing without markdown files...');
        }
    }

    console.info(`Scanning component folders in: ${MODULES_PATH}`);
    const allFolders = await getAllFolders();

    if (allFolders.length === 0) {
        console.warn(`Folders with content not found in ${MODULES_PATH}`);

        return;
    }

    console.info(`Total component folders found: ${allFolders.length}`);

    // statistics
    let includedCount = 0;
    let skippedDeprecated = 0;
    let skippedLegacy = 0;

    for (const folderPath of allFolders) {
        const content = await readIndexHtml(folderPath);

        if (!content) {
            continue;
        }

        const headerData = getComponentHeader(content);

        // Check if component should be included based on config
        if (!shouldIncludeComponent(headerData, config.llmsFull.excludeSections)) {
            if (headerData.deprecated) {
                skippedDeprecated++;
                console.warn(
                    `[SKIPPED] Deprecated component: ${path.basename(folderPath)}`,
                );
            } else if ((headerData.package || '').toUpperCase() === 'LEGACY') {
                skippedLegacy++;
                console.warn(`[SKIPPED] Legacy component: ${path.basename(folderPath)}`);
            }

            continue;
        }

        // Check if section should be included
        const parentFolder = path.basename(path.dirname(folderPath));

        if (!shouldIncludeSection(parentFolder, config.llmsFull.excludeSections)) {
            continue;
        }

        if (!headerData?.header) {
            continue;
        }

        // success validated component
        includedCount++;

        const title = `${parentFolder}/${headerData.header}`;

        output.push(`# ${title}`);

        output.push(`- **Package**: \`${headerData.package}\``);
        output.push(`- **Type**: ${headerData.type}`);

        const description = getComponentDescription(content);

        if (description) {
            output.push(description);
        }

        // Add import examples if enabled
        if (getConfigValue(config.llmsFull.includeImportExamples)) {
            const importExample = await getImportExamples(folderPath);

            if (importExample) {
                output.push(importExample);
            }
        }

        // Add examples if enabled
        if (getConfigValue(config.llmsFull.includeExamples)) {
            const example = getComponentExample(content);

            if (example) {
                output.push(example);
            }
        }

        // Add API if enabled
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

        // Add usage examples if enabled
        if (getConfigValue(config.llmsFull.includeUsageExamples)) {
            const usageExamples = await getUsageExamples(
                folderPath,
                getConfigValue(config.llmsFull.includeAllExamples),
            );

            if (usageExamples) {
                output.push(usageExamples);
            }
        }

        // Add source code if enabled
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
    console.info(`- Included in output: ${includedCount}`);
    console.info(`- Skipped (deprecated): ${skippedDeprecated}`);
    console.info(`- Skipped (legacy): ${skippedLegacy}`);
    console.info('========================================');

    await fs.writeFile(OUTPUT_FILE, output.join('\n'), 'utf-8');

    console.info(`Successfully file saved: ${OUTPUT_FILE}`);
    console.info(`Total components in output: ${includedCount}`);
}

main().catch(console.error);
