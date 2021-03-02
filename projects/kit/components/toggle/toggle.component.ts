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
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {
    TuiAppearance,
    TuiBrightness,
    TuiModeDirective,
    TuiSizeL,
    TuiSizeXS,
} from '@taiga-ui/core';

@Component({
    selector: 'tui-toggle',
    templateUrl: './toggle.template.html',
    styleUrls: ['./toggle.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiToggleComponent),
        },
    ],
})
export class TuiToggleComponent
    extends AbstractTuiControl<boolean>
    implements TuiFocusableElementAccessor {
    @Input()
    @tuiDefaultProp()
    singleColor = false;

    @Input()
    @tuiDefaultProp()
    showIcons = false;

    @Input()
    @tuiDefaultProp()
    showLoader = false;

    @Input()
    @HostBinding('attr.data-tui-host-size')
    @tuiDefaultProp()
    size: TuiSizeL = 'm';

    @ViewChild('focusableElement')
    private readonly focusableElement?: ElementRef<TuiNativeFocusableElement>;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Optional()
        @Inject(TuiModeDirective)
        private readonly modeDirective: TuiModeDirective | null,
    ) {
        super(control, changeDetectorRef);
    }

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.focusableElement ? this.focusableElement.nativeElement : null;
    }

    get focused(): boolean {
        return isNativeFocused(this.nativeFocusableElement);
    }

    get appearance(): TuiAppearance {
        return this.singleColor || this.checked
            ? TuiAppearance.Primary
            : TuiAppearance.Secondary;
    }

    get sizeM(): boolean {
        return this.size === 'm';
    }

    @HostBinding('class._checked')
    get checked(): boolean {
        return this.value;
    }

    get iconOn(): string {
        return this.sizeM ? 'tuiIconToggleOn' : 'tuiIconToggleOnLarge';
    }

    get iconOff(): string {
        return this.sizeM ? 'tuiIconToggleOff' : 'tuiIconToggleOffLarge';
    }

    get loaderSize(): TuiSizeXS {
        return this.sizeM ? 'xs' : 's';
    }

    @HostBinding('attr.data-mode')
    get hostMode(): TuiBrightness | null {
        return this.modeDirective ? this.modeDirective.mode : null;
    }

    onChecked(checked: boolean) {
        this.updateValue(checked);
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

    onFocusVisible(focusVisible: boolean) {
        this.updateFocusVisible(focusVisible);
    }

    protected getFallbackValue(): boolean {
        return false;
    }
}
