import type {
    TuiDropdownAlign,
    TuiDropdownWidth,
    TuiVerticalDirection,
} from '@taiga-ui/core';
import {TUI_DROPDOWN_DEFAULT_OPTIONS} from '@taiga-ui/core';
import {BehaviorSubject} from 'rxjs';

export abstract class AbstractExampleTuiDropdown {
    public readonly dropdownAlignVariants: readonly TuiDropdownAlign[] = [
        'left',
        'right',
        'center',
    ];

    public readonly dropdownLimitWidthVariants: readonly TuiDropdownWidth[] = [
        'fixed',
        'min',
        'auto',
    ];

    public readonly dropdownDirectionVariants: readonly TuiVerticalDirection[] = [
        'bottom',
        'top',
    ];

    public dropdownAlign = TUI_DROPDOWN_DEFAULT_OPTIONS.align;
    public dropdownDirection = TUI_DROPDOWN_DEFAULT_OPTIONS.direction;
    public dropdownLimitWidth = TUI_DROPDOWN_DEFAULT_OPTIONS.limitWidth;
    public dropdownMinHeight = TUI_DROPDOWN_DEFAULT_OPTIONS.minHeight;
    public dropdownMaxHeight = TUI_DROPDOWN_DEFAULT_OPTIONS.maxHeight;
    public dropdownOffset = TUI_DROPDOWN_DEFAULT_OPTIONS.offset;
    public dropdownOpen = new BehaviorSubject(false);
}
