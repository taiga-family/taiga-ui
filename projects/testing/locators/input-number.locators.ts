import {TUI_TEXTFIELD_LOCATORS} from './textfield.locators';

export const TUI_INPUT_NUMBER_LOCATORS = {
    ...TUI_TEXTFIELD_LOCATORS,
    INPUT: '[tuiInputNumber]',
} as const;
