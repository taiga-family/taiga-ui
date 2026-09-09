// Renders a prose doc page's projected template to Markdown (fallback for non-component pages).
import fs from 'node:fs/promises';
import path from 'node:path';

import {readIndexHtml} from './file-system';

function escapeReg(value: string): string {
    return value.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`);
}

function decodeEntities(value: string): string {
    return value
        .replaceAll('&#64;', '@')
        .replaceAll('&lt;', '<')
        .replaceAll('&gt;', '>')
        .replaceAll('&quot;', '"')
        .replaceAll(/&#0?39;/g, "'")
        .replaceAll('&nbsp;', ' ')
        .replaceAll('&amp;', '&');
}

function textOf(html: string): string {
    return html
        .replaceAll(/<[^>]+>/g, '')
        .replaceAll(/\s+/g, ' ')
        .trim();
}

function isUrl(href: string): boolean {
    return /^(?:https?:)?\/\//.test(href) || href.startsWith('/');
}

async function readIfExists(filePath: string): Promise<string | null> {
    try {
        return await fs.readFile(filePath, 'utf-8');
    } catch {
        return null;
    }
}

export function htmlToMarkdown(html: string): string {
    // Protect fenced code blocks (inlined snippets) from any tag/whitespace rewriting.
    const fences: string[] = [];
    let result = html.replaceAll(/```[\s\S]*?```/g, (match) => {
        fences.push(match);

        return `[[FENCE${fences.length - 1}]]`;
    });

    result = result
        .replaceAll(/<!--[\s\S]*?-->/g, '')
        .replaceAll(/<(script|style)\b[\s\S]*?<\/\1>/gi, '');

    // Keep pageTab content, drop other ng-templates (tooltips, hidden descriptions).
    result = result
        .replaceAll(
            /<ng-template\b[^>]*?[\s[]pageTab\b[^>]*>([\s\S]*?)<\/ng-template>/gi,
            '\n$1\n',
        )
        .replaceAll(/<ng-template\b[^>]*>([\s\S]*?)<\/ng-template>/gi, '$1')
        .replaceAll(/<ng-content\b[^>]*>(?:\s*<\/ng-content>)?/gi, '');

    // Drop Angular control-flow openers/closers, keep their inner content.
    result = result
        .replaceAll(/^[^\S\n]*@[a-z]+\b[^\n{]*\{[^\S\n]*$/gim, '')
        .replaceAll(/^[^\S\n]*\}[^\S\n]*@[a-z]+\b[^\n{]*\{[^\S\n]*$/gim, '')
        .replaceAll(/^[^\S\n]*\}[^\S\n]*$/gm, '');

    // <tui-doc-example heading> becomes a section heading (+ static description).
    result = result
        .replaceAll(/<tui-doc-example\b([^>]*)>/gi, (_match, attrs: string) => {
            const heading = /\sheading="([^"]*)"/.exec(attrs)?.[1]?.trim();
            const description = /\sdescription="([^"]*)"/.exec(attrs)?.[1]?.trim();

            return heading
                ? `\n\n## ${heading}\n\n${description ? `${description}\n\n` : ''}`
                : '\n\n';
        })
        .replaceAll(/<\/tui-doc-example>/gi, '\n\n');

    // Card-style anchors (an <a> wrapping a heading) become list items.
    result = result.replaceAll(
        /<a\b[^>]*?\shref="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,
        (match, href: string, inner: string) => {
            if (!/<h[1-6]\b/i.test(inner)) {
                return match;
            }

            const title = textOf(
                /<h[1-6]\b[^>]*>([\s\S]*?)<\/h[1-6]>/i.exec(inner)?.[1] ?? '',
            );

            const rest = textOf(inner.replace(/<h[1-6]\b[\s\S]*?<\/h[1-6]>/i, ''));
            const link = isUrl(href) ? ` ([link](${href}))` : '';

            return `\n- **${title}**${rest ? ` — ${rest}` : ''}${link}\n`;
        },
    );

    // Inline formatting.
    result = result
        .replaceAll(
            /<code\b[^>]*>([\s\S]*?)<\/code>/gi,
            (_match, inner: string) => `\`${textOf(inner).replaceAll('`', '')}\``,
        )
        .replaceAll(
            /<(strong|b)\b[^>]*>([\s\S]*?)<\/\1>/gi,
            (_match, _tag: string, inner: string) => `**${textOf(inner)}**`,
        )
        .replaceAll(
            /<(em|i)\b[^>]*>([\s\S]*?)<\/\1>/gi,
            (_match, _tag: string, inner: string) => `_${textOf(inner)}_`,
        );

    // Links with a static href; bound [href] falls through to plain text.
    result = result
        .replaceAll(
            /<a\b[^>]*?\shref="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi,
            (_match, href: string, inner: string) => {
                const text = textOf(inner).replace(/^#+\s*/, '');

                return isUrl(href) ? `[${text}](${href})` : text;
            },
        )
        .replaceAll(/<a\b[^>]*>([\s\S]*?)<\/a>/gi, (_match, inner: string) =>
            textOf(inner),
        );

    // Standalone headings (page title is `#`, so sections start at `##`).
    result = result.replaceAll(
        /<h([1-6])\b[^>]*>([\s\S]*?)<\/h\1>/gi,
        (_match, level: string, inner: string) =>
            `\n\n${'#'.repeat(Math.min(5, Math.max(2, Number(level))))} ${textOf(inner)}\n\n`,
    );

    // Lists and checkbox labels.
    result = result
        .replaceAll(/<label\b[^>]*>/gi, '\n- ')
        .replaceAll(/<\/label>/gi, '\n')
        .replaceAll(/<input\b[^>]*>/gi, '')
        .replaceAll(/<li\b[^>]*>/gi, '\n- ')
        .replaceAll(/<\/li>/gi, '\n');

    // Block-level breaks.
    result = result
        .replaceAll(/<\/(?:p|div|section|ul|ol|header|hgroup|article|h[1-6])>/gi, '\n\n')
        .replaceAll(/<(?:p|div|section|ul|ol|header|hgroup|article)\b[^>]*>/gi, '\n\n')
        .replaceAll(/<br\s*\/?>/gi, '\n');

    // Drop everything else, then interpolations and entities.
    result = result.replaceAll(/<[^>]+>/g, '').replaceAll(/\{\{[\s\S]*?\}\}/g, '');
    result = decodeEntities(result);

    // Whitespace cleanup.
    result = result
        .replaceAll(/[^\S\n]+/g, ' ')
        .split('\n')
        .map((line) => line.trim())
        .join('\n')
        .replaceAll(/\n{3,}/g, '\n\n')
        // Pull a list item's text back onto its bullet line.
        .replaceAll(/^-[ \t]*\n+(?=\S)/gm, '- ')
        .trim();

    return result.replaceAll(/\[\[FENCE(\d+)\]\]/g, (_match, index: string) =>
        (fences[Number(index)] ?? '').trim(),
    );
}

async function buildSelectorMap(folderPath: string): Promise<Map<string, string>> {
    const map = new Map<string, string>();
    let entries;

    try {
        entries = await fs.readdir(folderPath, {withFileTypes: true});
    } catch {
        return map;
    }

    for (const entry of entries) {
        if (
            !entry.isDirectory() ||
            entry.name === 'examples' ||
            entry.name === 'snippets'
        ) {
            continue;
        }

        const ts = await readIfExists(path.join(folderPath, entry.name, 'index.ts'));
        const selector = ts && /selector:\s*['"]([^'"]+)['"]/.exec(ts)?.[1];

        if (selector) {
            map.set(selector, path.join(folderPath, entry.name));
        }
    }

    return map;
}

// Resolves a `[code]` binding to its imported file: `x = import('…')` or `obj.prop` → `prop: import('…')`.
function resolveImportPath(ts: string, binding: string): string | null {
    const direct = new RegExp(
        String.raw`\b${escapeReg(binding)}\b\s*=\s*import\(\s*['"]([^'"]+)['"]`,
    ).exec(ts)?.[1];

    if (direct) {
        return direct;
    }

    const key = binding.split('.').pop() ?? binding;

    return (
        new RegExp(
            String.raw`\b${escapeReg(key)}\s*:\s*import\(\s*['"]([^'"]+)['"]`,
        ).exec(ts)?.[1] ?? null
    );
}

async function inlineDocCode(html: string, folderPath: string): Promise<string> {
    if (!/tui-doc-code/i.test(html)) {
        return html;
    }

    const ts = await readIfExists(path.join(folderPath, 'index.ts'));
    let result = html;

    const matches = [
        ...html.matchAll(
            /<tui-doc-code\b[^>]*\[code\]="([^"]+)"[^>]*>(?:\s*<\/tui-doc-code>)?/gi,
        ),
    ];

    for (const match of matches) {
        const binding = match[1]?.trim() ?? '';
        const importPath = ts ? resolveImportPath(ts, binding) : null;

        const snippet = importPath
            ? ((await readIfExists(path.resolve(folderPath, importPath)))?.trim() ?? '')
            : '';

        result = result.replace(match[0], snippet ? `\n\n${snippet}\n\n` : '');
    }

    return result;
}

// First pageTab prose as Markdown — fallback for component pages whose structured description
// extraction finds nothing (e.g. pages with no `<tui-doc-example>` to anchor on).
export function getFirstTabProse(content: string): string {
    const tab = /<ng-template[^>]+pageTab[^>]*>([\s\S]*?)<\/ng-template>/i.exec(
        content,
    )?.[1];

    if (!tab) {
        return '';
    }

    const withoutExamples = tab.replaceAll(
        /<tui-doc-(code|example)\b[\s\S]*?(?:<\/tui-doc-\1>|\/>)/gi,
        '',
    );

    return htmlToMarkdown(withoutExamples).trim();
}

// Standalone `<tui-doc-code>` snippets as Markdown — for component pages, whose structured
// extraction skips inline code blocks (setup, providers, service usage) shown in the prose.
export async function getInlineCodeSnippets(
    html: string,
    folderPath: string,
): Promise<string[]> {
    if (!/tui-doc-code/i.test(html)) {
        return [];
    }

    const ts = await readIfExists(path.join(folderPath, 'index.ts'));
    const snippets: string[] = [];

    for (const [, binding = ''] of html.matchAll(
        /<tui-doc-code\b[^>]*\[code\]="([^"]+)"/gi,
    )) {
        const value = binding.trim();

        if (value.startsWith('`') && value.endsWith('`')) {
            const inline = value
                .slice(1, -1)
                .replaceAll(/\$\{[^}]*\}/g, '')
                .trim();

            if (inline) {
                snippets.push(`\`\`\`html\n${inline}\n\`\`\``);
            }

            continue;
        }

        const importPath = ts && resolveImportPath(ts, value);
        const file =
            importPath && path.resolve(folderPath, importPath.split('?')[0] ?? '');

        const snippet = file ? (await readIfExists(file))?.trim() : '';

        if (snippet) {
            snippets.push(snippet);
        }
    }

    return snippets;
}

async function inlineChildComponents(
    html: string,
    folderPath: string,
    seen: ReadonlySet<string>,
): Promise<string> {
    const map = await buildSelectorMap(folderPath);
    let result = html;

    for (const [selector, childFolder] of map) {
        if (
            seen.has(childFolder) ||
            !new RegExp(String.raw`<${escapeReg(selector)}\b`, 'i').test(result)
        ) {
            continue;
        }

        const childHtml = await readIndexHtml(childFolder);
        const resolvedChild = childHtml
            ? await resolveTemplate(
                  childHtml,
                  childFolder,
                  new Set([...seen, folderPath]),
              )
            : '';

        const paired = new RegExp(
            String.raw`<${escapeReg(selector)}\b[^>]*>[\s\S]*?</${escapeReg(selector)}>`,
            'gi',
        );

        const selfClosing = new RegExp(
            String.raw`<${escapeReg(selector)}\b[^>]*/>`,
            'gi',
        );

        result = result
            .replace(paired, `\n${resolvedChild}\n`)
            .replace(selfClosing, `\n${resolvedChild}\n`);
    }

    return result;
}

async function resolveTemplate(
    html: string,
    folderPath: string,
    seen: ReadonlySet<string>,
): Promise<string> {
    const withCode = await inlineDocCode(html, folderPath);

    return inlineChildComponents(withCode, folderPath, seen);
}

// Converts a prose page's projected template to Markdown; empty string when nothing to show.
export async function getPageProse(folderPath: string, content: string): Promise<string> {
    // Skip quoted attrs so a `>` inside e.g. [header]="...v4 -> v5" doesn't close the tag early.
    const inner =
        /<tui-doc-page\b(?:"[^"]*"|'[^']*'|[^>])*>([\s\S]*?)<\/tui-doc-page>/i.exec(
            content,
        )?.[1];

    if (!inner?.trim()) {
        return '';
    }

    const resolved = await resolveTemplate(inner, folderPath, new Set([folderPath]));

    return htmlToMarkdown(resolved).trim();
}
