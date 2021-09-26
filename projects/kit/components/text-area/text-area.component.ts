import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    HostBinding,
    Inject,
    Input,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiControl,
    isNativeFocused,
    setNativeFocused,
    TUI_IS_IOS,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
} from '@taiga-ui/cdk';
import {
    TUI_HINT_WATCHED_CONTROLLER,
    TUI_MODE,
    TUI_TEXTFIELD_APPEARANCE,
    TUI_TEXTFIELD_WATCHED_CONTROLLER,
    TuiBrightness,
    TuiHintControllerDirective,
    TuiSizeL,
    TuiSizeS,
    TuiTextfieldController,
} from '@taiga-ui/core';
import {Observable} from 'rxjs';
import {TUI_TEXT_AREA_PROVIDERS} from './text-area.providers';

export const DEFAULT_ROWS = 20;
export const LINE_HEIGHT_M = 20;
export const LINE_HEIGHT_L = 24;

@Component({
    selector: 'tui-text-area',
    templateUrl: './text-area.template.html',
    styleUrls: ['./text-area.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: TUI_TEXT_AREA_PROVIDERS,
    host: {
        '($.data-mode.attr)': 'mode$',
        '[class._ios]': 'isIOS',
    },
})
export class TuiTextAreaComponent
    extends AbstractTuiControl<string>
    implements TuiFocusableElementAccessor {
    @Input()
    @tuiDefaultProp()
    rows = DEFAULT_ROWS;

    @Input()
    @HostBinding('class._expandable')
    @tuiDefaultProp()
    expandable = false;

    @ViewChild('focusableElement')
    private readonly focusableElement?: ElementRef<HTMLTextAreaElement>;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_TEXTFIELD_APPEARANCE) readonly appearance: string,
        @Inject(TUI_IS_IOS) readonly isIOS: boolean,
        @Inject(TUI_MODE) readonly mode$: Observable<TuiBrightness | null>,
        @Inject(TUI_TEXTFIELD_WATCHED_CONTROLLER)
        readonly controller: TuiTextfieldController,
        @Inject(TUI_HINT_WATCHED_CONTROLLER)
        readonly hintController: TuiHintControllerDirective,
    ) {
        super(control, changeDetectorRef);
    }

    @HostBinding('class._label-outside')
    get labelOutside(): boolean {
        return this.controller.labelOutside;
    }

    get nativeFocusableElement(): HTMLTextAreaElement | null {
        return this.computedDisabled || !this.focusableElement
            ? null
            : this.focusableElement.nativeElement;
    }

    get focused(): boolean {
        return isNativeFocused(this.nativeFocusableElement);
    }

    @HostBinding('attr.data-tui-host-size')
    get size(): TuiSizeL | TuiSizeS {
        return this.controller.size;
    }

    @HostBinding('class._has-tooltip')
    get hasTooltip(): boolean {
        return !!this.hintController.content && !this.disabled;
    }

    @HostBinding('class._has-value')
    get hasValue(): boolean {
        return this.value !== '';
    }

    @HostBinding('class._has-counter')
    get hasCounter(): boolean {
        return !!this.controller.maxLength && !this.disabled && !this.readOnly;
    }

    get hasPlaceholder(): boolean {
        return !this.controller.labelOutside || (!this.hasValue && !this.hasExampleText);
    }

    get hasExampleText(): boolean {
        return (
            !!this.controller.exampleText &&
            this.focused &&
            !this.hasValue &&
            !this.readOnly
        );
    }

    get computeMaxHeight(): number | null {
        return this.expandable ? this.rows * this.lineHeight : null;
    }

    get placeholderRaised(): boolean {
        return (
            !this.controller.labelOutside &&
            ((this.computedFocused && !this.readOnly) || this.hasValue)
        );
    }

    get fittedContent(): string {
        return this.value.slice(0, this.controller.maxLength || Infinity);
    }

    get extraContent(): string {
        return this.value.slice(this.controller.maxLength || Infinity);
    }

    onFocused(focused: boolean) {
        this.updateFocused(focused);
    }

    onHovered(hovered: boolean) {
        this.updateHovered(hovered);
    }

    onPressed(pressed: boolean) {
        this.updatePressed(pressed);
    }

    onValue(value: string) {
        this.updateValue(value);
    }

    onMouseDown(event: MouseEvent) {
        if (event.target === this.nativeFocusableElement) {
            return;
        }

        event.preventDefault();

        if (this.nativeFocusableElement) {
            setNativeFocused(this.nativeFocusableElement);
        }
    }

    protected getFallbackValue(): string {
        return '';
    }

    private get lineHeight(): number {
        return this.controller.size === 'm' ? LINE_HEIGHT_M : LINE_HEIGHT_L;
    }
}
