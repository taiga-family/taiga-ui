describe(`ComboBox`, () => {
    describe(`API`, () => {
        for (const strict of [true, false]) {
            it(`search shouldn't be reset if an exact match is entered when strict is ${strict}`, () => {
                visitBy(strict);
                openFormValue();
                cy.matchImageSnapshot({capture: `viewport`});

                getInput().type(`Rubles (500)`);
                waitCheckmark();
                cy.matchImageSnapshot({capture: `viewport`});

                clickFirstOption();
                focusWrapper();
                cy.matchImageSnapshot({capture: `viewport`});

                getInput().type(`{backspace}`);
                focusWrapper();
                cy.matchImageSnapshot({capture: `viewport`});

                getInput().type(`{selectall}{backspace}`);
                focusWrapper();
                cy.matchImageSnapshot({capture: `viewport`});
            });

            it(`correct word match when strict is ${strict}`, () => {
                visitBy(strict);
                openFormValue();

                getInput().type(`dOlLaRs (237)`);
                waitCheckmark();
                cy.matchImageSnapshot({capture: `viewport`});

                getInput()
                    .type(`{backspace}`, {force: true})
                    .wait(200)
                    .type(`{backspace}`, {force: true})
                    .wait(200)
                    .type(`{backspace}`, {force: true});
                cy.matchImageSnapshot({capture: `viewport`});

                focusWrapper();
                cy.matchImageSnapshot({capture: `viewport`});

                getInput().type(`{selectall}{backspace}`, {force: true});
                cy.matchImageSnapshot({capture: `viewport`});

                focusWrapper();
                cy.matchImageSnapshot({capture: `viewport`});
            });
        }

        function visitBy(strict: boolean): void {
            cy.tuiVisit(`components/combo-box/API?tuiMode=null&strict=${strict}`);
        }

        function openFormValue(): void {
            cy.get(`button span`).contains(`Form value`).click();
        }

        function focusWrapper(): void {
            cy.get(`#demoContent`).click({force: true});
        }

        function getInput(): Cypress.Chainable<JQuery> {
            return cy
                .get(`#demoContent`)
                .findByAutomationId(`tui-combo-box__textfield`)
                .findByAutomationId(`tui-primitive-textfield__native-input`);
        }

        function waitCheckmark(): void {
            cy.getByAutomationId(`tui-select-option__checkmark`).should(`be.visible`);
        }

        function clickFirstOption(): void {
            cy.getByAutomationId(`tui-data-list-wrapper__option`)
                .eq(0)
                .click({force: true});
        }
    });
});
