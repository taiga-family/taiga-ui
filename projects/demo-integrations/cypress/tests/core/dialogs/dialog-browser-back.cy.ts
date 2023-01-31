describe(`Dialogs + browser back navigation`, () => {
    /**
     * Alternative to cy.go('back', {timeout: 0}), which doesn't wait page load event
     */
    const goBack = (): void => {
        cy.window().then(win => win.history.back());
    };

    const getFullUrl = (path: string): string =>
        `${Cypress.config().baseUrl || ``}/${path}`.replace(
            new RegExp(`([^:]/)/+`, `g`),
            `$1`,
        );

    beforeEach(() => {
        cy.tuiVisit(`/`, {
            hideHeader: false,
            hideNavigation: false,
            hideVersionManager: false,
            hideLanguageSwitcher: false,
        }); // need to check that browser back navigation is not broken after closing all dialogs
    });

    describe(`feature is enabled`, () => {
        beforeEach(() => {
            cy.tuiVisit(`components/dialog`, {inIframe: false});
        });

        it(`closes dialog on browser back navigation`, () => {
            cy.get(`#data`)
                .findByAutomationId(`tui-doc-example`)
                .find(`button`)
                .first()
                .click();

            cy.tuiHide(`tui-doc-page`);
            cy.tuiWaitKitDialog();

            cy.get(`tui-dialog`).get(`button`).contains(`Show one more dialog`).click();

            cy.tuiWaitKitDialog();

            cy.matchImageSnapshot(`4-1-opened-all-dialogs`, {capture: `viewport`});

            goBack();

            cy.matchImageSnapshot(`4-2-after-first-back-nav`, {capture: `viewport`});

            goBack();

            cy.tuiWaitBeforeAction() // wait for scrollbar
                .matchImageSnapshot(`4-3-after-second-back-nav`, {capture: `viewport`});

            cy.url().should(`equal`, getFullUrl(`components/dialog`));

            goBack();

            cy.url().should(`equal`, getFullUrl(`/`));
        });

        it(`doesnt break browser back navigation after closing dialog in the usual way (without back button)`, () => {
            /* open dialog */
            cy.getByAutomationId(`tui-doc-example`)
                .first()
                .find(`button`)
                .first()
                .click();

            cy.tuiWaitKitDialog();

            /* close dialog */
            cy.get(`tui-dialog`).find(`button`).first().click();

            cy.url().should(`equal`, getFullUrl(`components/dialog`));
            goBack();
            cy.url().should(`equal`, getFullUrl(`/`));
        });
    });

    // TODO: change it back after solving https://github.com/Tinkoff/taiga-ui/issues/3270
    describe.skip(`feature is disabled`, () => {
        beforeEach(() => {
            cy.tuiVisit(`components/dialog`, {inIframe: true});
        });

        it(`does not depend on browser back navigation: no history changes on back button`, () => {
            /* open dialog */
            cy.getByAutomationId(`tui-doc-example`)
                .first()
                .find(`button`)
                .first()
                .click();

            cy.tuiHide(`tui-doc-page`);
            cy.tuiWaitKitDialog();

            cy.url().should(`equal`, getFullUrl(`components/dialog`));

            goBack();

            cy.url().should(`equal`, getFullUrl(`/`));
        });
    });
});
