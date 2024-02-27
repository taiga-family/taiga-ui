import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-input-tag-example-6',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiInputTagExample6 {
    protected value = ['not', 'unique', 'tags, with', 'custom', 'separator', 'separator'];
    protected customSeparator = ';';
}
