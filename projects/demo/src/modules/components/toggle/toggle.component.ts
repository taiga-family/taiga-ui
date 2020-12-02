import * as example1Html from '!!raw-loader!./examples/1/index.html';
import * as example1Ts from '!!raw-loader!./examples/1/index.ts';

import * as exampleDeclareForm from '!!raw-loader!./examples/import/declare-form.txt';
import * as exampleImportModule from '!!raw-loader!./examples/import/import-module.txt';
import * as exampleInsertTemplate from '!!raw-loader!./examples/import/insert-template.txt';

import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {TuiSizeL} from '@taiga-ui/core';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';
import {AbstractExampleTuiField} from '../abstract/field';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-tui-toggle',
    templateUrl: './toggle.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiToggleComponent),
        },
    ],
})
export class ExampleTuiToggleComponent extends AbstractExampleTuiField {
    readonly exampleDeclareForm = exampleDeclareForm;
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    showIcons = false;

    showLoader = false;

    singleColor = false;

    readonly control = new FormControl(false);

    readonly sizeVariants: ReadonlyArray<TuiSizeL> = ['m', 'l'];

    size: TuiSizeL = this.sizeVariants[0];

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
}
