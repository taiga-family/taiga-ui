import {TUI_DATA_LIST_LOCATORS} from './data-list.locators';

export const TUI_SHEET_DIALOG_LOCATORS = {
    ...TUI_DATA_LIST_LOCATORS,
    HOST: 'tui-sheet-dialog',
    DATA_LIST: TUI_DATA_LIST_LOCATORS.HOST,
} as const;
