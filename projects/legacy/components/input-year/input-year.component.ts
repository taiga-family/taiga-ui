import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import type {MaskitoOptions} from '@maskito/core';
import {maskitoNumberOptionsGenerator} from '@maskito/kit';
import {TUI_FALSE_HANDLER} from '@taiga-ui/cdk/constants';
import {MAX_YEAR, MIN_YEAR} from '@taiga-ui/cdk/date-time';
import type {TuiBooleanHandler} from '@taiga-ui/cdk/types';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import type {TuiInputDateOptions} from '@taiga-ui/kit/tokens';
import {TUI_INPUT_DATE_OPTIONS} from '@taiga-ui/kit/tokens';
import {AbstractTuiNullableControl, tuiAsControl} from '@taiga-ui/legacy/classes';
import {TuiPrimitiveTextfieldComponent} from '@taiga-ui/legacy/components/primitive-textfield';
import {TUI_TEXTFIELD_SIZE} from '@taiga-ui/legacy/directives';
import type {TuiFocusableElementAccessor} from '@taiga-ui/legacy/tokens';
import {tuiAsFocusableItemAccessor} from '@taiga-ui/legacy/tokens';

const UP_TO_4_DIGITS_REG = /^\d{0,4}$/;

/**
 * TODO(v5): delete it
 * @deprecated use new version of {@link https://taiga-ui.dev/components/input-year TuiInputYear} (from @taiga-ui/kit) instead
 */
@Component({
    standalone: false,
    selector: 'tui-input-year',
    templateUrl: './input-year.template.html',
    styleUrls: ['./input-year.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputYearComponent),
        tuiAsControl(TuiInputYearComponent),
    ],
    host: {
        '[attr.data-size]': 'size',
    },
})
export class TuiInputYearComponent
    extends AbstractTuiNullableControl<number>
    implements TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    private readonly options = inject(TUI_INPUT_DATE_OPTIONS);
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);

    protected open = false;
    protected readonly initialItem = new Date().getFullYear();

    @Input()
    public min: number | null = this.options.min.year;

    @Input()
    public max: number | null = this.options.max.year;

    @Input()
    public disabledItemHandler: TuiBooleanHandler<number> = TUI_FALSE_HANDLER;

    public nativeValue = '';

    public get nativeFocusableElement(): HTMLInputElement | null {
        return this.textfield?.nativeFocusableElement || null;
    }

    public get focused(): boolean {
        return !!this.textfield?.focused;
    }

    public onValueChange(value: string): void {
        this.value = value ? Number(value) : null;
    }

    public override writeValue(value: number | null): void {
        super.writeValue(value);
        this.updateNativeValue(this.value);
    }

    protected get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    protected get calendarIcon(): TuiInputDateOptions['icon'] {
        return this.options.icon;
    }

    @tuiPure
    protected getMaskOptions(min: number | null, max: number | null): MaskitoOptions {
        return {
            ...maskitoNumberOptionsGenerator({
                min: min ?? MIN_YEAR,
                max: max ?? MAX_YEAR,
                thousandSeparator: '',
            }),
            mask: UP_TO_4_DIGITS_REG,
        };
    }

    protected onYearClick(year: number): void {
        this.value = year;
        this.updateNativeValue(year);
        this.onOpenChange(false);
    }

    protected onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    protected onOpenChange(open: boolean): void {
        this.open = open;
    }

    protected toggle(): void {
        this.open = !this.open;
    }

    private updateNativeValue(value: number | null): void {
        this.nativeValue = value?.toString() || '';
    }
}
