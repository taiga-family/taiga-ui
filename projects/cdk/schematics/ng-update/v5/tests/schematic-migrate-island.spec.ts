import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update tui-island to tuiCardLarge', () => {
    async function migrate(template: string): Promise<ReturnType<typeof runMigration>> {
        return runMigration({
            template,
            collection,
            component: `
                import {Component} from '@angular/core';
                import {TuiIslandDirective} from '@taiga-ui/legacy';

                @Component({
                    standalone: true,
                    templateUrl: './test.html',
                    imports: [TuiIslandDirective],
                })
                export class TestComponent {}
            `,
        });
    }

    it('replaces tui-island tag and import', async () => {
        const {template, component} = await migrate(
            '<tui-island appearance="flat">Content</tui-island>',
        );

        expect(template).toEqual('<div tuiCardLarge appearance="flat">Content</div>');
        expect(component).toContain('from "@taiga-ui/layout"');
        expect(component).toContain('TuiCardLarge');
        expect(component).not.toContain('TuiIslandDirective');
        expect(component).toContain('imports: [TuiCardLarge]');
    });

    it('handles self-closing tui-island', async () => {
        const {template} = await migrate('<tui-island />');

        expect(template).toEqual('<div tuiCardLarge ></div>');
    });

    afterEach(() => resetActiveProject());
});
