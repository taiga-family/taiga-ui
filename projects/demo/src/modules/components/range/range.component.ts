import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiPluralize, TuiSizeS} from '@taiga-ui/core';
import {TuiKeySteps} from '@taiga-ui/kit';

@Component({
    selector: 'example-range',
    templateUrl: './range.template.html',
    changeDetection,
})
export class ExampleTuiRangeComponent {
    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');
    readonly exampleForm = import('!!raw-loader!./examples/import/declare-form.md');

    readonly example1: TuiDocExample = {
        HTML: import('!!raw-loader!./examples/1/index.html'),
        TypeScript: import('!!raw-loader!./examples/1/index'),
    };

    readonly example2: TuiDocExample = {
        HTML: import('!!raw-loader!./examples/2/index.html'),
        TypeScript: import('!!raw-loader!./examples/2/index'),
        LESS: import('!!raw-loader!./examples/2/index.less'),
    };

    readonly example3: TuiDocExample = {
        HTML: import('!!raw-loader!./examples/3/index.html'),
        LESS: import('!!raw-loader!./examples/3/index.less'),
        TypeScript: import('!!raw-loader!./examples/3/index'),
    };

    readonly example4: TuiDocExample = {
        HTML: import('!!raw-loader!./examples/4/index.html'),
        TypeScript: import('!!raw-loader!./examples/4/index'),
        LESS: import('!!raw-loader!./examples/4/index.less'),
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

    readonly sizeVariants: readonly TuiSizeS[] = ['s', 'm'];

    size: TuiSizeS = this.sizeVariants[1];

    min = 0;

    max = 100;

    segments = 0;

    readonly stepsVariants: readonly number[] = [0, 4, 10];

    steps = this.stepsVariants[0];

    readonly pluralizeVariants: ReadonlyArray<TuiPluralize | Record<string, string>> = [
        ['year', 'years', 'years'],
        {one: 'thing', few: 'things', many: 'things', other: 'things'},
        {
            one: 'year',
            other: 'years',
        },
    ];

    pluralize: Record<string, string> | TuiPluralize | null = null;

    readonly keyStepsVariants: readonly TuiKeySteps[] = [[[50, 1000]]];

    keySteps: TuiKeySteps | null = null;

    readonly quantumVariants: readonly number[] = [0.01, 0.1, 1, 10];

    quantum = this.quantumVariants[0];
}
