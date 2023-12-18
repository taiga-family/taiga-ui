import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiIsPresent} from '@taiga-ui/cdk';

@Component({
    selector: 'tui-miscellaneous-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiMiscellaneousExample5 {
    readonly items = ['String', 'null', 'undefined'];

    parametersForm = new UntypedFormGroup({
        value: new UntypedFormControl(null),
    });

    get isPresent(): boolean {
        const {value} = this.parametersForm.value;
        const objectedValue = this.objectifyValue(value ?? '');

        return tuiIsPresent(objectedValue);
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
