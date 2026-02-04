import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update css size variable for sliders', () => {
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

    it('change --tui-thickness.rem to --tui-thumb-size.rem for tui-range', async () => {
        expect(
            await migrate(
                '<tui-range [formControl]="control" [style.--tui-thickness.rem]="0.25"/>',
            ),
        ).toEqual(
            '<tui-range [formControl]="control" [style.--tui-thumb-size.rem]="0.75"/>',
        );
    });

    it('change --tui-thickness.px to --tui-thumb-size for tui-range', async () => {
        expect(
            await migrate(
                '<tui-range [formControl]="control" [style.--tui-thickness.px]="2"/>',
            ),
        ).toEqual(
            '<tui-range [formControl]="control" [style.--tui-thumb-size]="calc(2px * 2 + 0.25rem)"/>',
        );
    });

    it('change --tui-thickness.rem to --tui-thumb-size.rem for tuiSlider', async () => {
        expect(
            await migrate(
                '<input tuiSlider type="range" [formControl]="control" [style.--tui-thickness.rem]="0.25"/>',
            ),
        ).toEqual(
            '<input tuiSlider type="range" [formControl]="control" [style.--tui-thumb-size.rem]="0.75"/>',
        );
    });

    it('change --tui-thickness.px to --tui-thumb-size.rem for tuiSlider', async () => {
        expect(
            await migrate(
                '<input tuiSlider type="range" [formControl]="control" [style.--tui-thickness.px]="2"/>',
            ),
        ).toEqual(
            '<input tuiSlider type="range" [formControl]="control" [style.--tui-thumb-size]="calc(2px * 2 + 0.25rem)"/>',
        );
    });

    it('change --tui-thickness.rem to --tui-thumb-size.rem for tui-input-range', async () => {
        expect(
            await migrate(
                '<tui-input-range [formControl]="control" [style.--tui-thickness.rem]="0.25"/>',
            ),
        ).toEqual(
            '<tui-input-range [formControl]="control" [style.--tui-thumb-size.rem]="0.75"/>',
        );
    });

    it('change --tui-thickness.px to --tui-thumb-size for tui-input-range', async () => {
        expect(
            await migrate(
                '<tui-input-range [formControl]="control" [style.--tui-thickness.px]="2"/>',
            ),
        ).toEqual(
            '<tui-input-range [formControl]="control" [style.--tui-thumb-size]="calc(2px * 2 + 0.25rem)"/>',
        );
    });

    afterEach(() => resetActiveProject());
});
