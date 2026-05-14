import"./chunk-HU6DUUP4.js";var o=`import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {type TuiPortalContext} from '@taiga-ui/cdk';
import {TuiButton, TuiIcon} from '@taiga-ui/core';
import {TuiToast, type TuiToastOptions, TuiToastService} from '@taiga-ui/kit';
import {injectContext, PolymorpheusComponent} from '@taiga-ui/polymorpheus';

@Component({
    imports: [TuiIcon, TuiToast],
    template: \`
        <div
            tuiToast
            [attr.data-appearance]="appearance"
        >
            <tui-icon
                icon="@tui.triangle-alert"
                [style.color]="'var(--tui-status-negative)'"
            />
            Lost connection.
            <br />
            Restore your internet to continue
        </div>
    \`,
    styles: \`
        [data-appearance='custom-warning'] {
            background: var(--tui-service-autofill-background);
        }
    \`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Toast {
    protected readonly appearance =
        injectContext<TuiPortalContext<TuiToastOptions<void>>>().appearance;
}

@Component({
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly toast = inject(TuiToastService);

    protected component(): void {
        this.toast
            .open(new PolymorpheusComponent(Toast), {
                closable: false,
                appearance: 'custom-warning',
            })
            .subscribe();
    }
}
`;export{o as default};
