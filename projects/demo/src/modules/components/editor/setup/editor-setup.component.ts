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
    selector: 'example-tui-editor-setup',
    templateUrl: './editor-setup.template.html',
    styleUrls: ['./editor-setup.styles.less'],
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: ABSTRACT_PROPS_ACCESSOR,
            useExisting: forwardRef(() => ExampleEditorSetupComponent),
        },
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: defaultEditorExtensions,
        },
    ],
})
export class ExampleEditorSetupComponent extends AbstractExampleTuiControl {
    readonly exampleModule = import('./examples/import/import-module.md?raw');
    readonly exampleHtml = import('./examples/import/insert-template.md?raw');
    readonly provideExtensions = import('./examples/import/provide-extensions.md?raw');

    readonly exampleEditorOptionsToken = import(
        './examples/import/editor-options-token.md?raw'
    );

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
