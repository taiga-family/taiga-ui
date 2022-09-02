import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    HostBinding,
    Inject,
    Input,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import type {
    TuiFocusableElementAccessor,
    TuiIdentityMatcher,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {
    AbstractTuiNullableControl,
    TUI_DEFAULT_IDENTITY_MATCHER,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    tuiDefaultProp,
} from '@taiga-ui/cdk';
import type {TuiHorizontalDirection, TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TuiAppearance, TuiModeDirective} from '@taiga-ui/core';
import {TuiRadioComponent} from '@taiga-ui/kit/components/radio';

@Component({
    selector: `tui-radio-block`,
    templateUrl: `./radio-block.template.html`,
    styleUrls: [`./radio-block.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiRadioBlockComponent),
        tuiAsControl(TuiRadioBlockComponent),
    ],
})
export class TuiRadioBlockComponent<T>
    extends AbstractTuiNullableControl<T>
    implements TuiFocusableElementAccessor
{
    @ViewChild(TuiRadioComponent)
    private readonly radio?: TuiRadioComponent<T>;

    @Input()
    item?: T;

    @Input()
    @tuiDefaultProp()
    identityMatcher: TuiIdentityMatcher<T> = TUI_DEFAULT_IDENTITY_MATCHER;

    @Input()
    @HostBinding(`attr.data-tui-host-align`)
    @tuiDefaultProp()
    contentAlign: TuiHorizontalDirection = `right`;

    @Input()
    @HostBinding(`attr.data-size`)
    @tuiDefaultProp()
    size: TuiSizeS | TuiSizeL = `l`;

    @Input()
    @HostBinding(`class._hidden_radio`)
    @tuiDefaultProp()
    hideRadio = false;

    @Input()
    @tuiDefaultProp()
    pseudoDisabled = false;

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

    @HostBinding(`class._disabled`)
    override get computedDisabled(): boolean {
        return this.disabled || this.pseudoDisabled;
    }

    @HostBinding(`class._active`)
    get checked(): boolean {
        return this.value === this.item && this.hideRadio;
    }

    get checkboxSize(): TuiSizeL {
        return this.size === `l` ? `l` : `m`;
    }

    get appearance(): TuiAppearance {
        if (!this.modeDirective?.mode) {
            return this.checked
                ? TuiAppearance.WhiteblockActive
                : TuiAppearance.Whiteblock;
        }

        return this.checked ? TuiAppearance.Primary : TuiAppearance.Secondary;
    }

    onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    onFocusVisible(focusVisible: boolean): void {
        this.updateFocusVisible(focusVisible);
    }

    onModelChange(value: T): void {
        this.updateValue(value);
    }
}
