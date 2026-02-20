import"./chunk-HU6DUUP4.js";var o=`import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {type TuiPortalContext} from '@taiga-ui/cdk';
import {
    TuiButton,
    TuiLink,
    type TuiNotificationOptions,
    TuiNotificationService,
} from '@taiga-ui/core';
import {injectContext, PolymorpheusComponent} from '@taiga-ui/polymorpheus';
import {switchMap, takeUntil} from 'rxjs';

@Component({
    imports: [TuiAmountPipe, TuiButton, TuiLink],
    template: \`
        <span tuiSubtitle>
            <em>Your balance:</em>
            {{ value | tuiAmount: 'RUB' }}
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
    \`,
    changeDetection,
})
class Alert {
    protected readonly context =
        injectContext<TuiPortalContext<TuiNotificationOptions<number>, number>>();

    protected value = this.context.data;

    protected increaseBalance(): void {
        this.value += 10;
    }
}

@Component({
    selector: 'example-4',
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly notifications = inject(TuiNotificationService);
    protected readonly notification = this.notifications
        .open<number>(new PolymorpheusComponent(Alert), {
            label: 'Heading is so long that it should be shown in two lines of text',
            data: 237,
            appearance: 'warning',
            autoClose: 0,
        })
        .pipe(
            switchMap((value) =>
                this.notifications.open(\`Got a value \u2014 \${value}\`, {label: 'Response'}),
            ),
            takeUntil(inject(Router).events),
        );

    protected onClick(): void {
        this.notification.subscribe();
    }
}
`;export{o as default};
