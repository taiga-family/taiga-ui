import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    Inject,
    Input,
    Optional,
    Self,
    ViewChild,
} from '@angular/core';
import {NgControl} from '@angular/forms';
import {tuiCreateAutoCorrectedExpirePipe} from '@taiga-ui/addon-commerce/utils';
import {
    AbstractTuiControl,
    tuiAsControl,
    tuiAsFocusableItemAccessor,
    TuiAutofillFieldName,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
} from '@taiga-ui/cdk';
import {
    TUI_DIGIT_REGEXP,
    TuiPrimitiveTextfieldComponent,
    TuiTextMaskOptions,
} from '@taiga-ui/core';

@Component({
    selector: `tui-input-expire`,
    templateUrl: `./input-expire.template.html`,
    styleUrls: [`./input-expire.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiAsFocusableItemAccessor(TuiInputExpireComponent),
        tuiAsControl(TuiInputExpireComponent),
    ],
})
export class TuiInputExpireComponent
    extends AbstractTuiControl<string>
    implements TuiFocusableElementAccessor
{
    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly input?: TuiPrimitiveTextfieldComponent;

    @Input()
    @tuiDefaultProp()
    autocompleteEnabled = false;

    readonly textMaskOptions: TuiTextMaskOptions = {
        mask: [
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
            `/`,
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
        ],
        pipe: tuiCreateAutoCorrectedExpirePipe(),
        guide: false,
    };

    constructor(
        @Optional()
        @Self()
        @Inject(NgControl)
        control: NgControl | null,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
    ) {
        super(control, changeDetectorRef);
    }

    get nativeFocusableElement(): HTMLInputElement | null {
        return this.input ? this.input.nativeFocusableElement : null;
    }

    get focused(): boolean {
        return !!this.input && this.input.focused;
    }

    get autocomplete(): TuiAutofillFieldName {
        return this.autocompleteEnabled ? `cc-exp` : `off`;
    }

    onValueChange(value: string): void {
        // @bad TODO: Workaround until mask pipe can replace chars and keep caret position
        // @bad TODO: Think about a solution without mask at all
        if (!this.input?.nativeFocusableElement) {
            return;
        }

        if (parseInt(value.slice(0, 2), 10) > 12) {
            value = `12${value.slice(2)}`;
        }

        if (value.slice(0, 2) === `00`) {
            value = `01${value.slice(2)}`;
        }

        this.input.nativeFocusableElement.value = value;

        if (this.value !== value) {
            this.updateValue(value);
        }
    }

    onFocused(focused: boolean): void {
        this.updateFocused(focused);
    }

    protected getFallbackValue(): string {
        return ``;
    }
}
