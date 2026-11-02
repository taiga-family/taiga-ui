import {TUI_TEXTFIELD_LOCATORS} from './textfield.locators';

export const TUI_INPUT_MONTH_LOCATORS = {
    ...TUI_TEXTFIELD_LOCATORS,
    INPUT: '[tuiInputMonth],[tuiInputMonthRange]',
    NATIVE_PICKER: 'input[type="month"]',
};
