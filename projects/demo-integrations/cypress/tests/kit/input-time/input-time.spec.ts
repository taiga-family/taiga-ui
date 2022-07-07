describe('InputTime', () => {
    beforeEach(() => cy.clock(Date.UTC(2021, 10, 10, 15, 30, 0, 0), ['Date']));

    describe('Examples', () => {
        beforeEach(() => cy.tuiVisit('components/input-time'));

        for (const [parentIndex, id] of [
            'base',
            'dropdown',
            'options',
            'options_max',
            'options_ampm',
        ].entries()) {
            it(id, () => {
                cy.get(`#${id}`)
                    .findByAutomationId('tui-doc-example')
                    .tuiScrollIntoView()
                    .as('wrapper');

                cy.get('@wrapper')
                    .findByAutomationId('tui-primitive-textfield__native-input')
                    .each((input, index) => {
                        cy.wrap(input)
                            .focus()
                            .type('{selectall}{backspace}')
                            .focused()
                            .matchImageSnapshot(
                                `0${parentIndex + 1}-input-time-${id}-${index + 1}`,
                            );
                    });
            });
        }
    });

    describe('API', () => {
        describe('items are passed', () => {
            it('the dropdown is visible when the input is focused', () => {
                visitBy('items$=1');

                getInput().click();
                cy.matchImageSnapshot('dropdown_is_visible', {capture: 'viewport'});
            });

            it('disabledItemHandler disables the specified items in the dropdown', () => {
                visitBy('disabledItemHandler$=1&items$=1');

                getInput().click();
                getDropdown().scrollTo(0, 500).matchImageSnapshot('06_00_is_disabled');
            });

            for (const size of ['s', 'm', 'l']) {
                it(`the dropdown is configured for ${size} size`, () => {
                    visitBy(`items$=1&itemSize=${size}`);

                    getInput().click();
                    getDropdown().matchImageSnapshot(`dropdown_size_${size}`);
                });
            }

            it('strict forces to select the closest value from items', () => {
                visitBy('strict=true&items$=1');

                getInput()
                    .clear()
                    .type('07:55', {force: true})
                    .should('have.value', '08:00');
            });
        });

        for (const mode of ['HH:MM', 'HH:MM:SS', 'HH:MM:SS.MSS']) {
            it(`the input is configured for ${mode} mode`, () => {
                visitBy(`mode=${mode}`);

                getInput().click().matchImageSnapshot(`dropdown_mode_${mode}`);
            });
        }

        function visitBy(params: string): void {
            cy.tuiVisit(`components/input-time/API?tuiMode=null&${params}`);
        }

        function getInput(): Cypress.Chainable<JQuery> {
            return cy
                .get('#demoContent')
                .findByAutomationId('tui-primitive-textfield__native-input');
        }

        function getDropdown(): Cypress.Chainable<JQuery> {
            return cy.get('tui-dropdown-box tui-scrollbar');
        }
    });
});
