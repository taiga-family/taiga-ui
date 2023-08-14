import {
    TUI_DROPDOWN_DEFAULT_OPTIONS,
    TuiDropdownAlign,
    TuiDropdownWidth,
    TuiVerticalDirection,
} from '@taiga-ui/core';
import {BehaviorSubject} from 'rxjs';

export abstract class AbstractExampleTuiDropdown {
    readonly dropdownAlignVariants: readonly TuiDropdownAlign[] = [
        `left`,
        `right`,
        `center`,
    ];

    readonly dropdownLimitWidthVariants: readonly TuiDropdownWidth[] = [
        `fixed`,
        `min`,
        `auto`,
    ];

    readonly dropdownDirectionVariants: readonly TuiVerticalDirection[] = [
        `bottom`,
        `top`,
    ];

    dropdownAlign = TUI_DROPDOWN_DEFAULT_OPTIONS.align;
    dropdownDirection = TUI_DROPDOWN_DEFAULT_OPTIONS.direction;
    dropdownLimitWidth = TUI_DROPDOWN_DEFAULT_OPTIONS.limitWidth;
    dropdownMinHeight = TUI_DROPDOWN_DEFAULT_OPTIONS.minHeight;
    dropdownMaxHeight = TUI_DROPDOWN_DEFAULT_OPTIONS.maxHeight;
    dropdownOffset = TUI_DROPDOWN_DEFAULT_OPTIONS.offset;
    dropdownOpen = new BehaviorSubject(false);
}
