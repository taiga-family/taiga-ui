import {default as example1Html} from '!!raw-loader!./examples/1/index.html';
import {default as example1Ts} from '!!raw-loader!./examples/1/index.ts';

import {default as example2Html} from '!!raw-loader!./examples/2/index.html';
import {default as example2Ts} from '!!raw-loader!./examples/2/index.ts';

import {default as example3Html} from '!!raw-loader!./examples/3/index.html';
import {default as example3Less} from '!!raw-loader!./examples/3/index.less';
import {default as example3Ts} from '!!raw-loader!./examples/3/index.ts';

import {default as exampleDeclareForm} from '!!raw-loader!./examples/import/declare-form.txt';
import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component, forwardRef, Inject} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TuiHorizontalDirection, TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {changeDetection} from '../../../change-detection-strategy';
import {HOW_TO_PATH_RESOLVER} from '../../../how-to-path-resolver';
import {FrontEndExample} from '../../interfaces/front-end-example';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';
import {AbstractExampleTuiInteractive} from '../abstract/interactive';

@Component({
    selector: 'example-tui-checkbox-block',
    templateUrl: './checkbox-block.template.html',
    styleUrls: ['./checkbox-block.style.less'],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiCheckboxBlockComponent),
        },
    ],
})
export class ExampleTuiCheckboxBlockComponent extends AbstractExampleTuiInteractive {
    readonly exampleDeclareForm = exampleDeclareForm;
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

    readonly example3: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
        LESS: example3Less,
    };

    readonly contentAlignVariants: ReadonlyArray<TuiHorizontalDirection> = [
        'left',
        'right',
    ];

    contentAlign: TuiHorizontalDirection = this.contentAlignVariants[1];

    hideCheckbox = false;

    readonly sizeVariants: ReadonlyArray<TuiSizeS | TuiSizeL> = ['s', 'm', 'l'];

    size: TuiSizeS | TuiSizeL = this.sizeVariants[2];

    readonly control = new FormGroup({
        testValue1: new FormControl(false),
        testValue2: new FormControl(),
        testValue3: new FormControl(true),
    });

    get disabled(): boolean {
        return this.control.disabled;
    }

    set disabled(value: boolean) {
        if (value) {
            this.control.disable();
        } else {
            this.control.enable();
        }
    }

    constructor(
        @Inject(HOW_TO_PATH_RESOLVER) readonly howToResolver: (path: string) => string,
    ) {
        super();
    }
}
