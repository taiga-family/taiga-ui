import {
    ChangeDetectionStrategy,
    Component,
    inject,
    Input,
    ViewChild,
} from '@angular/core';
import {
    AbstractTuiNullableControl,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    TuiFocusableElementAccessor,
    tuiIsNativeFocused,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {MODE_PROVIDER, TUI_CHECKBOX_OPTIONS, TUI_MODE, TuiSizeL} from '@taiga-ui/core';
import {TuiCheckboxComponent} from '@taiga-ui/kit/components/checkbox';

@Component({
    selector: 'tui-checkbox-labeled',
    templateUrl: './checkbox-labeled.template.html',
    styleUrls: ['./checkbox-labeled.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiCheckboxLabeledComponent),
        tuiAsControl(TuiCheckboxLabeledComponent),
        MODE_PROVIDER,
    ],
    host: {
        '($.data-mode.attr)': 'mode$',
        '[attr.data-size]': 'size',
    },
})
export class TuiCheckboxLabeledComponent
    extends AbstractTuiNullableControl<boolean>
    implements TuiFocusableElementAccessor
{
    @ViewChild(TuiCheckboxComponent)
    private readonly checkbox?: TuiCheckboxComponent;

    private readonly options = inject(TUI_CHECKBOX_OPTIONS);

    @Input()
    public size: TuiSizeL = this.options.size;

    protected readonly mode$ = inject(TUI_MODE);

    public get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    public get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.checkbox?.nativeFocusableElement ?? null;
    }

    protected onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    /** @deprecated use 'value' setter */
    protected onModelChange(value: boolean): void {
        this.value = value;
    }
}
