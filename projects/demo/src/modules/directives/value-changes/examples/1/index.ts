import {Component, Inject} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService} from '@taiga-ui/core';

@Component({
    selector: 'tui-value-changes-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiValueChangesExample1 {
    readonly form = new UntypedFormGroup({
        control: new UntypedFormControl('', {updateOn: 'blur'}),
    });

    constructor(@Inject(TuiAlertService) private readonly alerts: TuiAlertService) {}

    onChanges(value: string): void {
        this.alerts.open(value).subscribe();
    }
}
