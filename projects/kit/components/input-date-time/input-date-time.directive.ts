import {
    computed,
    Directive,
    effect,
    inject,
    Input,
    signal,
    untracked,
} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {type MaskitoOptions} from '@maskito/core';
import {
    maskitoDateTimeOptionsGenerator,
    type MaskitoDateTimeParams,
    maskitoSelectionChangeHandler,
    type MaskitoTimeMode,
} from '@maskito/kit';
import {tuiAsControl, tuiValueTransformerFrom} from '@taiga-ui/cdk/classes';
import {
    DATE_FILLER_LENGTH,
    MILLISECONDS_IN_DAY,
    TuiDay,
    TuiTime,
} from '@taiga-ui/cdk/date-time';
import {tuiClamp, tuiSum} from '@taiga-ui/cdk/utils/math';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/miscellaneous';
import {type TuiCalendar} from '@taiga-ui/core/components/calendar';
import {tuiAsOptionContent} from '@taiga-ui/core/components/data-list';
import {
    tuiAsTextfieldAccessor,
    type TuiTextfieldAccessor,
    TuiWithTextfield,
} from '@taiga-ui/core/components/textfield';
import {TuiDropdownAuto} from '@taiga-ui/core/directives/dropdown';
import {TuiItemsHandlersValidator} from '@taiga-ui/core/directives/items-handlers';
import {
    TUI_DATE_ADAPTER,
    TuiInputDateBase,
    tuiWithDateFiller,
} from '@taiga-ui/kit/components/input-date';
import {TuiSelectOption} from '@taiga-ui/kit/components/select';
import {TUI_TIME_TEXTS} from '@taiga-ui/kit/tokens';
import {tuiMaskito} from '@taiga-ui/kit/utils';
import {noop} from 'rxjs';

import {TUI_INPUT_DATE_TIME_OPTIONS} from './input-date-time.options';

const MIN_TIME = new TuiTime(0, 0);
const MAX_TIME = TuiTime.fromAbsoluteMilliseconds(MILLISECONDS_IN_DAY - 1);

@Directive({
    standalone: true,
    selector: 'input[tuiInputDateTime]',
    providers: [
        tuiAsOptionContent(TuiSelectOption),
        tuiAsControl(TuiInputDateTimeDirective),
        tuiAsTextfieldAccessor(TuiInputDateTimeDirective),
        tuiValueTransformerFrom(TUI_INPUT_DATE_TIME_OPTIONS),
    ],
    hostDirectives: [
        MaskitoDirective,
        TuiDropdownAuto,
        TuiItemsHandlersValidator,
        TuiWithTextfield,
    ],
})
export class TuiInputDateTimeDirective
    extends TuiInputDateBase<readonly [TuiDay, TuiTime | null]>
    implements TuiTextfieldAccessor<readonly [TuiDay, TuiTime | null]>
{
    private readonly timeFillers = inject(TUI_TIME_TEXTS);

    protected override readonly options = inject(TUI_INPUT_DATE_TIME_OPTIONS);

    protected override readonly filler = tuiWithDateFiller((date) => {
        const time = this.timeFillers()?.[this.timeMode()] ?? '';

        return `${date}${this.options.dateTimeSeparator}${time}`;
    });

    protected override valueEffect = effect(noop);

    protected readonly identity = this.handlers.identityMatcher.set(
        (a, b) => tuiSum(...a.map(Number)) === tuiSum(...b.map(Number)),
    );

    protected readonly disabledItemHandler = tuiDirectiveBinding(
        TuiItemsHandlersValidator,
        'disabledItemHandler',
        (value: readonly [TuiDay, TuiTime | null] | null) =>
            Boolean(value && this.handlers.disabledItemHandler()(value)),
    );

    protected readonly mask = tuiMaskito(
        computed(() =>
            this.computeMask({
                dateMode: TUI_DATE_ADAPTER[this.format().mode],
                timeMode: this.timeMode(),
                min: this.toNativeDate([this.min(), this.minTime()]),
                max: this.toNativeDate([this.max(), this.maxTime()]),
                dateSeparator: this.format().separator,
                dateTimeSeparator: this.options.dateTimeSeparator,
            }),
        ),
    );

    public readonly timeMode = signal(this.options.timeMode);
    public readonly minTime = signal(MIN_TIME);
    public readonly maxTime = signal(MAX_TIME);

    // TODO(v5): use signal inputs
    @Input('timeMode')
    public set timeModeSetter(x: MaskitoTimeMode) {
        this.timeMode.set(x);
    }

    @Input('min')
    public override set minSetter(
        min: TuiDay | readonly [TuiDay, TuiTime | null] | null,
    ) {
        const [date, time] = Array.isArray(min) ? min : [min, null];

        this.min.set(date || this.options.min);
        this.minTime.set(time ?? MIN_TIME);
    }

    @Input('max')
    public override set maxSetter(
        max: TuiDay | readonly [TuiDay, TuiTime | null] | null,
    ) {
        const [date, time] = Array.isArray(max) ? max : [max, null];

        this.max.set(date || this.options.max);
        this.maxTime.set(time ?? MAX_TIME);
    }

    public setValue(value: readonly [TuiDay, TuiTime | null] | null): void {
        this.onChange(value);
        this.textfield.value.set(this.stringify(value));
    }

    public override setDate(newDate: TuiDay): void {
        const [date, time] = this.clampTime([newDate, this.value()?.[1] ?? null]);

        this.setValue([date, time]);
        this.open.set(false);
        setTimeout(
            (caretIndex = DATE_FILLER_LENGTH + this.options.dateTimeSeparator.length) =>
                this.el.setSelectionRange(caretIndex, caretIndex),
        );
    }

    public override writeValue(value: [TuiDay, TuiTime | null] | null): void {
        const reset = this.control.pristine && this.control.untouched && !value;
        const changed = value !== this.value();

        if (changed || reset) {
            super.writeValue(value);
            untracked(() => this.textfield.value.set(this.stringify(this.value())));
        }
    }

    protected override processCalendar(calendar: TuiCalendar): void {
        super.processCalendar(calendar);
        calendar.disabledItemHandler = (day: TuiDay) =>
            this.handlers.disabledItemHandler()([day, null]);
    }

    protected override onValueChange(value: string): void {
        this.textfield.value.set(value);
        this.control?.control?.updateValueAndValidity({emitEvent: false});

        const [date = '', time = ''] = value.split(this.options.dateTimeSeparator);
        const parsedDate =
            date.length >= DATE_FILLER_LENGTH
                ? TuiDay.normalizeParse(date, this.format().mode)
                : null;
        const parsedTime =
            time.length === this.timeMode().length ? TuiTime.fromString(time) : null;

        if (!parsedDate || (time && !parsedTime)) {
            return this.onChange(null);
        }

        const [prevDate, prevTime = null] = this.value() ?? [];

        if (!prevDate?.daySame(parsedDate) || Number(parsedTime) !== Number(prevTime)) {
            this.onChange([parsedDate, parsedTime]);
        }
    }

    protected override stringify(
        value: readonly [TuiDay, TuiTime | null] | null,
    ): string {
        const [date, time] = value ?? [];

        const dateString =
            date?.toString(this.format().mode, this.format().separator) ?? '';
        const timeString = time?.toString(this.timeMode());

        return timeString
            ? `${dateString}${this.options.dateTimeSeparator}${timeString}`
            : dateString;
    }

    private clampTime([date, time]: [TuiDay, TuiTime | null]): [TuiDay, TuiTime | null] {
        const min = date.daySame(this.min())
            ? this.minTime().toAbsoluteMilliseconds()
            : -Infinity;
        const max = date.daySame(this.max())
            ? this.maxTime().toAbsoluteMilliseconds()
            : Infinity;

        return [
            date,
            time &&
                TuiTime.fromAbsoluteMilliseconds(
                    tuiClamp(time.toAbsoluteMilliseconds(), min, max),
                ),
        ];
    }

    private computeMask(
        params: Omit<Required<MaskitoDateTimeParams>, 'timeStep'>,
    ): MaskitoOptions {
        const options = maskitoDateTimeOptionsGenerator(params);
        const {timeMode, dateMode, dateTimeSeparator} = params;
        const inputModeSwitchPlugin = maskitoSelectionChangeHandler((element) => {
            element.inputMode =
                element.selectionStart! >=
                dateMode.length + dateTimeSeparator.length + timeMode.indexOf(' AA')
                    ? 'text'
                    : 'numeric';
        });

        return {
            ...options,
            plugins: options.plugins.concat(
                timeMode.includes('AA') ? inputModeSwitchPlugin : [],
            ),
        };
    }

    private toNativeDate([{year, month, day}, {hours, minutes, seconds, ms}]: readonly [
        TuiDay,
        TuiTime,
    ]): Date {
        return new Date(year, month, day, hours, minutes, seconds, ms);
    }
}
