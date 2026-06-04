import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    ViewEncapsulation,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {NgControl} from '@angular/forms';
import {TUI_PAYMENT_SYSTEM_ICONS} from '@taiga-ui/addon-commerce/tokens';
import {tuiGetPaymentSystem} from '@taiga-ui/addon-commerce/utils';
import {TUI_VERSION} from '@taiga-ui/cdk/constants';
import {tuiControlValue} from '@taiga-ui/cdk/observables';
import {TuiIconPipe} from '@taiga-ui/core/components/icon';
import {switchMap, timer} from 'rxjs';

@Component({
    selector: 'tui-input-card-content',
    imports: [TuiIconPipe],
    template: `
        @if (image()) {
            <img
                alt=""
                class="t-payment-system"
                [src]="image() | tuiIcon"
            />
        }
    `,
    styles: `
        [data-tui-version='${TUI_VERSION}'] {
            @import './input-card.style.less';
        }
    `,
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiInputCardContent {
    private readonly icons = inject(TUI_PAYMENT_SYSTEM_ICONS);
    private readonly control = inject(NgControl);

    private readonly value = toSignal(
        timer(0).pipe(switchMap(() => tuiControlValue<string>(this.control))),
        {initialValue: ''},
    );

    protected readonly image = computed(() => {
        const system = tuiGetPaymentSystem(this.value());

        return (system && this.icons[system]) || '';
    });
}
