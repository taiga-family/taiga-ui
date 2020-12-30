import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Less} from '!!raw-loader!./examples/1/index.less';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';

import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Less} from '!!raw-loader!./examples/2/index.less';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';

import {default as example3Html} from '!!raw-loader!./examples/3/index.html';
import {default as example3Less} from '!!raw-loader!./examples/3/index.less';
import {default as example3Ts} from '!!raw-loader!./examples/3/index.ts';

import {default as example4Html} from '!!raw-loader!./examples/4/index.html';
import {default as example4Less} from '!!raw-loader!./examples/4/index.less';
import {default as example4Ts} from '!!raw-loader!./examples/4/index.ts';

import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component, forwardRef} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {
    ALWAYS_FALSE_HANDLER,
    ALWAYS_TRUE_HANDLER,
    TuiBooleanHandler,
} from '@taiga-ui/cdk';
import {TuiHorizontalDirection, TuiSizeL} from '@taiga-ui/core';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';
import {AbstractExampleTuiReactiveField} from '../abstract/reactive-field';

@Component({
    selector: 'example-input-tag',
    templateUrl: './input-tag.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputTagComponent),
        },
    ],
})
export class ExampleTuiInputTagComponent extends AbstractExampleTuiReactiveField {
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

    readonly example3: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
        LESS: example3Less,
    };

    readonly example4: FrontEndExample = {
        TypeScript: example4Ts,
        HTML: example4Html,
        LESS: example4Less,
    };

    readonly control = new FormControl(
        ['John Cleese', 'Eric Idle', 'Michael Palin'],
        Validators.required,
    );

    editable = true;

    expandable = true;

    allowSpaces = true;

    readonly iconVariants = ['tuiIconSearchLarge'];

    icon: 'tuiIconSearchLarge' | null = null;

    readonly iconAlignVariants: ReadonlyArray<TuiHorizontalDirection> = ['left', 'right'];

    iconAlign: TuiHorizontalDirection = this.iconAlignVariants[1];

    maxLengthVariants: number[] = [10, 20];

    maxLength: number | null = null;

    search = '';

    readonly sizeVariants: ReadonlyArray<TuiSizeL> = ['m', 'l'];

    size: TuiSizeL = this.sizeVariants[1];

    tagValidatorVariants: ReadonlyArray<TuiBooleanHandler<string>> = [
        ALWAYS_TRUE_HANDLER,
        item => item === 'test',
        item => item !== 'mail',
    ];

    tagValidator = this.tagValidatorVariants[0];

    inputHidden = false;

    readonly disabledItemHandlerVariants: ReadonlyArray<TuiBooleanHandler<string>> = [
        ALWAYS_FALSE_HANDLER,
        item => item[0] === 'T',
    ];

    disabledItemHandler = this.disabledItemHandlerVariants[0];
}
