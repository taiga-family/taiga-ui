describe(`InputDateTime`, () => {
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
                .get(`#demoContent`)
                .findByAutomationId(`tui-primitive-textfield__native-input`);
        }

        function matchImageSnapshot(name: string): void {
            cy.matchImageSnapshot(name, {capture: `viewport`});
        }
    });
});
