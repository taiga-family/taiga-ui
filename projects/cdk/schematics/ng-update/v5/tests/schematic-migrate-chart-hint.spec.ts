import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {runMigration} from '../../../utils/run-migration';

const collection = join(__dirname, '../../../migration.json');

describe('ng-update chart hint', () => {
    async function migrate(template: string): Promise<ReturnType<typeof runMigration>> {
        return runMigration({
            template,
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
            collection,
        });
    }

    it('does not add TuiChartHint import when tuiHintContent is absent', async () => {
        const {component} = await migrate('<tui-pie-chart></tui-pie-chart>');

        expect(component).toContain(
            "import {TuiBarChart} from '@taiga-ui/addon-charts';",
        );
        expect(component).toContain('imports: [TuiBarChart]');
        expect(component).not.toContain('TuiChartHint');
    });

    it('adds TuiChartHint import when tuiHintContent is used on chart', async () => {
        const {component} = await migrate(
            '<tui-bar-chart tuiHintContent="Details"></tui-bar-chart>',
        );

        expect(component).toContain('import { TuiBarChart, TuiChartHint }');
        expect(component).toContain("from '@taiga-ui/addon-charts'");
        expect(component).toContain('imports: [TuiBarChart, TuiChartHint]');
    });

    it('adds TuiChartHint import for bound tuiHintContent', async () => {
        const {component} = await migrate(
            '<tui-line-chart [tuiHintContent]="content"></tui-line-chart>',
        );

        expect(component).toContain('import { TuiBarChart, TuiChartHint }');
        expect(component).toContain('imports: [TuiBarChart, TuiChartHint]');
    });

    afterEach(() => resetActiveProject());
});
