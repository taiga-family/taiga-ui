import {inject} from '@angular/core';
import {WINDOW} from '@ng-web-apis/common';
import {tuiCreateTokenFromFactory} from '@taiga-ui/cdk/utils';

interface WindowWithCypress extends Window {
    Cypress?: unknown;
}

/**
 * Detect if app is running under Cypress
 * {@link https://docs.cypress.io/faq/questions/using-cypress-faq#Is-there-any-way-to-detect-if-my-app-is-running-under-Cypress Cypress docs}
 */
export const TUI_IS_CYPRESS = tuiCreateTokenFromFactory(
    () => !!inject<WindowWithCypress>(WINDOW).Cypress,
);
