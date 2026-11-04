import {TUI_TEXTFIELD_LOCATORS} from './textfield.locators';

export const TUI_INPUT_DATE_LOCATORS = {
    ...TUI_TEXTFIELD_LOCATORS,
    INPUT: '[tuiInputDate]',
    NATIVE_PICKER: 'input[type="date"]',
} as const;
