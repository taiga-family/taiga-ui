/* eslint-disable no-irregular-whitespace */
describe(`InputDateRange`, () => {
    beforeEach(() => {
        cy.viewport(650, 500);
    });

    describe(`API`, () => {
        for (const size of [`s`, `m`, `l`]) {
            it(`correct filler display for size ${size.toUpperCase()}`, () => {
                visitBy(size);

                getInput().click();
                matchImageSnapshot(`input-date-range-size-${size}-empty`);

                getInput().type(`01`, {force: true});
                matchImageSnapshot(`input-date-range-size-${size}-set-day`);

                getInput().type(`.06.1994`, {force: true});
                matchImageSnapshot(`input-date-range-size-${size}-set-from-date`);

                getInput().type(`01.01.2022`, {force: true});
                matchImageSnapshot(`input-date-range-size-${size}-set-to-date`);
            });
        }

        it(`Maximum month less than current month`, () => {
            cy.tuiVisit(`components/input-date-range/API?tuiMode=null&max$=4`);

            getInput().click();
            matchImageSnapshot(`input-date-range-maximum-month`);
        });

        it(`Minimum month more than current month`, () => {
            cy.tuiVisit(`components/input-date-range/API?tuiMode=null&min$=3`);

            getInput().click();
            matchImageSnapshot(`input-date-range-minimum-month`);
        });

        describe(`prevents changes if you enter an invalid date`, () => {
            it(`day > 31`, () => {
                cy.tuiVisit(`components/input-date-range/API`);

                getInput()
                    .type(`32`)
                    .should(`have.value`, `3`)
                    .should(`have.prop`, `selectionStart`, 1)
                    .should(`have.prop`, `selectionEnd`, 1)
                    .type(`1`)
                    .should(`have.value`, `31`)
                    .should(`have.prop`, `selectionStart`, 2)
                    .should(`have.prop`, `selectionEnd`, 2);
            });

            it(`month > 12`, () => {
                cy.tuiVisit(`components/input-date-range/API`);

                getInput()
                    .type(`2913`)
                    .should(`have.value`, `29.1`)
                    .should(`have.prop`, `selectionStart`, `29.1`.length)
                    .should(`have.prop`, `selectionEnd`, `29.1`.length)
                    .type(`0`)
                    .should(`have.value`, `29.10`)
                    .should(`have.prop`, `selectionStart`, `29.10`.length)
                    .should(`have.prop`, `selectionEnd`, `29.10`.length);
            });
        });

        it(`pads date range if it is less than [minLength]`, () => {
            cy.tuiVisit(`components/input-date-range/API?minLength$=0`); // minLength = {day: 3}

            getInput()
                .type(`21052023-22052023`)
                .should(`have.value`, `21.05.2023 – 23.05.2023`)
                .should(`have.prop`, `selectionStart`, `21.05.2023 – 23.05.2023`.length)
                .should(`have.prop`, `selectionEnd`, `21.05.2023 – 23.05.2023`.length);
        });

        it(`cuts date range if it is more than [maxLength]`, () => {
            cy.tuiVisit(`components/input-date-range/API?maxLength$=0`); // maxLength = {day: 5}

            getInput()
                .type(`20052023-29052023`)
                .should(`have.value`, `20.05.2023 – 24.05.2023`)
                .should(`have.prop`, `selectionStart`, `20.05.2023 – 24.05.2023`.length)
                .should(`have.prop`, `selectionEnd`, `20.05.2023 – 24.05.2023`.length);
        });

        function visitBy(size: string): void {
            cy.tuiVisit(
                `components/input-date-range/API?tuiMode=null&tuiTextfieldSize=${size}`,
            );
        }

        function getInput(): Cypress.Chainable<JQuery> {
            return cy
                .get(`#demo-content`)
                .findByAutomationId(`tui-primitive-textfield__native-input`);
        }

        function matchImageSnapshot(name: string): void {
            cy.matchImageSnapshot(name, {capture: `viewport`});
        }
    });
});
