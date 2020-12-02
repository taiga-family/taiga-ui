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
import {FormControl} from '@angular/forms';
import {
    ALWAYS_FALSE_HANDLER,
    ALWAYS_TRUE_HANDLER,
    TuiBooleanHandler,
} from '@taiga-ui/cdk';
import {TuiOrientation, TuiSizeL} from '@taiga-ui/core';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';
import {AbstractExampleTuiReactiveField} from '../abstract/reactive-field';

@Component({
    selector: 'example-tui-radio-list',
    templateUrl: './radio-list.template.html',
    styleUrls: ['./radio-list.style.less'],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiRadioListComponent),
        },
    ],
})
export class ExampleTuiRadioListComponent extends AbstractExampleTuiReactiveField {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;
    readonly exampleDeclareForm = exampleDeclareForm;

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

    readonly orientationVariants: ReadonlyArray<TuiOrientation> = [
        TuiOrientation.Vertical,
        TuiOrientation.Horizontal,
    ];
    orientation: TuiOrientation = this.orientationVariants[0];

    readonly items = [
        {
            name: 'Простой',
            description: 'Это описание простого тарифа. Он совсем прост.',
        },
        {
            name: 'Продвинутый',
            description: 'Это описание продвинутого тарифа.',
        },
        {
            name: 'Профессиональный',
            description:
                'Это описание профессионального тарифа. Это наш самый крутой тариф.',
        },
    ];

    readonly sizeVariants: ReadonlyArray<TuiSizeL> = ['m', 'l'];

    size: TuiSizeL = this.sizeVariants[0];

    readonly disabledItemHandlerVariants: Array<TuiBooleanHandler<any>> = [
        ALWAYS_FALSE_HANDLER,
        ALWAYS_TRUE_HANDLER,
        item => item.name === 'Продвинутый',
    ];

    disabledItemHandler = this.disabledItemHandlerVariants[0];

    control = new FormControl(this.items[0]);
}
