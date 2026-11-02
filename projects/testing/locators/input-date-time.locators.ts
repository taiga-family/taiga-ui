import {TUI_TEXTFIELD_LOCATORS} from './textfield.locators';

export const TUI_INPUT_DATE_TIME_LOCATORS = {
    ...TUI_TEXTFIELD_LOCATORS,
    INPUT: '[tuiInputDateTime]',
    NATIVE_PICKER: 'input[type="datetime-local"]',
} as const;
