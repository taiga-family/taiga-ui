import {computed, Directive, effect, inject, input} from '@angular/core';
import {MaskitoDirective} from '@maskito/angular';
import {maskitoDate} from '@maskito/kit';
import {tuiAsControl, tuiValueTransformerFrom} from '@taiga-ui/cdk/classes';
import {
    DATE_FILLER_LENGTH,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiDay,
} from '@taiga-ui/cdk/date-time';
import {tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/di';
import {tuiArrayToggle, tuiSetSignal} from '@taiga-ui/cdk/utils/miscellaneous';
import {AbstractTuiCalendar} from '@taiga-ui/core/components/calendar';
import {
    tuiAsTextfieldAccessor,
    tuiInjectAuxiliary,
} from '@taiga-ui/core/components/textfield';
import {TuiAppearance} from '@taiga-ui/core/directives/appearance';
import {tuiIconEnd} from '@taiga-ui/core/directives/icons';
import {TuiItemsHandlersDirective} from '@taiga-ui/core/directives/items-handlers';
import {TuiDropdownAuto} from '@taiga-ui/core/portals/dropdown';
import {TUI_DATE_FORMAT} from '@taiga-ui/core/tokens';
import {TuiInputChipDirective} from '@taiga-ui/kit/components/input-chip';
import {tuiWithDateFiller} from '@taiga-ui/kit/components/input-date';
import {tuiMaskito} from '@taiga-ui/kit/utils';

import {
    TUI_INPUT_DATE_MULTI_OPTIONS,
    tuiInjectInputDateMultiOptions,
} from './input-date-multi.options';

@Directive({
    selector: 'input[tuiInputDateMulti]',
    providers: [
        tuiAsControl(TuiInputDateMultiDirective),
        tuiFallbackValueProvider([]),
        tuiAsTextfieldAccessor(TuiInputDateMultiDirective),
        {
            provide: TuiAppearance,
            useFactory: () => inject(TuiAppearance, {skipSelf: true}),
        },
        {
            provide: TUI_INPUT_DATE_MULTI_OPTIONS,
            useFactory: tuiInjectInputDateMultiOptions,
        },
        tuiValueTransformerFrom(TUI_INPUT_DATE_MULTI_OPTIONS),
    ],
    hostDirectives: [TuiDropdownAuto, MaskitoDirective],
    host: {'(keydown.enter.prevent)': '0'},
})
export class TuiInputDateMultiDirective extends TuiInputChipDirective<TuiDay> {
    private readonly dateMultiOptions = inject(TUI_INPUT_DATE_MULTI_OPTIONS);

    protected readonly icon = tuiIconEnd(this.dateMultiOptions.icon);
    protected readonly filler = tuiWithDateFiller();
    protected readonly format = inject(TUI_DATE_FORMAT);

    protected readonly stringify = tuiDirectiveBinding(
        TuiItemsHandlersDirective,
        'stringify',
        (item) => item?.toString(this.format().mode, this.format().separator) ?? '',
        {},
    );

    protected readonly mask = tuiMaskito(
        computed(() =>
            maskitoDate({
                separator: this.format().separator,
                mode: this.format().mode,
                min: (this.min() ?? this.dateMultiOptions.min).toLocalNativeDate(),
                max: (this.max() ?? this.dateMultiOptions.max).toLocalNativeDate(),
            }),
        ),
    );

    protected readonly calendar = tuiInjectAuxiliary<AbstractTuiCalendar>(
        (x) => x instanceof AbstractTuiCalendar,
    );

    protected readonly calendarIn = effect(() => {
        const calendar = this.calendar();

        if (calendar) {
            this.processCalendar(calendar);
        }
    });

    protected readonly calendarOut = effect(() => {
        const value = this.calendar()?.value();

        if (value instanceof TuiDay) {
            this.updateValue(value);
        }
    });

    public readonly min = input(this.dateMultiOptions.min ?? TUI_FIRST_DAY, {
        transform: (min: TuiDay | null): TuiDay =>
            min instanceof TuiDay ? min : TUI_FIRST_DAY,
    });

    public readonly max = input(this.dateMultiOptions.max ?? TUI_LAST_DAY, {
        transform: (max: TuiDay | null): TuiDay =>
            max instanceof TuiDay ? max : TUI_LAST_DAY,
    });

    protected processCalendar(calendar: AbstractTuiCalendar): void {
        tuiSetSignal(calendar.value, this.value());
        tuiSetSignal(calendar.min, this.min());
        tuiSetSignal(calendar.max, this.max());
        calendar.month.update((m) => this.value()?.[this.value().length - 1] ?? m);
    }

    protected onClick(): void {
        this.open.update((open) => !open);
    }

    protected onValueChange(value: string): void {
        const newValue =
            value.length === DATE_FILLER_LENGTH
                ? TuiDay.normalizeParse(value, this.format().mode)
                : null;

        if (newValue && !this.handlers.disabledItemHandler()(newValue)) {
            this.updateValue(newValue);
        }
    }

    protected override onEnter(): void {
        this.onValueChange(this.textfield.value().trim());
        this.scrollTo();
    }

    private updateValue(day: TuiDay): void {
        this.setValue(tuiArrayToggle(this.value(), day, (a, b) => a.daySame(b)));
    }
}
