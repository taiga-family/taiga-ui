import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    HostListener,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import {type MaskitoOptions} from '@maskito/core';
import {maskitoTimeOptionsGenerator} from '@maskito/kit';
import {
    AbstractTuiNullableControl,
    ALWAYS_FALSE_HANDLER,
    TUI_IS_IOS,
    TUI_IS_MOBILE,
    TUI_STRICT_MATCHER,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    type TuiBooleanHandler,
    type TuiFocusableElementAccessor,
    tuiIsElement,
    tuiIsInput,
    tuiIsNativeFocused,
    tuiPure,
    TuiTime,
    type TuiTimeLike,
    type TuiTimeMode,
} from '@taiga-ui/cdk';
import {
    TUI_TEXTFIELD_SIZE,
    tuiAsDataListHost,
    tuiAsOptionContent,
    type TuiDataListHost,
    TuiPrimitiveTextfieldComponent,
    type TuiSizeL,
    type TuiSizeS,
} from '@taiga-ui/core';
import {TUI_SELECT_OPTION} from '@taiga-ui/kit/components/select-option';
import {FIXED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit/providers';
import {TUI_TIME_TEXTS} from '@taiga-ui/kit/tokens';
import {map, type Observable, takeUntil, timer} from 'rxjs';

import {TUI_INPUT_TIME_OPTIONS, type TuiInputTimeOptions} from './input-time.options';

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

    private readonly timeTexts$ = inject(TUI_TIME_TEXTS);
    private readonly options = inject(TUI_INPUT_TIME_OPTIONS);
    private readonly isMobile = inject(TUI_IS_MOBILE);
    private readonly isIOS: boolean = inject(TUI_IS_IOS);
    private readonly textfieldSize = inject(TUI_TEXTFIELD_SIZE);

    @Input()
    public disabledItemHandler: TuiBooleanHandler<TuiTime> = ALWAYS_FALSE_HANDLER;

    @Input()
    public items: readonly TuiTime[] = [];

    @Input()
    public itemSize: TuiInputTimeOptions['itemSize'] = this.options.itemSize;

    @Input()
    public strict = false;

    @Input()
    public mode: TuiInputTimeOptions['mode'] = this.options.mode;

    protected open = false;

    public get nativeFocusableElement(): HTMLInputElement | null {
        return this.textfield?.nativeFocusableElement ?? null;
    }

    public get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    public get computedValue(): string {
        return this.value ? this.value.toString(this.mode) : this.nativeValue;
    }

    public get nativeValue(): string {
        return this.nativeFocusableElement?.value || '';
    }

    public set nativeValue(value: string) {
        if (!this.nativeFocusableElement) {
            return;
        }

        this.nativeFocusableElement.value = value;
    }

    public handleOption(item: TuiTime): void {
        this.focusInput();
        this.value = item;
    }

    public override writeValue(value: TuiTime | null): void {
        super.writeValue(value);
        this.nativeValue = value ? this.computedValue : '';
    }

    public onValueChange(value: string): void {
        this.open = !!this.items.length;

        if (this.control) {
            this.control.updateValueAndValidity({emitEvent: false});
        }

        const match = this.getMatch(value);

        if (match !== undefined) {
            this.value = match;

            return;
        }

        if (value.length !== this.mode.length) {
            this.value = null;

            return;
        }

        const time = TuiTime.fromString(value);

        this.value = this.strict ? this.findNearestTimeFromItems(time) : time;
    }

    @HostBinding('attr.data-size')
    protected get size(): TuiSizeL | TuiSizeS {
        return this.textfieldSize.size;
    }

    protected get canOpen(): boolean {
        return this.interactive && !!this.filtered.length;
    }

    protected get filtered(): readonly TuiTime[] {
        return this.filter(this.items, this.mode, this.computedSearch);
    }

    protected get showNativePicker(): boolean {
        return (
            this.nativePicker &&
            (!this.isIOS || (this.mode === 'HH:MM' && !this.items.length))
        );
    }

    protected get nativeDatalist(): boolean {
        return this.nativePicker && !this.isIOS;
    }

    protected get maskOptions(): MaskitoOptions {
        return this.calculateMask(this.mode);
    }

    protected get computedSearch(): string {
        return this.computedValue.length !== this.mode.length ? this.computedValue : '';
    }

    protected get innerPseudoFocused(): boolean | null {
        if (this.pseudoFocus === false) {
            return false;
        }

        if ((this.open && this.canOpen) || this.computedFocused) {
            return true;
        }

        return null;
    }

    protected get icon(): TuiInputTimeOptions['icon'] {
        return this.options.icon;
    }

    @tuiPure
    protected getFiller$(mode: TuiTimeMode): Observable<string> {
        return this.timeTexts$.pipe(map(texts => texts[mode]));
    }

    @HostListener('click')
    protected onClick(): void {
        this.open = !this.open;
    }

    protected onFocused(focused: boolean): void {
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

    protected onArrowUp(event: Event): void {
        if (this.items.length) {
            return;
        }

        this.processArrow(event, 1);
    }

    protected onArrowDown(event: Event): void {
        if (this.items.length) {
            return;
        }

        this.processArrow(event, -1);
    }

    protected onOpen(open: boolean): void {
        this.open = open;
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
        return this.items.reduce(
            (previous, current) =>
                Math.abs(current.valueOf() - value.valueOf()) <
                Math.abs(previous.valueOf() - value.valueOf())
                    ? current
                    : previous,
            new TuiTime(0, 0),
        );
    }

    private getMatch(value: string): TuiTime | undefined {
        return this.items.find(item => TUI_STRICT_MATCHER(item, value));
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

    private focusInput(preventScroll = false): void {
        if (this.nativeFocusableElement) {
            this.nativeFocusableElement.focus({preventScroll});
            this.close();
        }
    }
}
