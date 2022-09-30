import {
    TUI_DROPDOWN_DEFAULT_OPTIONS,
    TuiDropdownWidth,
    TuiHorizontalDirection,
    TuiVerticalDirection,
} from '@taiga-ui/core';

export abstract class AbstractExampleTuiDropdown {
    readonly dropdownAlignVariants: readonly TuiHorizontalDirection[] = [`left`, `right`];

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
}
