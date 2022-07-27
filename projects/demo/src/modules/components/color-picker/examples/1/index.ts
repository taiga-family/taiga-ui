import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {defaultEditorColors} from '@taiga-ui/addon-editor';

@Component({
    selector: `tui-color-picker-example-1`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiColorPickerExample1 {
    color = `#ffdd2d`;

    readonly palette = defaultEditorColors;
}
