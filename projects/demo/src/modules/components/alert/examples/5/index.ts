import {Component, inject} from '@angular/core';
import {Router} from '@angular/router';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiPopover} from '@taiga-ui/cdk';
import type {TuiAlertOptions} from '@taiga-ui/core';
import {TuiAlertService, TuiButton, TuiIcon} from '@taiga-ui/core';
import {
    injectContext,
    PolymorpheusComponent,
    PolymorpheusOutlet,
    PolymorpheusTemplate,
} from '@taiga-ui/polymorpheus';
import {takeUntil} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiIcon],
    template: `
        <label style="display: flex; align-items: center">
            <em>From custom label component with</em>
            <tui-icon icon="@tui.heart" />
        </label>
    `,
    changeDetection,
})
class CustomLabel {}

@Component({
    standalone: true,
    imports: [PolymorpheusOutlet, PolymorpheusTemplate],
    template: `
        <h4>Start content</h4>
        <ng-container *polymorpheusOutlet="context.label as text; context: context">
            {{ text }}
        </ng-container>
        <h4>End content</h4>
    `,
    changeDetection,
})
class AlertExampleWithCustomLabel {
    protected readonly context =
        injectContext<TuiPopover<TuiAlertOptions<unknown>, boolean>>();
}

@Component({
    standalone: true,
    selector: 'tui-alerts-example-5',
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly router = inject(Router);
    private readonly alerts = inject(TuiAlertService);

    private readonly notification = this.alerts
        .open(new PolymorpheusComponent(AlertExampleWithCustomLabel), {
            label: ({appearance}) =>
                appearance === 'negative'
                    ? 'Error label from function'
                    : 'Info label from function',
            appearance: 'negative',
            autoClose: 0,
        })
        .pipe(takeUntil(this.router.events));

    private readonly notificationWithCustomLabel = this.alerts
        .open(new PolymorpheusComponent(AlertExampleWithCustomLabel), {
            label: new PolymorpheusComponent(CustomLabel),
            appearance: 'warning',
            autoClose: 0,
        })
        .pipe(takeUntil(this.router.events));

    protected showNotification(): void {
        this.notification.subscribe();
    }

    protected showNotificationWithCustomLabel(): void {
        this.notificationWithCustomLabel.subscribe();
    }
}
