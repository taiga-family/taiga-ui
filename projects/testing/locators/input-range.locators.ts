import {TUI_TEXTFIELD_LOCATORS} from './textfield.locators';

export const TUI_INPUT_RANGE_LOCATORS = {
    HOST: 'tui-input-range',
    INPUT_START: `${TUI_TEXTFIELD_LOCATORS.HOST} [tuiInputNumber]:first-of-type`,
    INPUT_END: `${TUI_TEXTFIELD_LOCATORS.HOST} [tuiInputNumber]:last-of-type`,
} as const;
