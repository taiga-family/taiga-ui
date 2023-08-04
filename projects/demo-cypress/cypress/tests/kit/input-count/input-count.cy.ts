describe(`InputCount`, () => {
    it(`API`, () => {
        cy.tuiVisit(`components/input-count/API`);

        cy.get(`#demo-content`)
            .tuiWaitBeforeScreenshot()
            .matchImageSnapshot(`01-input-count`);

        cy.get(`#demo-content`)
            .findByAutomationId(`tui-primitive-textfield__native-input`)
            .focus()
            .type(`{selectall}{backspace}`)
            .type(`1234`)
            .blur();

        cy.get(`#demo-content`)
            .tuiWaitBeforeScreenshot()
            .matchImageSnapshot(`02-input-count`);

        cy.get(`#demo-content`)
            .findByAutomationId(`tui-primitive-textfield__native-input`)
            .focus()
            .type(`{selectall}{backspace}`)
            .blur();

        cy.get(`#demo-content`)
            .tuiWaitBeforeScreenshot()
            .matchImageSnapshot(`03-input-count`);
    });
});
