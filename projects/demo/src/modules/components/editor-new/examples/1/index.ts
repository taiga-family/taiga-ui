import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {
    defaultEditorExtensions,
    tiptapEditorStyles,
    TUI_EDITOR_EXTENSIONS,
    TUI_EDITOR_STYLES,
} from '@taiga-ui/addon-editor';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-editor-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: defaultEditorExtensions,
        },
        {
            provide: TUI_EDITOR_STYLES,
            useValue: tiptapEditorStyles,
        },
    ],
    changeDetection,
    encapsulation,
})
export class TuiEditorNewExample1 {
    control = new FormControl('<p>Hello world</p>', Validators.required);

    onClick() {
        this.control.setValue(
            '<p>Control</p><h2>is</h2><h1><span style="color: #e01f19">updated!</span></h1>',
        );
    }
}
