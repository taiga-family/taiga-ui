import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
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
    TUI_DEFAULT_IDENTITY_MATCHER,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    TuiIdentityMatcher,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {TuiBrightness, TuiModeDirective, TuiSizeL} from '@taiga-ui/core';
import {TuiRadioComponent} from '@taiga-ui/kit/components/radio';

@Component({
    selector: 'tui-radio-labeled',
    templateUrl: './radio-labeled.template.html',
    styleUrls: ['./radio-labeled.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiRadioLabeledComponent),
        },
    ],
})
export class TuiRadioLabeledComponent<T>
    extends AbstractTuiNullableControl<T>
    implements TuiFocusableElementAccessor {
    @Input()
    item?: T;

    @Input()
    @HostBinding('attr.data-tui-host-size')
    @tuiDefaultProp()
    size: TuiSizeL = 'm';

    @Input()
    @tuiDefaultProp()
    identityMatcher: TuiIdentityMatcher<T> = TUI_DEFAULT_IDENTITY_MATCHER;

    @Input()
    @tuiDefaultProp()
    pseudoDisabled = false;

    @ViewChild(TuiRadioComponent)
    private readonly radio?: TuiRadioComponent<T>;

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
        return this.radio ? this.radio.nativeFocusableElement : null;
    }

    get focused(): boolean {
        return !!this.radio && this.radio.focused;
    }

    @HostBinding('class._disabled')
    get computedDisabled(): boolean {
        return this.disabled || this.pseudoDisabled;
    }

    @HostBinding('attr.data-mode')
    get mode(): TuiBrightness | null {
        return this.modeDirective ? this.modeDirective.mode : null;
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

    onModelChange(value: T) {
        this.updateValue(value);
    }
}
