import {computed, Directive, effect, inject, Input, signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {MaskitoDirective} from '@maskito/angular';
import type {MaskitoDateMode} from '@maskito/kit';
import {maskitoDateOptionsGenerator} from '@maskito/kit';
import {tuiAsControl, TuiControl, tuiValueTransformerFrom} from '@taiga-ui/cdk/classes';
import {TUI_ALLOW_SIGNAL_WRITES} from '@taiga-ui/cdk/constants';
import type {TuiDateMode} from '@taiga-ui/cdk/date-time';
import {DATE_FILLER_LENGTH, TuiDay} from '@taiga-ui/cdk/date-time';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {
    changeDateSeparator,
    tuiDirectiveBinding,
} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiCalendar} from '@taiga-ui/core/components/calendar';
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
import {
    TuiItemsHandlersDirective,
    TuiItemsHandlersValidator,
} from '@taiga-ui/core/directives/items-handlers';
import {TUI_DATE_FORMAT, TUI_DEFAULT_DATE_FORMAT} from '@taiga-ui/core/tokens';
import {TuiCalendarRange} from '@taiga-ui/kit/components/calendar-range';
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
    selector: 'input[tuiInputDate]',
    providers: [
        tuiAsControl(TuiInputDateDirective),
        tuiValueTransformerFrom(TUI_INPUT_DATE_OPTIONS_NEW),
    ],
    hostDirectives: [
        TuiWithTextfield,
        TuiDropdownAuto,
        TuiItemsHandlersValidator,
        MaskitoDirective,
    ],
    host: {
        '[attr.inputmode]': 'open() ? "none" : "numeric"',
        '[disabled]': 'disabled()',
        '(blur)': 'onTouched()',
        '(input)': 'onValueChange($event.target.value)',
        '(click.capture.stop)': 'onClick()',
    },
})
export class TuiInputDateDirective extends TuiControl<TuiDay | null> {
    private readonly el = tuiInjectElement<HTMLInputElement>();
    private readonly mobile = inject(TUI_IS_MOBILE);
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
            this.el.value;

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
        });

        onCleanup(() => subscription?.unsubscribe());
    });

    public readonly native = this.el.type === 'date' && this.mobile;
    public readonly min = signal(this.options.min);
    public readonly max = signal(this.options.max);

    @Input('min')
    public set minSetter(min: TuiDay | null) {
        this.min.set(min || this.options.min);
    }

    @Input('max')
    public set maxSetter(max: TuiDay | null) {
        this.max.set(max || this.options.max);
    }

    protected processCalendar(calendar: TuiCalendar | TuiCalendarRange): void {
        calendar.valueSetter = this.value();
        calendar.disabledItemHandler = this.handlers.disabledItemHandler();
        calendar.min = this.min();
        calendar.max = this.max();
    }

    protected onClick(): void {
        if (!this.mobile) {
            this.open.update((open) => !open);
        }
    }

    protected onValueChange(value: string): void {
        this.control?.control?.updateValueAndValidity({emitEvent: false});
        this.onChange(
            value.length !== DATE_FILLER_LENGTH
                ? null
                : TuiDay.normalizeParse(value, this.format().mode),
        );
    }
}
