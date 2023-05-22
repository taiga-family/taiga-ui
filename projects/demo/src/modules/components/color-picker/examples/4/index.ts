import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-color-picker-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiColorPickerExample4 {
    readonly mask = {mask: ['#', ...new Array(6).fill(/[0-9a-f]/i)]};

    value = '#ffdd2d';
}
