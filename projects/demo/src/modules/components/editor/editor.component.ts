import * as example1Html from '!!raw-loader!./examples/1/index.html';
import * as example1Less from '!!raw-loader!./examples/1/index.less';
import * as example1Ts from '!!raw-loader!./examples/1/index.ts';

import * as exampleImportModule from '!!raw-loader!./examples/import/import-module.txt';
import * as exampleInsertTemplate from '!!raw-loader!./examples/import/insert-template.txt';

import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {defaultEditorTools, TuiEditorTool} from '@taiga-ui/addon-editor';
import {changeDetection} from '../../../change-detection-strategy';
import {FrontEndExample} from '../../interfaces/front-end-example';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';
import {AbstractExampleTuiReactiveField} from '../abstract/reactive-field';

@Component({
    selector: 'example-tui-editor',
    templateUrl: './editor.template.html',
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleTuiEditorComponent),
        },
    ],
})
export class ExampleTuiEditorComponent extends AbstractExampleTuiReactiveField {
    readonly exampleImportModule = exampleImportModule;
    readonly exampleInsertTemplate = exampleInsertTemplate;

    readonly example1: FrontEndExample = {
        TypeScript: example1Ts,
        HTML: example1Html,
        LESS: example1Less,
    };

    readonly control = new FormControl();

    readonly toolsVariants: ReadonlyArray<TuiEditorTool[]> = [
        defaultEditorTools,
        [
            TuiEditorTool.Bold,
            TuiEditorTool.Italic,
            TuiEditorTool.Strikethrough,
            TuiEditorTool.HR,
        ],
    ];

    tools = this.toolsVariants[0];
}
