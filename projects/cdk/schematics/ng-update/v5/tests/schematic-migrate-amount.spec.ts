import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update amount', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
        component: `
            import {Component} from '@angular/core';
            import {TuiLoader} from '@taiga-ui/core';
            import {TuiRingChart} from '@taiga-ui/addon-charts';

            @Component({
                templateUrl: './test.html',
                imports: [TuiLoader, TuiRingChart],
            })
            export class TestComponent {}
        `,
    });

    it(
        'migrates amount direction',
        migrate({
            template: /* HTML */ `
                <tui-loader
                    [overlay]="true"
                    [showLoader]="loading"
                >
                    <div class="wrapper">
                        <tui-ring-chart
                            [value]="value"
                            [(activeItemIndex)]="activeItemIndex"
                        >
                            <span>{{ sum | tuiAmount : "RUB": 'right' }}</span>
                            <div>{{ label }}</div>
                        </tui-ring-chart>

                        <div class="legend">
                            <tui-legend-item
                                *ngFor="let label of labelsExpenses; let index = index"
                                size="s"
                                class="item"
                                [active]="isItemActive(index)"
                                [color]="getColor(index)"
                                [text]="label"
                                (tuiHoveredChange)="onHover(index, $event)"
                            >
                                <span>
                                    {{ value[index] | tuiAmount : "RUB" : 'right' }}
                                </span>
                            </tui-legend-item>
                        </div>
                    </div>
                </tui-loader>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
