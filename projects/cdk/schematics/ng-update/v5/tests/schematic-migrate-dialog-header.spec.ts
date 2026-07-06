import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

const TODO =
    '// TODO: (Taiga UI migration) dialog `header` option (content shown above the title) was removed from `TuiDialogOptions` in v5. To keep content above the title, pass an empty `label` and place `tuiHeader` in the dialog template where you need it. For a plain string title, use `label` instead. See: https://taiga-ui.dev/components/dialog';

describe('ng-update tuiDialog header option', () => {
    const migrateComponent = async (component: string): Promise<string> => {
        const {component: result} = await runMigration({component, collection});

        return result;
    };

    it('adds a TODO near `header` in a tuiDialog factory call', async () => {
        const result = await migrateComponent(`
            import {Component} from '@angular/core';
            import {tuiDialog} from '@taiga-ui/core';

            @Component({standalone: true})
            export class TestComponent {
                private readonly dialog = tuiDialog('content', {
                    header: 'Title',
                    size: 'm',
                });
            }
        `);

        expect(result).toContain(TODO);
        expect(result).toContain("header: 'Title'");
    });

    it('adds a TODO near `header` in a TuiDialogService.open call', async () => {
        const result = await migrateComponent(`
            import {Component, inject} from '@angular/core';
            import {TuiDialogService} from '@taiga-ui/core';

            @Component({standalone: true})
            export class TestComponent {
                constructor() {
                    inject(TuiDialogService).open('content', {header: someTemplate});
                }
            }
        `);

        expect(result).toContain(TODO);
    });

    it('adds a TODO near `header` in a tuiDialogOptionsProvider call', async () => {
        const result = await migrateComponent(`
            import {Component} from '@angular/core';
            import {tuiDialogOptionsProvider} from '@taiga-ui/core';

            @Component({
                standalone: true,
                providers: [tuiDialogOptionsProvider({header: 'Title'})],
            })
            export class TestComponent {}
        `);

        expect(result).toContain(TODO);
    });

    it('does not add a TODO when there is no `header` option', async () => {
        const result = await migrateComponent(`
            import {Component} from '@angular/core';
            import {tuiDialog} from '@taiga-ui/core';

            @Component({standalone: true})
            export class TestComponent {
                private readonly dialog = tuiDialog('content', {
                    label: 'Title',
                    size: 'm',
                });
            }
        `);

        expect(result).not.toContain('TODO: (Taiga UI migration)');
    });

    it('does not touch a `header` property on an unrelated call', async () => {
        const result = await migrateComponent(`
            import {Component} from '@angular/core';

            @Component({standalone: true})
            export class TestComponent {
                private readonly config = somethingElse({header: 'Title'});
            }
        `);

        expect(result).not.toContain('TODO: (Taiga UI migration)');
    });

    it('adds a TODO for every dialog call with `header` in the same file', async () => {
        const result = await migrateComponent(`
            import {Component} from '@angular/core';
            import {tuiDialog} from '@taiga-ui/core';

            @Component({standalone: true})
            export class TestComponent {
                private readonly dialog1 = tuiDialog('content', {header: 'Title 1'});
                private readonly dialog2 = tuiDialog('content', {header: 'Title 2'});
            }
        `);

        const occurrences = result.split('TODO: (Taiga UI migration)').length - 1;

        expect(occurrences).toBe(2);
    });

    afterEach(() => resetActiveProject());
});
