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
    isNativeFocused,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
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
    selector: 'tui-checkbox-block',
    templateUrl: './checkbox-block.template.html',
    styleUrls: ['./checkbox-block.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiCheckboxBlockComponent),
        },
    ],
})
export class TuiCheckboxBlockComponent
    extends AbstractTuiNullableControl<boolean>
    implements TuiFocusableElementAccessor {
    @Input()
    @HostBinding('attr.data-tui-host-align')
    @tuiDefaultProp()
    contentAlign: TuiHorizontalDirection = 'right';

    @Input()
    @HostBinding('class._hidden_checkbox')
    @tuiDefaultProp()
    hideCheckbox = false;

    @Input()
    @HostBinding('attr.data-tui-host-size')
    @tuiDefaultProp()
    size: TuiSizeS | TuiSizeL = 'm';

    @ViewChild(TuiCheckboxComponent)
    private checkbox?: TuiCheckboxComponent;

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

    @HostBinding('class._active')
    get checked(): boolean {
        return this.value !== false && this.hideCheckbox;
    }

    get checkboxSize(): TuiSizeS | TuiSizeL {
        return this.size;
    }

    get focused(): boolean {
        return isNativeFocused(this.nativeFocusableElement);
    }

    get appearance(): TuiAppearance {
        if (!this.modeDirective || !this.modeDirective.mode) {
            return this.checked
                ? TuiAppearance.WhiteblockActive
                : TuiAppearance.Whiteblock;
        }

        return this.checked ? TuiAppearance.Primary : TuiAppearance.Secondary;
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

    onModelChange(value: boolean) {
        this.updateValue(value);
    }
}
