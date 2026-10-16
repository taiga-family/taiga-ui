import fs from 'node:fs/promises';
import path from 'node:path';

import {getContentObjectExamples} from './file-system';

const PAGES = path.resolve(process.cwd(), 'projects/demo/src/pages');
const ROUTABLE = path.join(PAGES, 'components/dialog-routable');
const GETTING_STARTED = path.join(PAGES, 'app/getting-started');

async function html(folder: string): Promise<string> {
    return fs.readFile(path.join(folder, 'index.html'), 'utf-8');
}

describe('getContentObjectExamples', () => {
    it('reconstructs code blocks from [content]="exampleN" import objects', async () => {
        const result = await getContentObjectExamples(ROUTABLE, await html(ROUTABLE));

        // One block per tui-doc-example, in template order, under its heading.
        expect(result).toContain('### Usage Examples');
        expect(result.indexOf('#### Lazy loading dialog')).toBeLessThan(
            result.indexOf('#### Eager dialog'),
        );
        expect(result).toContain('#### Named outlet');

        // Object keys become the file labels shown on the page.
        expect(result).toContain('**HTML:**');
        expect(result).toContain('**Routes:**');
        expect(result).toContain('**Dialog:**');

        // Real file contents are inlined, including the shared routes.ts and the
        // separate dialog component the examples/<N> folder scan would have missed.
        expect(result).toContain('```html');
        expect(result).toContain('<router-outlet />');
        expect(result).toContain('tuiRouteDialog');
        expect(result).toContain('Lazy loaded dialog content');
    });

    it('ignores non-code imports (Markdown prose snippets)', async () => {
        // Getting started binds [content] objects that import .md files, not source
        // code, so they belong to the prose pipeline and produce no usage examples.
        expect(
            await getContentObjectExamples(GETTING_STARTED, await html(GETTING_STARTED)),
        ).toBe('');
    });
});
