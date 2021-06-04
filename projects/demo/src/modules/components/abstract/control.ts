import {AbstractControl} from '@angular/forms';
import {TuiAutofillFieldName, TuiInputModeT, TuiInputTypeT} from '@taiga-ui/cdk';
import {
    DEFAULT_MAX_HEIGHT,
    DEFAULT_MIN_HEIGHT,
    TuiDirection,
    TuiDropdownWidthT,
    TuiHintModeT,
    TuiHorizontalDirection,
    TuiSizeL,
    TuiSizeS,
    TuiVerticalDirection,
} from '@taiga-ui/core';
import {AbstractExampleTuiInteractive} from './interactive';

const CUSTOM_SVG = `<svg xmlns="http://www.w3.org/2000/svg"
width="24px"
height="24px"
viewBox="0 0 24 24">
<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5
   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3
   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>
</svg>`;

type possibleGenericType = any;

export abstract class AbstractExampleTuiControl extends AbstractExampleTuiInteractive {
    abstract readonly control: AbstractControl;

    readonly sizeVariants: ReadonlyArray<TuiSizeS | TuiSizeL> = ['s', 'm', 'l'];

    readonly hintContentVariants: readonly string[] = ['Some content'];

    readonly hintDirectionVariants: ReadonlyArray<TuiDirection> = [
        'left',
        'right',
        'bottom-left',
        'bottom-right',
        'top-left',
        'top-right',
    ];

    readonly hintModeVariants: readonly TuiHintModeT[] = ['error', 'onDark'];

    readonly typeVariants: readonly TuiInputTypeT[] = [
        'text',
        'email',
        'password',
        'tel',
        'url',
    ];

    readonly maxLengthVariants: ReadonlyArray<possibleGenericType> = [10];

    readonly autocompleteVariants = [
        'off',
        'cc-name',
        'cc-number',
        'cc-exp-month',
        'cc-exp-year',
        'cc-type',
        'given-name',
        'additional-name',
        'family-name',
        'username',
        'email',
        'street-address',
        'postal-code',
        'country-name',
    ];

    readonly inputModeVariants: readonly TuiInputModeT[] = ['text', 'numeric'];

    readonly customContentVariants = ['Bell'];

    customContentSelected = null;

    inputMode = this.inputModeVariants[0];

    autocomplete: TuiAutofillFieldName | null = null;

    maxLength: possibleGenericType | null = null;

    type: TuiInputTypeT = this.typeVariants[0];

    cleaner = false;

    pseudoInvalid: boolean | null = null;

    success = false;

    readOnly = false;

    labelOutside = false;

    size: TuiSizeS | TuiSizeL = this.sizeVariants[2];

    exampleText = '';

    hintContent = null;

    hintDirection: TuiDirection = this.hintDirectionVariants[2];

    hintMode: TuiHintModeT | null = null;

    readonly dropdownAlignVariants: ReadonlyArray<TuiHorizontalDirection> = [
        'left',
        'right',
    ];

    dropdownAlign: TuiHorizontalDirection = this.dropdownAlignVariants[0];

    readonly dropdownLimitWidthVariants: readonly TuiDropdownWidthT[] = ['fixed', 'min'];

    dropdownLimitWidth: TuiDropdownWidthT | null = this.dropdownLimitWidthVariants[0];

    readonly dropdownDirectionVariants: ReadonlyArray<TuiVerticalDirection> = [
        'top',
        'bottom',
    ];

    dropdownDirection: TuiVerticalDirection | null = null;

    dropdownMinHeight = DEFAULT_MIN_HEIGHT;

    dropdownMaxHeight = DEFAULT_MAX_HEIGHT;

    get customContent(): string | null {
        return this.customContentSelected !== null ? CUSTOM_SVG : null;
    }

    get disabled(): boolean {
        return this.control.disabled;
    }

    set disabled(value: boolean) {
        if (value) {
            this.control.disable();
        } else {
            this.control.enable();
        }
    }
}
