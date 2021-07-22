export const NEXT_URL_STORAGE_KEY = 'env';
export const DEFAULT_BASE_HREF = 'next/';
export const REPEATED_SLASH_REG = new RegExp('//', 'g');

export const goToDemoPage = (path: string) => {
    cy.visit('/', {
        onBeforeLoad: window => {
            const baseHref =
                window.document.baseURI.replace(`${window.location.origin}/`, '') ||
                DEFAULT_BASE_HREF;
            const nextUrl = `/${baseHref}${path}`.replace(REPEATED_SLASH_REG, '/');

            window.localStorage.setItem(NEXT_URL_STORAGE_KEY, nextUrl);
        },
    });

    cy.window().should('have.property', 'Cypress');
    cy.url().should('include', path);
    cy.clearLocalStorage(NEXT_URL_STORAGE_KEY);
};
