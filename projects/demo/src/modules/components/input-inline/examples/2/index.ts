import {NgIf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiAlertService, TuiButton} from '@taiga-ui/core';
import {TuiInputInline} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, NgIf, TuiAutoFocus, TuiButton, TuiInputInline],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);

    protected heading = 'Page heading';
    protected editing = false;

    protected toggle(): void {
        this.editing = !this.editing;
    }

    protected onBlur(): void {
        this.editing = false;
        this.saveHeading(this.heading);
    }

    private saveHeading(newHeading: string): void {
        this.alerts.open(newHeading, {label: 'New heading'}).subscribe();
    }
}
