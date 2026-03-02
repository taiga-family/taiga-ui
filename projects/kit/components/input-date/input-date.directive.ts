import {
    computed,
    Directive,
    effect,
    inject,
    input,
    type Signal,
    untracked,
} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {maskitoDateOptionsGenerator} from '@maskito/kit';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {tuiAsControl, TuiControl, tuiValueTransformerFrom} from '@taiga-ui/cdk/classes';
import {
    DATE_FILLER_LENGTH,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiDay,
    type TuiDayRange,
    type TuiTime,
} from '@taiga-ui/cdk/date-time';
import {type TuiBooleanHandler} from '@taiga-ui/cdk/types';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/di';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiSetSignal} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiCalendar} from '@taiga-ui/core/components/calendar';
import {tuiAsOptionContent} from '@taiga-ui/core/components/data-list';
import {TuiInputDirective, TuiWithInput} from '@taiga-ui/core/components/input';
import {
    tuiInjectAuxiliary,
    TuiWithNativePicker,
} from '@taiga-ui/core/components/textfield';
import {tuiIconEnd} from '@taiga-ui/core/directives/icons';
import {
    type TuiItemsHandlers,
    TuiItemsHandlersDirective,
    TuiItemsHandlersValidator,
} from '@taiga-ui/core/directives/items-handlers';
import {
    TuiDropdownAuto,
    tuiDropdownEnabled,
    TuiDropdownOpen,
} from '@taiga-ui/core/portals/dropdown';
import {TUI_DATE_FORMAT} from '@taiga-ui/core/tokens';
import {TuiCalendarRange} from '@taiga-ui/kit/components/calendar-range';
import {TuiSelectOption} from '@taiga-ui/kit/components/select';
import {tuiMaskito} from '@taiga-ui/kit/utils';

import {tuiWithDateFiller} from './date-filler';
import {TUI_INPUT_DATE_OPTIONS, type TuiInputDateOptions} from './input-date.options';

@Directive({
    host: {
        '[attr.inputmode]': 'mobile && open() ? "none" : "numeric"',
        '[disabled]': 'disabled()',
        '(input)': 'onValueChange($event.target.value)',
        '(click.capture.stop)': 'onClick()',
    },
})
export abstract class TuiInputDateBase<
    T extends TuiDay | TuiDayRange | readonly [TuiDay, TuiTime | null],
> extends TuiControl<T | null> {
    public abstract readonly max: Signal<TuiDay>;
    public abstract readonly min: Signal<TuiDay>;

    private readonly calendar = tuiInjectAuxiliary<TuiCalendar | TuiCalendarRange>(
        (x) => x instanceof TuiCalendar || x instanceof TuiCalendarRange,
    );

    protected readonly options =
        inject<Omit<TuiInputDateOptions, 'valueTransformer'>>(TUI_INPUT_DATE_OPTIONS);

    protected readonly el = tuiInjectElement<HTMLInputElement>();
    protected readonly input = inject(TuiInputDirective);
    protected readonly filler = tuiWithDateFiller();
    protected readonly mobile = inject(WA_IS_MOBILE);
    protected readonly open = inject(TuiDropdownOpen).open;
    protected readonly icon = tuiIconEnd(this.options.icon);
    protected readonly handlers = inject<TuiItemsHandlers<T>>(TuiItemsHandlersDirective);
    protected readonly format = inject(TUI_DATE_FORMAT);
    protected readonly dropdownEnabled = tuiDropdownEnabled(
        computed(() => !this.native && this.interactive()),
    );

    protected readonly identity = tuiDirectiveBinding(
        TuiItemsHandlersDirective,
        'identityMatcher',
        (a: TuiDay, b: TuiDay) => a.daySame(b),
        {},
    );

    protected readonly valueEffect = effect(() => {
        const value =
            this.stringify(this.value()) ||
            (this.filler().length === this.el.value.length ? '' : this.el.value);

        this.input.value.set(value);
    });

    protected readonly calendarIn = effect(() => {
        if (this.calendar()) {
            this.processCalendar(this.calendar()!);
        }
    });

    protected readonly calendarOut = effect((onCleanup) => {
        const subscription = this.calendar()?.valueChange.subscribe((value) =>
            this.setDate(value),
        );

        onCleanup(() => subscription?.unsubscribe());
    });

    public readonly native =
        !!inject(TuiWithNativePicker, {optional: true}) && this.mobile;

    protected abstract onValueChange(value: string): void;

    public override writeValue(value: T | null): void {
        const reset = this.control.pristine && this.control.untouched && !value;
        const changed = untracked(() => value !== this.value());

        if (changed || reset) {
            super.writeValue(value);
            this.input.value.set(this.stringify(this.value()));
        }
    }

    public setDate(value: TuiDay | TuiDayRange | readonly TuiDay[]): void {
        this.onChange(value as T);
        this.open.set(false);

        if (!this.el.closest('tui-dropdown')) {
            this.el.blur();
        }
    }

    protected processCalendar(calendar: TuiCalendar | TuiCalendarRange): void {
        const value = this.value();

        calendar.value = Array.isArray(value) ? value[0] : value;
        calendar.disabledItemHandler =
            this.handlers.disabledItemHandler() as TuiBooleanHandler<
                TuiDay | TuiDayRange
            >;
        tuiSetSignal(calendar.min, this.min());
        tuiSetSignal(calendar.max, this.max());
    }

    protected onClick(): void {
        if (!this.mobile && this.dropdownEnabled()) {
            this.open.update((open) => !open);
        }
    }

    protected stringify(value: T | null): string {
        return value?.toString(this.format().mode, this.format().separator) ?? '';
    }
}

@Directive({
    selector: 'input[tuiInputDate]',
    providers: [
        tuiAsOptionContent(TuiSelectOption),
        tuiAsControl(TuiInputDateDirective),
        tuiValueTransformerFrom(TUI_INPUT_DATE_OPTIONS),
    ],
    hostDirectives: [
        TuiWithInput,
        TuiDropdownAuto,
        TuiItemsHandlersValidator,
        MaskitoDirective,
    ],
})
export class TuiInputDateDirective extends TuiInputDateBase<TuiDay> {
    public override readonly max = input(this.options.max, {
        transform: (max: TuiDay | null): TuiDay =>
            max instanceof TuiDay ? max : TUI_LAST_DAY,
    });

    public override readonly min = input(this.options.min, {
        transform: (min: TuiDay | null): TuiDay =>
            min instanceof TuiDay ? min : TUI_FIRST_DAY,
    });

    protected readonly mask = tuiMaskito(
        computed(() =>
            maskitoDateOptionsGenerator({
                separator: this.format().separator,
                mode: this.format().mode,
                min: this.min().toLocalNativeDate(),
                max: this.max().toLocalNativeDate(),
            }),
        ),
    );

    protected override onValueChange(value: string): void {
        this.control?.control?.updateValueAndValidity({emitEvent: false});
        this.onChange(
            value.length === DATE_FILLER_LENGTH
                ? TuiDay.normalizeParse(value, this.format().mode)
                : null,
        );
    }
}
