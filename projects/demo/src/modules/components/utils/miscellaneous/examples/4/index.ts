import {Component} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiIsPresent} from '@taiga-ui/cdk';
import {TuiDataListWrapper} from '@taiga-ui/kit';
import {TuiSelectModule} from '@taiga-ui/legacy';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiSelectModule, TuiDataListWrapper],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
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
