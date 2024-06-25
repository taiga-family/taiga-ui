import type {QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ContentChildren,
    HostBinding,
    HostListener,
    inject,
    InjectionToken,
    Input,
    ViewChild,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import type {MaskitoOptions} from '@maskito/core';
import {
    maskitoCaretGuard,
    maskitoNumberOptionsGenerator,
    maskitoParseNumber,
} from '@maskito/kit';
import type {TuiValueTransformer} from '@taiga-ui/cdk/classes';
import {CHAR_HYPHEN, CHAR_MINUS, EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import {tuiWatch} from '@taiga-ui/cdk/observables';
import {TUI_IS_IOS} from '@taiga-ui/cdk/tokens';
import {tuiClamp} from '@taiga-ui/cdk/utils/math';
import {tuiPure} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiDecimalMode} from '@taiga-ui/core/tokens';
import {TUI_DEFAULT_NUMBER_FORMAT, TUI_NUMBER_FORMAT} from '@taiga-ui/core/tokens';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';
import {tuiFormatNumber} from '@taiga-ui/core/utils/format';
import {AbstractTuiNullableControl, tuiAsControl} from '@taiga-ui/legacy/classes';
import {TuiPrimitiveTextfieldComponent} from '@taiga-ui/legacy/components/primitive-textfield';
import {
    TEXTFIELD_CONTROLLER_PROVIDER,
    TUI_TEXTFIELD_SIZE,
    TUI_TEXTFIELD_WATCHED_CONTROLLER,
} from '@taiga-ui/legacy/directives';
import type {TuiFocusableElementAccessor} from '@taiga-ui/legacy/tokens';
import {tuiAsFocusableItemAccessor} from '@taiga-ui/legacy/tokens';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import type {TuiInputNumberOptions} from './input-number.options';
import {TUI_INPUT_NUMBER_OPTIONS} from './input-number.options';

const DEFAULT_MAX_LENGTH = 18;

/**
 * @deprecated: drop in v5.0
 */
export const TUI_NUMBER_VALUE_TRANSFORMER = new InjectionToken<
    TuiValueTransformer<number | null>
>('');

/**
 * @deprecated: drop in v5.0
 */
@Component({
    selector: 'tui-input-number',
    templateUrl: './input-number.template.html',
    styleUrls: ['./input-number.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputNumberComponent),
        tuiAsControl(TuiInputNumberComponent),
        TEXTFIELD_CONTROLLER_PROVIDER,
    ],
})
export class TuiInputNumberComponent
    extends AbstractTuiNullableControl<number>
    implements TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    private readonly isIOS = inject(TUI_IS_IOS);
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);
    private readonly options = inject(TUI_INPUT_NUMBER_OPTIONS);
    private unfinishedValue: string | null = '';

    @ContentChildren(PolymorpheusOutlet, {descendants: true})
    protected readonly polymorpheusValueContent: QueryList<unknown> = EMPTY_QUERY;

    protected override readonly valueTransformer = inject<
        TuiValueTransformer<number | null>
    >(TUI_NUMBER_VALUE_TRANSFORMER, {optional: true});

    protected numberFormat = TUI_DEFAULT_NUMBER_FORMAT;
    protected readonly controller = inject(TUI_TEXTFIELD_WATCHED_CONTROLLER);
    protected readonly numberFormat$ = inject(TUI_NUMBER_FORMAT)
        .pipe(tuiWatch(this.cdr), takeUntilDestroyed())
        .subscribe(format => {
            this.numberFormat = format;
        });

    @Input()
    public min: number | null = this.options.min;

    @Input()
    public max: number | null = this.options.max;

    @Input()
    public step = this.options.step;

    public get nativeFocusableElement(): HTMLInputElement | null {
        return !this.textfield || this.computedDisabled
            ? null
            : this.textfield.nativeFocusableElement;
    }

    public get focused(): boolean {
        return !!this.textfield?.focused;
    }

    public get inputMode(): string {
        if (this.isIOS && this.isNegativeAllowed) {
            // iPhone does not have minus sign if inputMode is equal to 'numeric' / 'decimal'
            return 'text';
        }

        return !this.precision ? 'numeric' : 'decimal';
    }

    public get calculatedMaxLength(): number {
        const decimalPart =
            !!this.precision &&
            this.nativeValue.includes(this.numberFormat.decimalSeparator);
        const precision = decimalPart ? Math.min(this.precision + 1, 20) : 0;
        const takeThousand = this.numberFormat.thousandSeparator.repeat(5).length;

        return DEFAULT_MAX_LENGTH + precision + takeThousand;
    }

    public get computedValue(): string {
        return this.focused ? this.nativeValue : this.formattedValue;
    }

    public onValueChange(nativeValue: string): void {
        const parsedValue = maskitoParseNumber(
            nativeValue,
            this.numberFormat.decimalSeparator,
        );

        this.unfinishedValue = null;

        if (Number.isNaN(parsedValue)) {
            this.value = null;

            return;
        }

        if (this.isNativeValueNotFinished) {
            this.unfinishedValue = nativeValue;
            this.cdr.markForCheck();

            return;
        }

        if (parsedValue < this.computedMin || parsedValue > this.computedMax) {
            return;
        }

        this.value = parsedValue;
    }

    public override writeValue(value: number | null): void {
        super.writeValue(value);
        this.nativeValue = this.formattedValue;
    }

    @HostBinding('attr.data-size')
    protected get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    protected get icons(): TuiInputNumberOptions['icons'] {
        return this.options.icons;
    }

    protected get computedMin(): number {
        return this.computeMin(this.min, this.max);
    }

    protected get computedMax(): number {
        return this.computeMax(this.min, this.max);
    }

    protected get isNegativeAllowed(): boolean {
        return this.computedMin < 0;
    }

    protected get formattedValue(): string {
        return this.value !== null ? this.getFormattedValue(this.value || 0) : '';
    }

    protected get canDecrement(): boolean {
        return this.interactive && (this.value || 0) > this.computedMin;
    }

    protected get canIncrement(): boolean {
        return this.interactive && (this.value || 0) < this.computedMax;
    }

    protected get computedPrefix(): string {
        return this.controller.prefix;
    }

    protected get computedPostfix(): string {
        const postfix = this.controller.postfix;

        return postfix && ` ${postfix}`;
    }

    protected get mask(): MaskitoOptions {
        return this.calculateMask(
            this.precision,
            this.numberFormat.decimalMode,
            this.numberFormat.decimalSeparator,
            this.numberFormat.thousandSeparator,
            this.computedMin,
            this.computedMax,
            this.computedPrefix,
            this.computedPostfix,
        );
    }

    protected get nativeValue(): string {
        return this.nativeFocusableElement?.value || '';
    }

    protected set nativeValue(value: string) {
        if (!this.textfield || !this.nativeFocusableElement) {
            return;
        }

        this.textfield.value = value;
        this.nativeFocusableElement.value = value;
    }

    @HostListener('keydown.arrowDown', ['-step'])
    @HostListener('keydown.arrowUp', ['step'])
    protected onArrow(step: number | null): void {
        if (!step) {
            return;
        }

        this.value = tuiClamp(
            (this.value || 0) + step,
            this.computedMin,
            this.computedMax,
        );
        this.nativeValue = this.formattedValue;
    }

    protected onFocused(focused: boolean): void {
        this.updateFocused(focused);

        const nativeNumberValue = this.unfinishedValue
            ? maskitoParseNumber(this.unfinishedValue, this.numberFormat.decimalSeparator)
            : this.nativeNumberValue;

        this.unfinishedValue = null;

        if (Number.isNaN(nativeNumberValue)) {
            this.nativeValue = focused ? this.computedPrefix + this.computedPostfix : '';
            this.value = null;

            return;
        }

        if (!focused) {
            this.value = nativeNumberValue;
            this.nativeValue = this.formattedValue;
        }
    }

    protected getFormattedValue(value: number): string {
        return (
            this.computedPrefix +
            tuiFormatNumber(value, {
                ...this.numberFormat,
                precision: this.precision,
            }).replace(CHAR_HYPHEN, CHAR_MINUS) +
            this.computedPostfix
        );
    }

    private get isNativeValueNotFinished(): boolean {
        const nativeNumberValue = this.nativeNumberValue;

        return nativeNumberValue < 0
            ? nativeNumberValue > this.computedMax
            : nativeNumberValue < this.computedMin;
    }

    private get nativeNumberValue(): number {
        return maskitoParseNumber(this.nativeValue, this.numberFormat.decimalSeparator);
    }

    private get precision(): number {
        return Number.isNaN(this.numberFormat.precision)
            ? 2
            : this.numberFormat.precision;
    }

    @tuiPure
    private computeMin(min: number | null, max: number | null): number {
        return Math.min(
            this.valueTransformer?.fromControlValue(min) ?? min ?? this.options.min,
            this.valueTransformer?.fromControlValue(max) ?? max ?? this.options.max,
        );
    }

    @tuiPure
    private computeMax(min: number | null, max: number | null): number {
        return Math.max(
            this.valueTransformer?.fromControlValue(min) ?? min ?? this.options.min,
            this.valueTransformer?.fromControlValue(max) ?? max ?? this.options.max,
        );
    }

    @tuiPure
    private calculateMask(
        precision: number,
        decimalMode: TuiDecimalMode,
        decimalSeparator: string,
        thousandSeparator: string,
        min: number,
        max: number,
        prefix: string,
        postfix: string,
    ): MaskitoOptions {
        const generatorParams = {
            decimalSeparator,
            thousandSeparator,
            min,
            max,
            prefix,
            postfix,
            precision,
            decimalZeroPadding: decimalMode === 'always',
        };
        const {plugins, ...options} = maskitoNumberOptionsGenerator(generatorParams);

        return {
            ...options,
            plugins: [
                ...plugins,
                maskitoCaretGuard(value => [
                    prefix.length,
                    value.length - postfix.length,
                ]),
            ],
        };
    }
}
