import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiPopover} from '@taiga-ui/cdk';
import {type TuiAlertOptions, TuiButton} from '@taiga-ui/core';
import {TuiToast, TuiToastService} from '@taiga-ui/kit';
import {injectContext, PolymorpheusComponent} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    imports: [TuiButton, TuiToast],
    template: `
        <div
            iconStart="@tui.triangle-alert"
            tuiToast
        >
            Lost connection. Restore
            <br />
            your internet connection to continue

            <button
                appearance="icon"
                iconStart="@tui.x"
                size="xs"
                tuiIconButton
                type="button"
                (click)="context.$implicit.complete()"
            >
                Close
            </button>
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
    imports: [TuiButton],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly toast = inject(TuiToastService);
    private index = 0;

    public showSimple(): void {
        this.toast.show(`Copied #${this.index++}`, {iconStart: '@tui.copy-check'});
    }

    public show(): void {
        this.toast.show(new PolymorpheusComponent(Toast), {
            autoClose: 0,
        });
    }
}
