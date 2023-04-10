import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    defaultEditorExtensions,
    TUI_EDITOR_EXTENSIONS,
    TUI_EDITOR_VALUE_TRANSFORMER,
} from '@taiga-ui/addon-editor';

import {ExampleEditorCleanupHtmlTransformer} from './transformer';

@Component({
    selector: 'tui-editor-cleanup-html-example-1',
    templateUrl: './index.html',
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: defaultEditorExtensions,
        },
        {
            provide: TUI_EDITOR_VALUE_TRANSFORMER,
            useClass: ExampleEditorCleanupHtmlTransformer,
        },
    ],
    changeDetection,
    encapsulation,
})
export class TuiEditorCleanupHtmlExample1 {
    control = new FormControl(
        '<p class="t-content">TipTap Editor</p>',
        Validators.required,
    );
}
