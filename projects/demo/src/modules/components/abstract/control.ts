import {AbstractControl} from '@angular/forms';
import {TuiAutofillFieldName, TuiInputMode, TuiInputType} from '@taiga-ui/cdk';
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
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {ExampleTuiDropdown} from './dropdown-controller-documentation/dropdown-controller-documentation.component';
import {AbstractExampleTuiInteractive} from './interactive';

const CUSTOM_SVG = `<svg xmlns="http://www.w3.org/2000/svg"
width="24px"
height="24px"
viewBox="0 0 24 24">
<path fill="currentColor" d="M10,17v1c0,1.1,0.9,2,2,2h0c1.1,0,2-0.9,2-2l0-1h3.6L17,15.2V11c0-2.2-1.4-4-3-4h-1V5
   c0-0.6-0.4-1-1-1s-1,0.4-1,1v2h-1c-1.3,0-3,1.9-3,4v4.2L6.4,17H10z M3.6,19L5,14.8V11c0-2.7,1.9-5.2,4-5.8V5c0-1.7,1.3-3,3-3
   s3,1.3,3,3v0.1c2.3,0.6,4,3,4,5.9v3.8l1.4,4.2h-4.5c-0.4,1.8-2,3-3.9,3c-1.8,0-3.4-1.2-3.9-3H3.6z"/>
</svg>`;

const CUSTOM_SVG_NAME = 'Bell';

type TuiPossibleGenericType = any;

export abstract class AbstractExampleTuiControl
    extends AbstractExampleTuiInteractive
    implements ExampleTuiDropdown
{
    abstract readonly control: AbstractControl;

    readonly sizeVariants: ReadonlyArray<TuiSizeS | TuiSizeL> = ['s', 'm', 'l'];

    readonly hintContentVariants: readonly string[] = ['Some content'];

    readonly hintDirectionVariants: readonly TuiDirection[] = [
        'left',
        'right',
        'bottom-left',
        'bottom-right',
        'bottom-middle',
        'top-left',
        'top-right',
        'top-middle',
    ];

    readonly hintModeVariants: readonly TuiHintModeT[] = ['error', 'onDark'];

    readonly typeVariants: readonly TuiInputType[] = [
        'text',
        'email',
        'password',
        'tel',
        'url',
    ];

    readonly maxLengthVariants: readonly TuiPossibleGenericType[] = [10];

    readonly autocompleteVariants: Array<TuiAutofillFieldName | ''> = [
        '',
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

    readonly inputModeVariants: readonly TuiInputMode[] = ['text', 'numeric'];

    readonly customContentVariants: PolymorpheusContent[] = [
        CUSTOM_SVG_NAME,
        'tuiIconSearchLarge',
        'tuiIconCalendarLarge',
        'tuiIconVisaMono',
        'tuiIconMastercardMono',
    ];

    customContentSelected: PolymorpheusContent = '';

    inputMode = this.inputModeVariants[0];

    autocomplete: TuiAutofillFieldName | '' = '';

    maxLength: TuiPossibleGenericType | null = null;

    type: TuiInputType = this.typeVariants[0];

    cleaner = false;

    pseudoInvalid: boolean | null = null;

    success = false;

    readOnly = false;

    labelOutside = false;

    size: TuiSizeS | TuiSizeL = this.sizeVariants[2];

    exampleText = '';

    hintContent: string | null = null;

    hintDirection: TuiDirection = this.hintDirectionVariants[2];

    hintMode: TuiHintModeT | null = null;

    readonly dropdownAlignVariants: readonly TuiHorizontalDirection[] = ['left', 'right'];

    dropdownAlign: TuiHorizontalDirection = this.dropdownAlignVariants[0];

    readonly dropdownLimitWidthVariants: readonly TuiDropdownWidthT[] = ['fixed', 'min'];

    dropdownLimitWidth: TuiDropdownWidthT = this.dropdownLimitWidthVariants[0];

    readonly dropdownDirectionVariants: readonly TuiVerticalDirection[] = [
        'top',
        'bottom',
    ];

    readonly iconLeftVariants = ['', 'tuiIconMailLarge', 'tuiIconPiechartLarge'];

    iconLeft = this.iconLeftVariants[0];

    dropdownDirection: TuiVerticalDirection | null = null;

    dropdownSided = false;

    dropdownMinHeight = DEFAULT_MIN_HEIGHT;

    dropdownMaxHeight = DEFAULT_MAX_HEIGHT;

    get customContent(): PolymorpheusContent {
        return this.customContentSelected === CUSTOM_SVG_NAME
            ? CUSTOM_SVG
            : this.customContentSelected;
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
