describe('InputDateRange', () => {
    describe('API', () => {
        for (const size of ['s', 'm', 'l']) {
            it(`correct filler display for size ${size.toUpperCase()}`, () => {
                visitBy(size);

                getInput().click();
                matchImageSnapshot(`input-date-range-size-${size}-empty`);

                getInput().type('01', {force: true});
                matchImageSnapshot(`input-date-range-size-${size}-set-day`);

                getInput().type('.06.1994', {force: true});
                matchImageSnapshot(`input-date-range-size-${size}-set-from-date`);

                getInput().type('01.01.2022', {force: true});
                matchImageSnapshot(`input-date-range-size-${size}-set-to-date`);
            });
        }

        function visitBy(size: string): void {
            cy.tuiVisit(
                `components/input-date-range/API?tuiMode=null&tuiTextfieldSize=${size}`,
            );
        }

        function getInput(): Cypress.Chainable<JQuery> {
            return cy
                .get('#demoContent')
                .findByAutomationId('tui-primitive-textfield__native-input');
        }

        function matchImageSnapshot(name: string): void {
            cy.matchImageSnapshot(name, {capture: 'viewport'});
        }
    });
});
