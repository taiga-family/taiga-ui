describe(`InputDate`, () => {
    describe(`Examples`, () => {
        for (const size of [`s`, `m`, `l`]) {
            it(`correct filler display for size ${size.toUpperCase()}`, () => {
                cy.tuiVisit(`components/input-date`);

                getInputBy(size).click();
                matchImageSnapshot(`input-date-size-${size}-filled`);

                getInputBy(size).type(`{selectall}{backspace}`);
                matchImageSnapshot(`input-date-size-${size}-cleared`);

                getInputBy(size).type(`01.`);
                matchImageSnapshot(`input-date-size-${size}-set-day`);

                getInputBy(size).type(`06.1994`);
                matchImageSnapshot(`input-date-size-${size}-set-full`);
            });
        }

        function getInputBy(size: string): Cypress.Chainable<JQuery> {
            return cy
                .get(`tui-doc-example[heading="sizes"]`)
                .findByAutomationId(`tui-doc-example`)
                .tuiScrollIntoView()
                .get(`tui-input-date[tuiTextFieldSize="${size}"]`)
                .findByAutomationId(`tui-primitive-textfield__native-input`);
        }
    });

    describe(`API`, () => {
        for (const size of [`s`, `m`, `l`]) {
            it(`correct filler display for size ${size.toUpperCase()}`, () => {
                cy.tuiVisit(
                    `components/input-date/API?tuiMode=null&tuiTextfieldSize=${size}`,
                );

                getInput().click();
                matchImageSnapshot(`input-date-size-${size}-filled`);

                getInput().type(`01.`);
                matchImageSnapshot(`input-date-size-${size}-set-day`);

                getInput().type(`06.1994`);
                matchImageSnapshot(`input-date-size-${size}-set-full`);
            });
        }

        function getInput(): Cypress.Chainable<JQuery> {
            return cy
                .get(`#demoContent`)
                .findByAutomationId(`tui-primitive-textfield__native-input`);
        }
    });
});

function matchImageSnapshot(name: string): void {
    cy.matchImageSnapshot(name, {capture: `viewport`});
}
