import {Component} from '@angular/core';
import {defaultEditorColors} from '@taiga-ui/addon-editor';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-color-picker-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiColorPickerExample1 {
    color = '#ffdd2d';

    readonly palette = defaultEditorColors;
}
