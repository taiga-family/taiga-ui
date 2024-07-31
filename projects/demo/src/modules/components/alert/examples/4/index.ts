import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import type {TuiPopover} from '@taiga-ui/cdk';
import type {TuiAlertOptions} from '@taiga-ui/core';
import {TuiAlertService, TuiButton, TuiLink} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT, PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {switchMap, takeUntil} from 'rxjs';

@Component({
    standalone: true,
    imports: [AsyncPipe, TuiButton, TuiLink, TuiAmountPipe],
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
    protected readonly context =
        inject<TuiPopover<TuiAlertOptions<number>, number>>(POLYMORPHEUS_CONTEXT);

    protected value = this.context.data;

    protected increaseBalance(): void {
        this.value += 10;
    }
}

@Component({
    standalone: true,
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
