import fs from 'node:fs/promises';
import path from 'node:path';

import {
    getComponentProse,
    getFirstTabProse,
    getInlineCodeSnippets,
    getPageProse,
} from './page-prose';

const PAGES = path.resolve(process.cwd(), 'projects/demo/src/pages');
const I18N = path.join(PAGES, 'customization/i18n');
const JEST = path.join(PAGES, 'info/testing/jest');

async function html(folder: string): Promise<string> {
    return fs.readFile(path.join(folder, 'index.html'), 'utf-8');
}

describe('component page content extraction', () => {
    it('collects prose from every tab and drops example/code blocks', () => {
        const paragraphs = getComponentProse(
            `<tui-doc-page>
                <ng-template pageTab><p>Intro paragraph about the component.</p><tui-doc-example heading="Basic" /></ng-template>
                <ng-template pageTab="Layers"><p>Second tab note describing extra layers.</p></ng-template>
            </tui-doc-page>`,
        );

        expect(paragraphs.some((p) => p.includes('Intro paragraph'))).toBe(true);
        expect(paragraphs.some((p) => p.includes('Second tab note'))).toBe(true);
        expect(paragraphs.join(' ')).not.toContain('Basic');
    });

    it('extracts first pageTab prose as a description fallback', () => {
        const md = getFirstTabProse(
            '<tui-doc-page><ng-template pageTab><p>A set of tools</p><tui-doc-code [code]="x" /></ng-template></tui-doc-page>',
        );

        expect(md).toBe('A set of tools');
    });

    it('resolves object-property [code] bindings (e.g. example.base)', async () => {
        const snippets = await getInlineCodeSnippets(await html(I18N), I18N);

        expect(snippets.join('\n')).toContain('TUI_RUSSIAN_LANGUAGE');
    });

    it('keeps example headings and inlines object-of-md content exactly once', async () => {
        const md = await getPageProse(JEST, await html(JEST));

        expect(md).toContain('## Installation');
        expect(md).toContain('## Configuration');
        expect(md).toContain('## Manual setup');
        // Single-line config maps must not over-match into the next object (no duplication).
        expect(md.split("preset: '@taiga-ui/jest-config'").length - 1).toBe(1);
    });
});
