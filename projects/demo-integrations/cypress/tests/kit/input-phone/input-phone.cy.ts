import {BROWSER_SUPPORTS_REAL_EVENTS} from '@demo-integrations/support/constants';

describe(`InputPhone`, () => {
    beforeEach(() => {
        cy.viewport(`iphone-x`);
    });

    describe(`[countryCode]="+7" & [phoneMaskAfterCountryCode]="(###) ###-##-##"`, () => {
        beforeEach(() => {
            cy.tuiVisit(
                `components/input-phone/API?countryCode=%2B7&phoneMaskAfterCountryCode=(%23%23%23)%20%23%23%23-%23%23-%23%23`,
                {skipDecodingUrl: true},
            );
            cy.get(`#demo-content input`)
                .should(`be.visible`)
                .first()
                .should(`have.value`, ``)
                .focus()
                .as(`input`);
        });

        describe(`basic typing (1 character per keydown)`, () => {
            const tests = [
                // [Typed value, Masked value]
                [`9`, `+7 (9`],
                [`91`, `+7 (91`],
                [`912`, `+7 (912`],
                [`9123`, `+7 (912) 3`],
                [`91234`, `+7 (912) 34`],
                [`912345`, `+7 (912) 345`],
                [`9123456`, `+7 (912) 345-6`],
                [`91234567`, `+7 (912) 345-67`],
                [`912345678`, `+7 (912) 345-67-8`],
                [`9123456789`, `+7 (912) 345-67-89`],
                [`91234567890`, `+7 (912) 345-67-89`],
                [`912345678900000000`, `+7 (912) 345-67-89`],
            ] as const;

            tests.forEach(([typedValue, maskedValue]) => {
                it(`Typing "${typedValue}" => "${maskedValue}"`, () => {
                    cy.get(`@input`)
                        .type(typedValue)
                        .should(`have.value`, maskedValue)
                        .should(`have.prop`, `selectionStart`, maskedValue.length)
                        .should(`have.prop`, `selectionEnd`, maskedValue.length);
                });
            });
        });

        describe(`basic erasing (caret is placed after the last value)`, () => {
            beforeEach(() => {
                cy.get(`@input`).type(`9123456789`);
            });

            const tests = [
                // [How many times "Backspace"-key was pressed, Masked value]
                [1, `+7 (912) 345-67-8`],
                [2, `+7 (912) 345-67`],
                [3, `+7 (912) 345-6`],
                [4, `+7 (912) 345`],
                [5, `+7 (912) 34`],
                [6, `+7 (912) 3`],
                [7, `+7 (912`],
                [8, `+7 (91`],
                [9, `+7 (9`],
                [10, `+7 `],
            ] as const;

            tests.forEach(([n, maskedValue]) => {
                it(`Backspace x${n} => "${maskedValue}"`, () => {
                    cy.get(`@input`)
                        .type(`{backspace}`.repeat(n))
                        .should(`have.value`, maskedValue)
                        .should(`have.prop`, `selectionStart`, maskedValue.length)
                        .should(`have.prop`, `selectionEnd`, maskedValue.length);
                });
            });

            it(`Delete => no value change && no caret index change`, () => {
                cy.get(`@input`)
                    .type(`{del}`)
                    .should(`have.value`, `+7 (912) 345-67-89`)
                    .should(`have.prop`, `selectionStart`, `+7 (912) 345-67-89`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912) 345-67-89`.length);
            });
        });

        describe(`Editing somewhere in the middle of a value (NOT the last character)`, () => {
            beforeEach(() => {
                cy.get(`@input`).type(`9123456789`);
            });

            // "|"-symbol is the caret position

            it(`+7 (912) 345-67-8|9 => Backspace + 0 => +7 (912) 345-67-0|9`, () => {
                cy.get(`@input`)
                    .focus()
                    .type(`{leftArrow}`)
                    .should(`have.prop`, `selectionStart`, `+7 (912) 345-67-8`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912) 345-67-8`.length)
                    .type(`{backspace}`)
                    .should(`have.value`, `+7 (912) 345-67-9`)
                    .should(`have.prop`, `selectionStart`, `+7 (912) 345-67-`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912) 345-67-`.length)
                    .type(`0`)
                    .should(`have.value`, `+7 (912) 345-67-09`)
                    .should(`have.prop`, `selectionStart`, `+7 (912) 345-67-0`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912) 345-67-0`.length);
            });

            it(`+7 (912) 345-67|-89 => Backspace + 0 => +7 (912) 345-60-|89`, () => {
                cy.get(`@input`)
                    .focus()
                    .type(`{leftArrow}{leftArrow}{leftArrow}`)
                    .should(`have.prop`, `selectionStart`, `+7 (912) 345-67`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912) 345-67`.length)
                    .type(`{backspace}`)
                    .should(`have.value`, `+7 (912) 345-68-9`)
                    .should(`have.prop`, `selectionStart`, `+7 (912) 345-6`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912) 345-6`.length)
                    .type(`0`)
                    .should(`have.value`, `+7 (912) 345-60-89`)
                    .should(`have.prop`, `selectionStart`, `+7 (912) 345-60-`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912) 345-60-`.length);
            });

            it(`+7 (912) 345-6|7-89 => Backspace + 0 => +7 (912) 345-0|7-89`, () => {
                cy.get(`@input`)
                    .focus()
                    .type(`{leftArrow}`.repeat(`7-89`.length))
                    .should(`have.prop`, `selectionStart`, `+7 (912) 345-6`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912) 345-6`.length)
                    .type(`{backspace}`)
                    .should(`have.value`, `+7 (912) 345-78-9`)
                    .should(`have.prop`, `selectionStart`, `+7 (912) 345-`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912) 345-`.length)
                    .type(`0`)
                    .should(`have.value`, `+7 (912) 345-07-89`)
                    .should(`have.prop`, `selectionStart`, `+7 (912) 345-0`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912) 345-0`.length);
            });

            it(`+7 (912) 345-67-|89 => Delete + 0 => +7 (912) 345-67-0|9`, () => {
                cy.get(`@input`)
                    .focus()
                    .type(`{leftArrow}`.repeat(`89`.length))
                    .should(`have.prop`, `selectionStart`, `+7 (912) 345-67-`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912) 345-67-`.length)
                    .type(`{del}`)
                    .should(`have.value`, `+7 (912) 345-67-9`)
                    .should(`have.prop`, `selectionStart`, `+7 (912) 345-67-`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912) 345-67-`.length)
                    .type(`0`)
                    .should(`have.value`, `+7 (912) 345-67-09`)
                    .should(`have.prop`, `selectionStart`, `+7 (912) 345-67-0`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912) 345-67-0`.length);
            });

            it(`+7 (912) 345-6|7-89 => Delete + 0 => +7 (912) 345-60-|89`, () => {
                cy.get(`@input`)
                    .focus()
                    .type(`{leftArrow}`.repeat(`7-89`.length))
                    .should(`have.prop`, `selectionStart`, `+7 (912) 345-6`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912) 345-6`.length)
                    .type(`{del}`)
                    .should(`have.value`, `+7 (912) 345-68-9`)
                    .should(`have.prop`, `selectionStart`, `+7 (912) 345-6`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912) 345-6`.length)
                    .type(`0`)
                    .should(`have.value`, `+7 (912) 345-60-89`)
                    .should(`have.prop`, `selectionStart`, `+7 (912) 345-60-`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912) 345-60-`.length);
            });

            it(`+7 (912) 345-|67-89 => Delete + 0 => +7 (912) 345-0|7-89`, () => {
                cy.get(`@input`)
                    .focus()
                    .type(`{leftArrow}`.repeat(`67-89`.length))
                    .should(`have.prop`, `selectionStart`, `+7 (912) 345-`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912) 345-`.length)
                    .type(`{del}`)
                    .should(`have.value`, `+7 (912) 345-78-9`)
                    .should(`have.prop`, `selectionStart`, `+7 (912) 345-`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912) 345-`.length)
                    .type(`0`)
                    .should(`have.value`, `+7 (912) 345-07-89`)
                    .should(`have.prop`, `selectionStart`, `+7 (912) 345-0`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912) 345-0`.length);
            });
        });

        describe(`Press Backspace after fixed value => no value change => move caret to the left`, () => {
            beforeEach(() => {
                cy.get(`@input`).type(`9123456789`);
            });

            it(`+7 (912) 345-67-|89 => Backspace => +7 (912) 345-67|-89`, () => {
                cy.get(`@input`)
                    .focus()
                    .type(`{leftArrow}{leftArrow}`)
                    .should(`have.prop`, `selectionStart`, `+7 (912) 345-67-`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912) 345-67-`.length)
                    .type(`{backspace}`)
                    .should(`have.value`, `+7 (912) 345-67-89`)
                    .should(`have.prop`, `selectionStart`, `+7 (912) 345-67`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912) 345-67`.length);
            });

            it(`+7 (912) 345-|67-89 => Backspace => +7 (912) 345|-67-89`, () => {
                cy.get(`@input`)
                    .focus()
                    .type(`{leftArrow}`.repeat(`67-89`.length))
                    .should(`have.prop`, `selectionStart`, `+7 (912) 345-`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912) 345-`.length)
                    .type(`{backspace}`)
                    .should(`have.value`, `+7 (912) 345-67-89`)
                    .should(`have.prop`, `selectionStart`, `+7 (912) 345`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912) 345`.length);
            });

            it(`+7 (912) |345-67-89 => Backspace x2 => +7 (912|) 345-67-89`, () => {
                cy.get(`@input`)
                    .focus()
                    .type(`{leftArrow}`.repeat(`345-67-89`.length))
                    .should(`have.prop`, `selectionStart`, `+7 (912) `.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912) `.length)
                    .type(`{backspace}{backspace}`)
                    .should(`have.value`, `+7 (912) 345-67-89`)
                    .should(`have.prop`, `selectionStart`, `+7 (912`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912`.length);
            });
        });

        describe(`Press Delete before fixed value => no value change => move caret to the right`, () => {
            beforeEach(() => {
                cy.get(`@input`).type(`9123456789`);
            });

            it(`+7 (912) 345-67|-89 => Delete => +7 (912) 345-67-|89`, () => {
                cy.get(`@input`)
                    .focus()
                    .type(`{leftArrow}`.repeat(`-89`.length))
                    .should(`have.prop`, `selectionStart`, `+7 (912) 345-67`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912) 345-67`.length)
                    .type(`{del}`)
                    .should(`have.value`, `+7 (912) 345-67-89`)
                    .should(`have.prop`, `selectionStart`, `+7 (912) 345-67-`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912) 345-67-`.length);
            });

            it(`+7 (912) 345|-67-89 => Delete => +7 (912) 345-|67-89`, () => {
                cy.get(`@input`)
                    .focus()
                    .type(`{leftArrow}`.repeat(`-67-89`.length))
                    .should(`have.prop`, `selectionStart`, `+7 (912) 345`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912) 345`.length)
                    .type(`{del}`)
                    .should(`have.value`, `+7 (912) 345-67-89`)
                    .should(`have.prop`, `selectionStart`, `+7 (912) 345-`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912) 345-`.length);
            });

            it(`+7 (912|) 345-67-89 => Backspace x2 => +7 (912) |345-67-89`, () => {
                cy.get(`@input`)
                    .focus()
                    .type(`{leftArrow}`.repeat(`) 345-67-89`.length))
                    .should(`have.prop`, `selectionStart`, `+7 (912`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912`.length)
                    .type(`{del}{del}`)
                    .should(`have.value`, `+7 (912) 345-67-89`)
                    .should(`have.prop`, `selectionStart`, `+7 (912) `.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912) `.length);
            });
        });

        describe(`Text selection`, () => {
            // ab|cd|e – it means that in string "abcde" characters "cd" are selected

            beforeEach(() => {
                cy.get(`@input`).type(`9123456789`);
            });

            describe(`Select range and press "Backspace"`, () => {
                it(
                    `+7 (912) 345-67-|89| => Backspace => +7 (912) 345-67|`,
                    BROWSER_SUPPORTS_REAL_EVENTS,
                    () => {
                        cy.get(`@input`).realPress([
                            `Shift`,
                            `ArrowLeft`,
                            `ArrowLeft`,
                            `Backspace`,
                        ]);

                        cy.get(`@input`)
                            .should(`have.value`, `+7 (912) 345-67`)
                            .should(
                                `have.prop`,
                                `selectionStart`,
                                `+7 (912) 345-67`.length,
                            )
                            .should(
                                `have.prop`,
                                `selectionEnd`,
                                `+7 (912) 345-67`.length,
                            );
                    },
                );

                it(
                    `+7 (912) 345-6|7-89| => Backspace => +7 (912) 345-6|`,
                    BROWSER_SUPPORTS_REAL_EVENTS,
                    () => {
                        cy.get(`@input`).realPress([
                            `Shift`,
                            ...new Array(`7-89`.length).fill(`ArrowLeft`),
                            `Backspace`,
                        ]);

                        cy.get(`@input`)
                            .should(`have.value`, `+7 (912) 345-6`)
                            .should(
                                `have.prop`,
                                `selectionStart`,
                                `+7 (912) 345-6`.length,
                            )
                            .should(`have.prop`, `selectionEnd`, `+7 (912) 345-6`.length);
                    },
                );

                it(
                    `+7 (912) 345-6|7-8|9 => Backspace => +7 (912) 345-6|9`,
                    BROWSER_SUPPORTS_REAL_EVENTS,
                    () => {
                        cy.get(`@input`).realPress([
                            `ArrowLeft`,
                            `Shift`,
                            ...new Array(`7-8`.length).fill(`ArrowLeft`),
                            `Backspace`,
                        ]);

                        cy.get(`@input`)
                            .should(`have.value`, `+7 (912) 345-69`)
                            .should(
                                `have.prop`,
                                `selectionStart`,
                                `+7 (912) 345-6`.length,
                            )
                            .should(`have.prop`, `selectionEnd`, `+7 (912) 345-6`.length);
                    },
                );

                it(
                    `+7 (912) 345-|67|-89 => Backspace => +7 (912) 345-|89`,
                    BROWSER_SUPPORTS_REAL_EVENTS,
                    () => {
                        cy.get(`@input`).realPress([
                            ...new Array(`-89`.length).fill(`ArrowLeft`),
                            `Shift`,
                            ...new Array(`67`.length).fill(`ArrowLeft`),
                            `Backspace`,
                        ]);

                        cy.get(`@input`)
                            .should(`have.value`, `+7 (912) 345-89`)
                            .should(`have.prop`, `selectionStart`, `+7 (912) 345-`.length)
                            .should(`have.prop`, `selectionEnd`, `+7 (912) 345-`.length);
                    },
                );

                it(
                    `+7 (912) |345|-67-89 => Backspace => +7 (912) |678-9`,
                    BROWSER_SUPPORTS_REAL_EVENTS,
                    () => {
                        cy.get(`@input`).realPress([
                            ...new Array(`-67-89`.length).fill(`ArrowLeft`),
                            `Shift`,
                            ...new Array(`345`.length).fill(`ArrowLeft`),
                            `Backspace`,
                        ]);

                        cy.get(`@input`)
                            .should(`have.value`, `+7 (912) 678-9`)
                            .should(`have.prop`, `selectionStart`, `+7 (912) `.length)
                            .should(`have.prop`, `selectionEnd`, `+7 (912) `.length);
                    },
                );
            });

            describe(`Select range and press "Delete"`, () => {
                it(
                    `+7 (912) 345-67-|89| => Delete => +7 (912) 345-67|`,
                    BROWSER_SUPPORTS_REAL_EVENTS,
                    () => {
                        cy.get(`@input`).realPress([`Shift`, `ArrowLeft`, `ArrowLeft`]);

                        cy.get(`@input`)
                            .type(`{del}`)
                            .should(`have.value`, `+7 (912) 345-67`)
                            .should(
                                `have.prop`,
                                `selectionStart`,
                                `+7 (912) 345-67`.length,
                            )
                            .should(
                                `have.prop`,
                                `selectionEnd`,
                                `+7 (912) 345-67`.length,
                            );
                    },
                );

                it(
                    `+7 (912) 345-6|7-89| => Delete => +7 (912) 345-6|`,
                    BROWSER_SUPPORTS_REAL_EVENTS,
                    () => {
                        cy.get(`@input`).realPress([
                            `Shift`,
                            ...new Array(`7-89`.length).fill(`ArrowLeft`),
                        ]);

                        cy.get(`@input`)
                            .type(`{del}`)
                            .should(`have.value`, `+7 (912) 345-6`)
                            .should(
                                `have.prop`,
                                `selectionStart`,
                                `+7 (912) 345-6`.length,
                            )
                            .should(`have.prop`, `selectionEnd`, `+7 (912) 345-6`.length);
                    },
                );

                it(
                    `+7 (912) 345-6|7-8|9 => Delete => +7 (912) 345-6|9`,
                    BROWSER_SUPPORTS_REAL_EVENTS,
                    () => {
                        cy.get(`@input`).realPress([
                            `ArrowLeft`,
                            `Shift`,
                            ...new Array(`7-8`.length).fill(`ArrowLeft`),
                        ]);

                        cy.get(`@input`)
                            .type(`{del}`)
                            .should(`have.value`, `+7 (912) 345-69`)
                            .should(
                                `have.prop`,
                                `selectionStart`,
                                `+7 (912) 345-6`.length,
                            )
                            .should(`have.prop`, `selectionEnd`, `+7 (912) 345-6`.length);
                    },
                );

                it(
                    `+7 (912) 345-|67|-89 => Delete => +7 (912) 345-|89`,
                    BROWSER_SUPPORTS_REAL_EVENTS,
                    () => {
                        cy.get(`@input`).realPress([
                            ...new Array(`-89`.length).fill(`ArrowLeft`),
                            `Shift`,
                            ...new Array(`67`.length).fill(`ArrowLeft`),
                        ]);

                        cy.get(`@input`)
                            .type(`{del}`)
                            .should(`have.value`, `+7 (912) 345-89`)
                            .should(`have.prop`, `selectionStart`, `+7 (912) 345-`.length)
                            .should(`have.prop`, `selectionEnd`, `+7 (912) 345-`.length);
                    },
                );

                it(
                    `+7 (912) |345|-67-89 => Delete => +7 (912) |678-9`,
                    BROWSER_SUPPORTS_REAL_EVENTS,
                    () => {
                        cy.get(`@input`).realPress([
                            ...new Array(`-67-89`.length).fill(`ArrowLeft`),
                            `Shift`,
                            ...new Array(`345`.length).fill(`ArrowLeft`),
                        ]);

                        cy.get(`@input`)
                            .type(`{del}`)
                            .should(`have.value`, `+7 (912) 678-9`)
                            .should(`have.prop`, `selectionStart`, `+7 (912) `.length)
                            .should(`have.prop`, `selectionEnd`, `+7 (912) `.length);
                    },
                );
            });

            describe(`Select range and press new digit`, () => {
                it(
                    `+7 (912) 345-67-|89| => Press 0 => +7 (912) 345-67-0|`,
                    BROWSER_SUPPORTS_REAL_EVENTS,
                    () => {
                        cy.get(`@input`).realPress([`Shift`, `ArrowLeft`, `ArrowLeft`]);

                        cy.get(`@input`)
                            .type(`0`)
                            .should(`have.value`, `+7 (912) 345-67-0`)
                            .should(
                                `have.prop`,
                                `selectionStart`,
                                `+7 (912) 345-67-0`.length,
                            )
                            .should(
                                `have.prop`,
                                `selectionEnd`,
                                `+7 (912) 345-67-0`.length,
                            );
                    },
                );

                it(
                    `+7 (912) 345-6|7-89| => Press 0 => +7 (912) 345-60|`,
                    BROWSER_SUPPORTS_REAL_EVENTS,
                    () => {
                        cy.get(`@input`).realPress([
                            `Shift`,
                            ...new Array(`7-89`.length).fill(`ArrowLeft`),
                        ]);

                        cy.get(`@input`)
                            .type(`0`)
                            .should(`have.value`, `+7 (912) 345-60`)
                            .should(
                                `have.prop`,
                                `selectionStart`,
                                `+7 (912) 345-60`.length,
                            )
                            .should(
                                `have.prop`,
                                `selectionEnd`,
                                `+7 (912) 345-60`.length,
                            );
                    },
                );

                it(
                    `+7 (912) 345-6|7-8|9 => Press 0 => +7 (912) 345-60-|9`,
                    BROWSER_SUPPORTS_REAL_EVENTS,
                    () => {
                        cy.get(`@input`).realPress([
                            `ArrowLeft`,
                            `Shift`,
                            ...new Array(`7-8`.length).fill(`ArrowLeft`),
                        ]);

                        cy.get(`@input`)
                            .type(`0`)
                            .should(`have.value`, `+7 (912) 345-60-9`)
                            .should(
                                `have.prop`,
                                `selectionStart`,
                                `+7 (912) 345-60-`.length,
                            )
                            .should(
                                `have.prop`,
                                `selectionEnd`,
                                `+7 (912) 345-60-`.length,
                            );
                    },
                );

                it(
                    `+7 (912) 345-|67|-89 => Press 0 => +7 (912) 345-0|8-9`,
                    BROWSER_SUPPORTS_REAL_EVENTS,
                    () => {
                        cy.get(`@input`).realPress([
                            ...new Array(`-89`.length).fill(`ArrowLeft`),
                            `Shift`,
                            ...new Array(`67`.length).fill(`ArrowLeft`),
                        ]);

                        cy.get(`@input`)
                            .type(`0`)
                            .should(`have.value`, `+7 (912) 345-08-9`)
                            .should(
                                `have.prop`,
                                `selectionStart`,
                                `+7 (912) 345-0`.length,
                            )
                            .should(`have.prop`, `selectionEnd`, `+7 (912) 345-0`.length);
                    },
                );

                it(
                    `+7 (912) |345|-67-89 => Press "0" => +7 (912) 0|67-89`,
                    BROWSER_SUPPORTS_REAL_EVENTS,
                    () => {
                        cy.get(`@input`).realPress([
                            ...new Array(`-67-89`.length).fill(`ArrowLeft`),
                            `Shift`,
                            ...new Array(`345`.length).fill(`ArrowLeft`),
                        ]);

                        cy.get(`@input`)
                            .type(`0`)
                            .should(`have.value`, `+7 (912) 067-89`)
                            .should(`have.prop`, `selectionStart`, `+7 (912) 0`.length)
                            .should(`have.prop`, `selectionEnd`, `+7 (912) 0`.length);
                    },
                );
            });

            describe(`Select fixed characters only`, () => {
                it(
                    `and press Backspace => no changes => move caret to the left side`,
                    BROWSER_SUPPORTS_REAL_EVENTS,
                    () => {
                        cy.get(`@input`).realPress([
                            ...new Array(`345-67-89`.length).fill(`ArrowLeft`),
                            `Shift`,
                            ...new Array(`) `.length).fill(`ArrowLeft`),
                            `Backspace`,
                        ]);

                        cy.get(`@input`)
                            .should(`have.value`, `+7 (912) 345-67-89`)
                            .should(`have.prop`, `selectionStart`, `+7 (912`.length)
                            .should(`have.prop`, `selectionEnd`, `+7 (912`.length);
                    },
                );

                it(
                    `and press Delete => no changes => move caret to the right side`,
                    BROWSER_SUPPORTS_REAL_EVENTS,
                    () => {
                        cy.get(`@input`).realPress([
                            ...new Array(`345-67-89`.length).fill(`ArrowLeft`),
                            `Shift`,
                            ...new Array(`) `.length).fill(`ArrowLeft`),
                        ]);

                        cy.get(`@input`)
                            .type(`{del}`)
                            .should(`have.value`, `+7 (912) 345-67-89`)
                            .should(`have.prop`, `selectionStart`, `+7 (912) `.length)
                            .should(`have.prop`, `selectionEnd`, `+7 (912) `.length);
                    },
                );
            });
        });

        describe(`Undo`, () => {
            it(`Select all + Delete => Ctrl + Z`, () => {
                cy.get(`@input`)
                    .type(`9123456789`)
                    .type(`{selectall}{del}`)
                    .should(`have.value`, `+7 `)
                    .type(`{ctrl+z}`)
                    .should(`have.value`, `+7 (912) 345-67-89`);
            });

            it(`+7 (912) 345-67|-89 => Backspace (x2) => Ctrl + Z (x2)`, () => {
                cy.get(`@input`)
                    .type(`9123456789`)
                    .type(`{leftArrow}`.repeat(`-89`.length))
                    .type(`{backspace}{backspace}`)
                    .should(`have.value`, `+7 (912) 345-89`)
                    .should(`have.prop`, `selectionStart`, `+7 (912) 345-`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912) 345-`.length)
                    .type(`{ctrl+z}`)
                    .should(`have.value`, `+7 (912) 345-68-9`)
                    .should(`have.prop`, `selectionStart`, `+7 (912) 345-6`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912) 345-6`.length)
                    .type(`{ctrl+z}`)
                    .should(`have.value`, `+7 (912) 345-67-89`)
                    .should(`have.prop`, `selectionStart`, `+7 (912) 345-67`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912) 345-67`.length);
            });

            it(
                `+7 (912) |345-67|-89 => Delete => Cmd + Z`,
                BROWSER_SUPPORTS_REAL_EVENTS,
                () => {
                    cy.get(`@input`)
                        .type(`9123456789`)
                        .realPress([
                            ...new Array(`-89`.length).fill(`ArrowLeft`),
                            `Shift`,
                            ...new Array(`345-67`.length).fill(`ArrowLeft`),
                        ]);

                    cy.get(`@input`)
                        .type(`{del}`)
                        .should(`have.value`, `+7 (912) 89`)
                        .should(`have.prop`, `selectionStart`, `+7 (912) `.length)
                        .should(`have.prop`, `selectionEnd`, `+7 (912) `.length)
                        .type(`{cmd+z}`)
                        .should(`have.value`, `+7 (912) 345-67-89`)
                        .should(`have.prop`, `selectionStart`, `+7 (912) `.length)
                        .should(`have.prop`, `selectionEnd`, `+7 (912) 345-67`.length);
                },
            );
        });

        describe(`Redo`, () => {
            it(`Select all + Delete => Cmd + Z => Cmd + Shift + Z`, () => {
                cy.get(`@input`)
                    .type(`9123456789`)
                    .type(`{selectall}{del}`)
                    .should(`have.value`, `+7 `)
                    .type(`{cmd+z}`)
                    .should(`have.value`, `+7 (912) 345-67-89`)
                    .type(`{cmd+shift+z}`)
                    .should(`have.value`, `+7 `);
            });

            it(`+7 (912) 345-67|-89 => Backspace (x2) => Ctrl + Z (x2) => Ctrl + Y (x2)`, () => {
                cy.get(`@input`)
                    .type(`9123456789`)
                    .type(`{leftArrow}`.repeat(`-89`.length))
                    .type(`{backspace}{backspace}`)
                    .type(`{ctrl+z}{ctrl+z}`)
                    .type(`{ctrl+y}{ctrl+y}`)
                    .should(`have.value`, `+7 (912) 345-89`)
                    .should(`have.prop`, `selectionStart`, `+7 (912) 345-`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (912) 345-`.length);
            });

            it(
                `+7 (912) |345-67|-89 => Delete => Cmd + Z => Cmd + Shift + Z`,
                BROWSER_SUPPORTS_REAL_EVENTS,
                () => {
                    cy.get(`@input`)
                        .type(`9123456789`)
                        .realPress([
                            ...new Array(`-89`.length).fill(`ArrowLeft`),
                            `Shift`,
                            ...new Array(`345-67`.length).fill(`ArrowLeft`),
                        ]);

                    cy.get(`@input`)
                        .type(`{del}`)
                        .type(`{cmd+z}`)
                        .type(`{cmd+shift+z}`)
                        .should(`have.value`, `+7 (912) 89`)
                        .should(`have.prop`, `selectionStart`, `+7 (912) `.length)
                        .should(`have.prop`, `selectionEnd`, `+7 (912) `.length);
                },
            );
        });

        describe(`Non-removable country prefix`, () => {
            it(`cannot be removed via selectAll + Backspace`, () => {
                cy.get(`@input`)
                    .type(`9123456789`)
                    .type(`{selectall}{backspace}`)
                    .should(`have.value`, `+7 `)
                    .should(`have.prop`, `selectionStart`, `+7 `.length)
                    .should(`have.prop`, `selectionEnd`, `+7 `.length);
            });

            it(`cannot be removed via selectAll + Delete`, () => {
                cy.get(`@input`)
                    .type(`9123456789`)
                    .type(`{selectall}{del}`)
                    .should(`have.value`, `+7 `)
                    .should(`have.prop`, `selectionStart`, `+7 `.length)
                    .should(`have.prop`, `selectionEnd`, `+7 `.length);
            });

            it(`cannot be removed via Backspace`, () => {
                cy.get(`@input`)
                    .type(`9123456789`)
                    .type(`{backspace}`.repeat(`+7 (912) 345-89`.length))
                    .should(`have.value`, `+7 `)
                    .should(`have.prop`, `selectionStart`, `+7 `.length)
                    .should(`have.prop`, `selectionEnd`, `+7 `.length);
            });

            it(`cannot be removed via Delete`, () => {
                cy.get(`@input`)
                    .type(`9123456789`)
                    .type(`{moveToStart}`)
                    .type(`{del}`.repeat(`+7 (912) 345-89`.length))
                    .should(`have.value`, `+7 `)
                    .should(`have.prop`, `selectionStart`, `+7 `.length)
                    .should(`have.prop`, `selectionEnd`, `+7 `.length);
            });

            it(`appears on focus if input is empty`, () => {
                cy.get(`@input`)
                    .blur()
                    .should(`have.value`, ``)
                    .focus()
                    .should(`have.value`, `+7 `)
                    .should(`have.prop`, `selectionStart`, `+7 `.length)
                    .should(`have.prop`, `selectionEnd`, `+7 `.length);
            });

            it(`disappears on blur if there are no more digits except it`, () => {
                cy.get(`@input`)
                    .focus()
                    .should(`have.value`, `+7 `)
                    .blur()
                    .should(`have.value`, ``);
            });
        });

        describe(`New typed character is equal to the previous (already existing) fixed character`, () => {
            it(`+7 | => Type 7 => +7 (7`, () => {
                cy.get(`@input`)
                    .type(`7`)
                    .should(`have.value`, `+7 (7`)
                    .should(`have.prop`, `selectionStart`, `+7 (7`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (7`.length);
            });

            it(`+7 (7| => Type 7 => +7 (77`, () => {
                cy.get(`@input`)
                    .type(`77`)
                    .should(`have.value`, `+7 (77`)
                    .should(`have.prop`, `selectionStart`, `+7 (77`.length)
                    .should(`have.prop`, `selectionEnd`, `+7 (77`.length);
            });
        });
    });

    it(`filler`, () => {
        cy.tuiVisit(
            `components/input-phone/API?tuiTextfieldCustomContent=tuiIconMastercardMono&phoneMaskAfterCountryCode=(%23%23%23)%20%23%23%23-%23%23-%23%23&tuiTextfieldCleaner=true&focusable=true&tuiTextfieldPrefix=&tuiTextfieldPostfix=&tuiTextfieldFiller=57567567&tuiTextfieldSize=l&search=q3e`,
            {skipExpectUrl: true, skipDecodingUrl: true},
        );

        cy.get(`#demo-content`)
            .findByAutomationId(`tui-primitive-textfield__native-input`)
            .focus()
            .matchImageSnapshot(`input-phone-filler`);
    });
});
