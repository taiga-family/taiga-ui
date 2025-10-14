import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiRepeatTimes} from '@taiga-ui/cdk';
import {TuiAlertService, TuiButton} from '@taiga-ui/core';
import {TuiCheckbox, TuiChip} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiButton, TuiCheckbox, TuiChip, TuiRepeatTimes],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);

    protected readonly checked = [true, false, true];
    protected readonly values = ['test', 'Some text', 'WOW!'];

    protected onChip(index: number): void {
        this.alerts.open(`Clicked chip ${index + 1}`).subscribe();
    }

    protected onX(index: number): void {
        this.alerts
            .open(`Removed chip ${index + 1}`, {appearance: 'negative'})
            .subscribe();
    }
}
