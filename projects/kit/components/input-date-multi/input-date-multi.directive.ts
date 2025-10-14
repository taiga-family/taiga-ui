import {computed, Directive, effect, inject, Input, signal} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {MaskitoDirective} from '@maskito/angular';
import {maskitoDateOptionsGenerator} from '@maskito/kit';
import {tuiAsControl} from '@taiga-ui/cdk/classes';
import {DATE_FILLER_LENGTH, TuiDay, TuiMonth} from '@taiga-ui/cdk/date-time';
import {TuiNativeValidator} from '@taiga-ui/cdk/directives/native-validator';
import {tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import {tuiArrayToggle} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiCalendar} from '@taiga-ui/core/components/calendar';
import {
    tuiAsTextfieldAccessor,
    tuiInjectAuxiliary,
    TuiTextfieldBase,
    tuiTextfieldIcon,
} from '@taiga-ui/core/components/textfield';
import {TuiDropdownAuto} from '@taiga-ui/core/directives/dropdown';
import {TUI_DATE_FORMAT, TUI_DEFAULT_DATE_FORMAT} from '@taiga-ui/core/tokens';
import {TuiInputChipBaseDirective} from '@taiga-ui/kit/components/input-chip';
import {
    TUI_DATE_ADAPTER,
    TUI_INPUT_DATE_OPTIONS_NEW,
    tuiWithDateFiller,
} from '@taiga-ui/kit/components/input-date';
import {tuiMaskito} from '@taiga-ui/kit/utils';

@Directive({
    standalone: true,
    selector: 'input[tuiInputDateMulti]',
    providers: [
        tuiAsControl(TuiInputDateMultiDirective),
        tuiFallbackValueProvider([]),
        tuiAsTextfieldAccessor(TuiInputDateMultiDirective),
    ],
    hostDirectives: [
        TuiNativeValidator,
        TuiDropdownAuto,
        MaskitoDirective,
        {
            directive: TuiTextfieldBase,
            inputs: ['invalid', 'focused', 'readOnly', 'state'],
        },
    ],
    host: {
        '(keydown.enter.prevent)': '0',
    },
})
export class TuiInputDateMultiDirective extends TuiInputChipBaseDirective<TuiDay> {
    private readonly dateOptions = inject(TUI_INPUT_DATE_OPTIONS_NEW);

    protected readonly icon = tuiTextfieldIcon(TUI_INPUT_DATE_OPTIONS_NEW);
    protected readonly filler = tuiWithDateFiller();
    protected readonly stringify = this.handlers.stringify.set((item) =>
        item.toString(this.format().mode, this.format().separator),
    );

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

    protected readonly format = toSignal(inject(TUI_DATE_FORMAT), {
        initialValue: TUI_DEFAULT_DATE_FORMAT,
    });

    protected readonly calendarIn = effect(() => {
        if (this.calendar()) {
            this.processCalendar(this.calendar()!);
        }
    });

    protected readonly calendarOut = effect((onCleanup) => {
        const subscription = this.calendar()?.dayClick.subscribe((day) => {
            this.updateValue(day);
        });

        onCleanup(() => subscription?.unsubscribe());
    });

    public readonly min = signal(this.dateOptions.min);
    public readonly max = signal(this.dateOptions.max);

    public readonly calendar = tuiInjectAuxiliary<TuiCalendar>(
        (x) => x instanceof TuiCalendar,
    );

    @Input('min')
    public set minSetter(min: TuiDay | null) {
        this.min.set(min || this.dateOptions.min);
    }

    @Input('max')
    public set maxSetter(max: TuiDay | null) {
        this.max.set(max || this.dateOptions.max);
    }

    protected processCalendar(calendar: TuiCalendar): void {
        calendar.value = this.value();
        calendar.min = this.min();
        calendar.max = this.max();
        calendar.month =
            this.value()?.[this.value().length - 1] ?? TuiMonth.currentLocal();
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
