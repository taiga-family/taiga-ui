import {TUI_TEXTFIELD_LOCATORS} from './textfield.locators';

export const TUI_SELECT_LOCATORS = {
    ...TUI_TEXTFIELD_LOCATORS,
    INPUT: '[tuiSelect]',
} as const;
