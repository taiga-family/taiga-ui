import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDocExample} from '@taiga-ui/addon-doc';
import {defaultEditorTools, TuiEditorTool} from '@taiga-ui/addon-editor';

import {AbstractExampleTuiControl} from '../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../abstract/inherited-documentation/abstract-props-accessor';

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
export class ExampleTuiEditorComponent extends AbstractExampleTuiControl {
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');

    readonly example1: TuiDocExample = {
        TypeScript: import('./examples/1/index.ts?raw'),
        HTML: import('./examples/1/index.html?raw'),
        LESS: import('./examples/1/index.less?raw'),
    };

    readonly control = new FormControl();

    readonly toolsVariants: readonly TuiEditorTool[][] = [
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
