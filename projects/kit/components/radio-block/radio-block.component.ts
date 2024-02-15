import {
    ChangeDetectionStrategy,
    Component,
    HostBinding,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import {
    AbstractTuiNullableControl,
    TUI_DEFAULT_IDENTITY_MATCHER,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    TuiFocusableElementAccessor,
    TuiIdentityMatcher,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {
    TuiAppearance,
    TuiHorizontalDirection,
    TuiModeDirective,
    TuiSizeL,
    TuiSizeXS,
} from '@taiga-ui/core';
import {TuiRadioComponent} from '@taiga-ui/kit/components/radio';

@Component({
    selector: 'tui-radio-block',
    templateUrl: './radio-block.template.html',
    styleUrls: ['../checkbox-block/checkbox-block.style.less'],
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
    identityMatcher: TuiIdentityMatcher<T> = TUI_DEFAULT_IDENTITY_MATCHER;

    @Input()
    @HostBinding('attr.data-align')
    contentAlign: TuiHorizontalDirection = 'right';

    @Input()
    @HostBinding('attr.data-size')
    size: TuiSizeL | TuiSizeXS = 'l';

    @Input()
    @HostBinding('class._hidden_input')
    hideRadio = false;

    @Input()
    pseudoDisabled = false;

    readonly modeDirective = inject(TuiModeDirective, {optional: true});

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.radio?.nativeFocusableElement ?? null;
    }

    get focused(): boolean {
        return !!this.radio && this.radio.focused;
    }

    @HostBinding('class._disabled')
    override get computedDisabled(): boolean {
        return this.disabled || this.pseudoDisabled;
    }

    @HostBinding('class._active')
    get checked(): boolean {
        return !!this.radio?.checked && this.hideRadio;
    }

    get checkboxSize(): TuiSizeL {
        return this.size === 'l' ? 'l' : 'm';
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

    /** @deprecated use 'value' setter */
    onModelChange(value: T): void {
        this.value = value;
    }
}
