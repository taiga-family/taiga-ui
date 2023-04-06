import {Component, Inject} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService} from '@taiga-ui/core';

@Component({
    selector: 'tui-value-changes-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiValueChangesExample1 {
    readonly form = new FormGroup({
        control: new FormControl('', {updateOn: 'blur'}),
    });

    constructor(@Inject(TuiAlertService) private readonly alerts: TuiAlertService) {}

    onChanges(value: string): void {
        this.alerts.open(value).subscribe();
    }
}
