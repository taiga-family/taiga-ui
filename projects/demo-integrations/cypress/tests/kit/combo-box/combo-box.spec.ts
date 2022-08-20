describe(`ComboBox`, () => {
    describe(`Examples`, () => {
        it(`show non strict`, () => {
            cy.viewport(360, 290).tuiVisit(`components/combo-box`);

            cy.get(`tui-doc-example[heading]`)
                .not(`[id="virtual"]`)
                .invoke(`attr`, `style`, `display: none`);

            cy.get(`tui-doc-example`)
                .filter(`[heading="Virtual scroll"]`)
                .findByAutomationId(`tui-doc-example`)
                .tuiScrollIntoView()
                .findByAutomationId(`tui-primitive-textfield__native-input`)
                .type(`Canada`);

            cy.matchImageSnapshot(`01-combo-box-example-non-strict-search`, {
                capture: `viewport`,
            });
        });
    });

    describe(`API`, () => {
        for (const strict of [true, false]) {
            it(`search shouldn't be reset if an exact match is entered when strict is ${strict}`, () => {
                visitBy(strict);
                openFormValue();
                matchImageSnapshot(`01-combo-box-default-strict-${strict}`);

                getInput().type(`Rubles (500)`);
                waitCheckmark();
                matchImageSnapshot(`02-combo-box-show-checkmark-strict-${strict}`);

                clickFirstOption();
                focusWrapper();
                matchImageSnapshot(`03-combo-box-selected-value-strict-${strict}`);

                getInput().type(`{backspace}`);
                focusWrapper();
                matchImageSnapshot(
                    `04-combo-box-clear-last-symbol-value-strict-${strict}`,
                );

                getInput().type(`{selectall}{backspace}`);
                focusWrapper();
                matchImageSnapshot(`05-combo-box-clear-all-strict-${strict}`);
            });

            it(`correct word match when strict is ${strict}`, () => {
                visitBy(strict);
                openFormValue();

                getInput().type(`dOlLaRs (237)`);
                waitCheckmark();
                matchImageSnapshot(`06-combo-box-correct-matched-value-strict-${strict}`);

                getInput()
                    .type(`{backspace}`, {force: true})
                    .wait(200)
                    .type(`{backspace}`, {force: true})
                    .wait(200)
                    .type(`{backspace}`, {force: true});
                matchImageSnapshot(`07-combo-box-does-not-clear-value-strict-${strict}`);

                focusWrapper();
                matchImageSnapshot(`08-combo-box-unfocused-value-strict-${strict}`);

                getInput().type(`{selectall}{backspace}`, {force: true});
                matchImageSnapshot(`09-combo-box-cleared-value-strict-${strict}`);

                focusWrapper();
                matchImageSnapshot(
                    `10-combo-box-unfocused-without-value-strict-${strict}`,
                );
            });
        }

        function visitBy(strict: boolean): void {
            cy.tuiVisit(`components/combo-box/API?tuiMode=null&strict=${strict}`);
        }

        function openFormValue(): void {
            cy.get(`button span`).contains(`Form value`).click();
        }

        function matchImageSnapshot(name: string): void {
            cy.matchImageSnapshot(name, {capture: `viewport`});
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
