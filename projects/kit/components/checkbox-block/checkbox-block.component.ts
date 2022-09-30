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
import {
    AbstractTuiNullableControl,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    tuiIsNativeFocused,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {
    TuiAppearance,
    TuiHorizontalDirection,
    TuiModeDirective,
    TuiSizeL,
    TuiSizeS,
} from '@taiga-ui/core';
import {TuiCheckboxComponent} from '@taiga-ui/kit/components/checkbox';

@Component({
    selector: `tui-checkbox-block`,
    templateUrl: `./checkbox-block.template.html`,
    styleUrls: [`./checkbox-block.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiCheckboxBlockComponent),
        tuiAsControl(TuiCheckboxBlockComponent),
    ],
})
export class TuiCheckboxBlockComponent
    extends AbstractTuiNullableControl<boolean>
    implements TuiFocusableElementAccessor
{
    @ViewChild(TuiCheckboxComponent)
    private readonly checkbox?: TuiCheckboxComponent;

    @Input()
    @HostBinding(`attr.data-tui-host-align`)
    @tuiDefaultProp()
    contentAlign: TuiHorizontalDirection = `right`;

    @Input()
    @HostBinding(`class._hidden_checkbox`)
    @tuiDefaultProp()
    hideCheckbox = false;

    @Input()
    @HostBinding(`attr.data-size`)
    @tuiDefaultProp()
    size: TuiSizeS | TuiSizeL = `l`;

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
        return this.checkbox ? this.checkbox.nativeFocusableElement : null;
    }

    @HostBinding(`class._active`)
    get checked(): boolean {
        return this.value !== false && this.hideCheckbox;
    }

    get checkboxSize(): TuiSizeL {
        return this.size === `l` ? `l` : `m`;
    }

    get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
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

    onModelChange(value: boolean): void {
        this.updateValue(value);
    }
}
