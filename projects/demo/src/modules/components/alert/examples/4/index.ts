import {AsyncPipe} from '@angular/common';
import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import type {TuiPopover} from '@taiga-ui/cdk';
import {type TuiAlertOptions, TuiAlertService, TuiButton, TuiLink} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT, PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {switchMap, takeUntil} from 'rxjs';

@Component({
    standalone: true,
    imports: [AsyncPipe, TuiButton, TuiLink, TuiAmountPipe],
    template: `
        <em>Your balance:</em>
        <span>{{ value | tuiAmount: 'RUB' | async }}</span>
        <p [style.display]="'flex'">
            <button
                appearance="whiteblock"
                size="m"
                tuiButton
                type="button"
                class="tui-space_right-3"
                (click)="context.completeWith(value)"
            >
                Submit
            </button>
            <button
                appearance=""
                tuiLink
                type="button"
                [pseudo]="true"
                (click)="increaseBalance()"
            >
                Increase
            </button>
        </p>
    `,
    changeDetection,
})
export class AlertExampleWithDataComponent {
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
        .open<number>(new PolymorpheusComponent(AlertExampleWithDataComponent), {
            label: 'Heading is so long that it should be shown in two lines of text',
            data: 237,
            status: 'warning',
            autoClose: 0,
        })
        .pipe(
            switchMap(response =>
                this.alerts.open(`Got a value — ${response}`, {label: 'Information'}),
            ),
            takeUntil(inject(Router).events),
        );

    protected showNotification(): void {
        this.notification.subscribe();
    }
}
