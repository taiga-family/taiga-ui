import {Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {tuiDocExcludeProperties} from '@taiga-ui/addon-doc';
import type {TuiContext} from '@taiga-ui/cdk';
import {tuiProvide} from '@taiga-ui/cdk';
import type {TuiSizeL} from '@taiga-ui/core';
import {
    TuiHintOptionsDirective,
    TuiLinkDirective,
    TuiNotificationComponent,
    TuiNumberFormatDirective,
} from '@taiga-ui/core';
import type {TuiKeySteps} from '@taiga-ui/kit';
import {TuiInputSliderModule, TuiTextfieldControllerModule} from '@taiga-ui/legacy';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {InheritedDocumentationComponent} from '../abstract/inherited-documentation';
import {AbstractExampleTuiNumberFormat} from '../abstract/number-format';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiLinkDirective,
        RouterLink,
        TuiNotificationComponent,
        TuiInputSliderModule,
        ReactiveFormsModule,
        TuiHintOptionsDirective,
        TuiNumberFormatDirective,
        TuiTextfieldControllerModule,
        InheritedDocumentationComponent,
    ],
    templateUrl: './index.html',
    changeDetection,
    providers: [
        tuiProvide(ABSTRACT_PROPS_ACCESSOR, PageComponent),
        tuiDocExcludeProperties(['precision']),
    ],
})
export default class PageComponent extends AbstractExampleTuiNumberFormat {
    protected readonly minVariants: readonly number[] = [0, 1, 5, 7.77, -10];

    protected min = this.minVariants[0];

    protected readonly maxVariants: readonly number[] = [10, 100, 10000];

    protected max = this.maxVariants[0];

    protected segments = 1;

    protected steps = 0;

    protected readonly quantumVariants: readonly number[] = [
        1, 0.01, 0.001, 0.0001, 10, 20, 100,
    ];

    protected quantum = this.quantumVariants[0];

    protected readonly valueContentVariants = [
        '',
        'TOP SECRET',
        ({$implicit: val}: TuiContext<number>) => (val === this.max ? 'MAX' : val),
        ({$implicit: val}: TuiContext<number>) => (val === this.min ? 'MIN' : val),
        ({$implicit: val}: TuiContext<number>) => (val === 5 ? 'FIVE' : val),
    ];

    protected valueContent = this.valueContentVariants[0];

    protected readonly keyStepsVariants: readonly TuiKeySteps[] = [
        [
            [0, 0],
            [50, 1_000],
            [100, 10_000],
        ],
    ];

    protected keySteps: TuiKeySteps | null = null;

    public override readonly sizeVariants: readonly TuiSizeL[] = ['m', 'l'];
    public override size = this.sizeVariants[1];
    public readonly control = new FormControl(0);

    public override readonly customContentVariants: string[] = [
        '',
        'tuiIconVisaMono',
        'tuiIconMastercardMono',
    ];

    public override customContentSelected = this.customContentVariants[0];
}
