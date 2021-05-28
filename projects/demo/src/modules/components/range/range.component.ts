import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as exampleDeclareForm} from '!!raw-loader!./examples/import/declare-form.txt';
import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TuiPluralize, TuiSizeS} from '@taiga-ui/core';
import {TuiKeySteps} from '@taiga-ui/kit';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';

@Component({
    selector: 'example-range',
    templateUrl: './range.template.html',
    changeDetection,
})
export class ExampleTuiRangeComponent {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;
    readonly exampleDeclareForm = exampleDeclareForm;

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

    readonly sizeVariants: ReadonlyArray<TuiSizeS> = ['s', 'm'];

    size: TuiSizeS = this.sizeVariants[1];

    readonly minVariants: readonly number[] = [0, 1, 5, 7.77];

    min = this.minVariants[0];

    readonly maxVariants: readonly number[] = [10, 100, 10000];

    max = this.maxVariants[0];

    readonly segmentsVariants: readonly number[] = [0, 1, 5, 13];

    segments = this.segmentsVariants[0];

    readonly stepsVariants: readonly number[] = [0, 4, 10];

    steps = this.stepsVariants[0];

    readonly pluralizeVariants: ReadonlyArray<TuiPluralize> = [
        ['year', 'years', 'years'],
        ['thing', 'things', 'things'],
        ['year', 'years', 'years'],
    ];

    pluralize = null;

    readonly keyStepsVariants: ReadonlyArray<TuiKeySteps> = [[[50, 1000]]];

    keySteps = null;

    readonly quantumVariants: ReadonlyArray<number> = [0.01, 0.1, 1, 10];

    quantum = this.quantumVariants[0];
}
