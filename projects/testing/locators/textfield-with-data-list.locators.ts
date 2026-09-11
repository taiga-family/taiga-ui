import {TUI_DATA_LIST_LOCATORS} from './data-list.locators';
import {TUI_DROPDOWN_LOCATORS} from './dropdown.locators';
import {TUI_DROPDOWN_MOBILE_LOCATORS} from './dropdown-mobile.locators';
import {TUI_SHEET_DIALOG_LOCATORS} from './sheet-dialog.locators';

export const TUI_TEXTFIELD_WITH_DATA_LIST_LOCATORS = {
    ...TUI_DATA_LIST_LOCATORS,
    DROPDOWN: `${TUI_DROPDOWN_LOCATORS.HOST},${TUI_DROPDOWN_MOBILE_LOCATORS.HOST},${TUI_SHEET_DIALOG_LOCATORS.HOST}`,
} as const;
