import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-text-area-example-6`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiTextAreaExample6 {
    value = `مونتى پايثون و ساعات معروفين انهم ذى پايثونز كانو مجموعة كوميديا سرياليه من بريطانيا`;
}
