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
}

const setOptions = (windowRef: Window, {inIframe = true}: Options = {}): void => {
    if (!inIframe) {
        // @ts-ignore window.parent is readonly property
        windowRef['parent'] = windowRef;
    }
};

export const goToDemoPage = (path: string, options?: Options) => {
    cy.visit('/', {
        onBeforeLoad: window => {
            const baseHref =
                window.document.baseURI.replace(`${window.location.origin}/`, '') ||
                DEFAULT_BASE_HREF;
            const nextUrl = `/${baseHref}${path}`.replace(REPEATED_SLASH_REG, '/');

            setOptions(window, options);

            window.localStorage.setItem(NEXT_URL_STORAGE_KEY, nextUrl);
        },
    });

    cy.window().should('have.property', 'Cypress');
    cy.url().should('include', path);
    cy.clearLocalStorage(NEXT_URL_STORAGE_KEY);
};
