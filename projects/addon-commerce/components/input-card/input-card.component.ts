import type {OnInit} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    Input,
    Output,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {toObservable, toSignal} from '@angular/core/rxjs-interop';
import {DefaultValueAccessor, NgControl} from '@angular/forms';
import {MaskitoDirective} from '@maskito/angular';
import {TUI_MASK_CARD} from '@taiga-ui/addon-commerce/constants';
import {TUI_PAYMENT_SYSTEM_ICONS} from '@taiga-ui/addon-commerce/tokens';
import {tuiControlValue} from '@taiga-ui/cdk/observables';
import {TuiTextfieldContent} from '@taiga-ui/core/components/textfield';
import {tuiInjectIconResolver} from '@taiga-ui/core/tokens';
import {tuiMaskito} from '@taiga-ui/kit/utils';
import {distinctUntilChanged, map, skip, startWith, switchMap, timer} from 'rxjs';

import {TUI_INPUT_CARD_OPTIONS} from './input-card.options';

@Component({
    standalone: true,
    selector: 'input[tuiInputCard]',
    imports: [TuiTextfieldContent],
    template: `
        <img
            *tuiTextfieldContent
            alt=""
            class="t-payment-system"
            [hidden]="!image()"
            [src]="image()"
        />
    `,
    styleUrls: ['./input-card.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [MaskitoDirective],
    host: {
        inputmode: 'numeric',
        placeholder: '0000 0000 0000 0000',
        '[autocomplete]': 'autocomplete ? "cc-number" : "off"',
    },
})
export class TuiInputCard implements OnInit {
    private readonly icons = inject(TUI_PAYMENT_SYSTEM_ICONS);
    private readonly options = inject(TUI_INPUT_CARD_OPTIONS);
    private readonly resolver = tuiInjectIconResolver();
    private readonly control = inject(NgControl);
    private readonly value = toSignal(
        timer(0).pipe(switchMap(() => tuiControlValue<string>(this.control))),
        {initialValue: ''},
    );

    private readonly icon = signal<string | null>(this.options.icon);

    private readonly accessor = inject(DefaultValueAccessor, {
        self: true,
        optional: true,
    });

    protected readonly mask = tuiMaskito(TUI_MASK_CARD);
    protected readonly image = computed(() => {
        const system = this.options.paymentSystemHandler(this.value());
        const icon = system && this.icons[system] && this.resolver(this.icons[system]);
        const url = this.icon() || icon;

        return url && this.icon() !== '' ? url : null;
    });

    @Input()
    public autocomplete = this.options.autocomplete;

    @Output()
    public readonly binChange = toObservable(this.value).pipe(
        map((value) => (value.length < 6 ? null : value.replace(' ', '').slice(0, 6))),
        startWith(null),
        distinctUntilChanged(),
        skip(1),
    );

    @Input('icon')
    public set iconValue(icon: string | null) {
        this.icon.set(icon);
    }

    public ngOnInit(): void {
        if (!this.accessor) {
            return;
        }

        const onChanges = this.accessor.onChange.bind(this.accessor);

        this.accessor.onChange = (value: string) => onChanges(value.replaceAll(' ', ''));
    }
}
