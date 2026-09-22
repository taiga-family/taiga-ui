import {TUI_TEXTFIELD_LOCATORS} from './textfield.locators';

export const TUI_INPUT_LOCATORS = {
    ...TUI_TEXTFIELD_LOCATORS,
    INPUT: 'input[tuiInput]',
} as const;
