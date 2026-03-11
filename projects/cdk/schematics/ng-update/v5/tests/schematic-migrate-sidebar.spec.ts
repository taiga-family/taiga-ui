import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update sidebar to drawer', () => {
    async function migrate(template: string): Promise<string> {
        return (
            await runMigration({
                template,
                collection,
                component: `
                    import {Component} from '@angular/core';
                    import {TuiSidebar} from '@taiga-ui/addon-mobile';

                    @Component({
                        standalone: true,
                        imports: [TuiSidebar],
                        templateUrl: './test.html',
                    })
                    export class TestComponent {
                        protected open = false;
                    }
                `,
            })
        ).template;
    }

    async function migrateComponent(component: string): Promise<string> {
        return (await runMigration({component, collection})).component;
    }

    it('replaces TuiSidebar import with TuiDrawer and TuiPopup', async () => {
        const result = await migrateComponent(`
            import {Component} from '@angular/core';
            import {TuiSidebar} from '@taiga-ui/addon-mobile';

            @Component({
                standalone: true,
                imports: [TuiSidebar],
                templateUrl: './test.html',
            })
            export class TestComponent {
                protected open = false;
            }
        `);

        expect(result).toContain('TuiDrawer');
        expect(result).toContain('TuiPopup');
        expect(result).not.toContain('TuiSidebar');
    });

    it('migrates simple *tuiSidebar directive without extra comments', async () => {
        expect(await migrate('<div *tuiSidebar="open">Content</div>')).toEqual(
            '<tui-drawer *tuiPopup="open">Content</tui-drawer>',
        );
    });

    it("migrates *tuiSidebar with direction: 'right' without extra comments", async () => {
        expect(
            await migrate(`<div *tuiSidebar="open; direction: 'right'">Content</div>`),
        ).toEqual('<tui-drawer *tuiPopup="open" direction="end">Content</tui-drawer>');
    });

    it("migrates *tuiSidebar with direction: 'left' without extra comments", async () => {
        expect(
            await migrate(`<div *tuiSidebar="open; direction: 'left'">Content</div>`),
        ).toEqual('<tui-drawer *tuiPopup="open" direction="start">Content</tui-drawer>');
    });

    it('migrates *tuiSidebar with dynamic direction expression and adds TODO comment', async () => {
        expect(
            await migrate('<div *tuiSidebar="open; direction: myDir">Content</div>'),
        ).toEqual(
            '<!-- TODO: (Taiga UI migration) Update direction variable values: left->start, right->end -->\n' +
                '<tui-drawer *tuiPopup="open" [direction]="myDir">Content</tui-drawer>',
        );
    });

    it('migrates *tuiSidebar with autoWidth and adds TODO comment', async () => {
        expect(
            await migrate('<div *tuiSidebar="open; autoWidth: true">Content</div>'),
        ).toEqual(
            '<!-- TODO: (Taiga UI migration) tuiSidebarAutoWidth has no equivalent in TuiDrawer, adjust layout manually -->\n' +
                '<tui-drawer *tuiPopup="open">Content</tui-drawer>',
        );
    });

    it("migrates *tuiSidebar with direction: 'right' and autoWidth", async () => {
        expect(
            await migrate(
                `<div *tuiSidebar="open; direction: 'right'; autoWidth: true">Content</div>`,
            ),
        ).toEqual(
            '<!-- TODO: (Taiga UI migration) tuiSidebarAutoWidth has no equivalent in TuiDrawer, adjust layout manually -->\n' +
                '<tui-drawer *tuiPopup="open" direction="end">Content</tui-drawer>',
        );
    });

    it('preserves other attributes on the element', async () => {
        expect(
            await migrate(
                '<div class="my-class" *tuiSidebar="open" (click)="close()">Content</div>',
            ),
        ).toEqual(
            '<tui-drawer *tuiPopup="open" class="my-class" (click)="close()">Content</tui-drawer>',
        );
    });

    it('migrates multiline content inside *tuiSidebar', async () => {
        const before = [
            '<div *tuiSidebar="open">',
            '    <header>Header</header>',
            '    <p>Content</p>',
            '</div>',
        ].join('\n');

        const after = [
            '<tui-drawer *tuiPopup="open">',
            '    <header>Header</header>',
            '    <p>Content</p>',
            '</tui-drawer>',
        ].join('\n');

        expect(await migrate(before)).toEqual(after);
    });

    it('migrates ng-template with *tuiSidebar', async () => {
        expect(
            await migrate(
                `<ng-template *tuiSidebar="open; direction: 'right'"><span>Content</span></ng-template>`,
            ),
        ).toEqual(
            '<tui-drawer *tuiPopup="open" direction="end"><span>Content</span></tui-drawer>',
        );
    });

    afterEach(() => resetActiveProject());
});
