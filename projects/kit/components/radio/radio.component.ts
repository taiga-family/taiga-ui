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
    AbstractTuiNullableControl,
    isNativeFocused,
    TUI_DEFAULT_IDENTITY_MATCHER,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiIdentityMatcher,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {tuiScaleIn, TuiSizeL} from '@taiga-ui/core';
import {TuiRadioGroupComponent} from '@taiga-ui/kit/components/radio-group';
import {RadioOptions, TUI_RADIO_OPTIONS} from './radio-options';

// @dynamic
@Component({
    selector: 'tui-radio',
    templateUrl: './radio.template.html',
    styleUrls: ['./radio.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiRadioComponent),
        },
    ],
    animations: [tuiScaleIn],
})
export class TuiRadioComponent<T>
    extends AbstractTuiNullableControl<T>
    implements TuiFocusableElementAccessor {
    @Input()
    item?: T;

    @Input()
    @tuiDefaultProp()
    identityMatcher: TuiIdentityMatcher<T> = TUI_DEFAULT_IDENTITY_MATCHER;

    @Input()
    @tuiDefaultProp()
    name: string | null = null;

    @Input()
    @HostBinding('attr.data-tui-host-size')
    @tuiDefaultProp()
    size: TuiSizeL = this.options.size;

    @Input()
    @tuiDefaultProp()
    pseudoDisabled = false;

    @ViewChild('focusableElement')
    private readonly focusableElement?: ElementRef<TuiNativeFocusableElement>;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_RADIO_OPTIONS)
        private readonly options: RadioOptions,
        @Optional()
        @Inject(TuiRadioGroupComponent)
        private readonly radioGroup: TuiRadioGroupComponent | null,
    ) {
        super(control, changeDetectorRef);
    }

    get appearance(): string {
        return this.checked
            ? this.options.appearances.checked
            : this.options.appearances.unchecked;
    }

    @HostBinding('class._disabled')
    get computedDisabled(): boolean {
        return this.disabled || this.pseudoDisabled;
    }

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return !this.focusableElement || this.computedDisabled
            ? null
            : this.focusableElement.nativeElement;
    }

    get focused(): boolean {
        return isNativeFocused(this.nativeFocusableElement);
    }

    get checked(): boolean {
        return this.value === null
            ? this.item === null
            : this.item !== undefined && this.identityMatcher(this.value, this.item);
    }

    get computedName(): string | number | null {
        return this.name || this.radioGroupName || this.controlName || null;
    }

    get isFocusable(): boolean {
        return !this.readOnly && this.computedFocusable;
    }

    onChecked(checked: boolean) {
        if (checked) {
            this.updateValue(this.item !== undefined ? this.item : this.fallbackValue);
        }
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

    private get radioGroupName(): string | null {
        return this.radioGroup === null ? null : this.radioGroup.name;
    }
}
