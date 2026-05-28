import"./chunk-HU6DUUP4.js";var t=`import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoFocus} from '@taiga-ui/cdk';
import {TuiButton, TuiNotificationService} from '@taiga-ui/core';
import {TuiInputInline} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, TuiAutoFocus, TuiButton, TuiInputInline],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiNotificationService);

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
`;export{t as default};
