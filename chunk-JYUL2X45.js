import"./chunk-LQ6M4NCU.js";var t=`import {Component, inject, signal} from '@angular/core';
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

    protected readonly heading = signal('Page heading');
    protected readonly editing = signal(false);

    protected save(): void {
        this.editing.set(false);
        this.alerts.open(this.heading, {label: 'New heading'}).subscribe();
    }
}
`;export{t as default};
