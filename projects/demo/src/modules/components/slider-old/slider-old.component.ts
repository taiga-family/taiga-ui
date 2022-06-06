import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {TuiPluralize, TuiSizeS} from '@taiga-ui/core';
import {TuiKeySteps} from '@taiga-ui/kit';

@Component({
    selector: 'example-slider',
    templateUrl: './slider-old.template.html',
    changeDetection,
})
export class ExampleTuiSliderComponent {
    readonly exampleModule = import('!!raw-loader!./examples/import/import-module.md');
    readonly exampleHtml = import('!!raw-loader!./examples/import/insert-template.md');
    readonly exampleForm = import('!!raw-loader!./examples/import/declare-form.md');

    readonly example1: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/1/index.ts'),
        HTML: import('!!raw-loader!./examples/1/index.html'),
    };

    readonly example2: TuiDocExample = {
        TypeScript: import('!!raw-loader!./examples/2/index.ts'),
        HTML: import('!!raw-loader!./examples/2/index.html'),
    };

    readonly control = new FormControl(8);

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

    readonly minVariants: readonly number[] = [0, 1, 5, 7.77, 5000];

    min = this.minVariants[0];

    readonly maxVariants: readonly number[] = [10, 100, 10000, 1000000];

    max = this.maxVariants[0];

    readonly segmentsVariants: readonly number[] = [0, 1, 3, 5, 13];

    segments = this.segmentsVariants[0];

    readonly stepsVariants: readonly number[] = [0, 3, 4, 10];

    steps = this.stepsVariants[0];

    readonly pluralizeVariants: ReadonlyArray<TuiPluralize | Record<string, string>> = [
        ['year', 'years', 'years'],
        ['₽', '₽', '₽'],
        {one: 'thing', few: 'things', many: 'things', other: 'things'},
        {
            one: 'year',
            other: 'years',
        },
    ];

    pluralize: TuiPluralize | Record<string, string> | null = null;

    readonly keyStepsVariants: readonly TuiKeySteps[] = [
        [[50, 1000]],
        [
            [100 / 3, 100000],
            [(100 / 3) * 2, 300000],
        ],
    ];

    keySteps: TuiKeySteps | null = null;

    readonly quantumVariants: readonly number[] = [0.01, 0.001, 0.1, 1, 10];

    quantum = this.quantumVariants[0];
}
