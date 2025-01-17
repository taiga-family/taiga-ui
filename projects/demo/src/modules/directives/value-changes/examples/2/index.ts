import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiValueChanges} from '@taiga-ui/cdk';
import {TuiAlertService, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputNumber, TuiTextfield, TuiValueChanges],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);

    protected readonly form = new FormGroup({
        name: new FormControl('', {updateOn: 'blur'}),
        age: new FormControl<number | null>(null),
    });

    protected onChanges(value: string): void {
        this.alerts.open(JSON.stringify(value)).subscribe();
    }
}
