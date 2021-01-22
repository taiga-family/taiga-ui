import {default as example1Ts} from '!!raw-loader!./examples/1/component.ts';
import {default as example1Html} from '!!raw-loader!./examples/1/template.html';

import {default as example2Ts} from '!!raw-loader!./examples/2/component.ts';
import {default as example2Html} from '!!raw-loader!./examples/2/template.html';

import {default as example3Ts} from '!!raw-loader!./examples/3/component.ts';
import {default as example3Html} from '!!raw-loader!./examples/3/template.html';

import {default as example4Ts} from '!!raw-loader!./examples/4/component.ts';
import {default as example4Less} from '!!raw-loader!./examples/4/style.less';
import {default as example4Html} from '!!raw-loader!./examples/4/template.html';

import {default as example5Ts} from '!!raw-loader!./examples/5/component.ts';
import {default as example5Less} from '!!raw-loader!./examples/5/style.less';
import {default as example5Html} from '!!raw-loader!./examples/5/template.html';

import {default as example6Ts} from '!!raw-loader!./examples/6/component.ts';
import {default as example6Less} from '!!raw-loader!./examples/6/style.less';
import {default as example6Html} from '!!raw-loader!./examples/6/template.html';

import {default as example7Ts} from '!!raw-loader!./examples/7/component.ts';
import {default as example7Less} from '!!raw-loader!./examples/7/style.less';
import {default as example7Html} from '!!raw-loader!./examples/7/template.html';

import {default as example8Html} from '!!raw-loader!./examples/8/index.html';
import {default as example8Less} from '!!raw-loader!./examples/8/index.less';
import {default as example8Ts} from '!!raw-loader!./examples/8/index.ts';

import {default as exampleDeclareForm} from '!!raw-loader!./examples/import/declare-form.txt';
import {default as exampleImportModule} from '!!raw-loader!./examples/import/import-module.txt';
import {default as exampleInsertTemplate} from '!!raw-loader!./examples/import/insert-template.txt';

import {Component, forwardRef} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {TuiHorizontalDirection} from '@taiga-ui/core';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';
import {AbstractExampleTuiReactiveField} from '../abstract/reactive-field';

@Component({
    selector: 'example-tui-input',
    templateUrl: './input.template.html',
    styleUrls: ['./input.style.less'],
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiInputComponent),
        },
    ],
})
export class ExampleTuiInputComponent extends AbstractExampleTuiReactiveField {
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
    };

    readonly example3: FrontEndExample = {
        TypeScript: example3Ts,
        HTML: example3Html,
    };

    readonly example4: FrontEndExample = {
        TypeScript: example4Ts,
        HTML: example4Html,
        LESS: example4Less,
    };

    readonly example5: FrontEndExample = {
        TypeScript: example5Ts,
        HTML: example5Html,
        LESS: example5Less,
    };

    readonly example6: FrontEndExample = {
        TypeScript: example6Ts,
        HTML: example6Html,
        LESS: example6Less,
    };

    readonly example7: FrontEndExample = {
        TypeScript: example7Ts,
        HTML: example7Html,
        LESS: example7Less,
    };

    readonly example8: FrontEndExample = {
        TypeScript: example8Ts,
        HTML: example8Html,
        LESS: example8Less,
    };

    readonly iconVariants = ['tuiIconSearch', 'tuiIconCalendar'];

    icon: 'tuiIconSearch' | 'tuiIconCalendar' | null = null;

    readonly iconAlignVariants: ReadonlyArray<TuiHorizontalDirection> = ['left', 'right'];

    iconAlign: TuiHorizontalDirection = this.iconAlignVariants[1];

    readonly control = new FormControl('111', Validators.required);
}
