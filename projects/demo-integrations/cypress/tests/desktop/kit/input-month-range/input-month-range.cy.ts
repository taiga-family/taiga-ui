describe(`InputMonthRange`, () => {
    describe(`API`, () => {
        it(`Maximum month less than current month`, () => {
            cy.tuiVisit(`components/input-month-range/API?tuiMode=null&max$=1`);

            getInput().click();
            matchImageSnapshot(`input-month-maximum-month`);
        });

        it(`Minimum month more than current month`, () => {
            cy.tuiVisit(`components/input-month-range/API?tuiMode=null&min$=3`);

            getInput().click();
            matchImageSnapshot(`input-month-minimum-month`);
        });

        function getInput(): Cypress.Chainable<JQuery> {
            return cy
                .get(`#demoContent`)
                .findByAutomationId(`tui-primitive-textfield__native-input`);
        }

        function matchImageSnapshot(name: string): void {
            cy.matchImageSnapshot(name, {capture: `viewport`});
        }
    });
});
