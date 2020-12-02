import * as example1Html from '!!raw-loader!./examples/1/index.html';
import * as example1Ts from '!!raw-loader!./examples/1/index.ts';
import * as exampleDeclareForm from '!!raw-loader!./examples/import/declare-form.txt';
import * as exampleImportModule from '!!raw-loader!./examples/import/import-module.txt';
import * as exampleInsertTemplate from '!!raw-loader!./examples/import/insert-template.txt';

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

    sizeVariants: ReadonlyArray<TuiSizeS> = ['s', 'm'];

    size: TuiSizeS = this.sizeVariants[1];

    minVariants: ReadonlyArray<number> = [0, 1, 5, 7.77];

    min = this.minVariants[0];

    maxVariants: ReadonlyArray<number> = [10, 100, 10000];

    max = this.maxVariants[0];

    segmentsVariants: ReadonlyArray<number> = [0, 1, 5, 13];

    segments = this.segmentsVariants[0];

    stepsVariants: ReadonlyArray<number> = [0, 4, 10];

    steps = this.stepsVariants[0];

    pluralizeVariants: ReadonlyArray<TuiPluralize> = [
        ['год', 'года', 'лет'],
        ['шт', 'шт', 'шт'],
        ['года', 'лет', 'лет'],
    ];

    pluralize = null;

    keyStepsVariants: ReadonlyArray<TuiKeySteps> = [[[50, 1000]]];

    keySteps = null;
}
