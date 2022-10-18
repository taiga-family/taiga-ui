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
import {
    AbstractTuiNullableControl,
    ALWAYS_FALSE_HANDLER,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    TuiBooleanHandler,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiYear,
} from '@taiga-ui/cdk';
import {
    TUI_DIGIT_REGEXP,
    TuiPrimitiveTextfieldComponent,
    TuiWithOptionalMinMax,
} from '@taiga-ui/core';
import {TUI_INPUT_DATE_OPTIONS, TuiInputDateOptions} from '@taiga-ui/kit/tokens';

@Component({
    selector: `tui-input-year`,
    templateUrl: `./input-year.template.html`,
    styleUrls: [`./input-year.style.less`],
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

    readonly textMaskOptions = {
        mask: new Array(4).fill(TUI_DIGIT_REGEXP),
        guide: false,
    };

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_INPUT_DATE_OPTIONS)
        private readonly options: TuiInputDateOptions,
    ) {
        super(control, changeDetectorRef);
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

    onValueChange(value: string): void {
        this.updateValue(value ? Number(value.slice(0, 4)) : null);
    }

    onYearClick({year}: TuiYear): void {
        this.updateValue(year);
        this.onOpenChange(false);
    }

    onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    onOpenChange(open: boolean): void {
        this.open = open;
    }

    toggle(): void {
        this.open = !this.open;
    }
}
