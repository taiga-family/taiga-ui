import {Component} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiCapitalize} from '@taiga-ui/core';

@Component({
    selector: 'tui-format-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiFormatExample3 {
    parametersForm = new UntypedFormGroup({
        value: new UntypedFormControl('roman sEdOv'),
    });

    get capitalized(): string {
        const {value} = this.parametersForm.value;

        return tuiCapitalize(value ?? '');
    }
}
