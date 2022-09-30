import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiPx} from '@taiga-ui/cdk';

@Component({
    selector: `tui-format-example-1`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiFormatExample1 {
    parametersForm = new FormGroup({
        value: new FormControl(11),
    });

    get px(): string {
        const {value} = this.parametersForm.value;

        return tuiPx(value ?? 0);
    }
}
