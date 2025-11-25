import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    type OnInit,
    ViewEncapsulation,
} from '@angular/core';
import {outputFromObservable, toObservable, toSignal} from '@angular/core/rxjs-interop';
import {DefaultValueAccessor, NgControl} from '@angular/forms';
import {MaskitoDirective} from '@maskito/angular';
import {TUI_MASK_CARD} from '@taiga-ui/addon-commerce/constants';
import {TUI_PAYMENT_SYSTEM_ICONS} from '@taiga-ui/addon-commerce/tokens';
import {tuiGetPaymentSystem} from '@taiga-ui/addon-commerce/utils';
import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk/constants';
import {tuiControlValue} from '@taiga-ui/cdk/observables';
import {TuiIconPipe} from '@taiga-ui/core/components/icon';
import {TuiWithInput} from '@taiga-ui/core/components/input';
import {TuiTextfieldContent} from '@taiga-ui/core/components/textfield';
import {tuiMaskito} from '@taiga-ui/kit/utils';
import {distinctUntilChanged, map, skip, startWith, switchMap, timer} from 'rxjs';

@Component({
    selector: 'input[tuiInputCard]',
    imports: [TuiIconPipe, TuiTextfieldContent],
    template: `
        @if (image()) {
            <img
                *tuiTextfieldContent
                alt=""
                class="t-payment-system"
                [src]="image() | tuiIcon"
            />
        }
    `,
    styleUrl: './input-card.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [MaskitoDirective, TuiWithInput],
    host: {
        inputmode: 'numeric',
        placeholder: '0000 0000 0000 0000',
        ngSkipHydration: 'true',
        autocomplete: 'cc-number',
    },
})
export class TuiInputCardComponent implements OnInit {
    private readonly icons = inject(TUI_PAYMENT_SYSTEM_ICONS);
    private readonly control = inject(NgControl);
    private readonly value = toSignal(
        timer(0).pipe(switchMap(() => tuiControlValue<string>(this.control))),
        {initialValue: ''},
    );

    private readonly accessor = inject(DefaultValueAccessor, {
        self: true,
        optional: true,
    });

    protected readonly mask = tuiMaskito(TUI_MASK_CARD);
    protected readonly image = computed(
        (s = tuiGetPaymentSystem(this.value())) => (s && this.icons[s]) || '',
    );

    public readonly binChange = outputFromObservable(
        toObservable(this.value).pipe(
            map((v) => (v.length < 6 ? null : v.replace(' ', '').slice(0, 6))),
            startWith(null),
            distinctUntilChanged(),
            skip(1),
        ),
    );

    public ngOnInit(): void {
        if (!this.accessor) {
            return;
        }

        const onChanges = this.accessor.onChange.bind(this.accessor);

        this.accessor.onChange = (value: string) =>
            onChanges(value.replaceAll(CHAR_NO_BREAK_SPACE, ''));
    }
}
