import fs from 'node:fs/promises';
import path from 'node:path';

import {getFirstTabProse, getInlineCodeSnippets} from './page-prose';

const I18N = path.resolve(process.cwd(), 'projects/demo/src/pages/customization/i18n');

describe('component page content extraction', () => {
    it('extracts first pageTab prose as a description fallback', () => {
        const md = getFirstTabProse(
            '<tui-doc-page><ng-template pageTab><p>A set of tools</p><tui-doc-code [code]="x" /></ng-template></tui-doc-page>',
        );

        expect(md).toBe('A set of tools');
    });

    it('keeps a static link in the fallback prose', () => {
        const md = getFirstTabProse(
            '<ng-template pageTab>Visit <a href="https://x.dev">docs</a></ng-template>',
        );

        expect(md).toContain('[docs](https://x.dev)');
    });

    it('resolves object-property [code] bindings (e.g. example.base)', async () => {
        const html = await fs.readFile(path.join(I18N, 'index.html'), 'utf-8');
        const snippets = await getInlineCodeSnippets(html, I18N);

        expect(snippets.join('\n')).toContain('TUI_RUSSIAN_LANGUAGE');
    });
});
