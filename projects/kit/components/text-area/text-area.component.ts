import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    forwardRef,
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
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TUI_IS_IOS,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
} from '@taiga-ui/cdk';
import {
    HINT_CONTROLLER_PROVIDER,
    TEXTFIELD_CONTROLLER_PROVIDER,
    TUI_HINT_WATCHED_CONTROLLER,
    TUI_TEXTFIELD_APPEARANCE,
    TUI_TEXTIFELD_WATCHED_CONTROLLER,
    TuiBrightness,
    TuiHintControllerDirective,
    TuiModeDirective,
    TuiSizeL,
    TuiSizeS,
    TuiTextfieldController,
} from '@taiga-ui/core';

export const DEFAULT_ROWS = 20;
export const LINE_HEIGHT_M = 20;
export const LINE_HEIGHT_L = 24;

@Component({
    selector: 'tui-text-area',
    templateUrl: './text-area.template.html',
    styleUrls: ['./text-area.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiTextAreaComponent),
        },
        TEXTFIELD_CONTROLLER_PROVIDER,
        HINT_CONTROLLER_PROVIDER,
    ],
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

    @HostBinding('class._ios')
    readonly isIOS: boolean;

    @ViewChild('focusableElement')
    private readonly focusableElement?: ElementRef<HTMLTextAreaElement>;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_TEXTFIELD_APPEARANCE) readonly appearance: string,
        @Inject(TUI_IS_IOS) isIOS: boolean,
        @Optional()
        @Inject(TuiModeDirective)
        private readonly modeDirective: TuiModeDirective | null,
        @Inject(TUI_TEXTIFELD_WATCHED_CONTROLLER)
        readonly controller: TuiTextfieldController,
        @Inject(TUI_HINT_WATCHED_CONTROLLER)
        readonly hintController: TuiHintControllerDirective,
    ) {
        super(control, changeDetectorRef);

        this.isIOS = isIOS;
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

    @HostBinding('attr.data-tui-host-mode')
    get hostMode(): TuiBrightness | null {
        return this.modeDirective && this.modeDirective.mode;
    }

    get placeholderRaised(): boolean {
        return (
            !this.controller.labelOutside &&
            ((this.computedFocused && !this.readOnly) || this.hasValue)
        );
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
