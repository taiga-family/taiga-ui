describe(`InputTime`, () => {
    beforeEach(() => {
        cy.viewport(`iphone-8`);
        cy.clock(Date.UTC(2021, 10, 10, 15, 30, 0, 0), [`Date`]);
    });

    describe(`Examples`, () => {
        beforeEach(() => cy.tuiVisit(`components/input-time`));

        for (const [parentIndex, id] of [
            `base`,
            `dropdown`,
            `options`,
            `options-max`,
            `options-max-and-postfix`,
        ].entries()) {
            it(id, () => {
                cy.get(`#${id}`)
                    .findByAutomationId(`tui-doc-example`)
                    .tuiScrollIntoView()
                    .as(`wrapper`);

                cy.get(`@wrapper`)
                    .find(`input`)
                    .first()
                    .each((input, index) => {
                        cy.wrap(input, {log: false})
                            .focus()
                            .type(`{selectall}{backspace}`, {force: true})
                            .focused()
                            .matchImageSnapshot(
                                `0${parentIndex + 1}-input-time-${id}-${index + 1}`,
                            );
                    });
            });
        }
    });

    describe(`API`, () => {
        for (const mode of [`HH:MM`, `HH:MM:SS`, `HH:MM:SS.MSS`]) {
            it(`the input is configured for ${mode} mode`, () => {
                visitBy(`mode=${mode}`);

                getInput().click().matchImageSnapshot(`dropdown_mode_${mode}`);
            });
        }

        describe(`items are passed`, () => {
            it(`the dropdown is visible when the input is focused`, () => {
                visitBy(`items$=1`);

                getInput().click();
                cy.matchImageSnapshot(`dropdown_is_visible`, {capture: `viewport`});
            });

            it(`disabledItemHandler disables the specified items in the dropdown`, () => {
                visitBy(`disabledItemHandler$=1&items$=1`);

                getInput().click();
                getDropdown().scrollTo(0, 500);

                cy.matchImageSnapshot(`06_00_is_disabled`, {capture: `viewport`});
            });

            for (const size of [`s`, `m`, `l`]) {
                it(`the dropdown is configured for ${size} size`, () => {
                    visitBy(`items$=1&itemSize=${size}`);

                    getInput().click();

                    cy.matchImageSnapshot(`dropdown_size_${size}`, {capture: `viewport`});
                });
            }

            it(`strict forces to select the closest value from items`, () => {
                visitBy(`strict=true&items$=1`);

                getInput()
                    .clear()
                    .type(`07:55`, {force: true})
                    .should(`have.value`, `08:00`);
            });
        });

        describe(`Basic typing from keyboard`, () => {
            beforeEach(() => {
                visitBy(`mode=HH:MM`);

                getInput().clear().should(`have.value`, ``);
            });

            it(`3 => 03`, () => {
                getInput()
                    .type(`3`)
                    .should(`have.value`, `03`)
                    .should(`have.prop`, `selectionStart`, 2)
                    .should(`have.prop`, `selectionEnd`, 2);
            });

            it(`1111 => 11:11`, () => {
                getInput()
                    .type(`1111`)
                    .should(`have.value`, `11:11`)
                    .should(`have.prop`, `selectionStart`, `11:11`.length)
                    .should(`have.prop`, `selectionEnd`, `11:11`.length);
            });

            it(`0130 => 01:30`, () => {
                getInput()
                    .type(`0130`)
                    .should(`have.value`, `01:30`)
                    .should(`have.prop`, `selectionStart`, `01:30`.length)
                    .should(`have.prop`, `selectionEnd`, `01:30`.length);
            });

            it(`99 => 09:09`, () => {
                getInput()
                    .type(`99`)
                    .should(`have.value`, `09:09`)
                    .should(`have.prop`, `selectionStart`, `09:09`.length)
                    .should(`have.prop`, `selectionEnd`, `09:09`.length);
            });
        });

        function visitBy(params: string): void {
            cy.tuiVisit(`components/input-time/API?tuiMode=null&${params}`);
        }

        function getInput(): Cypress.Chainable<JQuery> {
            return cy.get(`#demo-content`).find(`input`).first();
        }

        function getDropdown(): Cypress.Chainable<JQuery> {
            return cy.get(`tui-dropdown tui-scrollbar`);
        }
    });
});
