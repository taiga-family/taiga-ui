import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    forwardRef,
    Inject,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {
    AbstractTuiControl,
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TuiFocusableElementAccessor,
    TuiNativeFocusableElement,
} from '@taiga-ui/cdk';
import {
    TUI_TEXTFIELD_SIZE,
    TuiPrimitiveTextfieldComponent,
    TuiTextfieldSizeDirective,
} from '@taiga-ui/core';
import {TUI_PASSWORD_TEXTS} from '@taiga-ui/kit/tokens';
import {Observable} from 'rxjs';

// @dynamic
@Component({
    selector: 'tui-input-password',
    templateUrl: './input-password.template.html',
    styleUrls: ['./input-password.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiInputPasswordComponent),
        },
    ],
})
export class TuiInputPasswordComponent
    extends AbstractTuiControl<string>
    implements TuiFocusableElementAccessor {
    isPasswordHidden = true;

    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly textfield?: TuiPrimitiveTextfieldComponent;

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Inject(TUI_TEXTFIELD_SIZE)
        private readonly textfieldSize: TuiTextfieldSizeDirective,
        @Inject(TUI_PASSWORD_TEXTS)
        readonly passwordTexts$: Observable<[string, string]>,
    ) {
        super(control, changeDetectorRef);
    }

    get nativeFocusableElement(): TuiNativeFocusableElement | null {
        return this.computedDisabled || !this.textfield
            ? null
            : this.textfield.nativeFocusableElement;
    }

    get focused(): boolean {
        return !!this.textfield && this.textfield.focused;
    }

    get icon(): string {
        if (this.textfieldSize.size === 's') {
            return this.isPasswordHidden ? 'tuiIconEyeClosed' : 'tuiIconEyeOpen';
        }

        return this.isPasswordHidden ? 'tuiIconHideLarge' : 'tuiIconShowLarge';
    }

    get inputType(): string {
        return this.isPasswordHidden || !this.hasEyeIcon ? 'password' : 'text';
    }

    get hasEyeIcon(): boolean {
        return !(this.disabled || this.readOnly);
    }

    onValueChange(textValue: string) {
        this.updateValue(textValue);
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

    togglePasswordVisibility() {
        this.isPasswordHidden = !this.isPasswordHidden;
    }

    protected getFallbackValue(): string {
        return '';
    }
}
