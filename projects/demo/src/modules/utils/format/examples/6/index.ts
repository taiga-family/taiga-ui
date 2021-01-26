import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {formatNumber} from '@taiga-ui/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-format-example-6',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiFormatExample6 {
    parametersForm = new FormGroup({
        value: new FormControl(123456.789),
        decimalLimit: new FormControl(2),
        decimalSeparator: new FormControl('.'),
        thousandSeparator: new FormControl(' '),
    });

    get formattedNumber(): string {
        const {
            value,
            decimalLimit,
            decimalSeparator,
            thousandSeparator,
        } = this.parametersForm.value;

        return formatNumber(value, decimalLimit, decimalSeparator, thousandSeparator);
    }
}
