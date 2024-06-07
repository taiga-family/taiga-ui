import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {tuiDocExcludeProperties} from '@taiga-ui/addon-doc';
import type {TuiContext} from '@taiga-ui/cdk';
import {tuiProvide} from '@taiga-ui/cdk';
import type {TuiSizeL} from '@taiga-ui/core';
import {
    TuiLinkDirective,
    TuiNotificationComponent,
    TuiNumberFormatDirective,
} from '@taiga-ui/core';
import type {TuiKeySteps} from '@taiga-ui/kit';
import {TuiInputRangeModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {AbstractExampleTuiNumberFormat} from '../abstract/number-format';
import {NumberFormatDocumentationComponent} from '../abstract/number-format-documentation';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        RouterLink,
        TuiLinkDirective,
        TuiNotificationComponent,
        TuiInputRangeModule,
        ReactiveFormsModule,
        TuiNumberFormatDirective,
        TuiTextfieldControllerModule,
        NumberFormatDocumentationComponent,
    ],
    templateUrl: './index.html',
    changeDetection,
    providers: [
        tuiProvide(ABSTRACT_PROPS_ACCESSOR, PageComponent),
        tuiDocExcludeProperties(['precision']),
    ],
})
export default class PageComponent extends AbstractExampleTuiNumberFormat {
    protected readonly routes = DemoRoute;
    protected minVariants: readonly number[] = [0, 5, 7.77, -10];

    protected min = this.minVariants[0];

    protected maxVariants: readonly number[] = [10, 100, 10000];

    protected max = this.maxVariants[0];

    protected segments = 1;

    protected steps = 0;

    protected quantumVariants: readonly number[] = [1, 0.001, 10, 100];

    protected quantum = this.quantumVariants[0];

    protected readonly pluralizeVariants: ReadonlyArray<Record<string, string>> = [
        {one: 'thing', few: 'things', many: 'things', other: 'things'},
        {
            one: 'year',
            other: 'years',
        },
    ];

    protected pluralize: Record<string, string> | null = null;

    protected keyStepsVariants: readonly TuiKeySteps[] = [
        [
            [0, 0],
            [50, 1_000],
            [100, 10_000],
        ],
    ];

    protected keySteps: TuiKeySteps | null = null;

    protected readonly valueContentVariants = [
        '',
        'TOP SECRET',
        ({$implicit: val}: TuiContext<number>) => (val === this.max ? 'MAX' : `${val}`),
        ({$implicit: val}: TuiContext<number>) => (val === this.min ? 'MIN' : `${val}`),
        ({$implicit: val}: TuiContext<number>) => (val === 5 ? 'FIVE' : `${val}`),
    ];

    protected leftValueContent = this.valueContentVariants[0];
    protected rightValueContent = this.valueContentVariants[0];

    public control = new FormControl([0, 10]);

    public override sizeVariants: readonly TuiSizeL[] = ['m', 'l'];

    public override size = this.sizeVariants[1];
}
