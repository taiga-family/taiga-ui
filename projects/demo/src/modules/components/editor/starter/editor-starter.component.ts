import {Component, forwardRef} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    defaultEditorExtensions,
    defaultEditorTools,
    TUI_EDITOR_EXTENSIONS,
    TuiEditorTool,
} from '@taiga-ui/addon-editor';

import {AbstractExampleTuiControl} from '../../abstract/control';
import {ABSTRACT_PROPS_ACCESSOR} from '../../abstract/inherited-documentation/abstract-props-accessor';

@Component({
    selector: 'example-tui-editor-starter',
    templateUrl: './editor-starter.template.html',
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleEditorStarterComponent),
        },
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: defaultEditorExtensions,
        },
    ],
})
export class ExampleEditorStarterComponent extends AbstractExampleTuiControl {
    readonly exampleModule = import('./import/import-module.md?raw');
    readonly exampleHtml = import('./import/insert-template.md?raw');
    readonly provideExtensions = import('./import/provide-extensions.md?raw');

    readonly exampleEditorOptionsToken = import('./import/editor-options-token.md?raw');

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
