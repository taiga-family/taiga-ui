import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {TuiSizeL} from '@taiga-ui/core';
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
    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);

    readonly example1: TuiDocExample = {
        HTML: import(`./examples/1/index.html?raw`),
        TypeScript: import(`./examples/1/index.ts?raw`),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import(`./examples/2/index.ts?raw`),
        HTML: import(`./examples/2/index.html?raw`),
    };

    readonly example3: TuiDocExample = {
        HTML: import(`./examples/3/index.html?raw`),
        TypeScript: import(`./examples/3/index.ts?raw`),
    };

    readonly example4: TuiDocExample = {
        HTML: import(`./examples/4/index.html?raw`),
        LESS: import(`./examples/4/index.less?raw`),
        TypeScript: import(`./examples/4/index.ts?raw`),
    };

    readonly example5: TuiDocExample = {
        TypeScript: import(`./examples/5/index.ts?raw`),
        HTML: import(`./examples/5/index.html?raw`),
        LESS: import(`./examples/5/index.less?raw`),
    };

    control = new FormControl([0, 10]);

    minVariants: readonly number[] = [0, 5, 7.77, -10];

    min = this.minVariants[0];

    maxVariants: readonly number[] = [10, 100, 10000];

    max = this.maxVariants[0];

    segments = 1;

    steps = 0;

    quantumVariants: readonly number[] = [1, 0.001, 10, 100];

    quantum = this.quantumVariants[0];

    sizeVariants: readonly TuiSizeL[] = [`m`, `l`];

    size = this.sizeVariants[1];

    readonly pluralizeVariants: ReadonlyArray<Record<string, string>> = [
        {one: `thing`, few: `things`, many: `things`, other: `things`},
        {
            one: `year`,
            other: `years`,
        },
    ];

    pluralize: Record<string, string> | null = null;

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
