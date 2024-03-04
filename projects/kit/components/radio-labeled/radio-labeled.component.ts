import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import {
    AbstractTuiNullableControl,
    TUI_DEFAULT_IDENTITY_MATCHER,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    type TuiFocusableElementAccessor,
    type TuiIdentityMatcher,
    type TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {MODE_PROVIDER, TUI_MODE, type TuiSizeL} from '@taiga-ui/core';
import {TUI_RADIO_OPTIONS, TuiRadioComponent} from '@taiga-ui/kit/components/radio';

@Component({
    selector: 'tui-radio-labeled',
    templateUrl: './radio-labeled.template.html',
    styleUrls: ['./radio-labeled.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiRadioLabeledComponent),
        tuiAsControl(TuiRadioLabeledComponent),
        MODE_PROVIDER,
    ],
    host: {
        '($.data-mode.attr)': 'mode$',
        '[attr.data-size]': 'size',
    },
})
export class TuiRadioLabeledComponent<T>
    extends AbstractTuiNullableControl<T>
    implements TuiFocusableElementAccessor
{
    @ViewChild(TuiRadioComponent)
    private readonly radio?: TuiRadioComponent<T>;

    private readonly options = inject(TUI_RADIO_OPTIONS);

    @Input()
    public item?: T;

    @Input()
    public size: TuiSizeL = this.options.size;

    @Input()
    public identityMatcher: TuiIdentityMatcher<T> = TUI_DEFAULT_IDENTITY_MATCHER;

    @Input()
    public pseudoDisabled = false;

    protected readonly mode$ = inject(TUI_MODE);

    public get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.radio?.nativeFocusableElement ?? null;
    }

    public get focused(): boolean {
        return !!this.radio && this.radio.focused;
    }

    public override get computedDisabled(): boolean {
        return this.disabled || this.pseudoDisabled;
    }

    protected onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    /** @deprecated use 'value' setter */
    protected onModelChange(value: T): void {
        this.value = value;
    }
}
