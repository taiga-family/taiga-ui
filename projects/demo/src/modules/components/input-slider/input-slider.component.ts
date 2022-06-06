import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiAutofillFieldName, TuiContextWithImplicit} from '@taiga-ui/cdk';
import {TuiPluralize, TuiSizeL} from '@taiga-ui/core';
import {TuiKeySteps} from '@taiga-ui/kit';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-tui-input-slider',
    templateUrl: './input-slider.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputSliderComponent),
        },
    ],
})
export class ExampleTuiInputSliderComponent extends AbstractExampleTuiControl {
    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');

    readonly example1: TuiDocExample = {
        HTML: import('!!raw-loader!./examples/1/index.html'),
        TypeScript: import('!!raw-loader!./examples/1/index'),
        LESS: import('!!raw-loader!./examples/1/index.less'),
    };

    readonly example2: TuiDocExample = {
        HTML: import('!!raw-loader!./examples/2/index.html'),
        LESS: import('!!raw-loader!./examples/2/index.less'),
        TypeScript: import('!!raw-loader!./examples/2/index'),
    };

    readonly example3: TuiDocExample = {
        HTML: import('!!raw-loader!./examples/3/index.html'),
        TypeScript: import('!!raw-loader!./examples/3/index'),
        LESS: import('!!raw-loader!./examples/3/index.less'),
    };

    readonly example4: TuiDocExample = {
        HTML: import('!!raw-loader!./examples/4/index.html'),
        TypeScript: import('!!raw-loader!./examples/4/index'),
        LESS: import('!!raw-loader!./examples/4/index.less'),
    };

    readonly example5: TuiDocExample = {
        HTML: import('!!raw-loader!./examples/5/index.html'),
        TypeScript: import('!!raw-loader!./examples/5/index'),
        LESS: import('!!raw-loader!./examples/5/index.less'),
    };

    readonly control = new FormControl(0);

    readonly minVariants: readonly number[] = [0, 1, 5, 7.77, -10];

    min = this.minVariants[0];

    readonly maxVariants: readonly number[] = [10, 100, 10000];

    max = this.maxVariants[0];

    readonly segmentsVariants: readonly number[] = [0, 1, 5, 13];

    segments = 1;

    steps = 0;

    readonly quantumVariants: readonly number[] = [1, 0.01, 0.001, 0.0001, 10, 20, 100];

    quantum = this.quantumVariants[0];

    readonly sizeVariants: readonly TuiSizeL[] = ['m', 'l'];

    size = this.sizeVariants[1];

    prefix = '';
    postfix = '';

    readonly pluralizeVariants: ReadonlyArray<TuiPluralize | Record<string, string>> = [
        ['year', 'years', 'years'],
        {one: 'thing', few: 'things', many: 'things', other: 'things'},
        {
            one: 'year',
            other: 'years',
        },
    ];

    pluralize: Record<string, string> | TuiPluralize | null = null;

    segmentsPluralize: Record<string, string> | TuiPluralize | null = null;

    readonly secondaryVariants: readonly string[] = ['getter of percent', 'Something'];

    secondarySelected: string | null = null;

    readonly valueContentVariants = [
        '',
        'TOP SECRET',
        ({$implicit: val}: TuiContextWithImplicit<number>) =>
            val === this.max ? 'MAX' : val,
        ({$implicit: val}: TuiContextWithImplicit<number>) =>
            val === this.min ? 'MIN' : val,
        ({$implicit: val}: TuiContextWithImplicit<number>) => (val === 5 ? 'FIVE' : val),
    ];

    valueContent = this.valueContentVariants[0];

    readonly minLabelVariants: readonly string[] = ['', 'Nothing'];

    minLabel = this.minLabelVariants[0];

    readonly maxLabelVariants: readonly string[] = ['', 'Everything'];

    maxLabel = this.maxLabelVariants[0];

    readonly keyStepsVariants: readonly TuiKeySteps[] = [[[50, 1000]]];

    keySteps: TuiKeySteps | null = null;

    readonly autocompleteVariants: TuiAutofillFieldName[] = ['off', 'transaction-amount'];
    autocomplete: TuiAutofillFieldName | '' = '';

    readonly customContentVariants: string[] = [
        'tuiIconVisaMono',
        'tuiIconMastercardMono',
    ];

    customContentSelected = null;

    get secondary(): string {
        return this.secondarySelected === this.secondaryVariants[0]
            ? `${Math.round((this.control.value / this.max) * 100)}%`
            : this.secondarySelected || '';
    }
}
