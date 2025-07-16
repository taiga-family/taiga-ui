import {computed, Directive, effect, inject, Input, signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {MaskitoDirective} from '@maskito/angular';
import type {MaskitoDateMode} from '@maskito/kit';
import {maskitoDateOptionsGenerator} from '@maskito/kit';
import {tuiAsControl, TuiControl, tuiValueTransformerFrom} from '@taiga-ui/cdk/classes';
import {TUI_ALLOW_SIGNAL_WRITES} from '@taiga-ui/cdk/constants';
import type {TuiDateMode, TuiDayRange} from '@taiga-ui/cdk/date-time';
import {DATE_FILLER_LENGTH, TuiDay} from '@taiga-ui/cdk/date-time';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {
    changeDateSeparator,
    tuiDirectiveBinding,
} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiCalendar} from '@taiga-ui/core/components/calendar';
import {tuiAsOptionContent} from '@taiga-ui/core/components/data-list';
import {
    tuiInjectAuxiliary,
    TuiTextfieldComponent,
    TuiTextfieldDirective,
    tuiTextfieldIconBinding,
    TuiWithTextfield,
} from '@taiga-ui/core/components/textfield';
import {
    TuiDropdownAuto,
    tuiDropdownEnabled,
    tuiDropdownOpen,
} from '@taiga-ui/core/directives/dropdown';
import type {TuiItemsHandlers} from '@taiga-ui/core/directives/items-handlers';
import {
    TUI_ITEMS_HANDLERS,
    TuiItemsHandlersDirective,
    TuiItemsHandlersValidator,
} from '@taiga-ui/core/directives/items-handlers';
import {TUI_DATE_FORMAT, TUI_DEFAULT_DATE_FORMAT} from '@taiga-ui/core/tokens';
import {TuiCalendarRange} from '@taiga-ui/kit/components/calendar-range';
import {TuiSelectOption} from '@taiga-ui/kit/components/select';
import {TUI_DATE_TEXTS} from '@taiga-ui/kit/tokens';
import {tuiMaskito} from '@taiga-ui/kit/utils';

import {TUI_INPUT_DATE_OPTIONS_NEW} from './input-date.options';

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
    T extends TuiDay | TuiDayRange,
> extends TuiControl<T | null> {
    private readonly el = tuiInjectElement<HTMLInputElement>();
    private readonly options = inject(TUI_INPUT_DATE_OPTIONS_NEW);
    private readonly handlers = inject(TuiItemsHandlersDirective);
    private readonly textfield = inject(TuiTextfieldDirective);
    private readonly texts = toSignal(inject(TUI_DATE_TEXTS));
    private readonly calendar = tuiInjectAuxiliary<TuiCalendar | TuiCalendarRange>(
        (x) => x instanceof TuiCalendar || x instanceof TuiCalendarRange,
    );

    protected readonly filler = tuiDirectiveBinding(
        TuiTextfieldComponent,
        'fillerSetter',
        computed(() => {
            const {mode, separator} = this.format();
            const texts = this.texts() || '';

            return texts && changeDateSeparator(texts[mode], separator);
        }),
        {},
    );

    protected readonly mobile = inject(TUI_IS_MOBILE);
    protected readonly open = tuiDropdownOpen();
    protected readonly icon = tuiTextfieldIconBinding(TUI_INPUT_DATE_OPTIONS_NEW);
    protected readonly dropdownEnabled = tuiDropdownEnabled(
        computed(() => !this.native && this.interactive()),
    );

    protected readonly format = toSignal(inject(TUI_DATE_FORMAT), {
        initialValue: TUI_DEFAULT_DATE_FORMAT,
    });

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

    protected readonly valueEffect = effect(() => {
        const value =
            this.value()?.toString(this.format().mode, this.format().separator) ??
            (this.filler().length === this.el.value.length ? '' : this.el.value);

        this.textfield.value.set(value);
    }, TUI_ALLOW_SIGNAL_WRITES);

    protected readonly calendarIn = effect(() => {
        if (this.calendar()) {
            this.processCalendar(this.calendar()!);
        }
    }, TUI_ALLOW_SIGNAL_WRITES);

    protected readonly calendarOut = effect((onCleanup) => {
        const subscription = this.calendar()?.valueChange.subscribe((value: any) => {
            this.onChange(value);
            this.open.set(false);

            if (!this.el.closest('tui-dropdown')) {
                this.el.blur();
            }
        });

        onCleanup(() => subscription?.unsubscribe());
    });

    public readonly native = this.el.type === 'date' && this.mobile;
    public readonly min = signal(this.options.min);
    public readonly max = signal(this.options.max);

    protected abstract onValueChange(value: string): void;

    @Input('min')
    public set minSetter(min: TuiDay | null) {
        this.min.set(min || this.options.min);
    }

    @Input('max')
    public set maxSetter(max: TuiDay | null) {
        this.max.set(max || this.options.max);
    }

    protected processCalendar(calendar: TuiCalendar | TuiCalendarRange): void {
        calendar.value = this.value();
        calendar.disabledItemHandler = this.handlers.disabledItemHandler();
        calendar.min = this.min();
        calendar.max = this.max();
        
        // Clamp initial viewed month to min/max constraints
        const min = this.min();
        const max = this.max();
        
        if (calendar instanceof TuiCalendar) {
            // For TuiCalendar, directly set the month if needed
            const currentMonth = calendar.month;
            
            if (max && currentMonth.monthSameOrAfter(max)) {
                calendar.month = max;
            } else if (min && currentMonth.monthSameOrBefore(min)) {
                calendar.month = min;
            }
        } else if (calendar instanceof TuiCalendarRange) {
            // For TuiCalendarRange, use defaultViewedMonth property if needed
            const currentMonth = calendar.defaultViewedMonth;
            
            if (max && currentMonth.monthSameOrAfter(max)) {
                calendar.defaultViewedMonth = max;
            } else if (min && currentMonth.monthSameOrBefore(min)) {
                calendar.defaultViewedMonth = min;
            }
        }
    }

    protected onClick(): void {
        if (!this.mobile) {
            this.open.update((open) => !open);
        }
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

    protected override onValueChange(value: string): void {
        this.control?.control?.updateValueAndValidity({emitEvent: false});
        this.onChange(
            value.length === DATE_FILLER_LENGTH
                ? TuiDay.normalizeParse(value, this.format().mode)
                : null,
        );
    }
}
