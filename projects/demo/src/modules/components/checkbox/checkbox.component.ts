import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';

import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';

import {default as exampleDeclareForm} from '!!raw-loader!./examples/import/declare-form.txt';
import {default as exampleDefineOptions} from '!!raw-loader!./examples/import/define-options.txt';
import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component, forwardRef, Inject} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TuiSizeL} from '@taiga-ui/core';
import {changeDetection} from '../../../change-detection-strategy';
import {HOW_TO_PATH_RESOLVER} from '../../../how-to-path-resolver';
import {FrontEndExample} from '../../interfaces/front-end-example';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';
import {AbstractExampleTuiReactiveField} from '../abstract/reactive-field';

@Component({
    selector: 'example-tui-checkbox',
    templateUrl: './checkbox.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiCheckboxComponent),
        },
    ],
})
export class ExampleTuiCheckboxComponent extends AbstractExampleTuiReactiveField {
    readonly exampleDeclareForm = exampleDeclareForm;
    readonly exampleDefineOptions = exampleDefineOptions;
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
    };

    readonly sizeVariants: ReadonlyArray<TuiSizeL> = ['m', 'l'];

    size: TuiSizeL = this.sizeVariants[0];

    readonly control = new FormGroup({
        testValue1: new FormControl(false),
        testValue2: new FormControl(),
        testValue3: new FormControl(true),
    });

    constructor(
        @Inject(HOW_TO_PATH_RESOLVER) readonly howToResolver: (path: string) => string,
    ) {
        super();
    }
}
