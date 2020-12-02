import * as example1Html from '!!raw-loader!./examples/1/index.html';
import * as example1Less from '!!raw-loader!./examples/1/index.less';
import * as example1Ts from '!!raw-loader!./examples/1/index.ts';

import * as example2Html from '!!raw-loader!./examples/2/index.html';
import * as example2Less from '!!raw-loader!./examples/2/index.less';
import * as example2Ts from '!!raw-loader!./examples/2/index.ts';

import * as exampleDeclareForm from '!!raw-loader!./examples/import/declare-form.txt';
import * as exampleImportModule from '!!raw-loader!./examples/import/import-module.txt';
import * as exampleInsertTemplate from '!!raw-loader!./examples/import/insert-template.txt';

import {Component, forwardRef} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {
    ALWAYS_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiBooleanHandler,
    TuiDateAutofillName,
    TuiDay,
    TuiTimeMode,
} from '@taiga-ui/cdk';
import {TuiNamedDay} from '@taiga-ui/kit';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';
import {AbstractExampleTuiReactiveField} from '../abstract/reactive-field';

@Component({
    selector: 'example-tui-input-date-time',
    templateUrl: './input-date-time.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputDateTimeComponent),
        },
    ],
})
export class ExampleTuiInputDateTimeComponent extends AbstractExampleTuiReactiveField {
    readonly exampleDeclareForm = exampleDeclareForm;
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
        LESS: example2Less,
    };

    readonly minVariants = [
        TUI_FIRST_DAY,
        new TuiDay(2017, 2, 5),
        new TuiDay(1900, 0, 1),
    ];

    min = this.minVariants[0];

    readonly maxVariants = [
        TUI_LAST_DAY,
        new TuiDay(2017, 11, 11),
        new TuiDay(2020, 2, 5),
        new TuiDay(2300, 0, 1),
    ];

    max = this.maxVariants[0];

    readonly disabledItemHandlerVariants: ReadonlyArray<TuiBooleanHandler<TuiDay>> = [
        ALWAYS_FALSE_HANDLER,
        ({day}) => day % 3 === 0,
    ];

    disabledItemHandler = this.disabledItemHandlerVariants[0];

    readonly itemsVariants = [
        [],
        [new TuiNamedDay(TUI_LAST_DAY.append({year: -1}), 'По настоящее время')],
    ];

    items = this.itemsVariants[0];

    readonly autocompleteVariants = ['off', 'bday'];

    autocomplete: TuiDateAutofillName | null = null;

    cleaner = false;

    readonly control = new FormControl(null, Validators.required);

    readonly modeVariants: ReadonlyArray<TuiTimeMode> = [
        'HH:MM',
        'HH:MM:SS',
        'HH:MM:SS.MS',
    ];

    mode = this.modeVariants[0];
}
