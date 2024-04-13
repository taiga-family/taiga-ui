import {Component, inject} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TuiAlertService} from '@taiga-ui/core';

import {changeDetection} from '#/demo/emulate/change-detection';
import {encapsulation} from '#/demo/emulate/encapsulation';

@Component({
    selector: 'tui-value-changes-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiValueChangesExample1 {
    private readonly alerts = inject(TuiAlertService);

    protected readonly form = new FormGroup({
        control: new FormControl('', {updateOn: 'blur'}),
    });

    protected onChanges(value: string): void {
        this.alerts.open(value).subscribe();
    }
}
