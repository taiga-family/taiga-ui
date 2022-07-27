import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiAutofillFieldName, TuiContextWithImplicit} from '@taiga-ui/cdk';
import {TuiSizeL} from '@taiga-ui/core';
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
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    readonly example2: TuiDocExample = {
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
        TypeScript: import('./examples/2/index.ts?raw'),
    };

    readonly example3: TuiDocExample = {
        HTML: import('./examples/3/index.html?raw'),
        TypeScript: import('./examples/3/index.ts?raw'),
        LESS: import('./examples/3/index.less?raw'),
    };

    readonly example4: TuiDocExample = {
        HTML: import('./examples/4/index.html?raw'),
        TypeScript: import('./examples/4/index.ts?raw'),
        LESS: import('./examples/4/index.less?raw'),
    };

    readonly example5: TuiDocExample = {
        HTML: import('./examples/5/index.html?raw'),
        TypeScript: import('./examples/5/index.ts?raw'),
        LESS: import('./examples/5/index.less?raw'),
    };

    readonly control = new FormControl(0);

    readonly minVariants: readonly number[] = [0, 1, 5, 7.77, -10];

    min = this.minVariants[0];

    readonly maxVariants: readonly number[] = [10, 100, 10000];

    max = this.maxVariants[0];

    segments = 1;

    steps = 0;

    readonly quantumVariants: readonly number[] = [1, 0.01, 0.001, 0.0001, 10, 20, 100];

    quantum = this.quantumVariants[0];

    readonly sizeVariants: readonly TuiSizeL[] = ['m', 'l'];

    size = this.sizeVariants[1];

    prefix = '';
    postfix = '';

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

    readonly keyStepsVariants: readonly TuiKeySteps[] = [[[50, 1000]]];

    keySteps: TuiKeySteps | null = null;

    readonly autocompleteVariants: TuiAutofillFieldName[] = ['off', 'transaction-amount'];
    autocomplete: TuiAutofillFieldName | '' = '';

    readonly customContentVariants: string[] = [
        'tuiIconVisaMono',
        'tuiIconMastercardMono',
    ];

    customContentSelected = null;
}
