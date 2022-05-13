import {Component, forwardRef} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiSizeL} from '@taiga-ui/core';

import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';
import {default as exampleForm} from '!!raw-loader!./examples/import/declare-form.txt';
import {default as exampleOptions} from '!!raw-loader!./examples/import/define-options.txt';
import {default as exampleModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleHtml} from '!!raw-loader!./examples/import/insert-template.txt';

import {FrontEndExample} from '../../interfaces/front-end-example';
import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

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
export class ExampleTuiCheckboxComponent extends AbstractExampleTuiControl {
    readonly exampleForm = exampleForm;
    readonly exampleOptions = exampleOptions;
    readonly exampleModule = exampleModule;
    readonly exampleHtml = exampleHtml;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
    };

    readonly sizeVariants: readonly TuiSizeL[] = ['m', 'l'];

    size: TuiSizeL = this.sizeVariants[0];

    readonly control = new FormGroup({
        testValue1: new FormControl(false),
        testValue2: new FormControl(),
        testValue3: new FormControl(true),
    });
}
