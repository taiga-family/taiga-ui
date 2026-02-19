import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update size attribute for sliders', () => {
    async function migrate(template: string): Promise<string> {
        return (await runMigration({template, collection})).template;
    }

    it('change size="s" attribute for tui-range', async () => {
        expect(await migrate('<tui-range [formControl]="control" size="s"/>')).toEqual(
            '<tui-range [formControl]="control" [style.--tui-thumb-size.rem]="0.5"/>',
        );
    });

    it('change [size]="\'s\'" attribute for tui-range', async () => {
        expect(
            await migrate('<tui-range [formControl]="control" [size]="\'s\'"/>'),
        ).toEqual(
            '<tui-range [formControl]="control" [style.--tui-thumb-size.rem]="0.5"/>',
        );
    });

    it('change size="m" attribute for tui-range', async () => {
        expect(await migrate('<tui-range [formControl]="control" size="m"/>')).toEqual(
            '<tui-range [formControl]="control" [style.--tui-thumb-size.rem]="0.75"/>',
        );
    });

    it('change [size]="\'m\'" attribute for tui-range', async () => {
        expect(
            await migrate('<tui-range [formControl]="control" [size]="\'m\'"/>'),
        ).toEqual(
            '<tui-range [formControl]="control" [style.--tui-thumb-size.rem]="0.75"/>',
        );
    });

    it('change size="s" attribute for tuiSlider', async () => {
        expect(
            await migrate(
                '<input tuiSlider type="range" [formControl]="control" size="s"/>',
            ),
        ).toEqual(
            '<input tuiSlider type="range" [formControl]="control" [style.--tui-thumb-size.rem]="0.5"/>',
        );
    });

    it('change [size]="s" attribute for tuiSlider', async () => {
        expect(
            await migrate(
                '<input tuiSlider type="range" [formControl]="control" [size]="\'s\'"/>',
            ),
        ).toEqual(
            '<input tuiSlider type="range" [formControl]="control" [style.--tui-thumb-size.rem]="0.5"/>',
        );
    });

    it('change size="m" attribute for tuiSlider', async () => {
        expect(
            await migrate(
                '<input tuiSlider type="range" [formControl]="control" size="m"/>',
            ),
        ).toEqual(
            '<input tuiSlider type="range" [formControl]="control" [style.--tui-thumb-size.rem]="0.75"/>',
        );
    });

    it('change [size]="m" attribute for tuiSlider', async () => {
        expect(
            await migrate(
                '<input tuiSlider type="range" [formControl]="control" [size]="\'m\'"/>',
            ),
        ).toEqual(
            '<input tuiSlider type="range" [formControl]="control" [style.--tui-thumb-size.rem]="0.75"/>',
        );
    });

    afterEach(() => resetActiveProject());
});
