import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {isPresent} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-miscellaneous-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiMiscellaneousExample5 {
    readonly items = ['String', 'null', 'undefined'];

    parametersForm = new FormGroup({
        value: new FormControl(null),
    });

    get isPresent(): boolean {
        const {value} = this.parametersForm.value;
        const objectedValue = this.objectifyValue(value);

        return isPresent(objectedValue);
    }

    private objectifyValue(value: string): string | null | undefined {
        if (value === 'null') {
            return null;
        }

        if (value === 'undefined') {
            return undefined;
        }

        return value;
    }
}
