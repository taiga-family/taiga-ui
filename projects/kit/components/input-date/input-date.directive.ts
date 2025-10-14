import {
    computed,
    Directive,
    effect,
    inject,
    Input,
    signal,
    untracked,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {MaskitoDirective} from '@maskito/angular';
import {type MaskitoDateMode, maskitoDateOptionsGenerator} from '@maskito/kit';
import {tuiAsControl, TuiControl, tuiValueTransformerFrom} from '@taiga-ui/cdk/classes';
import {
    DATE_FILLER_LENGTH,
    type TuiDateMode,
    TuiDay,
    type TuiDayRange,
    type TuiTime,
} from '@taiga-ui/cdk/date-time';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {type TuiBooleanHandler} from '@taiga-ui/cdk/types';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiCalendar} from '@taiga-ui/core/components/calendar';
import {tuiAsOptionContent} from '@taiga-ui/core/components/data-list';
import {
    tuiInjectAuxiliary,
    TuiTextfieldDirective,
    tuiTextfieldIcon,
    TuiWithNativePicker,
    TuiWithTextfield,
} from '@taiga-ui/core/components/textfield';
import {
    TuiDropdownAuto,
    tuiDropdownEnabled,
    tuiDropdownOpen,
} from '@taiga-ui/core/directives/dropdown';
import {
    TUI_ITEMS_HANDLERS,
    type TuiItemsHandlers,
    TuiItemsHandlersDirective,
    TuiItemsHandlersValidator,
} from '@taiga-ui/core/directives/items-handlers';
import {TUI_DATE_FORMAT, TUI_DEFAULT_DATE_FORMAT} from '@taiga-ui/core/tokens';
import {TuiCalendarRange} from '@taiga-ui/kit/components/calendar-range';
import {TuiSelectOption} from '@taiga-ui/kit/components/select';
import {tuiMaskito} from '@taiga-ui/kit/utils';

import {tuiWithDateFiller} from './date-filler';
import {
    TUI_INPUT_DATE_OPTIONS_NEW,
    type TuiInputDateOptionsNew,
} from './input-date.options';

export const TUI_DATE_ADAPTER: Record<TuiDateMode, MaskitoDateMode> = {
    DMY: 'dd/mm/yyyy',
    MDY: 'mm/dd/yyyy',
    YMD: 'yyyy/mm/dd',
};

@Directive({
    standalone: true,
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
    private readonly calendar = tuiInjectAuxiliary<TuiCalendar | TuiCalendarRange>(
        (x) => x instanceof TuiCalendar || x instanceof TuiCalendarRange,
    );

    protected readonly el = tuiInjectElement<HTMLInputElement>();
    protected readonly textfield = inject(TuiTextfieldDirective);
    protected readonly filler = tuiWithDateFiller();
    protected readonly mobile = inject(TUI_IS_MOBILE);
    protected readonly open = tuiDropdownOpen();
    protected readonly icon = tuiTextfieldIcon(TUI_INPUT_DATE_OPTIONS_NEW);
    protected readonly handlers = inject<TuiItemsHandlers<T>>(TuiItemsHandlersDirective);

    protected readonly dropdownEnabled = tuiDropdownEnabled(
        computed(() => !this.native && this.interactive()),
    );

    protected readonly options: Omit<TuiInputDateOptionsNew, 'valueTransformer'> = inject(
        TUI_INPUT_DATE_OPTIONS_NEW,
    );

    protected readonly format = toSignal(inject(TUI_DATE_FORMAT), {
        initialValue: TUI_DEFAULT_DATE_FORMAT,
    });

    protected readonly valueEffect = effect(() => {
        const value =
            this.stringify(this.value()) ||
            (this.filler().length === this.el.value.length ? '' : this.el.value);

        this.textfield.value.set(value);
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

    public readonly min = signal(this.options.min);
    public readonly max = signal(this.options.max);

    protected abstract onValueChange(value: string): void;

    @Input('min')
    public set minSetter(min: Exclude<T, TuiDayRange> | TuiDay | null) {
        this.min.set(min instanceof TuiDay ? min : this.options.min);
    }

    @Input('max')
    public set maxSetter(max: Exclude<T, TuiDayRange> | TuiDay | null) {
        this.max.set(max instanceof TuiDay ? max : this.options.max);
    }

    public override writeValue(value: T | null): void {
        const reset = this.control.pristine && this.control.untouched && !value;
        const changed = untracked(() => value !== this.value());

        if (changed || reset) {
            super.writeValue(value);
            this.textfield.value.set(this.stringify(this.value()));
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
        calendar.min = this.min();
        calendar.max = this.max();
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
    standalone: true,
    selector: 'input[tuiInputDate]',
    providers: [
        tuiAsOptionContent(TuiSelectOption),
        tuiAsControl(TuiInputDateDirective),
        tuiValueTransformerFrom(TUI_INPUT_DATE_OPTIONS_NEW),
    ],
    hostDirectives: [
        TuiWithTextfield,
        TuiDropdownAuto,
        TuiItemsHandlersValidator,
        MaskitoDirective,
    ],
})
export class TuiInputDateDirective extends TuiInputDateBase<TuiDay> {
    protected readonly identity = inject<TuiItemsHandlers<TuiDay>>(
        TUI_ITEMS_HANDLERS,
    ).identityMatcher.set((a, b) => a.daySame(b));

    protected readonly mask = tuiMaskito(
        computed(() =>
            maskitoDateOptionsGenerator({
                separator: this.format().separator,
                mode: TUI_DATE_ADAPTER[this.format().mode],
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
