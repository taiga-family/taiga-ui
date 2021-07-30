import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
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
    control = new FormControl('<p>Hello <code>world</code> </p>');
}
