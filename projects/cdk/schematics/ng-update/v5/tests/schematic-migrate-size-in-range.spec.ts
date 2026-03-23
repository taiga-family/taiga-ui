import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update size attribute for sliders', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'change size="s" attribute for tui-range',
        migrate({template: '<tui-range [formControl]="control" size="s"/>'}),
    );

    it(
        'change [size]="\'s\'" attribute for tui-range',
        migrate({template: '<tui-range [formControl]="control" [size]="\'s\'"/>'}),
    );

    it(
        'change size="m" attribute for tui-range',
        migrate({template: '<tui-range [formControl]="control" size="m"/>'}),
    );

    it(
        'change [size]="\'m\'" attribute for tui-range',
        migrate({template: '<tui-range [formControl]="control" [size]="\'m\'"/>'}),
    );

    it(
        'change size="s" attribute for tuiSlider',
        migrate({
            template: '<input tuiSlider type="range" [formControl]="control" size="s"/>',
        }),
    );

    it(
        'change [size]="s" attribute for tuiSlider',
        migrate({
            template:
                '<input tuiSlider type="range" [formControl]="control" [size]="\'s\'"/>',
        }),
    );

    it(
        'change size="m" attribute for tuiSlider',
        migrate({
            template: '<input tuiSlider type="range" [formControl]="control" size="m"/>',
        }),
    );

    it(
        'change [size]="m" attribute for tuiSlider',
        migrate({
            template:
                '<input tuiSlider type="range" [formControl]="control" [size]="\'m\'"/>',
        }),
    );

    afterEach(() => resetActiveProject());
});
