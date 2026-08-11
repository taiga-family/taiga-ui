import {TUI_TEXTFIELD_LOCATORS} from './textfield.locators';

export const TUI_INPUT_CHIP_LOCATORS = {
    ...TUI_TEXTFIELD_LOCATORS,
    INPUT: 'input[tuiInputChip]',
    INPUT_LEGACY: 'tui-input-chip',
    CHIPS: '.t-items tui-textfield-item',
} as const;
