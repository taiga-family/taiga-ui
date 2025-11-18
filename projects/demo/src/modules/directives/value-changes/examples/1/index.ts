import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiValueChanges} from '@taiga-ui/cdk';
import {TuiLabel, TuiNotificationService, TuiTextfield} from '@taiga-ui/core';

@Component({
    imports: [ReactiveFormsModule, TuiLabel, TuiTextfield, TuiValueChanges],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiNotificationService);

    protected readonly form = new FormGroup({
        control: new FormControl('', {updateOn: 'blur'}),
    });

    protected onChanges(value: string): void {
        this.alerts.open(value).subscribe();
    }
}
