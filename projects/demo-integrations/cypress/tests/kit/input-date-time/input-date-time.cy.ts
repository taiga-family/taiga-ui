describe(`InputDateTime`, () => {
    beforeEach(() => {
        cy.viewport(400, 500);
    });

    describe(`API`, () => {
        it(`Maximum month less than current month`, () => {
            cy.tuiVisit(`components/input-date-time/API?tuiMode=null&max$=1`);

            getInput().click();
            matchImageSnapshot(`input-date-time-maximum-month`);
        });

        it(`Minimum month more than current month`, () => {
            cy.tuiVisit(`components/input-date-time/API?tuiMode=null&min$=3`);

            getInput().click();
            matchImageSnapshot(`input-date-time-minimum-month`);
        });

        function getInput(): Cypress.Chainable<JQuery> {
            return cy
                .get(`#demo-content`)
                .findByAutomationId(`tui-primitive-textfield__native-input`);
        }

        function matchImageSnapshot(name: string): void {
            cy.matchImageSnapshot(name, {capture: `viewport`});
        }
    });

    describe(`invalid date`, () => {
        describe(`DMY mode`, () => {
            beforeEach(() => {
                cy.tuiVisit(`components/input-date-time/API`);
                cy.get(`#demo-content input`).first().should(`be.visible`).as(`input`);
            });

            it(`does not accept day > 31`, () => {
                cy.get(`@input`)
                    .type(`32`)
                    .should(`have.value`, `3`)
                    .should(`have.prop`, `selectionStart`, 1)
                    .should(`have.prop`, `selectionEnd`, 1);
            });

            it(`does not accept month > 12`, () => {
                cy.get(`@input`)
                    .type(`24.13`)
                    .should(`have.value`, `24.1`)
                    .should(`have.prop`, `selectionStart`, `24.1`.length)
                    .should(`have.prop`, `selectionEnd`, `24.1`.length);
            });
        });

        describe(`YMD mode`, () => {
            beforeEach(() => {
                cy.tuiVisit(`components/input-date-time`);
                cy.get(`#date-localization input`)
                    .first()
                    .tuiScrollIntoView()
                    .clear()
                    .as(`input`);
            });

            it(`does not accept day > 31`, () => {
                cy.get(`@input`)
                    .type(`2023/05/35`)
                    .should(`have.value`, `2023/05/3`)
                    .should(`have.prop`, `selectionStart`, `2023/05/3`.length)
                    .should(`have.prop`, `selectionEnd`, `2023/05/3`.length);
            });

            it(`does not accept month > 12`, () => {
                cy.get(`@input`)
                    .type(`2023/13`)
                    .should(`have.value`, `2023/1`)
                    .should(`have.prop`, `selectionStart`, `2023/1`.length)
                    .should(`have.prop`, `selectionEnd`, `2023/1`.length);
            });
        });
    });
});
