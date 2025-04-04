import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    HostBinding,
    HostListener,
    Inject,
    Input,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {MaskitoOptions} from '@maskito/core';
import {maskitoTimeOptionsGenerator} from '@maskito/kit';
import {
    AbstractTuiNullableControl,
    AbstractTuiValueTransformer,
    ALWAYS_FALSE_HANDLER,
    TUI_IS_IOS,
    TUI_IS_MOBILE,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    TuiBooleanHandler,
    TuiFocusableElementAccessor,
    TuiIdentityMatcher,
    tuiIsElement,
    tuiIsInput,
    tuiIsNativeFocused,
    tuiPure,
    TuiTime,
    TuiTimeLike,
    TuiTimeMode,
} from '@taiga-ui/cdk';
import {
    TUI_TEXTFIELD_SIZE,
    tuiAsDataListHost,
    tuiAsOptionContent,
    TuiDataListHost,
    TuiPrimitiveTextfieldComponent,
    TuiSizeL,
    TuiSizeS,
    TuiTextfieldSizeDirective,
} from '@taiga-ui/core';
import {TUI_SELECT_OPTION} from '@taiga-ui/kit/components/select-option';
import {FIXED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit/providers';
import {TUI_TIME_TEXTS, TUI_TIME_VALUE_TRANSFORMER} from '@taiga-ui/kit/tokens';
import {Observable, timer} from 'rxjs';
import {map, takeUntil} from 'rxjs/operators';

import {TUI_INPUT_TIME_OPTIONS, TuiInputTimeOptions} from './input-time.options';

@Component({
    selector: 'tui-input-time',
    templateUrl: './input-time.template.html',
    styleUrls: ['./input-time.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputTimeComponent),
        tuiAsControl(TuiInputTimeComponent),
        tuiAsDataListHost(TuiInputTimeComponent),
        tuiAsOptionContent(TUI_SELECT_OPTION),
    ],
    viewProviders: [FIXED_DROPDOWN_CONTROLLER_PROVIDER],
})
export class TuiInputTimeComponent
    extends AbstractTuiNullableControl<TuiTime>
    implements TuiFocusableElementAccessor, TuiDataListHost<TuiTime>
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    @Input()
    disabledItemHandler: TuiBooleanHandler<TuiTime> = ALWAYS_FALSE_HANDLER;

    @Input()
    items: readonly TuiTime[] = [];

    @Input()
    itemsHidden = false;

    @Input()
    itemSize: TuiInputTimeOptions['itemSize'] = this.options.itemSize;

    @Input()
    strict = false;

    @Input()
    mode: TuiInputTimeOptions['mode'] = this.options.mode;

    /** @deprecated use `tuiTextfieldPostfix` from {@link TuiTextfieldControllerModule} instead */
    @Input()
    postfix: TuiInputTimeOptions['postfix'] = this.options.postfix;

    open = false;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) cdr: ChangeDetectorRef,
        @Inject(TUI_TIME_TEXTS)
        private readonly timeTexts$: Observable<Record<TuiTimeMode, string>>,
        @Inject(TUI_INPUT_TIME_OPTIONS)
        private readonly options: TuiInputTimeOptions,
        @Inject(TUI_IS_MOBILE) private readonly isMobile: boolean,
        @Inject(TUI_IS_IOS) private readonly isIos: boolean,
        @Inject(TUI_TEXTFIELD_SIZE)
        private readonly textfieldSize: TuiTextfieldSizeDirective,
        @Optional()
        @Inject(TUI_TIME_VALUE_TRANSFORMER)
        override readonly valueTransformer: AbstractTuiValueTransformer<TuiTime | null> | null,
    ) {
        super(control, cdr, valueTransformer);
    }

    @HostBinding('attr.data-size')
    get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.textfield?.nativeFocusableElement ?? null;
    }

    get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    get canOpen(): boolean {
        return this.interactive && !!this.filtered.length && !this.itemsHidden;
    }

    get filtered(): readonly TuiTime[] {
        return this.filter(this.items, this.mode, this.computedSearch);
    }

    get showNativePicker(): boolean {
        return (
            this.nativePicker &&
            (!this.isIos || (this.mode === 'HH:MM' && !this.items.length))
        );
    }

    get nativeDatalist(): boolean {
        return this.nativePicker && !this.isIos;
    }

    get maskOptions(): MaskitoOptions {
        return this.calculateMask(this.mode);
    }

    get computedValue(): string {
        return this.value ? this.value.toString(this.mode) : this.nativeValue;
    }

    get computedSearch(): string {
        return this.computedValue.length !== this.mode.length ? this.computedValue : '';
    }

    get innerPseudoFocused(): boolean | null {
        if (this.pseudoFocus === false) {
            return false;
        }

        if ((this.open && this.canOpen) || this.computedFocused) {
            return true;
        }

        return null;
    }

    get icon(): TuiInputTimeOptions['icon'] {
        return this.options.icon;
    }

    get nativeValue(): string {
        return this.nativeFocusableElement?.value || '';
    }

    set nativeValue(value: string) {
        if (!this.nativeFocusableElement) {
            return;
        }

        this.nativeFocusableElement.value = value;
    }

    @tuiPure
    getFiller$(mode: TuiTimeMode): Observable<string> {
        return this.timeTexts$.pipe(map(texts => texts[mode]));
    }

    @HostListener('click')
    onClick(): void {
        this.open = !this.open;
    }

    readonly identityMatcher: TuiIdentityMatcher<TuiTime> = (
        controlValue: TuiTime,
        dropdownValue: TuiTime,
    ) =>
        controlValue instanceof TuiTime &&
        controlValue.valueOf() === dropdownValue.valueOf();

    onValueChange(value: string): void {
        this.open = !!this.items.length;

        this.control?.updateValueAndValidity({emitEvent: false});

        if (value.length !== this.mode.length) {
            this.value = null;

            return;
        }

        const time = TuiTime.fromString(value);

        this.value = this.strict ? this.findNearestTimeFromItems(time) : time;
    }

    onFocused(focused: boolean): void {
        this.updateFocused(focused);

        if (
            focused ||
            this.value !== null ||
            this.nativeValue === '' ||
            this.mode === 'HH:MM'
        ) {
            return;
        }

        this.value = TuiTime.fromString(this.nativeValue);

        timer(0)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
                if (this.nativeValue.endsWith('.') || this.nativeValue.endsWith(':')) {
                    this.nativeValue = this.nativeValue.slice(0, -1);
                }
            });
    }

    onArrowUp(event: Event): void {
        if (this.items.length) {
            return;
        }

        this.processArrow(event, 1);
    }

    onArrowDown(event: Event): void {
        if (this.items.length) {
            return;
        }

        this.processArrow(event, -1);
    }

    checkOption(option: TuiTime): void {
        if (option.valueOf() === this.value?.valueOf()) {
            this.value = option;
        }
    }

    handleOption(item: TuiTime): void {
        this.focusInput();
        this.value = item;
    }

    onOpen(open: boolean): void {
        this.open = open;
    }

    override writeValue(value: TuiTime | null): void {
        super.writeValue(value);
        this.nativeValue = value ? this.computedValue : '';
    }

    private get nativePicker(): boolean {
        return !!this.options.nativePicker && this.isMobile;
    }

    @tuiPure
    private calculateMask(mode: TuiTimeMode): MaskitoOptions {
        const {HH, MM, SS, MS} = this.options.maxValues;

        return maskitoTimeOptionsGenerator({
            mode,
            timeSegmentMaxValues: {
                hours: HH,
                minutes: MM,
                seconds: SS,
                milliseconds: MS,
            },
        });
    }

    @tuiPure
    private filter(
        items: readonly TuiTime[],
        mode: TuiTimeMode,
        search: string,
    ): readonly TuiTime[] {
        return items.filter(item => item.toString(mode).includes(search));
    }

    private findNearestTimeFromItems(value: TuiTime): TuiTime | null {
        // eslint-disable-next-line no-restricted-syntax
        return this.items.reduce((previous, current) =>
            Math.abs(current.valueOf() - value.valueOf()) <
            Math.abs(previous.valueOf() - value.valueOf())
                ? current
                : previous,
        );
    }

    private close(): void {
        this.open = false;
    }

    private processArrow(event: Event, shift: -1 | 1): void {
        const {target} = event;

        if (this.readOnly || !tuiIsElement(target) || !tuiIsInput(target)) {
            return;
        }

        const selectionStart = target.selectionStart || 0;

        this.shiftTime(this.calculateShift(selectionStart, shift));

        target.setSelectionRange(selectionStart, selectionStart);
        event.preventDefault();
    }

    private calculateShift(selectionStart: number, shift: number): TuiTimeLike {
        if (selectionStart <= 2) {
            return {hours: shift};
        }

        if (selectionStart <= 5) {
            return {minutes: shift};
        }

        if (selectionStart <= 8) {
            return {seconds: shift};
        }

        return {ms: shift};
    }

    private shiftTime(shift: TuiTimeLike): void {
        if (this.value === null) {
            return;
        }

        const increasedTime = this.value.shift(shift);

        // Manual update so we can set caret position properly
        this.nativeValue = increasedTime.toString(this.mode);
        this.value = increasedTime;
    }

    private focusInput(preventScroll: boolean = false): void {
        if (this.nativeFocusableElement) {
            this.nativeFocusableElement.focus({preventScroll});
            this.close();
        }
    }
}
