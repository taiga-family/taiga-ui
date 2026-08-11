const TUI_TEXTFIELD_HOST = 'tui-textfield';

export const TUI_TEXTFIELD_LOCATORS = {
    HOST: TUI_TEXTFIELD_HOST,
    MULTI: `${TUI_TEXTFIELD_HOST}[multi]`,
    CLEANER: '[tuiButtonX]',
    TOOLTIP: 'tui-icon[tuiTooltip]',
    INPUT: '[tuiInput]',
} as const;
