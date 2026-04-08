import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update comment for --tui-thickness', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'should add comment for --tui-thickness in styles',
        migrate({
            styles: `
                @import '@taiga-ui/core/styles/taiga-ui-local';

                :host {
                    --tui-thickness: 1.5rem;
                }
            `,
        }),
    );

    it(
        'should add comment for --tui-thickness in ts files',
        migrate({
            component: `
                import { Component } from "@angular/core";

                @Component({
                    standalone: true,
                    template: \`
                        <tui-range [formControl]="control" [style.--tui-thickness.rem]="0.5"/>
                        <input tuiSlider type="range" [formControl]="control" [style.--tui-thickness.rem]="0.5"/>
                        <tui-input-range [formControl]="control" [style.--tui-thickness.rem]="0.25"/>

                        <tui-range [formControl]="control" [style.--tui-thickness.px]="8"/>
                        <input tuiSlider type="range" [formControl]="control" [style.--tui-thickness.px]="10"/>
                        <tui-input-range [formControl]="control" [style.--tui-thickness.px]="12"/>

                        <tui-range [formControl]="control" [style.--tui-thickness]="'8px'"/>
                        <input tuiSlider type="range" [formControl]="control" [style.--tui-thickness]="'10px'"/>
                        <tui-input-range [formControl]="control" [style.--tui-thickness]="'12px'"/>
                    \`,
                    host: {
                      '[style.--tui-background-accent-2-pressed]': 'red',
                      '[style.--tui-thickness.rem]': '1.25',
                    }
                })
                export class Test {
                }
            `,
        }),
    );

    it(
        'should add comment for --tui-thickness in html files',
        migrate({
            component: `
                import {TuiInputRange} from '@taiga-ui/kit';
                import {TuiRange} from '@taiga-ui/kit/components/range';
                import {TuiSlider} from '@taiga-ui/kit/components/slider';

                @Component({
                    templateUrl: './test.html',
                    imports: [TuiRange, TuiSlider, TuiInputRange],
                })
                export class TestComponent {}
            `,
            template: /* HTML */ `
                <tui-range
                    [formControl]="control"
                    [style.--tui-thickness.rem]="0.5"
                />
                <input
                    tuiSlider
                    type="range"
                    [formControl]="control"
                    [style.--tui-thickness.rem]="0.5"
                />
                <tui-input-range
                    [formControl]="control"
                    [style.--tui-thickness.rem]="0.25"
                />

                <tui-range
                    [formControl]="control"
                    [style.--tui-thickness.px]="8"
                />
                <input
                    tuiSlider
                    type="range"
                    [formControl]="control"
                    [style.--tui-thickness.px]="10"
                />
                <tui-input-range
                    [formControl]="control"
                    [style.--tui-thickness.px]="12"
                />

                <tui-range
                    [formControl]="control"
                    [style.--tui-thickness]="'8px'"
                />
                <input
                    tuiSlider
                    type="range"
                    [formControl]="control"
                    [style.--tui-thickness]="'10px'"
                />
                <tui-input-range
                    [formControl]="control"
                    [style.--tui-thickness]="'12px'"
                />
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
