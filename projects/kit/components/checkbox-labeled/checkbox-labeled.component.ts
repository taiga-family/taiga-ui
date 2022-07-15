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
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
    tuiIsNativeFocused,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {TuiBrightness, TuiModeDirective, TuiSizeL} from '@taiga-ui/core';
import {TuiCheckboxComponent} from '@taiga-ui/kit/components/checkbox';

@Component({
    selector: 'tui-checkbox-labeled',
    templateUrl: './checkbox-labeled.template.html',
    styleUrls: ['./checkbox-labeled.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiCheckboxLabeledComponent),
        },
    ],
})
export class TuiCheckboxLabeledComponent
    extends AbstractTuiNullableControl<boolean>
    implements TuiFocusableElementAccessor
{
    @ViewChild(TuiCheckboxComponent)
    private readonly checkbox?: TuiCheckboxComponent;

    @Input()
    @HostBinding('attr.data-size')
    @tuiDefaultProp()
    size: TuiSizeL = 'm';

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

    get focused(): boolean {
        return tuiIsNativeFocused(this.nativeFocusableElement);
    }

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.checkbox ? this.checkbox.nativeFocusableElement : null;
    }

    @HostBinding('attr.data-mode')
    get hostMode(): TuiBrightness | null {
        return this.modeDirective ? this.modeDirective.mode : null;
    }

    onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    onModelChange(value: boolean): void {
        this.updateValue(value);
    }
}
