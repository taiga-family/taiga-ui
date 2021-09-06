import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {
    defaultWysiwygExtensions,
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
            useValue: defaultWysiwygExtensions,
        },
        {
            provide: TUI_EDITOR_STYLES,
            useValue: tiptapEditorStyles,
        },
    ],
    changeDetection,
    encapsulation,
})
export class TuiWysiwygExample1 {
    control = new FormControl('<p>Hello world</p>', Validators.required);

    onClick() {
        this.control.setValue(
            '<p>Control</p><h2>is</h2><h1><span style="color: #e01f19">updated!</span></h1>',
        );
    }
}
