describe(`InputTag`, () => {
    beforeEach(() => cy.tuiVisit(`components/input-tag`));

    it(`long text`, () => {
        cy.get(`#base`)
            .findByAutomationId(`tui-doc-example`)
            .tuiScrollIntoView()
            .as(`wrapper`);

        cy.get(`@wrapper`)
            .findByAutomationId(`tui-input-tag__native`)
            .type(`Very looooooooooooooooooooooooong Text{enter}`);

        cy.get(`@wrapper`)
            .tuiWaitBeforeScreenshot()
            .matchImageSnapshot(`02-input-tag-very-long-text`);

        cy.get(`@wrapper`)
            .findByAutomationId(`tui-input-tag__native`)
            .type(`1{enter}`)
            .type(`2{enter}`);

        cy.get(`@wrapper`)
            .tuiWaitBeforeScreenshot()
            .matchImageSnapshot(`03-input-tag-not-very-long-text`);
    });

    it(`switch theme mode`, {responseTimeout: 30_000}, () => {
        cy.tuiWaitBeforeScreenshot();

        cy.get(`tui-doc-example`)
            .tuiFindByExampleId()
            .each(($el, index) => {
                cy.wrap($el, {log: false})
                    .tuiWaitBeforeScreenshot()
                    .matchImageSnapshot(`01-light-mode-${index}`);
            });

        cy.tuiShow(`[tuidocheader]`);
        cy.get(`.tui-doc-night-mode-switch`).click();
        cy.tuiHide(`[tuidocheader]`);

        cy.get(`tui-doc-example`)
            .tuiFindByExampleId()
            .each(($el, index) => {
                cy.wrap($el, {log: false})
                    .tuiWaitBeforeScreenshot()
                    .matchImageSnapshot(`01-night-mode-${index}`);
            });
    });

    it(`allows to forbid spaces inside tags via property [separator]`, () => {
        cy.get(`#no-spaces-inside-tags`)
            .tuiFindByExampleId()
            .should(`be.visible`)
            .as(`wrapper`);

        cy.get(`@wrapper`)
            .tuiScrollIntoView()
            .findByAutomationId(`tui-input-tag__native`)
            .type(`taiga ui library `);

        cy.get(`@wrapper`).find(`tui-tag`).should(`have.length`, 6);
        cy.get(`@wrapper`)
            .find(`tui-input-tag`)
            .tuiWaitBeforeScreenshot()
            .matchImageSnapshot(`04-input-tag-forbidden-spaces`, {padding: 5});
    });

    it(`placeholder`, () => {
        cy.tuiVisit(`components/input-tag/API?placeholder=placeholder`);

        cy.get(`#demo-content`).find(`tui-input-tag`).click().tuiWaitBeforeScreenshot();

        cy.get(`#demo-content`)
            .find(`tui-input-tag`)
            .tuiWaitBeforeScreenshot()
            .matchImageSnapshot(`05-input-tag-placeholder`);
    });
});
