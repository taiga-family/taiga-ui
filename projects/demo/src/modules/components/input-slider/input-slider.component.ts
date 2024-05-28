import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import {tuiDocExcludeProperties} from '@taiga-ui/addon-doc';
import type {TuiContext} from '@taiga-ui/cdk';
import {tuiProvide} from '@taiga-ui/cdk';
import type {TuiSizeL} from '@taiga-ui/core';
import type {TuiKeySteps} from '@taiga-ui/kit';

import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/abstract-props-accessor';
import {AbstractExampleTuiNumberFormat} from '../abstract/number-format';

@Component({
    selector: 'example-tui-input-slider',
    templateUrl: './input-slider.template.html',
    changeDetection,
    providers: [
        tuiProvide(ABSTRACT_PROPS_ACCESSOR, ExampleTuiInputSliderComponent),
        tuiDocExcludeProperties(['precision']),
    ],
})
export class ExampleTuiInputSliderComponent extends AbstractExampleTuiNumberFormat {
    public override readonly sizeVariants: readonly TuiSizeL[] = ['m', 'l'];
    public override size = this.sizeVariants[1];
    public readonly control = new FormControl(0);

    public override readonly customContentVariants: string[] = [
        '',
        'tuiIconVisaMono',
        'tuiIconMastercardMono',
    ];

    public override customContentSelected = this.customContentVariants[0];

    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
    };

    protected readonly example2: TuiDocExample = {
        HTML: import('./examples/2/index.html?raw'),
        LESS: import('./examples/2/index.less?raw'),
        TypeScript: import('./examples/2/index.ts?raw'),
    };

    protected readonly example3: TuiDocExample = {
        HTML: import('./examples/3/index.html?raw'),
        TypeScript: import('./examples/3/index.ts?raw'),
        LESS: import('./examples/3/index.less?raw'),
    };

    protected readonly example4: TuiDocExample = {
        HTML: import('./examples/4/index.html?raw'),
        TypeScript: import('./examples/4/index.ts?raw'),
        LESS: import('./examples/4/index.less?raw'),
    };

    protected readonly example5: TuiDocExample = {
        HTML: import('./examples/5/index.html?raw'),
        TypeScript: import('./examples/5/index.ts?raw'),
        LESS: import('./examples/5/index.less?raw'),
    };

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
}
