import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import type {TuiContext} from '@taiga-ui/cdk';
import type {TuiSizeL} from '@taiga-ui/core';
import type {TuiKeySteps} from '@taiga-ui/kit';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-tui-input-range',
    templateUrl: './input-range.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputRangeComponent),
        },
    ],
})
export class ExampleTuiInputRangeComponent extends AbstractExampleTuiControl {
    public control = new FormControl([0, 10]);

    public override sizeVariants: readonly TuiSizeL[] = ['m', 'l'];

    public override size = this.sizeVariants[1];

    protected readonly exampleModule = import('./examples/import/import-module.md?raw');
    protected readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    protected readonly example1: TuiDocExample = {
        HTML: import('./examples/1/index.html?raw'),
        TypeScript: import('./examples/1/index.ts?raw'),
    };

    protected readonly example2: TuiDocExample = {
        TypeScript: import('./examples/2/index.ts?raw'),
        HTML: import('./examples/2/index.html?raw'),
    };

    protected readonly example3: TuiDocExample = {
        HTML: import('./examples/3/index.html?raw'),
        TypeScript: import('./examples/3/index.ts?raw'),
    };

    protected readonly example4: TuiDocExample = {
        HTML: import('./examples/4/index.html?raw'),
        LESS: import('./examples/4/index.less?raw'),
        TypeScript: import('./examples/4/index.ts?raw'),
    };

    protected readonly example5: TuiDocExample = {
        TypeScript: import('./examples/5/index.ts?raw'),
        HTML: import('./examples/5/index.html?raw'),
        LESS: import('./examples/5/index.less?raw'),
    };

    protected readonly example6: TuiDocExample = {
        TypeScript: import('./examples/6/index.ts?raw'),
        HTML: import('./examples/6/index.html?raw'),
        'transformer.ts': import('./examples/6/transformer.ts?raw'),
    };

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
}
