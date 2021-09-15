import {stubExternalIcons} from './stub-external-icons.util';
import {waitAllRequests} from './wait-requests.util';

const NEXT_URL_STORAGE_KEY = 'env';
const DEFAULT_BASE_HREF = 'next/';
const REPEATED_SLASH_REG = new RegExp('//', 'g');

interface Options {
    /**
     * Cypress runs all tests within an iframe.
     * Sometimes our app can behave differently if it runs under iframe or not (see util {@link isInsideIframe}).
     * This parameter can help to falsify result of {@link isInsideIframe} for certain test run.
     */
    inIframe?: boolean;
    waitAllIcons?: boolean;
}

const setBeforeLoadOptions = (
    windowRef: Window,
    {inIframe}: Pick<Required<Options>, 'inIframe'>,
): void => {
    if (!inIframe) {
        // @ts-ignore window.parent is readonly property
        windowRef['parent'] = windowRef;
    }
};

export const goToDemoPage = (
    path: string,
    {inIframe = true, waitAllIcons = false}: Options = {},
) => {
    stubExternalIcons();
    cy.visit('/', {
        onBeforeLoad: window => {
            const baseHref =
                window.document.baseURI.replace(`${window.location.origin}/`, '') ||
                DEFAULT_BASE_HREF;
            const nextUrl = `/${baseHref}${path}`.replace(REPEATED_SLASH_REG, '/');

            setBeforeLoadOptions(window, {inIframe});

            window.localStorage.setItem(NEXT_URL_STORAGE_KEY, nextUrl);
        },
    });

    if (waitAllIcons) {
        cy.intercept('*.svg').as('icons');
    }

    cy.window().should('have.property', 'Cypress');
    cy.url().should('include', path);
    cy.clearLocalStorage(NEXT_URL_STORAGE_KEY);

    if (waitAllIcons) {
        waitAllRequests('@icons');
    }
};
