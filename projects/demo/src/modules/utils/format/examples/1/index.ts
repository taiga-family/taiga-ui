import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {tuiPx} from '@taiga-ui/cdk';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-format-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiFormatExample1 {
    protected parametersForm = new FormGroup({
        value: new FormControl(11),
    });

    protected get px(): string {
        const {value} = this.parametersForm.value;

        return tuiPx(value ?? 0);
    }
}
