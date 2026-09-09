import fs from 'node:fs/promises';
import path from 'node:path';

import {getComponentProse, getInlineCodeSnippets} from './page-prose';

const I18N = path.resolve(process.cwd(), 'projects/demo/src/pages/customization/i18n');

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

    it('resolves object-property [code] bindings (e.g. example.base)', async () => {
        const html = await fs.readFile(path.join(I18N, 'index.html'), 'utf-8');
        const snippets = await getInlineCodeSnippets(html, I18N);

        expect(snippets.join('\n')).toContain('TUI_RUSSIAN_LANGUAGE');
    });
});
