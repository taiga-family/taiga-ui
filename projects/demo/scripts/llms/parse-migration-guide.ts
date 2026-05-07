import fs from 'node:fs/promises';
import path from 'node:path';

const repoRoot = process.cwd();
const pagesDir = path.join(repoRoot, 'projects/demo/src/pages/info/migration-guide');
const outDir = path.join(repoRoot, 'projects/demo/src/llms-header-sections');
const outFile = path.join(outDir, 'migration-guide-parsed.md');

async function readSafe(filePath: string): Promise<string> {
    try {
        return await fs.readFile(filePath, 'utf-8');
    } catch {
        return '';
    }
}

function stripTags(text: string): string {
    return text
        .replaceAll(/<[^>]+>/g, '')
        .replaceAll('&nbsp;', ' ')
        .replaceAll(/\s+$/g, '');
}

function titleFromDir(dirName: string): string {
    return dirName
        .replaceAll(/[-_]/g, ' ')
        .replaceAll(/\b\w/g, (letter) => letter.toUpperCase());
}

function htmlToMarkdown(html: string): string {
    if (!html) {
        return '';
    }

    let markdown = html.replaceAll(/\r\n?/g, '\n');

    markdown = markdown.replaceAll(
        /<pre[^>]*>\s*<code(?: class="language-([^"]+)")?>([\s\S]*?)<\/code>\s*<\/pre>/gi,
        (_, language: string, code: string) => {
            const fence = `\`\`\`${language || ''}`;

            return `\n${fence}\n${stripTags(code).trim()}\n\n\`\`\`\n`;
        },
    );

    markdown = markdown.replaceAll(
        /<h1[^>]*>([\s\S]*?)<\/h1>/gi,
        (_, text: string) => `# ${stripTags(text).trim()}\n\n`,
    );
    markdown = markdown.replaceAll(
        /<h2[^>]*>([\s\S]*?)<\/h2>/gi,
        (_, text: string) => `## ${stripTags(text).trim()}\n\n`,
    );
    markdown = markdown.replaceAll(
        /<h3[^>]*>([\s\S]*?)<\/h3>/gi,
        (_, text: string) => `### ${stripTags(text).trim()}\n\n`,
    );
    markdown = markdown.replaceAll(
        /<p[^>]*>([\s\S]*?)<\/p>/gi,
        (_, text: string) => `${stripTags(text).trim()}\n\n`,
    );
    markdown = markdown.replaceAll(/<br\s*\/?>(?=\s*<)/gi, '\n');
    markdown = markdown.replaceAll(
        /<ul[^>]*>([\s\S]*?)<\/ul>/gi,
        (_, inner: string) =>
            `${inner.replaceAll(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, item: string) => `- ${stripTags(item).trim()}\n`)}
`,
    );
    markdown = markdown.replaceAll(
        /<a[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,
        (_, href: string, text: string) => `[${stripTags(text).trim()}](${href})`,
    );
    markdown = markdown.replaceAll(
        /<(?:strong|b)[^>]*>([\s\S]*?)<\/(?:strong|b)>/gi,
        (_, text: string) => `**${stripTags(text).trim()}**`,
    );
    markdown = markdown.replaceAll(
        /<(?:em|i)[^>]*>([\s\S]*?)<\/(?:em|i)>/gi,
        (_, text: string) => `*${stripTags(text).trim()}*`,
    );
    markdown = markdown.replaceAll(
        /<code[^>]*>([\s\S]*?)<\/code>/gi,
        (_, code: string) => `\`${stripTags(code).trim()}\``,
    );
    markdown = stripTags(markdown)
        .replaceAll(/\n{3,}/g, '\n\n')
        .trim();

    return markdown ? `${markdown}\n` : '';
}

function extractExampleImports(tsContent: string): string[] {
    if (!tsContent) {
        return [];
    }

    const paths = new Set<string>();
    const importRegex = /import\((['"`])([^'"`]+?\.md)\1\)/g;
    let match: RegExpExecArray | null;

    while ((match = importRegex.exec(tsContent))) {
        const importedPath = match[2];

        if (!importedPath) {
            continue;
        }

        if (importedPath.includes('examples')) {
            paths.add(importedPath.replace(/^[./]+/, ''));
        }
    }

    return Array.from(paths);
}

async function buildParsedMarkdown(): Promise<string> {
    const indexHtml = await readSafe(path.join(pagesDir, 'index.html'));
    const headings = Array.from(
        indexHtml.matchAll(/<tui-doc-example[^>]*heading="([^"]+)"/gi),
        (match) => match[1],
    );
    const sections = [
        {dir: 'prerequisites', title: headings[0] ?? titleFromDir('prerequisites')},
        {dir: 'actions', title: headings[1] ?? titleFromDir('actions')},
        {dir: 'troubleshooting', title: headings[2] ?? titleFromDir('troubleshooting')},
    ];

    let output = '# Migration Guide\n\n';

    output += '> **Guide to update Taiga UI v{CURRENT_MAJOR} -> v{NEXT_MAJOR}**\n\n';

    for (const section of sections) {
        const sectionHtml = await readSafe(
            path.join(pagesDir, section.dir, 'index.html'),
        );
        const markdown = htmlToMarkdown(sectionHtml);

        output += `### ${section.title}\n\n`;
        output += markdown || '*No content found.*\n\n';

        const sectionTs = await readSafe(path.join(pagesDir, section.dir, 'index.ts'));
        const exampleFiles = extractExampleImports(sectionTs).map((filePath) =>
            path.resolve(pagesDir, section.dir, filePath),
        );

        if (exampleFiles.length > 0) {
            output += '**Examples:**\n\n';

            for (const exampleFile of exampleFiles) {
                const exampleContent = await readSafe(exampleFile);

                if (exampleContent) {
                    output += `\`\`\`markdown\n${exampleContent.trim()}\n\`\`\`\n\n`;
                }
            }
        }
    }

    return `${output.trimEnd()}
`;
}

async function main(): Promise<void> {
    const parsed = await buildParsedMarkdown();

    await fs.mkdir(outDir, {recursive: true});
    await fs.writeFile(outFile, parsed, 'utf-8');

    console.info(`Wrote parsed migration guide to ${outFile}`);
}

if (require.main === module) {
    main().catch((error: unknown) => {
        console.error(error);
        process.exit(1);
    });
}

export {buildParsedMarkdown, htmlToMarkdown};
