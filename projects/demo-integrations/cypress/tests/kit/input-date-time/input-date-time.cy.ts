import {BROWSER_SUPPORTS_REAL_EVENTS} from '@demo-integrations/support/constants';

describe(`InputDateTime`, () => {
    beforeEach(() => {
        cy.viewport(400, 600);
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

        it(
            `[max] property cannot be bypassed via selection`,
            BROWSER_SUPPORTS_REAL_EVENTS,
            () => {
                // max = [{year: 2018, month: 10, day: 2}, {hours: 16, minutes: 20, seconds: 0, ms: 0}]
                cy.tuiVisit(`components/input-date-time/API?max$=4`);

                const maxValue = `02.11.2018, 16:20`;

                getInput()
                    .focus()
                    .type(maxValue)
                    .should(`have.value`, maxValue)
                    .realPress([`Shift`, `ArrowLeft`]);

                getInput()
                    .type(`5`)
                    .should(`have.value`, maxValue)
                    .realPress([
                        ...new Array(`:20`.length).fill(`ArrowLeft`),
                        `Shift`,
                        `ArrowLeft`,
                    ]);

                // valid case
                getInput()
                    .type(`2`)
                    .should(`have.value`, `02.11.2018, 12:20`)
                    .should(`have.prop`, `selectionStart`, `02.11.2018, 12:`.length)
                    .should(`have.prop`, `selectionEnd`, `02.11.2018, 12:`.length);

                getInput().realPress([`Shift`, `ArrowLeft`, `ArrowLeft`]);

                // invalid case
                getInput().type(`9`).should(`have.value`, maxValue);
            },
        );

        it(
            `[min] property cannot be bypassed via selection`,
            BROWSER_SUPPORTS_REAL_EVENTS,
            () => {
                // min = [{year: 2018, month: 9, day: 31}, {hours: 12, minutes: 20, seconds: 0, ms: 0}]
                cy.tuiVisit(`components/input-date-time/API?min$=4`);

                const minValue = `31.10.2018, 12:20`;

                getInput()
                    .focus()
                    .type(minValue)
                    .should(`have.value`, minValue)
                    .realPress([`ArrowLeft`, `Shift`, `ArrowLeft`]); // 31.10.2018, 12:|2|0

                getInput()
                    .type(`1`)
                    .should(`have.value`, minValue)
                    .type(`{moveToEnd}`)
                    .realPress([
                        ...new Array(`:20`.length).fill(`ArrowLeft`),
                        `Shift`,
                        `ArrowLeft`,
                    ]); // 31.10.2018, 1|2|:20

                // valid case
                getInput()
                    .type(`5`)
                    .should(`have.value`, `31.10.2018, 15:20`)
                    .should(`have.prop`, `selectionStart`, `31.10.2018, 15:`.length)
                    .should(`have.prop`, `selectionEnd`, `31.10.2018, 15:`.length);

                getInput().realPress([`Shift`, `ArrowLeft`, `ArrowLeft`]); // 31.10.2018, 1|5|:20

                // invalid case
                getInput().type(`1`).should(`have.value`, minValue);
            },
        );

        it(`should place caret before time after selection of a new date via calendar`, () => {
            cy.tuiVisit(`components/input-date-time/API`);

            getInput()
                .type(`191120181235`)
                .should(`have.value`, `19.11.2018, 12:35`)
                .click()
                .should(`have.prop`, `selectionStart`, `19.11.2018, 12:35`.length)
                .should(`have.prop`, `selectionEnd`, `19.11.2018, 12:35`.length);

            selectDayViaCalendar(15);

            getInput()
                .should(`have.value`, `15.11.2018, 12:35`)
                .should(`have.prop`, `selectionStart`, `15.11.2018, `.length)
                .should(`have.prop`, `selectionEnd`, `15.11.2018, `.length);
        });

        function getInput(): Cypress.Chainable<JQuery> {
            return cy
                .get(`#demo-content`)
                .findByAutomationId(`tui-primitive-textfield__native-input`);
        }

        function selectDayViaCalendar(day: number): Cypress.Chainable<JQuery> {
            return cy
                .get(`tui-calendar`)
                .getByAutomationId(`tui-primitive-calendar__cell`)
                .contains(`${day}`)
                .click();
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
