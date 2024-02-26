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
    public item?: T;

    @Input()
    public identityMatcher: TuiIdentityMatcher<T> = TUI_DEFAULT_IDENTITY_MATCHER;

    @Input()
    @HostBinding('attr.data-align')
    public contentAlign: TuiHorizontalDirection = 'right';

    @Input()
    @HostBinding('attr.data-size')
    public size: TuiSizeL | TuiSizeXS = 'l';

    @Input()
    @HostBinding('class._hidden_input')
    public hideRadio = false;

    @Input()
    public pseudoDisabled = false;

    protected readonly modeDirective = inject(TuiModeDirective, {optional: true});

    public get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.radio?.nativeFocusableElement ?? null;
    }

    public get focused(): boolean {
        return !!this.radio && this.radio.focused;
    }

    @HostBinding('class._disabled')
    public override get computedDisabled(): boolean {
        return this.disabled || this.pseudoDisabled;
    }

    @HostBinding('class._active')
    protected get checked(): boolean {
        return !!this.radio?.checked && this.hideRadio;
    }

    protected get checkboxSize(): TuiSizeL {
        return this.size === 'l' ? 'l' : 'm';
    }

    protected get appearance(): TuiAppearance {
        if (!this.modeDirective?.mode) {
            return this.checked
                ? TuiAppearance.WhiteblockActive
                : TuiAppearance.Whiteblock;
        }

        return this.checked ? TuiAppearance.Primary : TuiAppearance.Secondary;
    }

    protected onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    protected onFocusVisible(focusVisible: boolean): void {
        this.updateFocusVisible(focusVisible);
    }

    /** @deprecated use 'value' setter */
    protected onModelChange(value: T): void {
        this.value = value;
    }
}
