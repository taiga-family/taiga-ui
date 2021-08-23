import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {defaultExtensions, TUI_EDITOR_EXTENSIONS} from '@taiga-ui/addon-editor';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-editor-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    providers: [
        {
            provide: TUI_EDITOR_EXTENSIONS,
            useValue: defaultExtensions,
        },
    ],
    changeDetection,
    encapsulation,
})
export class TuiEditorNewExample1 {
    control = new FormControl('<p>Hello world</p>', Validators.required);

    onClick() {
        this.control.setValue(
            '<p>Control</p><h3>is</h3><h2><span style="color: #e01f19">updated!</span></h2>',
        );
    }
}
