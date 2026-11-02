import {TUI_TEXTFIELD_LOCATORS} from './textfield.locators';

export const TUI_INPUT_PHONE_INTERNATIONAL_LOCATORS = {
    ...TUI_TEXTFIELD_LOCATORS,
    INPUT: '[tuiInputPhoneInternational]',
    SELECT: '.t-ipi-select',
} as const;
