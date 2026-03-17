import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update chart hint', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
        component: `
            import {Component} from '@angular/core';
            import {TuiBarChart} from '@taiga-ui/addon-charts';

            @Component({
                standalone: true,
                templateUrl: './test.html',
                imports: [TuiBarChart],
            })
            export class Test {}
        `,
    });

    it(
        'does not add TuiChartHint import when tuiHintContent is absent',
        migrate({template: '<tui-pie-chart></tui-pie-chart>'}),
    );

    it(
        'adds TuiChartHint import when tuiHintContent is used on chart',
        migrate({template: '<tui-bar-chart tuiHintContent="Details"></tui-bar-chart>'}),
    );

    it(
        'adds TuiChartHint import for bound tuiHintContent',
        migrate({
            template: '<tui-line-chart [tuiHintContent]="content"></tui-line-chart>',
        }),
    );

    afterEach(() => resetActiveProject());
});
