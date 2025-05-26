import type {OnChanges} from '@angular/core';
import {computed, Directive, effect, inject, Input, signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {MaskitoDirective} from '@maskito/angular';
import type {MaskitoDateMode} from '@maskito/kit';
import {maskitoDateOptionsGenerator} from '@maskito/kit';
import {tuiAsControl, TuiControl, TuiValueTransformer} from '@taiga-ui/cdk/classes';
import {TUI_ALLOW_SIGNAL_WRITES} from '@taiga-ui/cdk/constants';
import type {TuiDateMode} from '@taiga-ui/cdk/date-time';
import {DATE_FILLER_LENGTH, TuiDay} from '@taiga-ui/cdk/date-time';
import {TUI_IS_MOBILE} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {
    changeDateSeparator,
    tuiDirectiveBinding,
    tuiProvide,
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
import {TuiItemsHandlersDirective} from '@taiga-ui/core/directives/items-handlers';
import {TUI_DATE_FORMAT, TUI_DEFAULT_DATE_FORMAT} from '@taiga-ui/core/tokens';
import {
    TUI_DATE_TEXTS,
    TUI_DATE_VALUE_TRANSFORMER,
    TUI_INPUT_DATE_OPTIONS,
} from '@taiga-ui/kit/tokens';
import {tuiMaskito} from '@taiga-ui/kit/utils';

import {TuiInputDateValidator} from './input-date.validator';

const ADAPTER: Record<TuiDateMode, MaskitoDateMode> = {
    DMY: 'dd/mm/yyyy',
    MDY: 'mm/dd/yyyy',
    YMD: 'yyyy/mm/dd',
};

@Directive({
    standalone: true,
    selector: 'input[tuiInputDate]',
    providers: [
        tuiAsControl(TuiInputDateDirective),
        tuiProvide(TuiValueTransformer, TUI_DATE_VALUE_TRANSFORMER),
    ],
    hostDirectives: [
        TuiWithTextfield,
        TuiDropdownAuto,
        TuiInputDateValidator,
        MaskitoDirective,
    ],
    host: {
        '[attr.inputmode]': 'open() ? "none" : "numeric"',
        '[disabled]': 'disabled()',
        '(blur)': 'onTouched()',
        '(input)': 'onValueChange($event.target.value)',
        '(click)': 'onClick()',
    },
})
export class TuiInputDateDirective
    extends TuiControl<TuiDay | null>
    implements OnChanges
{
    private readonly el = tuiInjectElement<HTMLInputElement>();
    private readonly mobile = inject(TUI_IS_MOBILE);
    private readonly options = inject(TUI_INPUT_DATE_OPTIONS);
    private readonly handlers = inject(TuiItemsHandlersDirective);
    private readonly textfield = inject(TuiTextfieldDirective);
    private readonly texts = toSignal(inject(TUI_DATE_TEXTS));
    private readonly open = tuiDropdownOpen();
    private readonly calendar = tuiInjectAuxiliary<TuiCalendar>(
        (x) => x instanceof TuiCalendar,
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

    protected readonly icon = tuiTextfieldIconBinding(TUI_INPUT_DATE_OPTIONS);
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
                mode: ADAPTER[this.format().mode],
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
        const calendar = this.calendar();

        if (!calendar) {
            return;
        }

        calendar.value = this.value();
        calendar.disabledItemHandler = this.handlers.disabledItemHandler();
        calendar.min = this.min();
        calendar.max = this.max();
    }, TUI_ALLOW_SIGNAL_WRITES);

    protected readonly calendarOut = effect((onCleanup) => {
        const subscription = this.calendar()?.dayClick.subscribe((day) => {
            this.onChange(day);
            this.open.set(false);
        });

        onCleanup(() => subscription?.unsubscribe());
    });

    @Input('min')
    public minInput: TuiDay | null = this.options.min;

    @Input('max')
    public maxInput: TuiDay | null = this.options.max;

    public readonly native = this.el.type === 'date' && this.mobile;
    public readonly min = signal(this.options.min);
    public readonly max = signal(this.options.max);

    public ngOnChanges(): void {
        this.min.set(this.minInput || this.options.min);
        this.max.set(this.maxInput || this.options.max);
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
