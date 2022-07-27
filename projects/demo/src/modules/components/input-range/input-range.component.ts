import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {TuiPluralize, TuiSizeL} from '@taiga-ui/core';
import {TuiKeySteps} from '@taiga-ui/kit';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: `example-tui-input-range`,
    templateUrl: `./input-range.template.html`,
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputRangeComponent),
        },
    ],
})
export class ExampleTuiInputRangeComponent extends AbstractExampleTuiControl {
    readonly exampleModule = import(`!!raw-loader!./examples/import/import-module.md`);
    readonly exampleHtml = import(`!!raw-loader!./examples/import/insert-template.md`);

    readonly example1: TuiDocExample = {
        HTML: import(`!!raw-loader!./examples/1/index.html`),
        TypeScript: import(`!!raw-loader!./examples/1/index.ts`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/2/index.ts`),
        HTML: import(`!!raw-loader!./examples/2/index.html`),
    };

    readonly example3: TuiDocExample = {
        HTML: import(`!!raw-loader!./examples/3/index.html`),
        TypeScript: import(`!!raw-loader!./examples/3/index.ts`),
    };

    readonly example4: TuiDocExample = {
        HTML: import(`!!raw-loader!./examples/4/index.html`),
        LESS: import(`!!raw-loader!./examples/4/index.less`),
        TypeScript: import(`!!raw-loader!./examples/4/index.ts`),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import(`!!raw-loader!./examples/5/index.ts`),
        HTML: import(`!!raw-loader!./examples/5/index.html`),
        LESS: import(`!!raw-loader!./examples/5/index.less`),
    };

    control = new FormControl([0, 10]);

    minVariants: readonly number[] = [0, 5, 7.77, -10];

    min = this.minVariants[0];

    maxVariants: readonly number[] = [10, 100, 10000];

    max = this.maxVariants[0];

    segments = 0;

    steps = 0;

    quantumVariants: readonly number[] = [1, 0.001, 10, 100];

    quantum = this.quantumVariants[0];

    sizeVariants: readonly TuiSizeL[] = [`m`, `l`];

    size = this.sizeVariants[1];

    readonly pluralizeVariants: ReadonlyArray<TuiPluralize | Record<string, string>> = [
        [`year`, `years`, `years`],
        {one: `thing`, few: `things`, many: `things`, other: `things`},
        {
            one: `year`,
            other: `years`,
        },
    ];

    pluralize: TuiPluralize | Record<string, string> | null = null;

    segmentsPluralize: Record<string, string> | TuiPluralize | null = null;

    minLabelVariants: readonly string[] = [``, `Nothing`];

    minLabel = this.minLabelVariants[0];

    maxLabelVariants: readonly string[] = [``, `Everything`];

    maxLabel = this.maxLabelVariants[0];

    keyStepsVariants: readonly TuiKeySteps[] = [[[50, 1000]]];

    keySteps: TuiKeySteps | null = null;

    readonly valueContentVariants = [
        ``,
        `TOP SECRET`,
        ({$implicit: val}: TuiContextWithImplicit<number>) =>
            val === this.max ? `MAX` : `${val}`,
        ({$implicit: val}: TuiContextWithImplicit<number>) =>
            val === this.min ? `MIN` : `${val}`,
        ({$implicit: val}: TuiContextWithImplicit<number>) =>
            val === 5 ? `FIVE` : `${val}`,
    ];

    leftValueContent = this.valueContentVariants[0];
    rightValueContent = this.valueContentVariants[0];
}
