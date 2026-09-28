import fs from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';

import {
    extractExampleDescriptions,
    getComponentApiFromTable,
    getUsageExamples,
} from './file-system';

function row(name: string, type: string, description: string): string {
    return `<tr name="${name}" tuiDocAPIItem type="${type}">${description}</tr>`;
}

describe('page structure extraction', () => {
    describe('getComponentApiFromTable', () => {
        it('labels a lone table `API`, whatever heading precedes it', () => {
            const md = getComponentApiFromTable(
                `<h2>Inputs of the thing</h2>
                 <table tuiDocAPI>${row('[size]', 'TuiSizeL', 'cell size')}</table>`,
            );

            expect(md).toContain('### API - Inputs');
            expect(md).not.toContain('Inputs of the thing - Inputs');
        });

        it('reads every table, not just the first', () => {
            const md = getComponentApiFromTable(
                `<table tuiDocAPI>${row('[items]', 'string[]', 'items')}</table>
                 <h2>MobileMenu</h2>
                 <table tuiDocAPI>${row('[leftContent]', 'PolymorpheusContent', 'logo')}</table>`,
            );

            expect(md).toContain('| [items] | `string[]` | items |');
            expect(md).toContain('| [leftContent] | `PolymorpheusContent` | logo |');
        });

        it('titles a following table with the heading that introduces it', () => {
            const md = getComponentApiFromTable(
                `<table tuiDocAPI>${row('[a]', 'string', 'a')}</table>
                 <h3>CSS customization</h3>
                 <table tuiDocAPI>${row('[style.min-height.px]', 'number', 'min height')}</table>`,
            );

            expect(md).toContain('### CSS customization - Inputs');
            // Sections stay separated by a blank line so the tables do not run together.
            expect(md).not.toMatch(/\|\n### /);
        });

        it('numbers a following table that no heading introduces', () => {
            const md = getComponentApiFromTable(
                `<table tuiDocAPI>${row('[a]', 'string', 'a')}</table>
                 <table tuiDocAPI>${row('[b]', 'string', 'b')}</table>`,
            );

            expect(md).toContain('### API 2 - Inputs');
        });

        it('escapes a union type so it stays in one cell', () => {
            // A pipe splits a cell even inside a code span, silently adding a column.
            const md = getComponentApiFromTable(
                `<table tuiDocAPI>${row('[size]', 'TuiSizeM | TuiSizeL', 'size')}</table>`,
            );

            expect(md).toContain('| [size] | `TuiSizeM \\| TuiSizeL` | size |');
        });

        it('keeps outputs of a following table under that table heading', () => {
            const md = getComponentApiFromTable(
                `<table tuiDocAPI>${row('[a]', 'string', 'a')}</table>
                 <h2>UserMenu</h2>
                 <table tuiDocAPI>${row('(close)', 'EventEmitter<void>', 'closed')}</table>`,
            );

            expect(md).toContain('### UserMenu - Outputs');
            expect(md).toContain('| (close) | `EventEmitter<void>` | closed |');
        });
    });

    describe('extractExampleDescriptions', () => {
        it('reads a description passed as a plain attribute', () => {
            const descriptions = extractExampleDescriptions(
                '<tui-doc-example heading="Empty" description="Use it when there is no data" [content]="1 | tuiExample" />',
            );

            expect(descriptions['1']?.description).toBe('Use it when there is no data');
        });

        it('prefers a projected template over the attribute', () => {
            const descriptions = extractExampleDescriptions(
                `<tui-doc-example heading="Empty" description="attribute text" [content]="1 | tuiExample">
                     <ng-template>projected text</ng-template>
                 </tui-doc-example>`,
            );

            expect(descriptions['1']?.description).toBe('projected text');
        });

        it('ignores a description attribute of a nested element', () => {
            const descriptions = extractExampleDescriptions(
                `<tui-doc-example heading="Empty" [content]="1 | tuiExample">
                     <tui-thing description="inner text" />
                 </tui-doc-example>`,
            );

            expect(descriptions['1']?.description).toBe('');
        });
    });

    describe('getUsageExamples', () => {
        let dir = '';

        async function write(file: string, content: string): Promise<void> {
            await fs.mkdir(path.join(dir, path.dirname(file)), {recursive: true});
            await fs.writeFile(path.join(dir, file), content);
        }

        afterEach(async () => {
            await fs.rm(dir, {force: true, recursive: true});
        });

        beforeEach(async () => {
            dir = await fs.mkdtemp(path.join(tmpdir(), 'tui-examples-'));
        });

        it('keeps reading a flat examples/<n> folder keyed by its number', async () => {
            await write(
                'index.html',
                '<tui-doc-example heading="Basic" [content]="1 | tuiExample" />',
            );
            await write('examples/1/index.html', '<button>go</button>');

            const md = await getUsageExamples(dir);

            expect(md).toContain('#### Basic');
            expect(md).toContain('<button>go</button>');
        });

        // A page documenting several platforms groups its examples a level deeper and binds
        // them by field name, so neither the folder nor the heading is found the usual way.
        it('descends into a grouped examples/<group>/<n> folder', async () => {
            await write(
                'index.html',
                '<tui-doc-example heading="With thumbnails" [content]="exampleD1" />',
            );
            await write(
                'index.ts',
                "protected readonly exampleD1 = {HTML: import('./examples/desktop/1/index.html')};",
            );
            await write('examples/desktop/1/index.html', '<tui-panel />');

            const md = await getUsageExamples(dir);

            expect(md).toContain('#### With thumbnails');
            expect(md).toContain('<tui-panel />');
        });

        it('orders grouped examples by number rather than as text', async () => {
            for (const n of [1, 2, 10]) {
                await write(`examples/desktop/${n}/index.html`, `<i>${n}</i>`);
            }

            const md = await getUsageExamples(dir);

            expect(md.indexOf('<i>2</i>')).toBeLessThan(md.indexOf('<i>10</i>'));
        });

        it('skips a group holding no example of its own', async () => {
            await write('examples/notes/readme.txt', 'not an example');

            expect(await getUsageExamples(dir)).toBe('');
        });
    });
});
