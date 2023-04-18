// @note: problem with compilation cypress if we use short path
import {TUI_THEME_NIGHT_STORAGE_DEFAULT_KEY} from '../../../../addon-doc/services/theme-night.options';

export function tuiSetNightMode({enable}: {enable: boolean}): void {
    cy.window().then((win: Window) => {
        win.localStorage.setItem(TUI_THEME_NIGHT_STORAGE_DEFAULT_KEY, enable.toString());
    });
}
