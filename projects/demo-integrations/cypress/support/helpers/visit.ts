import {waitAllRequests} from '@demo-integrations/support/helpers/wait-requests.util';
import {
    NIGHT_THEME_KEY,
    WAIT_BEFORE_SCREENSHOT,
} from '@demo-integrations/support/properties/shared.entities';
import {stubExternalIcons} from '@demo-integrations/support/stubs/stub-external-icons.util';
import {stubMetrics} from '@demo-integrations/support/stubs/stub-metrics';

const NEXT_URL_STORAGE_KEY = `env`;
const REPEATED_SLASH_REG = new RegExp(`//`, `g`);

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
    hideLanguageSwitcher?: boolean;
    noSmoothScroll?: boolean;
    hideHeader?: boolean;
    hideNavigation?: boolean;
    skipDecodingUrl?: boolean;
    skipExpectUrl?: boolean;
    waitRenderedFont?: string | RegExp;
    rootSelector?: string;
    clock?: Date;
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
        windowRef[`parent`] = windowRef;
    }
};

const MOBILE_USER_AGENT = `Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.0.3 Mobile/15E148 Safari/604.1`;

// eslint-disable-next-line max-statements
export function tuiVisit(path: string, options: TuiVisitOptions = {}): void {
    const {
        inIframe = true,
        waitAllIcons = true,
        enableNightMode = false,
        hideCursor = true,
        hideScrollbar = true,
        noSmoothScroll = true,
        hideHeader = true,
        skipExpectUrl = false,
        skipDecodingUrl = false,
        hideNavigation = true,
        hideVersionManager = true,
        hideLanguageSwitcher = true,
        pseudoMobile = false,
        waitRenderedFont,
        clock = Date.UTC(2018, 10, 1),
        rootSelector = `app`,
    } = options;

    if (clock) {
        cy.clock(clock, ['Date']);
    }

    stubExternalIcons();
    stubMetrics();

    const encodedPath = skipDecodingUrl
        ? path
        : encodeURI(
              decodeURIComponent(path), // @note: prevent twice encoding
          );

    cy.visit(`/`, {
        onBeforeLoad: window => {
            const baseHref =
                window.document.baseURI.replace(`${window.location.origin}/`, ``) ?? `/`;
            const nextUrl = `/${baseHref}${encodedPath}`.replace(REPEATED_SLASH_REG, `/`);

            setBeforeLoadOptions(window, {inIframe});

            window.localStorage.setItem(NEXT_URL_STORAGE_KEY, nextUrl);
            window.localStorage.setItem(NIGHT_THEME_KEY, enableNightMode.toString());

            if (pseudoMobile) {
                Object.defineProperty(window.navigator, `userAgent`, {
                    value: MOBILE_USER_AGENT,
                });
            }
        },
    }).then(() => {
        if (skipExpectUrl) {
            cy.wait(WAIT_BEFORE_SCREENSHOT);
        } else {
            cy.url().should(`include`, encodedPath);
        }
    });

    if (waitAllIcons) {
        cy.intercept(`*.svg`).as(`icons`);
    }

    cy.window().should(`have.property`, `Cypress`);

    cy.clearLocalStorage(NEXT_URL_STORAGE_KEY);

    cy.document().its(`fonts.size`).should(`be.greaterThan`, 0);
    cy.document().its(`fonts.status`).should(`equal`, `loaded`);
    cy.document()
        // https://developer.mozilla.org/en-US/docs/Web/API/FontFaceSet/ready
        // The promise will only resolve once the document has completed loading fonts,
        // layout operations are completed, and no further font loads are needed.
        .then(document => (document as any)?.fonts.ready)
        .then(() => cy.log(`Font loading completed`));

    if (waitRenderedFont || Cypress.env(`waitRenderedFont`)) {
        cy.get(`body`, {log: false})
            .should(`have.css`, `font-family`)
            .and(
                `match`,
                waitRenderedFont || new RegExp(Cypress.env(`waitRenderedFont`)),
            );
    }

    if (waitAllIcons) {
        waitAllRequests(`@icons`);
    }

    cy.get(`${rootSelector}._is-cypress-mode`).as(`app`);

    if (hideCursor) {
        cy.get(`@app`).invoke(`addClass`, `_hide-cursor`);
    }

    if (hideScrollbar) {
        cy.get(`@app`).invoke(`addClass`, `_hide-scrollbar`);
    }

    if (noSmoothScroll) {
        cy.get(`@app`).invoke(`addClass`, `_no-smooth-scroll`);
    }

    cy.get(rootSelector).should(`have.class`, `_loaded`);

    if (hideHeader) {
        cy.tuiHide(`[tuidocheader]`);
    }

    if (hideNavigation) {
        cy.tuiHide(`.tui-doc-navigation`);
    }

    if (hideVersionManager) {
        cy.tuiHide(`version-manager`);
    }

    if (hideLanguageSwitcher) {
        cy.tuiHide(`tui-language-switcher`);
    }
}
