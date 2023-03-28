describe(`Dropdown`, () => {
    describe(`720x720`, () => {
        beforeEach(() => cy.viewport(720, 720));

        it(`TuiDropdown`, () => {
            cy.tuiVisit(`/directives/dropdown`);

            cy.get(`tui-dropdown-example-1 button`).first().click().wait(1000);
            cy.matchImageSnapshot(`1`);

            cy.get(`tui-dropdown-example-2 input`).first().click().wait(1000);
            cy.matchImageSnapshot(`2`);
        });

        it(`Hosted Dropdown`, () => {
            cy.tuiVisit(`/components/hosted-dropdown`);

            cy.get(`tui-hosted-dropdown-example-1 button`).first().click().wait(1000);
            cy.matchImageSnapshot(`3`);
        });

        it(`HostedDropdown custom position`, () => {
            cy.tuiVisit(`/components/hosted-dropdown`);

            cy.get(`tui-hosted-dropdown-example-5 button`).first().click().wait(1000);
            cy.matchImageSnapshot(`4`);
        });
    });

    describe(`a12y`, () => {
        beforeEach(() => cy.viewport(1280, 720));

        it(`Esc -> Hosted Dropdown`, () => {
            cy.tuiVisit(`/components/hosted-dropdown`);

            cy.get(`tui-hosted-dropdown-example-2 button`)
                .eq(1)
                .tuiWaitBeforeAction()
                .click();

            cy.tuiWaitBeforeScreenshot().matchImageSnapshot(`01-opened-hosted-dropdown`, {
                capture: `viewport`,
            });

            cy.get(`tui-dropdown`)
                .findByAutomationId(`tui-primitive-textfield__native-input`)
                .tuiWaitBeforeAction()
                .click();

            cy.tuiWaitBeforeScreenshot().matchImageSnapshot(`02-opened-hosted-dropdown`, {
                capture: `viewport`,
            });

            cy.realPress(`Escape`)
                .tuiWaitBeforeScreenshot()
                .matchImageSnapshot(`03-opened-hosted-dropdown`, {capture: `viewport`});

            cy.realPress(`Escape`)
                .tuiWaitBeforeScreenshot()
                .matchImageSnapshot(`04-opened-hosted-dropdown`, {capture: `viewport`});
        });
    });
});
