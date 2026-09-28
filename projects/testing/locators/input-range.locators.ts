import {TUI_TEXTFIELD_LOCATORS} from './textfield.locators';

export const TUI_INPUT_RANGE_LOCATORS = {
    HOST: 'tui-input-range',
    INPUT_START: `${TUI_TEXTFIELD_LOCATORS.HOST} [tuiInput]:first-of-type`,
    INPUT_END: `${TUI_TEXTFIELD_LOCATORS.HOST} [tuiInput]:last-of-type`,
} as const;
