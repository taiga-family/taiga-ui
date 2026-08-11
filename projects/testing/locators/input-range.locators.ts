import {TUI_TEXTFIELD_LOCATORS} from './textfield.locators';

export const TUI_INPUT_RANGE_LOCATORS = {
    HOST: 'tui-input-range',
    INPUT_START: `${TUI_TEXTFIELD_LOCATORS.HOST} input:not(.t-end)`,
    INPUT_END: `${TUI_TEXTFIELD_LOCATORS.HOST} input.t-end`,
    TEXTFIELD_START: `${TUI_TEXTFIELD_LOCATORS.HOST} [tuiInput]:first-of-type`,
    TEXTFIELD_END: `${TUI_TEXTFIELD_LOCATORS.HOST} [tuiInput]:last-of-type`,
} as const;
