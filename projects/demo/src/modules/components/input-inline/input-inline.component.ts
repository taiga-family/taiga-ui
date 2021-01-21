import {default as example1Ts} from '!!raw-loader!./examples/1/component.ts';
import {default as example1Less} from '!!raw-loader!./examples/1/style.less';
import {default as example1Html} from '!!raw-loader!./examples/1/template.html';

import {default as example2Ts} from '!!raw-loader!./examples/2/component.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/template.html';

import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {FrontEndExample} from '../../interfaces/front-end-example';
import {AbstractExampleTuiReactiveField} from '../abstract/reactive-field';

@Component({
    selector: 'example-tui-input-inline',
    templateUrl: './input-inline.template.html',
    styleUrls: ['./input-inline.style.less'],
})
export class ExampleTuiInputInlineComponent extends AbstractExampleTuiReactiveField {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        LESS: example1Less,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
    };

    control = new FormControl('111', Validators.required);

    readonly maxLengthVariants: readonly number[] = [10];
    maxLength = null;
}
