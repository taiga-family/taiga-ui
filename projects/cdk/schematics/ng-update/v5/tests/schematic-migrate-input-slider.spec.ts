import {join} from 'node:path';

import {resetActiveProject} from 'ng-morph';

import {createMigration} from '../../../utils/run-migration';

describe('ng-update TuiInputSliderModule to TuiInputSlider', () => {
    const migrate = createMigration({
        collection: join(__dirname, '../../../migration.json'),
    });

    it(
        'migrates import and basic template with label and explicit input',
        migrate({
            component: /* TypeScript */ `
                import {Component} from '@angular/core';
                import {TuiInputSliderModule} from '@taiga-ui/legacy';

                @Component({
                    imports: [TuiInputSliderModule],
                    template: \`
                        <tui-input-slider [formControl]="ctrl" [min]="0" [max]="100">
                            Volume
                            <input tuiTextfieldLegacy />
                        </tui-input-slider>
                    \`,
                })
                export class TestComponent {}
            `,
        }),
    );

    it(
        'moves [min]/[max]/[quantum] to input and [segments]/[keySteps] to slider',
        migrate({
            template: /* HTML */ `
                <tui-input-slider
                    [(ngModel)]="value"
                    [min]="0"
                    [max]="100"
                    [quantum]="0.1"
                    [segments]="5"
                    [keySteps]="keySteps"
                >
                    Volume
                    <input tuiTextfieldLegacy />
                </tui-input-slider>
            `,
        }),
    );

    it(
        'adds TODO comment for [steps] (cannot compute step value statically)',
        migrate({
            template: /* HTML */ `
                <tui-input-slider
                    [(ngModel)]="value"
                    [min]="0"
                    [max]="100"
                    [steps]="5"
                >
                    Volume
                    <input tuiTextfieldLegacy />
                </tui-input-slider>
            `,
        }),
    );

    it(
        'adds TODO comment for [valueContent]',
        migrate({
            template: /* HTML */ `
                <tui-input-slider
                    [(ngModel)]="value"
                    [min]="0"
                    [max]="100"
                    [valueContent]="content"
                >
                    Volume
                    <input tuiTextfieldLegacy />
                </tui-input-slider>
            `,
        }),
    );

    it(
        'migrates when there is no explicit <input> child',
        migrate({
            template: /* HTML */ `
                <tui-input-slider
                    formControlName="volume"
                    [min]="0"
                    [max]="10"
                >
                    Volume
                </tui-input-slider>
            `,
        }),
    );

    it(
        'preserves camelCase for (ngModelChange) and [formControlName] bindings',
        migrate({
            template: /* HTML */ `
                <tui-input-slider
                    [formControlName]="control"
                    (ngModelChange)="onChange($event)"
                >
                    Volume
                </tui-input-slider>
            `,
        }),
    );

    it(
        'adds TODO comment for dynamic [tuiTextfieldLabelOutside]',
        migrate({
            template: /* HTML */ `
                <tui-input-slider
                    [(ngModel)]="value"
                    [tuiTextfieldLabelOutside]="isLabelOutside"
                >
                    Volume
                </tui-input-slider>
            `,
        }),
    );

    afterEach(() => resetActiveProject());
});
