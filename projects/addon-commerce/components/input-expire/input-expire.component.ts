import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    forwardRef,
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
    TUI_FOCUSABLE_ITEM_ACCESSOR,
    TuiCreditCardAutofillName,
    tuiDefaultProp,
    TuiFocusableElementAccessor,
} from '@taiga-ui/cdk';
import {
    TUI_DIGIT_REGEXP,
    TuiPrimitiveTextfieldComponent,
    TuiTextMaskOptions,
} from '@taiga-ui/core';

@Component({
    selector: 'tui-input-expire',
    templateUrl: './input-expire.template.html',
    styleUrls: ['./input-expire.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: TUI_FOCUSABLE_ITEM_ACCESSOR,
            useExisting: forwardRef(() => TuiInputExpireComponent),
        },
    ],
})
export class TuiInputExpireComponent
    extends AbstractTuiControl<string>
    implements TuiFocusableElementAccessor {
    @Input()
    @tuiDefaultProp()
    autocompleteEnabled = false;

    readonly textMaskOptions: TuiTextMaskOptions = {
        mask: [
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
            '/',
            TUI_DIGIT_REGEXP,
            TUI_DIGIT_REGEXP,
        ],
        pipe: tuiCreateAutoCorrectedExpirePipe(),
        guide: false,
    };

    @ViewChild(TuiPrimitiveTextfieldComponent)
    private readonly input?: TuiPrimitiveTextfieldComponent;

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

    get autocomplete(): TuiCreditCardAutofillName {
        return this.autocompleteEnabled
            ? TuiCreditCardAutofillName.CcExp
            : TuiCreditCardAutofillName.Off;
    }

    onValueChange(value: string) {
        // @bad TODO: Workaround until mask pipe can replace chars and keep caret position
        // @bad TODO: Think about a solution without mask at all
        if (!this.input || !this.input.nativeFocusableElement) {
            return;
        }

        if (parseInt(value.substr(0, 2), 10) > 12) {
            value = '12' + value.substr(2);
        }

        if (value.substr(0, 2) === '00') {
            value = '01' + value.substr(2);
        }

        this.input.nativeFocusableElement.value = value;

        if (this.value !== value) {
            this.updateValue(value);
        }
    }

    onFocused(focused: boolean) {
        this.updateFocused(focused);
    }

    onHovered(hovered: boolean) {
        this.updateHovered(hovered);
    }

    protected getFallbackValue(): string {
        return '';
    }
}
