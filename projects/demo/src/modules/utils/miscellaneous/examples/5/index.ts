import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
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
    protected readonly items = ['String', 'null', 'undefined'];

    protected parametersForm = new FormGroup({
        value: new FormControl<string | null>(null),
    });

    protected get isPresent(): boolean {
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
