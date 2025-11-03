import {Component, inject, TemplateRef, viewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDialogService} from '@taiga-ui/core';
import {TuiNotificationMiddleService} from '@taiga-ui/kit';
import {Subscription} from 'rxjs';
import {FormsModule} from '@angular/forms';

@Component({
    imports: [TuiButton, FormsModule],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialogs = inject(TuiDialogService);
    private readonly notifications = inject(TuiNotificationMiddleService);
    private readonly subs: Subscription[] = [];

    protected template = viewChild('template', {read: TemplateRef});
    protected index = 0;

    protected dialog(): void {
        this.subs.push(this.dialogs.open(this.template()).subscribe());
    }

    protected notification(): void {
        this.subs.push(this.notifications.open(this.template()).subscribe());
    }

    protected close(): void {
        this.subs.splice(Number(String(this.index)), 1)[0]?.unsubscribe();
    }
}
