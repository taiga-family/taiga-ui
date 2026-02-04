import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update size attribute for sliders', () => {
    async function migrate(template: string): Promise<string> {
        const {template: result} = await runMigration({
            template,
            collection,
            component: `
                import {Component} from '@angular/core';

                @Component({
                    standalone: true,
                    templateUrl: './test.html',
                })
                export class TestComponent {}
            `,
        });

        return result;
    }

    it('replaces size attribute for tui-range', async () => {
        expect(await migrate('<tui-range [formControl]="control" size="s"/>')).toEqual(
            '<tui-range [formControl]="control" />',
        );
    });

    it('replaces size attribute for tuiSlider', async () => {
        expect(
            await migrate(
                '<input tuiSlider type="range" [formControl]="control" size="s"/>',
            ),
        ).toEqual('<input tuiSlider type="range" [formControl]="control" />');
    });

    afterEach(() => resetActiveProject());
});
