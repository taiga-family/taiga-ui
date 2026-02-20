import"./chunk-HU6DUUP4.js";var t=`import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiValueChanges} from '@taiga-ui/cdk';
import {TuiInput, TuiLabel, TuiNotificationService} from '@taiga-ui/core';

@Component({
    imports: [ReactiveFormsModule, TuiInput, TuiLabel, TuiValueChanges],
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
`;export{t as default};
