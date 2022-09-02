import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDocExample} from '@taiga-ui/addon-doc';
import type {TuiSizeS} from '@taiga-ui/core';
import type {TuiKeySteps} from '@taiga-ui/kit';

@Component({
    selector: `example-range`,
    templateUrl: `./range.template.html`,
    changeDetection,
})
export class ExampleTuiRangeComponent {
    readonly exampleModule = import(`./examples/import/import-module.md?raw`);
    readonly exampleHtml = import(`./examples/import/insert-template.md?raw`);
    readonly exampleForm = import(`./examples/import/declare-form.md?raw`);

    readonly example1: TuiDocExample = {
        HTML: import(`./examples/1/index.html?raw`),
        TypeScript: import(`./examples/1/index.ts?raw`),
    };

    readonly example2: TuiDocExample = {
        HTML: import(`./examples/2/index.html?raw`),
        TypeScript: import(`./examples/2/index.ts?raw`),
        LESS: import(`./examples/2/index.less?raw`),
    };

    readonly example3: TuiDocExample = {
        HTML: import(`./examples/3/index.html?raw`),
        LESS: import(`./examples/3/index.less?raw`),
        TypeScript: import(`./examples/3/index.ts?raw`),
    };

    readonly example4: TuiDocExample = {
        HTML: import(`./examples/4/index.html?raw`),
        TypeScript: import(`./examples/4/index.ts?raw`),
        LESS: import(`./examples/4/index.less?raw`),
    };

    readonly control = new FormControl([0, 0]);

    get disabled(): boolean {
        return this.control.disabled;
    }

    set disabled(value: boolean) {
        if (value) {
            this.control.disable();

            return;
        }

        this.control.enable();
    }

    readonly sizeVariants: readonly TuiSizeS[] = [`s`, `m`];

    size: TuiSizeS = this.sizeVariants[1];

    min = 0;

    max = 100;

    step = 1;

    segments = 1;

    readonly keyStepsVariants: readonly TuiKeySteps[] = [
        [
            [0, 0],
            [50, 1_000],
            [100, 10_000],
        ],
    ];

    keySteps: TuiKeySteps | null = null;
}
