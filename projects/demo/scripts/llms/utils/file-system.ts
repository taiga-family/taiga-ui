import fs from 'node:fs/promises';
import path from 'node:path';

import {getFoldersToScan, getPagesPath} from './paths';

export interface ComponentHeader {
    header: string | null;
    package: string | null;
    type: string | null;
    deprecated: boolean;
}

export async function fileExists(filePath: string): Promise<boolean> {
    try {
        await fs.access(filePath);

        return true;
    } catch {
        return false;
    }
}

export async function readIfExists(filePath: string): Promise<string | null> {
    try {
        return await fs.readFile(filePath, 'utf-8');
    } catch {
        return null;
    }
}

export async function readIndexHtml(folderPath: string): Promise<string> {
    const indexPath = path.join(folderPath, 'index.html');

    return (await fileExists(indexPath)) ? fs.readFile(indexPath, 'utf-8') : '';
}

// parse metadata from tui-doc-page
export function getComponentHeader(content: string): ComponentHeader {
    const tagMatch = /<tui-doc-page\b([^>]*)>/i.exec(content);

    if (!tagMatch?.[1]) {
        return {header: null, package: null, type: null, deprecated: false};
    }

    const tagContent = tagMatch[1];
    const deprecated = /(?:^|\s)deprecated(?:\s|$)/i.test(tagContent);
    const headerMatch = /header="([^"]*)"/i.exec(tagContent);
    const header = headerMatch?.[1]?.trim() || null;
    const packageMatch = /package="([^"]*)"/i.exec(tagContent);
    const packageValue = packageMatch?.[1]?.trim() || null;
    const typeMatch = /type="([^"]*)"/i.exec(tagContent);
    const type = typeMatch?.[1]?.trim() || null;

    return {header, package: packageValue, type, deprecated};
}

// parse component text from tui-doc-page
export function getComponentDescription(content: string): string | undefined {
    const templateMatch =
        /<ng-template[^>]+pageTab[^>]*>([\s\S]*?)<tui-doc-example/i.exec(content);

    if (!templateMatch) {
        return '';
    }

    const templateContent = templateMatch[1];

    // Remove control flow tags
    const withoutControlFlow = (templateContent || '')
        .split(/\n+/)
        .filter(
            (line) =>
                !/^\s*@(?:for|if|switch|else|case|default|defer|empty)\b/.test(line),
        )
        .join('\n');

    const cleanContent = withoutControlFlow
        .replaceAll(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
        .replaceAll(/<ng-template[^>]*>[\s\S]*?<\/ng-template>/gi, '')
        .replaceAll(/<(\/?(?:p|div|ul|ol|li|code|a|button|tui-[^>]+))/gi, '<$1')
        .replaceAll(/<[^>]+>/g, '')
        .replaceAll(/\s+/g, ' ')
        .trim();

    return cleanContent;
}

// parse example import.md and template.md
export async function getImportExamples(
    folderPath: string,
    importCandidates: string[] = ['import.md'],
    templateCandidates: string[] = ['template.md'],
): Promise<string> {
    const importFolderPath = path.join(folderPath, 'examples', 'import');

    if (!(await fileExists(importFolderPath))) {
        return '';
    }

    async function findFirstExisting(candidates: string[]): Promise<string | null> {
        for (const name of candidates) {
            const fullPath = path.join(importFolderPath, name);

            if (await fileExists(fullPath)) {
                return fullPath;
            }
        }

        return null;
    }

    const importPath = await findFirstExisting(importCandidates);
    const templatePath = await findFirstExisting(templateCandidates);
    let result = '';

    if (importPath) {
        const content = await fs.readFile(importPath, 'utf-8');

        result += `\n### How to Use (Import)\n\n${content.trim()}`;
    }

    if (templatePath) {
        const content = await fs.readFile(templatePath, 'utf-8');

        result += `${importPath ? '\n\n' : '\n'}### How to Use (Template)\n\n${content.trim()}`;
    }

    return result;
}

// parse example from tui-doc-demo
export function getComponentExample(content: string): string {
    const match = /<tui-doc-demo[^>]*>([\s\S]*?)<\/tui-doc-demo>/i.exec(content);

    if (!match) {
        return '';
    }

    const html = match[1]
        ?.replaceAll(/<(\/?(?:tui-|button|input|a|code|span|div)[^>]+)>/gi, '<$1>')
        .trim();

    // Clean up the HTML formatting for better LLM consumption
    const cleanHtml = html
        ?.replaceAll(/\s+/g, ' ') // Replace multiple spaces with single space
        ?.replaceAll(/>\s+</g, '>\n<') // Add line breaks between tags
        ?.replaceAll(/\n\s+/g, '\n') // Remove leading spaces
        ?.trim();

    return `\n### Example\n\n\`\`\`html\n${cleanHtml}\n\`\`\``;
}

// parse API properties from tuiDocAPI
export function getComponentApiFromTable(content: string): string {
    const tableMatch = /<table tuiDocAPI[^>]*>([\s\S]*?)<\/table>/i.exec(content);

    if (!tableMatch) {
        return '';
    }

    const tableContent = tableMatch[1];
    const apiRows = tableContent?.match(/<tr[^>]+name="[^"]+"[^>]*>[\s\S]*?<\/tr>/gi);

    if (!apiRows) {
        return '';
    }

    const inputRows: string[] = [];
    const outputRows: string[] = [];

    for (const row of apiRows) {
        const nameMatch = /name="([^"]+)"/i.exec(row);
        const typeMatch = /type="([^"]+)"/i.exec(row);
        const descriptionMatch = />([^<>]+)<\/tr>/i.exec(row);

        if (nameMatch && typeMatch) {
            const name = nameMatch[1]?.trim();
            const type = typeMatch[1]?.trim();
            const description = descriptionMatch?.[1] ? descriptionMatch[1].trim() : '—';

            // Check if it's an output (event): prioritize name starting with '(',
            // then fall back to EventEmitter when it's not an input ('[').
            const isOutput =
                name?.startsWith('(') ||
                (name?.startsWith('[') === false && type?.includes('EventEmitter'));

            const rowContent = `| ${name} | \`${type}\` | ${description} |`;

            if (isOutput) {
                outputRows.push(rowContent);
            } else {
                inputRows.push(rowContent);
            }
        }
    }

    let result = '';

    if (inputRows.length > 0) {
        result += `\n### API - Inputs\n\n| Property | Type | Description |\n|----------|-----|----------|\n${inputRows.join('\n')}`;
    }

    if (outputRows.length > 0) {
        result += `\n\n### API - Outputs\n\n| Event | Type | Description |\n|-------|------|-------------|\n${outputRows.join('\n')}`;
    }

    return result;
}

// parse API properties from tui-doc-documentation
export function getComponentApiFromTemplates(content: string): string {
    const templateMatch =
        /<tui-doc-documentation[^>]*>([\s\S]*?)<\/tui-doc-documentation>/i.exec(content);

    if (!templateMatch) {
        return '';
    }

    const templatesContent = templateMatch[1];

    const templateRows = templatesContent?.match(
        /<ng-template[^>]+documentationPropertyName="[^"]+"[^>]+documentationPropertyType="[^"]+"[^>]*>[\s\S]*?<\/ng-template>/gi,
    );

    if (!templateRows) {
        return '';
    }

    const inputRows: string[] = [];
    const outputRows: string[] = [];

    for (const row of templateRows) {
        const nameMatch = /documentationPropertyName="([^"]+)"/i.exec(row);
        const typeMatch = /documentationPropertyType="([^"]+)"/i.exec(row);
        const innerContentMatch = />([\s\S]*?)<\/ng-template>/i.exec(row);

        if (nameMatch && typeMatch) {
            const name = nameMatch[1]?.trim();
            const type = typeMatch[1]?.trim();

            let description = innerContentMatch?.[1]
                ? innerContentMatch[1].replaceAll(/<[^>]+>/g, '').trim()
                : '—';

            description = description.replaceAll(/\s+/g, ' ');

            // Check if it's an output (event)
            const isOutput =
                name?.startsWith('[') === false && type?.includes('EventEmitter');

            const rowContent = `| ${name} | \`${type}\` | ${description} |`;

            if (isOutput) {
                outputRows.push(rowContent);
            } else {
                inputRows.push(rowContent);
            }
        }
    }

    let result = '';

    if (inputRows.length > 0) {
        result += `\n### API - Inputs\n\n| Property | Type | Description |\n|----------|-----|----------|\n${inputRows.join('\n')}`;
    }

    if (outputRows.length > 0) {
        result += `\n\n### API - Outputs\n\n| Event | Type | Description |\n|-------|------|-------------|\n${outputRows.join('\n')}`;
    }

    return result;
}

// parse example index.ts and index.less files
export async function getComponentSourceFiles(
    folderPath: string,
    hasExample: boolean,
): Promise<string> {
    if (!hasExample) {
        return '';
    }

    const tsPath = path.join(folderPath, 'index.ts');
    const lessPath = path.join(folderPath, 'index.less');
    let result = '';

    if (await fileExists(tsPath)) {
        const tsContent = await fs.readFile(tsPath, 'utf-8');

        result += `\n### TypeScript\n\n\`\`\`ts\n${tsContent.trim()}\n\`\`\``;
    }

    if (await fileExists(lessPath)) {
        const lessContent = await fs.readFile(lessPath, 'utf-8');

        result += `\n\n### LESS\n\n\`\`\`less\n${lessContent.trim()}\n\`\`\``;
    }

    return result;
}

// extract usage examples from demo folders
export async function getUsageExamples(
    folderPath: string,
    includeAllExamples = true,
): Promise<string> {
    const examplesPath = path.join(folderPath, 'examples');

    if (!(await fileExists(examplesPath))) {
        return '';
    }

    // If includeAllExamples is false, don't include any examples
    if (!includeAllExamples) {
        return '';
    }

    // First, get example descriptions from the main component documentation
    const mainIndexPath = path.join(folderPath, 'index.html');
    const mainIndexTsPath = path.join(folderPath, 'index.ts');
    let exampleDescriptions: Record<string, {heading: string; description: string}> = {};

    if (await fileExists(mainIndexPath)) {
        const mainContent = await fs.readFile(mainIndexPath, 'utf-8');

        exampleDescriptions = extractExampleDescriptions(mainContent);
    }

    // Also try to extract examples from TypeScript file for dynamic patterns
    if (await fileExists(mainIndexTsPath)) {
        const tsContent = await fs.readFile(mainIndexTsPath, 'utf-8');
        // Try both readonly and non-readonly patterns
        const tsExamplesMatch =
            /(?:protected readonly |protected )examples = \[([\s\S]*?)\];/i.exec(
                tsContent,
            );

        if (tsExamplesMatch?.[1]) {
            const examplesArray = tsExamplesMatch[1]
                .split(',')
                .map((item) => item.trim().replaceAll(/['"]/g, ''))
                .filter((item) => item.length > 0);

            examplesArray.forEach((example, index) => {
                const exampleNumber = (index + 1).toString();
                const existing = exampleDescriptions[exampleNumber];

                if (!existing) {
                    exampleDescriptions[exampleNumber] = {
                        heading: example,
                        description: '',
                    };
                } else if (
                    !existing.heading ||
                    existing.heading === `Example ${exampleNumber}`
                ) {
                    // Keep any description parsed from the template, fill the heading.
                    existing.heading = example;
                }
            });
        }
    }

    const examples: Array<{
        name: string;
        html: string;
        ts: string;
        less: string;
        heading: string;
        description: string;
    }> = [];

    try {
        const entries = await fs.readdir(examplesPath, {withFileTypes: true});

        for (const entry of entries) {
            if (!entry.isDirectory()) {
                continue;
            }

            const exampleFolder = path.join(examplesPath, entry.name);
            const htmlPath = path.join(exampleFolder, 'index.html');
            const tsPath = path.join(exampleFolder, 'index.ts');
            const lessPath = path.join(exampleFolder, 'index.less');

            // Skip import folder as it's handled separately
            if (entry.name === 'import') {
                continue;
            }

            let html = '';
            let ts = '';
            let less = '';

            if (await fileExists(htmlPath)) {
                html = await fs.readFile(htmlPath, 'utf-8');
            }

            if (await fileExists(tsPath)) {
                ts = await fs.readFile(tsPath, 'utf-8');
            }

            if (await fileExists(lessPath)) {
                less = await fs.readFile(lessPath, 'utf-8');
            }

            if (html || ts || less) {
                const exampleInfo = exampleDescriptions[entry.name] || {
                    heading: `Example ${entry.name}`,
                    description: '',
                };

                examples.push({
                    name: entry.name,
                    html: html.trim(),
                    ts: ts.trim(),
                    less: less.trim(),
                    heading: exampleInfo.heading,
                    description: exampleInfo.description,
                });
            }
        }
    } catch (error) {
        console.warn(`Error reading examples from ${examplesPath}:`, error);

        return '';
    }

    if (examples.length === 0) {
        return '';
    }

    // Folders are read in filesystem order ("1", "10", "2"…); restore example order.
    examples.sort((a, b) => {
        const left = Number(a.name);
        const right = Number(b.name);

        return Number.isFinite(left) && Number.isFinite(right)
            ? left - right
            : a.name.localeCompare(b.name);
    });

    let result = '\n### Usage Examples\n';

    for (const example of examples) {
        result += `\n#### ${example.heading}\n`;

        if (example.description) {
            // Already cleaned by extractExampleDescriptions; re-stripping tags here
            // would eat decoded markup such as `<tui-textfield />`.
            result += `\n${example.description}\n`;
        }

        if (example.html) {
            // Clean up the HTML formatting for better LLM consumption
            const cleanHtml = example.html
                .replaceAll(/\s+/g, ' ') // Replace multiple spaces with single space
                .replaceAll(/>\s+</g, '>\n<') // Add line breaks between tags
                .replaceAll(/\n\s+/g, '\n') // Remove leading spaces
                .trim();

            result += `\n**Template:**\n\`\`\`html\n${cleanHtml}\n\`\`\``;
        }

        if (example.ts) {
            result += `\n**TypeScript:**\n\`\`\`ts\n${example.ts}\n\`\`\``;
        }

        if (example.less) {
            result += `\n**LESS:**\n\`\`\`less\n${example.less}\n\`\`\``;
        }

        result += '\n';
    }

    return result;
}

function decodeHtmlEntities(text: string): string {
    return text
        .replaceAll(/&#(\d+);/g, (_, code: string) => String.fromCodePoint(Number(code)))
        .replaceAll(/&#x([\da-f]+);/gi, (_, code: string) =>
            String.fromCodePoint(Number.parseInt(code, 16)),
        )
        .replaceAll('&lt;', '<')
        .replaceAll('&gt;', '>')
        .replaceAll('&quot;', '"')
        .replaceAll('&nbsp;', ' ')
        .replaceAll('&amp;', '&');
}

// Turn a chunk of Angular template into plain prose: drop control-flow wrappers
// (@if / @switch / @case …), strip HTML tags, decode entities, collapse whitespace.
function cleanTemplateText(raw: string): string {
    const withoutControlFlow = raw
        .replaceAll(
            /@(?:if|else|for|switch|case|default|empty|defer|placeholder|loading|error)\b[^{}]*\{/gi,
            ' ',
        )
        .replaceAll(/[{}]/g, ' ');

    return decodeHtmlEntities(withoutControlFlow.replaceAll(/<[^>]+>/g, ''))
        .replaceAll(/\s+/g, ' ')
        .trim();
}

// Return the text inside the braces starting at `openBraceIndex`, respecting nesting.
function readBalancedBraces(source: string, openBraceIndex: number): string | null {
    if (source[openBraceIndex] !== '{') {
        return null;
    }

    let depth = 0;

    for (let i = openBraceIndex; i < source.length; i++) {
        const char = source[i];

        if (char === '{') {
            depth++;
        } else if (char === '}') {
            depth--;

            if (depth === 0) {
                return source.slice(openBraceIndex + 1, i);
            }
        }
    }

    return null;
}

// Descriptions rendered via `@switch ($index) { @case (N) { … } }` inside a
// `@for` examples loop. Case N corresponds to example folder N + 1.
function extractSwitchIndexDescriptions(content: string): Record<string, string> {
    const result: Record<string, string> = {};
    const switchMatch = /@switch\s*\(\s*\$index\s*\)\s*\{/i.exec(content);

    if (!switchMatch) {
        return result;
    }

    const switchBody = readBalancedBraces(
        content,
        switchMatch.index + switchMatch[0].length - 1,
    );

    if (switchBody === null) {
        return result;
    }

    const caseRegex = /@case\s*\(\s*(\d+)\s*\)\s*\{/gi;
    let caseMatch: RegExpExecArray | null;

    while ((caseMatch = caseRegex.exec(switchBody)) !== null) {
        const rawIndex = caseMatch[1];

        if (!rawIndex) {
            continue;
        }

        const braceIndex = caseMatch.index + caseMatch[0].length - 1;
        const caseBody = readBalancedBraces(switchBody, braceIndex);

        if (caseBody === null) {
            continue;
        }

        result[(Number(rawIndex) + 1).toString()] = cleanTemplateText(caseBody);
        // Skip past this case body so a nested @case is never matched as top-level.
        caseRegex.lastIndex = braceIndex + caseBody.length + 2;
    }

    return result;
}

// Headings declared inline in the loop header, e.g. `@for (example of ['A', 'B']; …)`.
function extractInlineForHeadings(content: string): Record<string, string> {
    const result: Record<string, string> = {};
    const forMatch = /@for\s*\(\s*\w+\s+of\s+(\[[\s\S]*?\])\s*;\s*track/i.exec(content);

    if (!forMatch?.[1]) {
        return result;
    }

    const items = forMatch[1].match(/(['"])(?:\\.|(?!\1).)*\1/g) ?? [];

    items.forEach((quoted, index) => {
        result[(index + 1).toString()] = quoted.slice(1, -1);
    });

    return result;
}

// Extract example descriptions from main component documentation
export function extractExampleDescriptions(
    content: string,
): Record<string, {heading: string; description: string}> {
    const descriptions: Record<string, {heading: string; description: string}> = {};

    // Use a different approach: find all tui-doc-example opening tags and their corresponding closing tags
    const exampleMatches: string[] = [];

    // Find all opening tags
    const openingTagRegex = /<tui-doc-example[^>]*>/gi;
    let match;

    while ((match = openingTagRegex.exec(content)) !== null) {
        const startIndex = match.index;
        const tagContent = match[0];

        // Check if it's a self-closing tag
        if (tagContent.endsWith('/>')) {
            exampleMatches.push(tagContent);
        } else {
            // Find the corresponding closing tag
            const remainingContent = content.slice(Math.max(0, startIndex));
            const closingTagIndex = remainingContent.indexOf('</tui-doc-example>');

            if (closingTagIndex !== -1) {
                const fullBlock = remainingContent.slice(
                    0,
                    Math.max(0, closingTagIndex + 18),
                ); // 18 = length of </tui-doc-example>

                exampleMatches.push(fullBlock);
            }
        }
    }

    for (const exampleMatch of exampleMatches) {
        if (!exampleMatch) {
            continue;
        }

        // Extract the example number from the content attribute - handle various tuiExample patterns
        let contentMatch = /\[content\]="(\d+)\s*\|\s*tuiExample[^"]*"/i.exec(
            exampleMatch,
        );

        if (!contentMatch?.[1]) {
            // Try alternative pattern: [content]="exampleX"
            contentMatch = /\[content\]="example(\d+)"/i.exec(exampleMatch);
        }

        if (!contentMatch?.[1]) {
            // Try complex pattern: [content]="X | tuiExample: 'html,ts,less' : {'option.ts': selectOptionExample}"
            contentMatch = /\[content\]="(\d+)\s*\|\s*tuiExample[^"]*"[^"]*"/i.exec(
                exampleMatch,
            );
        }

        if (!contentMatch?.[1]) {
            // Try pattern: [content]="layerExample" or similar object references
            const objectMatch = /\[content\]="([^"]+)"/i.exec(exampleMatch);

            if (objectMatch?.[1]) {
                // For object references, we need to determine the example number differently
                // Check if there's a component attribute that gives us the number
                const componentMatch = /\[component\]="(\d+)\s*\|\s*tuiComponent"/i.exec(
                    exampleMatch,
                );

                if (componentMatch?.[1]) {
                    contentMatch = componentMatch;
                }
            }
        }

        if (!contentMatch?.[1]) {
            continue;
        }

        const exampleNumber = contentMatch[1];

        // Extract the heading - handle both static and dynamic patterns
        let heading = `Example ${exampleNumber}`;

        // Try static heading attribute first
        const headingMatch = /heading="([^"]+)"/i.exec(exampleMatch);

        if (headingMatch?.[1]) {
            heading = headingMatch[1];
        } else {
            // Try dynamic heading binding
            const dynamicHeadingMatch = /\[heading\]="([^"]+)"/i.exec(exampleMatch);

            if (dynamicHeadingMatch?.[1]) {
                heading = dynamicHeadingMatch[1];
            } else {
                // Try to extract from id attribute as fallback
                const idMatch = /id="([^"]+)"/i.exec(exampleMatch);

                if (idMatch?.[1]) {
                    // Convert kebab-case to Title Case
                    heading = idMatch[1]
                        .split('-')
                        .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
                        .join(' ');
                }
            }
        }

        // Extract the description from the ng-template - only for full blocks
        let description = '';

        if (exampleMatch.includes('</tui-doc-example>')) {
            const descriptionMatch = /<ng-template[^>]*>([\s\S]*?)<\/ng-template>/i.exec(
                exampleMatch,
            );

            if (descriptionMatch?.[1]) {
                description = cleanTemplateText(descriptionMatch[1]);
            }
        }

        descriptions[exampleNumber] = {
            heading,
            description,
        };
    }

    // Modern pages render examples through a `@for` loop: headings come from an
    // inline array (or the component's `examples` field) and descriptions from a
    // `@switch ($index)` block. Neither is reachable by the tag scan above.
    for (const [exampleNumber, heading] of Object.entries(
        extractInlineForHeadings(content),
    )) {
        const existing = descriptions[exampleNumber];

        if (!existing) {
            descriptions[exampleNumber] = {heading, description: ''};
        } else if (!existing.heading || existing.heading === `Example ${exampleNumber}`) {
            existing.heading = heading;
        }
    }

    for (const [exampleNumber, description] of Object.entries(
        extractSwitchIndexDescriptions(content),
    )) {
        if (!description) {
            continue;
        }

        const existing = descriptions[exampleNumber];

        if (existing) {
            existing.description = description;
        } else {
            descriptions[exampleNumber] = {
                heading: `Example ${exampleNumber}`,
                description,
            };
        }
    }

    // Also try to extract examples from TypeScript files for dynamic patterns
    const tsExamplesMatch =
        /(?:protected readonly |protected )examples = \[([\s\S]*?)\];/i.exec(content);

    if (tsExamplesMatch?.[1]) {
        const examplesArray = tsExamplesMatch[1]
            .split(',')
            .map((item) => item.trim().replaceAll(/['"]/g, ''))
            .filter((item) => item.length > 0);

        examplesArray.forEach((example, index) => {
            const exampleNumber = (index + 1).toString();

            if (!descriptions[exampleNumber]) {
                descriptions[exampleNumber] = {
                    heading: example,
                    description: '',
                };
            }
        });
    }

    return descriptions;
}

export async function getAllFolders(): Promise<string[]> {
    const folders: string[] = [];

    const SKIP_FOLDERS = [
        'examples',
        'assets',
        'src',
        'data',
        'mocks',
        'test',
        '__test__',
        'node_modules',
        'dist',
        'lib',
        'build',
        'coverage',
        'docs',
    ];

    async function scanDir(currentPath: string, depth = 0): Promise<void> {
        // limiting the depth of recursion
        if (depth > 3) {
            return;
        }

        const entries = await fs.readdir(currentPath, {withFileTypes: true});

        for (const entry of entries) {
            const fullPath = path.join(currentPath, entry.name);

            if (entry.isDirectory()) {
                const lowerName = entry.name.toLowerCase();

                if (SKIP_FOLDERS.includes(lowerName)) {
                    continue;
                }

                const indexPath = path.join(fullPath, 'index.html');
                const exists = await fileExists(indexPath);

                if (exists) {
                    folders.push(fullPath);
                }

                await scanDir(fullPath, depth + 1);
            }
        }
    }

    for (const subFolder of getFoldersToScan()) {
        const dirPath = path.join(getPagesPath(), subFolder);

        if (await fileExists(dirPath)) {
            await scanDir(dirPath, 0);
        } else {
            console.warn(`Folder ${subFolder} not found in ${getPagesPath()}`);
        }
    }

    return folders;
}

// recursive get all .md files from startPath
export async function getMarkdownFiles(startPath: string): Promise<string[]> {
    const result: string[] = [];

    async function scanDir(currentPath: string): Promise<void> {
        const entries = await fs.readdir(currentPath, {withFileTypes: true});

        for (const entry of entries) {
            const fullPath = path.join(currentPath, entry.name);

            if (entry.isDirectory()) {
                await scanDir(fullPath);
            } else if (
                entry.isFile() &&
                path.extname(entry.name).toLowerCase() === '.md'
            ) {
                result.push(fullPath);
            }
        }
    }

    await scanDir(startPath);

    return result;
}

// parse markdown files content
export async function processMarkdownFile(
    filePath: string,
    headingLevel = 1,
): Promise<string> {
    const content = await fs.readFile(filePath, 'utf-8');
    const normalizedHeadingLevel = Math.max(1, headingLevel);
    const title = `${'#'.repeat(normalizedHeadingLevel)} ${path.basename(filePath)}`;

    // Clean up the content for better formatting
    const cleanContent = content
        .trim()
        .replaceAll(/\n{3,}/g, '\n\n') // Replace multiple newlines with double newlines
        .replaceAll(/\s+$/gm, ''); // Remove trailing spaces

    return `${title}\n\n${cleanContent}\n\n---`;
}
