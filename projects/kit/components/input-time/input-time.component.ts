import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    forwardRef,
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
    isNativeFocused,
    setNativeFocused,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TUI_STRICT_MATCHER,
    TuiBooleanHandler,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    tuiPure,
    TuiTime,
    TuiTimeLike,
    TuiTimeMode,
} from '@taiga-ui/cdk';
import {
    sizeBigger,
    TUI_TEXTFIELD_SIZE,
    TuiPrimitiveTextfieldComponent,
    TuiSizeL,
    TuiSizeS,
    TuiTextfieldSizeDirective,
    TuiTextMaskOptions,
} from '@taiga-ui/core';
import {FIXED_DROPDOWN_CONTROLLER_PROVIDER} from '@taiga-ui/kit/providers';
import {TUI_TIME_TEXTS} from '@taiga-ui/kit/tokens';
import {
    tuiCreateAutoCorrectedTimePipe,
    tuiCreateTimeMask,
} from '@taiga-ui/kit/utils/mask';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

// @dynamic
@Component({
    selector: 'tui-input-time',
    templateUrl: './input-time.template.html',
    styleUrls: ['./input-time.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiInputTimeComponent),
        },
        FIXED_DROPDOWN_CONTROLLER_PROVIDER,
    ],
})
export class TuiInputTimeComponent
    extends AbstractTuiNullableControl<TuiTime>
    implements TuiFocusableElementAccessor {
    @Input()
    @tuiDefaultProp()
    disabledItemHandler: TuiBooleanHandler<TuiTime> = ALWAYS_FALSE_HANDLER;

    @Input()
    @tuiDefaultProp()
    items: ReadonlyArray<TuiTime> = [];

    @Input()
    @tuiDefaultProp()
    itemSize: TuiSizeS | TuiSizeL = 'm';

    @Input()
    @tuiDefaultProp()
    strict = false;

    @Input()
    @tuiDefaultProp()
    mode: TuiTimeMode = 'HH:MM';

    open = false;

    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_TEXTFIELD_SIZE)
        private readonly textfieldSize: TuiTextfieldSizeDirective,
        @Inject(TUI_TIME_TEXTS)
        private readonly timeTexts$: Observable<Record<TuiTimeMode, string>>,
    ) {
        super(control, changeDetectorRef);
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.textfield ? this.textfield.nativeFocusableElement : null;
    }

    get focused(): boolean {
        return isNativeFocused(this.nativeFocusableElement);
    }

    get filtered(): ReadonlyArray<TuiTime> {
        return this.filter(this.items, this.mode, this.computedSearch);
    }

    get textMaskOptions(): TuiTextMaskOptions {
        return this.calculateMask(this.mode);
    }

    get computedValue(): string {
        return this.value ? this.value.toString(this.mode) : this.nativeValue;
    }

    get computedSearch(): string {
        return this.computedValue.length !== this.mode.length ? this.computedValue : '';
    }

    get interactive(): boolean {
        return !this.disabled && !this.readOnly;
    }

    get innerPseudoFocused(): boolean | null {
        if (this.pseudoFocused === false) {
            return false;
        }

        if (this.open || this.computedFocused) {
            return true;
        }

        return null;
    }

    get icon(): string {
        return sizeBigger(this.textfieldSize.size) ? 'tuiIconTimeLarge' : 'tuiIconTime';
    }

    get nativeValue(): string {
        return this.nativeFocusableElement ? this.nativeFocusableElement.value : '';
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

    onValueChange(value: string) {
        this.open = !!this.items.length;

        if (value && this.control) {
            this.control.updateValueAndValidity();
        }

        const match = this.getMatch(value);

        if (match !== undefined) {
            this.updateValue(match);

            return;
        }

        if (value.length !== this.mode.length) {
            this.updateValue(null);

            return;
        }

        const time = TuiTime.fromString(value);

        this.updateValue(this.strict ? this.findNearestTimeFromItems(time) : time);
    }

    onFocused(focused: boolean) {
        this.updateFocused(focused);

        if (
            focused ||
            this.value !== null ||
            this.nativeValue === '' ||
            this.mode === 'HH:MM'
        ) {
            return;
        }

        const parsedTime = TuiTime.fromString(this.nativeValue);

        this.updateValue(parsedTime);

        setTimeout(() => {
            if (this.nativeValue.endsWith('.') || this.nativeValue.endsWith(':')) {
                this.nativeValue = this.nativeValue.slice(0, -1);
            }
        });
    }

    onHovered(hovered: boolean) {
        this.updateHovered(hovered);
    }

    onArrowUp(event: KeyboardEvent) {
        if (this.items.length) {
            return;
        }

        this.processArrow(event, 1);
    }

    onArrowDown(event: KeyboardEvent) {
        if (this.items.length) {
            return;
        }

        this.processArrow(event, -1);
    }

    onMenuClick(item: TuiTime) {
        this.focusInput();
        this.updateValue(item);
    }

    onOpen(open: boolean) {
        this.open = open;
    }

    writeValue(value: TuiTime | null) {
        super.writeValue(value);
        this.nativeValue = value ? this.computedValue : '';
    }

    private findNearestTimeFromItems(value: TuiTime): TuiTime | null {
        return this.items.reduce((previous, current) =>
            Math.abs(current.toAbsoluteMilliseconds() - value.toAbsoluteMilliseconds()) <
            Math.abs(previous.toAbsoluteMilliseconds() - value.toAbsoluteMilliseconds())
                ? current
                : previous,
        );
    }

    private getMatch(value: string): TuiTime | undefined {
        return this.items.find(item => TUI_STRICT_MATCHER(item, value));
    }

    private close() {
        this.open = false;
    }

    private processArrow(event: KeyboardEvent, shift: -1 | 1) {
        const {target} = event;

        if (this.readOnly || !(target instanceof HTMLInputElement)) {
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

    private shiftTime(shift: TuiTimeLike) {
        if (this.value === null) {
            return;
        }

        const increasedTime = this.value.shift(shift);

        // Manual update so we can set caret position properly
        this.nativeValue = increasedTime.toString(this.mode);
        this.updateValue(increasedTime);
    }

    private focusInput(preventScroll: boolean = false) {
        if (this.nativeFocusableElement) {
            setNativeFocused(this.nativeFocusableElement, true, preventScroll);
            this.close();
        }
    }

    @tuiPure
    private calculateMask(mode: TuiTimeMode): TuiTextMaskOptions {
        return {
            mask: tuiCreateTimeMask(mode),
            pipe: tuiCreateAutoCorrectedTimePipe(mode),
            guide: false,
        };
    }

    @tuiPure
    private filter(
        items: ReadonlyArray<TuiTime>,
        mode: TuiTimeMode,
        search: string,
    ): ReadonlyArray<TuiTime> {
        return items.filter(item => item.toString(mode).includes(search));
    }
}
