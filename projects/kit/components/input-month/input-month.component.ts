import {NgIf} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    Input,
    signal,
    TemplateRef,
    ViewChild,
    ViewEncapsulation,
} from '@angular/core';
import {toSignal} from '@angular/core/rxjs-interop';
import {tuiAsControl, TuiControl} from '@taiga-ui/cdk/classes';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import type {TuiYear} from '@taiga-ui/cdk/date-time';
import {
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    tuiDateClamp,
    TuiDay,
    TuiMonth,
} from '@taiga-ui/cdk/date-time';
import {TUI_IS_MOBILE, tuiFallbackValueProvider} from '@taiga-ui/cdk/tokens';
import type {TuiBooleanHandler} from '@taiga-ui/cdk/types';
import {
    tuiInjectElement,
    tuiIsElement,
    tuiIsInput,
    tuiValueBinding,
} from '@taiga-ui/cdk/utils/dom';
import {tuiDirectiveBinding} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    TUI_TEXTFIELD_OPTIONS,
    TuiTextfield,
    TuiTextfieldContent,
    TuiTextfieldDropdownDirective,
    TuiWithTextfield,
} from '@taiga-ui/core/components/textfield';
import {
    tuiDropdown,
    TuiDropdownDirective,
    tuiDropdownOpen,
    tuiDropdownOptionsProvider,
    TuiWithDropdownOpen,
} from '@taiga-ui/core/directives/dropdown';
import {TuiIcons} from '@taiga-ui/core/directives/icons';
import {TuiCalendarMonth} from '@taiga-ui/kit/components/calendar-month';
import {TUI_MONTH_FORMATTER} from '@taiga-ui/kit/tokens';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';

import {TUI_INPUT_MONTH_OPTIONS} from './input-month.options';

@Component({
    standalone: true,
    selector: 'input[tuiInputMonth]',
    imports: [NgIf, TuiCalendarMonth, TuiTextfield, TuiTextfieldContent],
    templateUrl: './input-month.template.html',
    styleUrls: ['./input-month.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsControl(TuiInputMonth),
        tuiFallbackValueProvider(null),
        tuiDropdownOptionsProvider({limitWidth: 'auto'}),
    ],
    hostDirectives: [TuiWithTextfield, TuiDropdownDirective, TuiWithDropdownOpen],
    host: {
        inputMode: 'none',
        '[type]': '"text"', // Override possible <input type="month" />
        '[disabled]': 'disabled()',
        '(click)': 'toggleDropdown()',
        // Make <input/> readonly (without readonly appearance)
        '(beforeinput)': '$event.inputType.includes("delete") || $event.preventDefault()',
        '(input)': '$event.inputType.includes("delete") && clear()',
    },
})
export class TuiInputMonth extends TuiControl<TuiMonth | null> {
    private readonly element = tuiInjectElement<HTMLInputElement>();
    private readonly options = inject(TUI_INPUT_MONTH_OPTIONS);
    private readonly size = inject(TUI_TEXTFIELD_OPTIONS).size;
    private readonly dropdown = tuiDropdown(null);
    private readonly open = tuiDropdownOpen();

    protected useNativePicker = inject(TUI_IS_MOBILE) && this.element.type === 'month';
    protected readonly formatter = toSignal(inject(TUI_MONTH_FORMATTER), {
        initialValue: () => '',
    });

    protected readonly icon = tuiDirectiveBinding(
        TuiIcons,
        'iconEnd',
        computed(() => this.options.icon(this.size())),
        {},
    );

    protected textfieldValue = tuiValueBinding(
        computed(() => this.formatter()(this.value())),
    );

    protected min = signal<TuiMonth | null>(null);
    protected max = signal<TuiMonth | null>(null);
    protected defaultActiveYear = signal<TuiYear>(TuiDay.currentLocal());
    /**
     * TODO: use linkedSignal (Angular 19+) instead of `selectedYear` / `year` properties
     * ```ts
     * protected year = linkedSignal<TuiYear | null, TuiYear>({
     *     source: computed(
     *         () =>
     *             this.value() ||
     *             tuiDateClamp(
     *                 this.defaultActiveYear(),
     *                 this.min() ?? TUI_FIRST_DAY,
     *                 this.max() ?? TUI_LAST_DAY,
     *             ),
     *     ),
     *     computation: (fallback, year) => year ?? fallback,
     * });
     * ```
     */
    protected selectedYear = signal<TuiYear | null>(null);
    protected year = computed(
        () =>
            this.selectedYear() ||
            this.value() ||
            tuiDateClamp(
                this.defaultActiveYear(),
                this.min() ?? TUI_FIRST_DAY,
                this.max() ?? TUI_LAST_DAY,
            ),
    );

    @Input()
    public disabledItemHandler: TuiBooleanHandler<TuiMonth> = TUI_FALSE_HANDLER;

    // TODO(v5): use signal input
    @Input('min')
    public set minSetter(x: TuiMonth | null) {
        this.min.set(x);
    }

    // TODO(v5): use signal input
    @Input('max')
    public set maxSetter(x: TuiMonth | null) {
        this.max.set(x);
    }

    // TODO(v5): use signal input
    @Input('defaultActiveYear')
    public set defaultActiveYearSetter(x: TuiYear) {
        this.defaultActiveYear.set(x);
    }

    public onMonthClick(month: TuiMonth): void {
        this.onChange(month);
        this.open.set(false);
    }

    public override setDisabledState(): void {
        super.setDisabledState();
        this.open.set(false);
    }

    @ViewChild(TuiTextfieldDropdownDirective, {read: TemplateRef})
    protected set template(template: PolymorpheusContent) {
        this.dropdown.set(template);
    }

    protected toggleDropdown(): void {
        this.open.update((x) => !x);
    }

    protected onNativePickerInput({target}: Event): void {
        const value = tuiIsElement(target) && tuiIsInput(target) ? target.value : '';

        if (!value) {
            return this.clear();
        }

        const [year = 0, month = 0] = value.split('-').map(Number);
        const min = this.min() || TUI_LAST_DAY;
        const max = this.max() || TUI_FIRST_DAY;

        this.onChange(tuiDateClamp(new TuiMonth(year, month - 1), min, max));
    }

    protected clear(): void {
        this.open.set(!this.useNativePicker);
        this.onChange(null);
    }
}
