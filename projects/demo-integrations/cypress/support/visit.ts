import {DEFAULT_TIMEOUT_AFTER_PAGE_REDIRECTION, NIGHT_THEME_KEY} from './shared.entities';
import {stubExternalIcons} from './stub-external-icons.util';
import {stubMetrics} from './stub-metrics';
import {waitAllRequests} from './wait-requests.util';

const NEXT_URL_STORAGE_KEY = 'env';
const DEFAULT_BASE_HREF = 'next/';
const REPEATED_SLASH_REG = new RegExp('//', 'g');

interface TuiVisitOptions {
    /**
     * Cypress runs all tests within an iframe.
     * Sometimes our app can behave differently if it runs under iframe or not (see util {@link isInsideIframe}).
     * This parameter can help to falsify result of {@link isInsideIframe} for certain test run.
     */
    inIframe?: boolean;
    waitAllIcons?: boolean;
    enableNightMode?: boolean;
    hideCursor?: boolean;
    hideScrollbar?: boolean;
    hideVersionManager?: boolean;
    noSmoothScroll?: boolean;
    hideHeader?: boolean;
    hideNavigation?: boolean;
    /**
     * WARNING: this flag does not provide fully emulation of touch mobile device.
     * Cypress can't do it (https://docs.cypress.io/faq/questions/general-questions-faq#Do-you-support-native-mobile-apps).
     * But you can control token `TUI_IS_MOBILE` by this flag.
     */
    pseudoMobile?: boolean;
}

const setBeforeLoadOptions = (
    windowRef: Window,
    {inIframe}: Pick<Required<TuiVisitOptions>, 'inIframe'>,
): void => {
    if (!inIframe) {
        // @ts-ignore window.parent is readonly property
        // eslint-disable-next-line @typescript-eslint/dot-notation
        windowRef['parent'] = windowRef;
    }
};

const MOBILE_USER_AGENT =
    'Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1';

export function tuiVisit(path: string, options: TuiVisitOptions = {}): void {
    const {
        inIframe = true,
        waitAllIcons = true,
        enableNightMode = false,
        hideCursor = true,
        hideScrollbar = true,
        noSmoothScroll = true,
        hideHeader = true,
        hideNavigation = true,
        hideVersionManager = true,
        pseudoMobile = false,
    } = options;

    stubExternalIcons();
    stubMetrics();

    cy.visit('/', {
        onBeforeLoad: window => {
            const baseHref =
                window.document.baseURI.replace(`${window.location.origin}/`, '') ||
                DEFAULT_BASE_HREF;
            const nextUrl = `/${baseHref}${path}`.replace(REPEATED_SLASH_REG, '/');

            setBeforeLoadOptions(window, {inIframe});

            window.localStorage.setItem(NEXT_URL_STORAGE_KEY, nextUrl);
            window.localStorage.setItem(NIGHT_THEME_KEY, enableNightMode.toString());

            if (pseudoMobile) {
                Object.defineProperty(window.navigator, 'userAgent', {
                    value: MOBILE_USER_AGENT,
                });
            }
        },
    }).then(() => cy.url().should('include', path));

    if (waitAllIcons) {
        cy.intercept('*.svg').as('icons');
    }

    cy.window().should('have.property', 'Cypress');

    cy.clearLocalStorage(NEXT_URL_STORAGE_KEY);

    cy.document().its('fonts.size').should('be.greaterThan', 0);
    cy.document().its('fonts.status').should('equal', 'loaded');

    if (waitAllIcons) {
        waitAllRequests('@icons');
    }

    cy.get('._is-cypress-mode').as('app');

    if (hideCursor) {
        cy.get('@app').invoke('addClass', '_hide-cursor');
    }

    if (hideScrollbar) {
        cy.get('@app').invoke('addClass', '_hide-scrollbar');
    }

    if (noSmoothScroll) {
        cy.get('@app').invoke('addClass', '_no-smooth-scroll');
    }

    cy.wait(DEFAULT_TIMEOUT_AFTER_PAGE_REDIRECTION);

    if (hideHeader) {
        cy.tuiHideHeader();
    }

    if (hideNavigation) {
        cy.tuiHideNavigation();
    }

    if (hideVersionManager) {
        cy.tuiHideVersionManager();
    }
}
