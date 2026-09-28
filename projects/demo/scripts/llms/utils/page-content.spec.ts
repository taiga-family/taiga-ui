import fs from 'node:fs/promises';
import path from 'node:path';

import {getComponentDescription} from './file-system';
import {
    getComponentProse,
    getFirstTabProse,
    getInlineCodeSnippets,
    getPageProse,
} from './page-prose';

const PAGES = path.resolve(process.cwd(), 'projects/demo/src/pages');
const I18N = path.join(PAGES, 'customization/i18n');
const JEST = path.join(PAGES, 'info/testing/jest');
const GETTING_STARTED = path.join(PAGES, 'app/getting-started');
const SELECT = path.join(PAGES, 'components/select');
const KEYPAD = path.join(PAGES, 'components/keypad');
const AXES = path.join(PAGES, 'components/axes');

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

    it('expands an examples-grid @for into one section per step with inlined snippets', async () => {
        const md = await getPageProse(GETTING_STARTED, await html(GETTING_STARTED));

        // Each examples[] entry becomes its own heading...
        expect(md).toContain('## Install libraries');
        expect(md).toContain('## Server Side Rendering');
        // ...with its content[$index] snippet (and label) inlined...
        expect(md).toContain('**Main packages**');
        expect(md).toContain('npm i @taiga-ui/{cdk,core,kit,icons}');
        // ...and the @switch @case(5) note attached once, not once per example.
        expect(md.split('advanced mocks and tools').length - 1).toBe(1);
    });

    it('cleans the component description: decodes entities, keeps <code>, drops the @for opener', async () => {
        const description = getComponentDescription(await html(SELECT)) ?? '';

        expect(description).toContain('`Select`'); // <code> → inline code
        expect(description).not.toContain('&lt;'); // entities decoded
        expect(description).not.toMatch(/@for|track example|example of \[/); // no leaked loop header
    });

    it('backticks <code> tags carrying encoded angle brackets in the description', async () => {
        const description = getComponentDescription(await html(KEYPAD)) ?? '';

        expect(description).toContain('`<button>`');
        expect(description).not.toContain('&lt;');
    });

    it('does not leak the API table (bound attrs / <tr>) into component prose', async () => {
        const prose = getComponentProse(await html(AXES)).join('\n');

        expect(prose).not.toContain('[items]="labelsXVariants"');
        expect(prose).not.toMatch(/\[\(value\)\]=|tuiDocAPIItem/);
        expect(prose).not.toMatch(/@for|track example/);
    });
});
