import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiPluralize, TuiSizeS} from '@taiga-ui/core';
import {TuiKeySteps} from '@taiga-ui/kit';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as exampleForm} from '!!raw-loader!./examples/import/declare-form.txt';
import {default as exampleModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleHtml} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-range',
    templateUrl: './range.template.html',
    changeDetection,
})
export class ExampleTuiRangeComponent {
    readonly exampleModule = exampleModule;
    readonly exampleHtml = exampleHtml;
    readonly exampleForm = exampleForm;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
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

    readonly minVariants: readonly number[] = [0, 1, 5, 7.77];

    min = this.minVariants[0];

    readonly maxVariants: readonly number[] = [10, 100, 10000];

    max = this.maxVariants[0];

    readonly segmentsVariants: readonly number[] = [0, 1, 5, 13];

    segments = this.segmentsVariants[0];

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

    pluralize = null;

    readonly keyStepsVariants: readonly TuiKeySteps[] = [[[50, 1000]]];

    keySteps = null;

    readonly quantumVariants: readonly number[] = [0.01, 0.1, 1, 10];

    quantum = this.quantumVariants[0];
}
