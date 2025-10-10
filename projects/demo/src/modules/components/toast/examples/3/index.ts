import {ChangeDetectionStrategy, Component, inject, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiPopover} from '@taiga-ui/cdk';
import {type TuiAlertOptions, TuiButton, TuiIcon} from '@taiga-ui/core';
import {TuiToast, TuiToastService} from '@taiga-ui/kit';
import {injectContext, PolymorpheusComponent} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    imports: [TuiIcon, TuiToast],
    template: `
        <div tuiToast>
            <tui-icon
                icon="@tui.triangle-alert"
                [style.color]="'var(--tui-status-negative)'"
            />
            Lost connection.
            <br />
            Restore your internet to continue
        </div>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Toast {
    protected readonly context =
        injectContext<TuiPopover<TuiAlertOptions<void>, boolean>>();
}

@Component({
    standalone: true,
    imports: [TuiButton, TuiToast],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly toast = inject(TuiToastService);
    protected readonly template = signal(false);

    protected primitive(): void {
        this.toast
            .open('Alarm saved', {autoClose: 0, data: '@tui.alarm-clock'})
            .subscribe();
    }

    protected component(): void {
        this.toast.open(new PolymorpheusComponent(Toast), {closable: false}).subscribe();
    }
}
