import type {AbstractControl} from '@angular/forms';
import type {
    TuiDropdownAlign,
    TuiDropdownWidth,
    TuiSizeL,
    TuiSizeS,
    TuiVerticalDirection,
} from '@taiga-ui/core';
import {TUI_DROPDOWN_DEFAULT_OPTIONS, TUI_HINT_DIRECTIONS} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {BehaviorSubject} from 'rxjs';

import type {AbstractExampleTuiDropdown} from './dropdown';
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

export abstract class AbstractExampleTuiControl
    extends AbstractExampleTuiInteractive
    implements AbstractExampleTuiDropdown
{
    public abstract readonly control: AbstractControl;

    public readonly sizeVariants: ReadonlyArray<TuiSizeL | TuiSizeS> = ['s', 'm', 'l'];

    public readonly hintContentVariants: readonly string[] = ['', 'Some content'];

    public readonly hintDirectionVariants = TUI_HINT_DIRECTIONS;

    public readonly hintAppearanceVariants = ['', 'error', 'dark'];

    public readonly typeVariants: readonly string[] = [
        'text',
        'email',
        'password',
        'tel',
        'url',
    ];

    public readonly maxLengthVariants: readonly any[] = [10];

    public readonly inputModeVariants: readonly string[] = ['text', 'numeric'];

    public readonly customContentVariants: PolymorpheusContent[] = [
        '',
        CUSTOM_SVG_NAME,
        '@tui.search',
        '@tui.calendar',
        '@tui.visa-mono',
        '@tui.mastercard-mono',
    ];

    public customContentSelected = this.customContentVariants[0];

    public inputMode = this.inputModeVariants[0]!;

    public maxLength: unknown = null;

    public type = this.typeVariants[0]!;

    public cleaner = false;

    public pseudoInvalid: boolean | null = null;

    public success = false;

    public readOnly = false;

    public labelOutside = false;

    public size: TuiSizeL | TuiSizeS = this.sizeVariants[2]!;

    public exampleText = '';

    public filler = '';

    public readonly iconLeftVariants = ['', '@tui.mail', '@tui.pie-chart'];

    public iconStart = this.iconLeftVariants[0]!;

    public hintContent = this.hintContentVariants[0]!;

    public hintDirection = this.hintDirectionVariants[0]!;

    public hintAppearance = this.hintAppearanceVariants[0]!;

    public dropdownOpen = new BehaviorSubject(false);

    public readonly dropdownAlignVariants: readonly TuiDropdownAlign[] = [
        'left',
        'right',
        'center',
    ];

    public dropdownAlign = TUI_DROPDOWN_DEFAULT_OPTIONS.align;

    public readonly dropdownLimitWidthVariants: readonly TuiDropdownWidth[] = [
        'fixed',
        'min',
        'auto',
    ];

    public dropdownLimitWidth = this.dropdownLimitWidthVariants[0]!;

    public readonly dropdownDirectionVariants: readonly TuiVerticalDirection[] = [
        'bottom',
        'top',
    ];

    public dropdownDirection: TuiVerticalDirection | null =
        TUI_DROPDOWN_DEFAULT_OPTIONS.direction;

    public dropdownMinHeight = TUI_DROPDOWN_DEFAULT_OPTIONS.minHeight;

    public dropdownMaxHeight = TUI_DROPDOWN_DEFAULT_OPTIONS.maxHeight;

    public readonly prefixVariants: readonly string[] = [
        '',
        '$',
        'GBP',
        'Very long text',
    ];

    public prefix = this.prefixVariants[0]!;

    public postfix = this.prefixVariants[0]!;

    public dropdownOffset = TUI_DROPDOWN_DEFAULT_OPTIONS.offset;

    protected get customContent(): PolymorpheusContent {
        return this.customContentSelected === CUSTOM_SVG_NAME
            ? CUSTOM_SVG
            : this.customContentSelected;
    }

    protected get disabled(): boolean {
        return this.control.disabled;
    }

    protected set disabled(value: boolean) {
        if (value) {
            this.control.disable();
        } else {
            this.control.enable();
        }
    }
}
