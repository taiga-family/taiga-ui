import example1Html from '!!raw-loader!./examples/1/index.html';
import example1Ts from '!!raw-loader!./examples/1/index.ts';
import example2Html from '!!raw-loader!./examples/2/index.html';
import example2Scss from '!!raw-loader!./examples/2/index.scss';
import example2Ts from '!!raw-loader!./examples/2/index.ts';
import example3Html from '!!raw-loader!./examples/3/index.html';
import example3Ts from '!!raw-loader!./examples/3/index.ts';
import exampleDeclareForm from '!!raw-loader!./examples/import/declare-form.txt';
import exampleImportModule from '!!raw-loader!./examples/import/import-module.txt';
import exampleInsertTemplate from '!!raw-loader!./examples/import/insert-template.txt';
import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TuiSizeL} from '@taiga-ui/core';

import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';
import {AbstractExampleTuiReactiveField} from '../abstract/reactive-field';

@Component({
    selector: 'example-tui-radio-labeled',
    templateUrl: './radio-labeled.template.html',
    styleUrls: ['./radio-labeled.style.scss'],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiRadioLabeledComponent),
        },
    ],
})
export class ExampleTuiRadioLabeledComponent extends AbstractExampleTuiReactiveField {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;
    readonly exampleDeclareForm = exampleDeclareForm;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
        SCSS: example2Scss,
    };

    readonly example3: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
    };

    readonly items = [{name: 'tariff1'}, {name: 'tariff2'}, {name: 'tariff3'}];

    readonly sizeVariants: ReadonlyArray<TuiSizeL> = ['m', 'l'];

    size: TuiSizeL = this.sizeVariants[0];

    pseudoDisabled = false;

    readonly control = new FormControl(this.items[0]);
}
