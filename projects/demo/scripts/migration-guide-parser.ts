import fs from 'node:fs/promises';
import path from 'node:path';

const he: {decode(text: string): string} = require('he');

const sectionNames = ['prerequisites', 'actions', 'troubleshooting'] as const;

type SectionName = (typeof sectionNames)[number];

interface SectionPaths {
    name: SectionName;
    tsPath: string;
    htmlPath: string;
    examplesPath: string;
}

interface SectionMetadata {
    examples: Record<string, Record<string, string>>;
    codeExamples: Record<string, string>;
}

interface ParsedContent {
    prerequisites: string;
    actions: string;
    troubleshooting: string;
}

class MigrationGuideParser {
    private readonly projectRoot = process.cwd();

    private readonly migrationGuideBasePath = path.join(
        this.projectRoot,
        'projects/demo/src/pages/info/migration-guide',
    );

    public async parse(): Promise<string> {
        const sections = await this.discoverSections();
        const metadata = await this.parseTypeScriptFiles(sections);
        const content = await this.parseHTMLTemplates(sections, metadata);

        return this.assembleMarkdown(content);
    }

    private async discoverSections(): Promise<SectionPaths[]> {
        const sections = await Promise.all(
            sectionNames.map(async (name) => {
                const sectionPath = path.join(this.migrationGuideBasePath, name);
                const tsPath = path.join(sectionPath, 'index.ts');
                const htmlPath = path.join(sectionPath, 'index.html');

                try {
                    await fs.access(tsPath);
                    await fs.access(htmlPath);

                    const sectionObj: SectionPaths = {
                        name,
                        tsPath,
                        htmlPath,
                        examplesPath: path.join(this.migrationGuideBasePath, 'examples'),
                    };

                    return sectionObj;
                } catch {
                    console.warn(`Missing migration guide section: ${name}`);

                    return null;
                }
            }),
        );

        const discovered = sections.filter(
            (section): section is SectionPaths => section !== null,
        );

        if (discovered.length !== sectionNames.length) {
            const missing = sectionNames.filter(
                (name) => !discovered.some((section) => section.name === name),
            );

            throw new Error(`Missing migration guide sections: ${missing.join(', ')}`);
        }

        return discovered;
    }

    private async parseTypeScriptFiles(
        sections: SectionPaths[],
    ): Promise<Record<SectionName, SectionMetadata>> {
        const metadata: Record<SectionName, SectionMetadata> = {
            prerequisites: {examples: {}, codeExamples: {}},
            actions: {examples: {}, codeExamples: {}},
            troubleshooting: {examples: {}, codeExamples: {}},
        };

        for (const section of sections) {
            const content = await fs.readFile(section.tsPath, 'utf-8');

            metadata[section.name] = {
                examples: await this.extractObjectDefinitions(
                    content,
                    section.examplesPath,
                ),
                codeExamples: await this.extractMarkdownImports(
                    content,
                    section.examplesPath,
                ),
            };
        }

        return metadata;
    }

    private async extractObjectDefinitions(
        content: string,
        examplesPath?: string,
    ): Promise<Record<string, Record<string, string>>> {
        const definitions: Record<string, Record<string, string>> = {};

        if (!examplesPath) {
            return definitions;
        }

        const objectRegex = /readonly\s+(\w+)\s*=\s*\{([\s\S]*?)\};/g;
        let match;

        while ((match = objectRegex.exec(content)) !== null) {
            const objectName = match[1];
            const objectBody = match[2];

            if (!objectName || !objectBody) {
                continue;
            }

            const entries: Record<string, string> = {};

            const propRegex =
                /['"]([^'"]+)['"]\s*:\s*import\s*\(\s*['"]([^'"]+)['"]\s*\)/g;
            let propMatch;

            while ((propMatch = propRegex.exec(objectBody)) !== null) {
                const key = propMatch[1];
                const filePath = propMatch[2];

                if (!key || !filePath) {
                    continue;
                }

                const fullPath = path.resolve(examplesPath, filePath);

                try {
                    const fileContent = await fs.readFile(fullPath, 'utf-8');

                    entries[key] = fileContent;
                } catch {
                    console.warn(`Could not load example: ${fullPath}`);
                }
            }

            if (Object.keys(entries).length > 0) {
                definitions[objectName] = entries;
            }
        }

        return definitions;
    }

    private async extractMarkdownImports(
        content: string,
        examplesPath?: string,
    ): Promise<Record<string, string>> {
        const examples: Record<string, string> = {};

        if (!examplesPath) {
            return examples;
        }

        const importRegex =
            /(?:readonly|protected\s+readonly)\s+(\w+)\s*=\s*import\s*\(\s*['"]([^'"]+\.md)['"]\s*\)/g;
        let match;

        while ((match = importRegex.exec(content)) !== null) {
            const variableName = match[1];
            const filePath = match[2];

            if (!variableName || !filePath) {
                continue;
            }

            const fullPath = path.resolve(examplesPath, filePath);

            try {
                examples[variableName] = await fs.readFile(fullPath, 'utf-8');
            } catch {
                console.warn(`Could not load example: ${fullPath}`);
            }
        }

        return examples;
    }

    private async parseHTMLTemplates(
        components: SectionPaths[],
        metadata: Record<SectionName, SectionMetadata>,
    ): Promise<ParsedContent> {
        const content: ParsedContent = {
            prerequisites: '',
            actions: '',
            troubleshooting: '',
        };

        for (const component of components) {
            const htmlContent = await fs.readFile(component.htmlPath, 'utf-8');
            const sectionMetadata = metadata[component.name];

            switch (component.name) {
                case 'actions':
                    content.actions = this.parseActions(htmlContent, sectionMetadata);
                    break;
                case 'prerequisites':
                    content.prerequisites = this.parsePrerequisites(htmlContent);
                    break;
                case 'troubleshooting':
                    content.troubleshooting = this.parseTroubleshooting(
                        htmlContent,
                        sectionMetadata,
                    );
                    break;
            }
        }

        return content;
    }

    private cleanText(text: string): string {
        let cleaned = he.decode(text);

        cleaned = cleaned.replaceAll(/<[^>]+>/g, '');
        cleaned = cleaned
            .replaceAll(/\s+/g, ' ')
            .replaceAll(/\n\s*\n/g, '\n')
            .trim();

        return cleaned;
    }

    private parsePrerequisites(html: string): string {
        const lines: string[] = [];

        const labelRegex = /<label[^>]*tuiLabel[^>]*>([\s\S]*?)<\/label>/g;
        let match;

        while ((match = labelRegex.exec(html)) !== null) {
            const labelContent = match[1] ?? '';

            if (!labelContent) {
                continue;
            }

            const textContent = this.cleanText(labelContent);

            if (textContent) {
                const processed = this.processAngularExpressions(textContent);

                lines.push(`- [ ] ${processed}`);
            }
        }

        return lines.join('\n');
    }

    private parseActions(html: string, metadata: SectionMetadata): string {
        const lines: string[] = [];

        const labelExampleRegex =
            /<label[^>]*tuiLabel[^>]*>([\s\S]*?)<\/label>\s*<tui-doc-example\s+\[content\]="(\w+)"/g;
        let match;

        while ((match = labelExampleRegex.exec(html)) !== null) {
            const labelContent = match[1] ?? '';
            const contentVar = match[2] ?? '';

            if (!labelContent || !contentVar) {
                continue;
            }

            const labelText = this.cleanText(labelContent);

            if (labelText) {
                const processed = this.processAngularExpressions(labelText);

                lines.push(`- [ ] ${processed}`);

                const examples = metadata.examples[contentVar];

                if (examples) {
                    const keys = Object.keys(examples);

                    if (keys.length > 0) {
                        lines.push('');

                        keys.forEach((key) => {
                            const content = examples[key] ?? '';

                            if (!content) {
                                return;
                            }

                            lines.push(`**${key}:**`, '', content.trim());
                        });
                    }
                }
            }
        }

        const labelRegex = /<label[^>]*tuiLabel[^>]*>([\s\S]*?)<\/label>/g;

        match = null;
        const processedLabels = new Set<string>();

        const labelExampleRegex2 =
            /<label[^>]*tuiLabel[^>]*>([\s\S]*?)<\/label>\s*<tui-doc-example/g;

        while ((match = labelExampleRegex2.exec(html)) !== null) {
            const labelContent = match[1] ?? '';

            if (labelContent) {
                processedLabels.add(labelContent);
            }
        }

        match = null;

        while ((match = labelRegex.exec(html)) !== null) {
            const labelContent = match[1] ?? '';

            if (processedLabels.has(labelContent)) {
                continue;
            }

            const textContent = this.cleanText(labelContent);

            if (textContent) {
                const processed = this.processAngularExpressions(textContent);

                lines.push('', `- [ ] ${processed}`);
            }
        }

        return lines.join('\n');
    }

    private parseTroubleshooting(html: string, metadata: SectionMetadata): string {
        const lines: string[] = [];
        const accordionRegex = /<tui-accordion[^>]*>([\s\S]*?)<\/tui-accordion>/g;
        let match;

        while ((match = accordionRegex.exec(html)) !== null) {
            const accordionContent = match[1] ?? '';

            if (!accordionContent) {
                continue;
            }

            const itemRegex =
                /<button[^>]*tuiAccordion[^>]*>([\s\S]*?)<\/button>\s*<tui-expand[^>]*>([\s\S]*?)<\/tui-expand>/g;
            let itemMatch;

            while ((itemMatch = itemRegex.exec(accordionContent)) !== null) {
                const problemHtml = itemMatch[1] ?? '';
                const solutionHtml = itemMatch[2] ?? '';

                if (!problemHtml || !solutionHtml) {
                    continue;
                }

                this.processAccordionItem(problemHtml, solutionHtml, metadata, lines);
            }
        }

        return lines.join('\n');
    }

    private processAccordionItem(
        problemHtml: string,
        solutionHtml: string,
        metadata: SectionMetadata,
        lines: string[],
    ): void {
        const problemText = this.cleanText(problemHtml);
        const solutionMatch = /<div[^>]*tuiNotification[^>]*>([\s\S]*?)<\/div>/.exec(
            solutionHtml,
        );

        if (!solutionMatch?.[1]) {
            return;
        }

        const solutionContent = solutionMatch[1];
        const listMatch = /<ol[^>]*>([\s\S]*?)<\/ol>/.exec(solutionContent);

        if (listMatch) {
            const listHtml = listMatch[1] ?? '';

            if (!listHtml) {
                return;
            }

            const listItems = this.extractListItems(listHtml, metadata);
            const solutionText = listItems.join('\n');

            if (problemText) {
                lines.push(
                    '',
                    `**Problem:** ${problemText}`,
                    '',
                    '**Solution:**',
                    '',
                    solutionText,
                );
            }
        } else {
            const solutionText = this.cleanText(solutionContent);

            if (problemText && solutionText) {
                lines.push(
                    '',
                    `**Problem:** ${problemText}`,
                    '',
                    `**Solution:** ${solutionText}`,
                );
            }
        }
    }

    private extractListItems(html: string, metadata: SectionMetadata): string[] {
        const items: string[] = [];
        const itemRegex = /<li[^>]*>([\s\S]*?)<\/li>/g;
        let match;
        let itemNumber = 1;

        while ((match = itemRegex.exec(html)) !== null) {
            const itemHtml = match[1] ?? '';

            if (!itemHtml) {
                continue;
            }

            let itemText = this.cleanText(itemHtml);

            itemText = this.processAngularExpressions(itemText);

            const codeKeyMatch = /<tui-doc-code[^>]*\[code\]="(\w+)"[^>]*\/>/.exec(
                itemHtml,
            );
            const codeLiteralMatch = /<tui-doc-code[^>]*code="([^"]*)"[^>]*\/>/.exec(
                itemHtml,
            );

            const codeKey = codeKeyMatch?.[1];
            const code = codeKey
                ? metadata.codeExamples[codeKey]?.trim()
                : codeLiteralMatch?.[1];

            if (code) {
                itemText = itemText
                    ? `${itemText}\n\n\`\`\`bash\n${code}\n\`\`\``
                    : `\`\`\`bash\n${code}\n\`\`\``;
            }

            items.push(`${itemNumber}. ${itemText}`);
            itemNumber++;
        }

        return items;
    }

    private processAngularExpressions(text: string): string {
        return text.replaceAll(/\{\{(.+?)\}\}/g, (_, expr: string) => {
            const normalized = expr.replaceAll(/\s+/g, ' ').trim();

            if (normalized === 'tuiMajor - 1') {
                return '{CURRENT_MAJOR}';
            }

            if (normalized === 'tuiMajor' || normalized === 'tuiMajor + 1') {
                return '{NEXT_MAJOR}';
            }

            return `{{${expr}}}`;
        });
    }

    private assembleMarkdown(content: ParsedContent): string {
        const lines = [
            '# Migration Guide',
            '',
            '> **Guide to update Taiga UI v{CURRENT_MAJOR} -> v{NEXT_MAJOR}**',
            '',
            '## Before You Update',
            '',
            content.prerequisites,
            '',
            '## Updating',
            '',
            content.actions,
            '',
            '## Troubleshooting',
            '',
            content.troubleshooting,
            '',
        ];

        while (lines[lines.length - 1] === '') {
            lines.pop();
        }

        lines.push('');

        return lines.join('\n');
    }
}

async function main(): Promise<void> {
    try {
        const parser = new MigrationGuideParser();
        const markdown = await parser.parse();

        const outputPath = path.join(
            process.cwd(),
            'projects/demo/src/llms-header-sections/migration-guide-generated.md',
        );

        await fs.writeFile(outputPath, markdown, 'utf-8');
        console.info(`Saved to: ${outputPath}`);
    } catch (error) {
        console.error('Error:', error);
        process.exit(1);
    }
}

main();
