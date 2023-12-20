import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-textfield-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiTextfieldExample1 {
    value = 'Test';
    filler = 'I am filler';

    readonly sizes = ['l', 'm', 's'] as const;
}
