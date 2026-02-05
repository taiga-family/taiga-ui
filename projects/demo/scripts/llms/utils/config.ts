import fs from 'node:fs/promises';
import path from 'node:path';

interface ConfigValue {
    value: boolean;
    description: string;
}

export interface LlmsConfig {
    llms: {
        description: string;
        excludeSections: string[];
    };
    llmsFull: {
        description: string;
        excludeSections: string[];
        includeExamples: ConfigValue;
        includeApi: ConfigValue;
        includeSourceCode: ConfigValue;
        includeImportExamples: ConfigValue;
        includeMarkdownFiles: ConfigValue;
        includeUsageExamples: ConfigValue;
        includeAllExamples: ConfigValue;
    };
    constants?: {
        description: string;
        defaultModulesPath: string;
        defaultOutputFile: string;
        defaultOutputFileHtml: string;
        headerSectionsPath: string;
        headerFiles: string[];
        skipFolders: string[];
        childFolders: string[];
    };
}

const CONFIG_FILE = path.resolve(process.cwd(), 'projects/demo/src/llms-config.json');

export async function loadConfig(): Promise<LlmsConfig> {
    try {
        const configContent = await fs.readFile(CONFIG_FILE, 'utf-8');

        return JSON.parse(configContent) as LlmsConfig;
    } catch (error) {
        throw new Error(
            `Required configuration file not found or invalid: ${CONFIG_FILE}. Ensure llms-config.json exists and is valid JSON. Original error: ${String(
                error,
            )}`,
        );
    }
}

export function shouldIncludeSection(
    sectionName: string,
    excludeSections: string[],
): boolean {
    // If section is explicitly excluded
    if (excludeSections.includes(sectionName)) {
        return false;
    }

    // Include all other sections by default
    return true;
}

export function getConfigValue(configValue: {
    value: boolean;
    description: string;
}): boolean {
    return configValue.value;
}

export function getConfigDescription(configValue: {
    value: boolean;
    description: string;
}): string {
    return configValue.description;
}
