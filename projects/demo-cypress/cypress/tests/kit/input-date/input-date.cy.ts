describe(`InputDate`, () => {
    beforeEach(() => {
        cy.viewport(400, 500);
    });

    describe(`Examples`, () => {
        for (const size of [`s`, `m`, `l`]) {
            it(`correct filler display for size ${size.toUpperCase()}`, () => {
                cy.tuiVisit(`components/input-date`);

                getInputBy(size).click();
                matchImageSnapshot(`examples-input-date-size-${size}-filled`);

                getInputBy(size).type(`{selectall}{backspace}`);
                matchImageSnapshot(`examples-input-date-size-${size}-cleared`);

                getInputBy(size).type(`01.`);
                matchImageSnapshot(`examples-input-date-size-${size}-set-day`);

                getInputBy(size).type(`06.1994`);
                matchImageSnapshot(`examples-input-date-size-${size}-set-full`);
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

                getInput().click({force: true});
                matchImageSnapshot(`api-input-date-size-${size}-filled`);

                getInput().type(`01.`, {force: true});
                matchImageSnapshot(`api-input-date-size-${size}-set-day`);

                getInput().type(`06.1994`, {force: true});
                matchImageSnapshot(`api-input-date-size-${size}-set-full`);
            });
        }

        it(`Maximum month less than current month`, () => {
            cy.tuiVisit(`components/input-date/API?tuiMode=null&max$=1`);

            getInput().click();
            matchImageSnapshot(`input-date-maximum-month`);
        });

        it(`Minimum month more than current month`, () => {
            cy.tuiVisit(`components/input-date/API?tuiMode=null&min$=3`);

            getInput().click();
            matchImageSnapshot(`input-date-minimum-month`);
        });

        describe(`Invalid date cases`, () => {
            it(`does not accept day >31`, () => {
                cy.tuiVisit(`components/input-date/API`);

                getInput()
                    .type(`35`)
                    .should(`have.value`, `3`)
                    .should(`have.prop`, `selectionStart`, 1)
                    .should(`have.prop`, `selectionEnd`, 1);
            });

            it(`does not accept month >12`, () => {
                cy.tuiVisit(`components/input-date/API`);

                getInput()
                    .type(`1715`)
                    .should(`have.value`, `17.1`)
                    .should(`have.prop`, `selectionStart`, `17.1`.length)
                    .should(`have.prop`, `selectionEnd`, `17.1`.length);
            });

            it(`Type 999999 => 09.09.9999`, () => {
                cy.tuiVisit(`components/input-date/API`);

                getInput()
                    .type(`999999`)
                    .should(`have.value`, `09.09.9999`)
                    .should(`have.prop`, `selectionStart`, `09.09.9999`.length)
                    .should(`have.prop`, `selectionEnd`, `09.09.9999`.length);

                matchImageSnapshot(`input-date-type-999999`);
            });
        });

        function getInput(): Cypress.Chainable<JQuery> {
            return cy
                .get(`#demo-content`)
                .findByAutomationId(`tui-primitive-textfield__native-input`)
                .tuiScrollIntoView();
        }
    });

    describe(`Cypress component testing`, () => {
        it(`If there is min and an initial value and an initial value less than min - keep the initial value`, () => {
            cy.tuiVisit(`cypress`);

            const id = `#input-date-initialization`;

            cy.get(`${id} input`).first().should(`be.visible`).as(`input`);

            cy.get(`@input`)
                .should(`have.value`, `17.05.2023`)
                .focus()
                .should(`have.value`, `17.05.2023`)
                .blur()
                .should(`have.value`, `17.05.2023`)
                .focus()
                .should(`have.value`, `17.05.2023`);

            cy.get(id).contains(`Minimum value 18.05.2023`);

            cy.get(`@input`)
                .clear()
                .type(`17.05.2023`)
                .should(`have.value`, `18.05.2023`);
        });
    });
});

function matchImageSnapshot(name: string): void {
    cy.tuiWaitBeforeScreenshot().matchImageSnapshot(name, {capture: `viewport`});
}
