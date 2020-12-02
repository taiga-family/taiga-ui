import * as example1Html from '!!raw-loader!./examples/1/index.html';
import * as example1Less from '!!raw-loader!./examples/1/index.less';
import * as example1Ts from '!!raw-loader!./examples/1/index.ts';

import * as example2Html from '!!raw-loader!./examples/2/index.html';
import * as example2Less from '!!raw-loader!./examples/2/index.less';
import * as example2Ts from '!!raw-loader!./examples/2/index.ts';

import * as example3Html from '!!raw-loader!./examples/3/index.html';
import * as example3Less from '!!raw-loader!./examples/3/index.less';
import * as example3Ts from '!!raw-loader!./examples/3/index.ts';

import * as exampleDeclareForm from '!!raw-loader!./examples/import/declare-form.txt';
import * as exampleImportModule from '!!raw-loader!./examples/import/import-module.txt';
import * as exampleInsertTemplate from '!!raw-loader!./examples/import/insert-template.txt';

import {Component, forwardRef} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {TuiSizeL, TuiSizeM} from '@taiga-ui/core';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';
import {AbstractExampleTuiReactiveField} from '../abstract/reactive-field';

@Component({
    selector: 'example-tui-text-area',
    templateUrl: './text-area.template.html',
    styleUrls: ['./text-area.style.less'],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiTextAreaComponent),
        },
    ],
})
export class ExampleTuiTextAreaComponent extends AbstractExampleTuiReactiveField {
    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        LESS: example1Less,
    };

    readonly example2: FrontEndExample = {
        TypeScript: example2Ts,
        HTML: example2Html,
        LESS: example2Less,
    };

    readonly example3: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
        LESS: example3Less,
    };

    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;
    exampleDeclareForm = exampleDeclareForm;

    readonly maxLengthVariants: ReadonlyArray<number> = [50, 100, 500];

    maxLength = null;

    readonly rowsVariants: ReadonlyArray<number> = [8, 15, 30];

    rows: number = this.rowsVariants[0];

    expandable = false;

    control = new FormControl('aaa', Validators.maxLength(10));

    readonly sizeVariants: ReadonlyArray<TuiSizeM | TuiSizeL> = ['m', 'l'];

    size: TuiSizeM | TuiSizeL = this.sizeVariants[1];
}
