import {TUI_DATA_LIST_LOCATORS} from './data-list.locators';
import {TUI_SCROLLBAR_LOCATORS} from './scrollbar.locators';

export const TUI_DROPDOWN_LOCATORS = {
    ...TUI_DATA_LIST_LOCATORS,
    ...TUI_SCROLLBAR_LOCATORS,
    HOST: 'tui-dropdown',
    DATA_LIST: TUI_DATA_LIST_LOCATORS.HOST,
    SCROLLBAR: TUI_SCROLLBAR_LOCATORS.HOST,
} as const;
