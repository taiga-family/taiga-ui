import {Component, Inject} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService} from '@taiga-ui/core';

@Component({
    selector: 'tui-value-changes-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiValueChangesExample2 {
    readonly form = new UntypedFormGroup({
        name: new UntypedFormControl('', {updateOn: 'blur'}),
        age: new UntypedFormControl(),
    });

    constructor(@Inject(TuiAlertService) private readonly alerts: TuiAlertService) {}

    onChanges(value: string): void {
        this.alerts.open(JSON.stringify(value)).subscribe();
    }
}
