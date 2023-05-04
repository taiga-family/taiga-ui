import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Inject,
    Input,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {MaskitoOptions} from '@maskito/core';
import {maskitoNumberOptionsGenerator} from '@maskito/kit';
import {
    AbstractTuiNullableControl,
    ALWAYS_FALSE_HANDLER,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    TuiBooleanHandler,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    tuiPure,
    TuiYear,
} from '@taiga-ui/cdk';
import {TuiPrimitiveTextfieldComponent, TuiWithOptionalMinMax} from '@taiga-ui/core';
import {TUI_INPUT_DATE_OPTIONS, TuiInputDateOptions} from '@taiga-ui/kit/tokens';

const UP_TO_4_DIGITS_REG = /^\d{0,4}$/;

@Component({
    selector: 'tui-input-year',
    templateUrl: './input-year.template.html',
    styleUrls: ['./input-year.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputYearComponent),
        tuiAsControl(TuiInputYearComponent),
    ],
})
export class TuiInputYearComponent
    extends AbstractTuiNullableControl<number>
    implements TuiWithOptionalMinMax<number>, TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    @Input()
    @tuiDefaultProp()
    min = this.options.min.year;

    @Input()
    @tuiDefaultProp()
    max = this.options.max.year;

    @Input()
    @tuiDefaultProp()
    disabledItemHandler: TuiBooleanHandler<number> = ALWAYS_FALSE_HANDLER;

    open = false;

    readonly initialItem = new Date().getFullYear();

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
        @Inject(TUI_INPUT_DATE_OPTIONS)
        private readonly options: TuiInputDateOptions,
    ) {
        super(control, cdr);
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.textfield ? this.textfield.nativeFocusableElement : null;
    }

    get focused(): boolean {
        return !!this.textfield && this.textfield.focused;
    }

    get calendarIcon(): TuiInputDateOptions['icon'] {
        return this.options.icon;
    }

    @tuiPure
    getMaskOptions(max: number): MaskitoOptions {
        return {
            ...maskitoNumberOptionsGenerator({
                max,
                thousandSeparator: '',
            }),
            mask: UP_TO_4_DIGITS_REG,
        };
    }

    onValueChange(value: string): void {
        this.value = value ? Number(value) : null;
    }

    onYearClick({year}: TuiYear): void {
        this.value = year;
        this.onOpenChange(false);
    }

    onFocused(focused: boolean): void {
        this.updateFocused(focused);

        if (!focused && this.value && this.value < this.min) {
            this.value = this.min;
        }
    }

    onOpenChange(open: boolean): void {
        this.open = open;
    }

    toggle(): void {
        this.open = !this.open;
    }
}
