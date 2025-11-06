import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {type TuiAlertContext, TuiAlertService, TuiButton, TuiLink} from '@taiga-ui/core';
import {injectContext, PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {switchMap, takeUntil} from 'rxjs';

@Component({
    imports: [AsyncPipe, TuiAmountPipe, TuiButton, TuiLink],
    template: `
        <span tuiSubtitle>
            <em>Your balance:</em>
            {{ value | tuiAmount: 'RUB' | async }}
        </span>
        <div>
            <button
                tuiButton
                type="button"
                (click)="context.completeWith(value)"
            >
                Submit
            </button>
            <button
                tuiLink
                type="button"
                (click)="increaseBalance()"
            >
                Increase
            </button>
        </div>
    `,
    changeDetection,
})
export class AlertExampleWithData {
    protected readonly context = injectContext<TuiAlertContext<number, number>>();
    protected value = this.context.data;

    protected increaseBalance(): void {
        this.value += 10;
    }
}

@Component({
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);
    private readonly notification = this.alerts
        .open<number>(new PolymorpheusComponent(AlertExampleWithData), {
            label: 'Heading is so long that it should be shown in two lines of text',
            data: 237,
            appearance: 'warning',
            autoClose: 0,
        })
        .pipe(
            switchMap((response) =>
                this.alerts.open(`Got a value — ${response}`, {label: 'Information'}),
            ),
            takeUntil(inject(Router).events),
        );

    protected showNotification(): void {
        this.notification.subscribe();
    }
}
