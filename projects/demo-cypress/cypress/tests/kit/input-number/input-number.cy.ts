/* eslint-disable no-irregular-whitespace */
/* eslint-disable @taiga-ui/experience/no-deep-imports */
import {
    CHAR_EM_DASH,
    CHAR_EN_DASH,
    CHAR_HYPHEN,
    CHAR_MINUS,
} from '@taiga-ui/cdk/constants';

describe(`InputNumber`, () => {
    beforeEach(() => {
        cy.viewport(500, 300);
    });

    describe(`API`, () => {
        it(`Infinite precision`, () => {
            cy.tuiVisit(`components/input-number/API?tuiMode=null&precision=Infinity`);

            cy.get(`#demo-content`)
                .findByAutomationId(`tui-primitive-textfield__native-input`)
                .focus()
                .type(`1,2345`);

            cy.get(`#demo-content`)
                .tuiWaitBeforeScreenshot()
                .matchImageSnapshot(`00-input-number-decimals`);
        });

        it(`prefix + value + postfix`, () => {
            cy.tuiVisit(`components/input-number/API?tuiMode=null&prefix=$&postfix=GBP`);

            cy.get(`#demo-content`)
                .tuiWaitBeforeScreenshot()
                .matchImageSnapshot(`01-input-number-prefix-value-postfix`);

            cy.get(`#demo-content`)
                .findByAutomationId(`tui-primitive-textfield__native-input`)
                .focus()
                .type(`{selectall}{backspace}`);

            cy.get(`#demo-content`)
                .tuiWaitBeforeScreenshot()
                .matchImageSnapshot(`02-input-number-prefix-postfix`);
        });

        for (const align of [`left`, `right`]) {
            it(`align=${align}`, () => {
                const readableFormatText = `Very long text`;

                cy.tuiVisit(
                    `/components/input-number/API?tuiMode=null&style.text-align=${align}&prefix=${readableFormatText}&postfix=${readableFormatText}`,
                );

                cy.get(`#demo-content`)
                    .tuiWaitBeforeScreenshot()
                    .matchImageSnapshot(`03-input-number-align-${align}`);
            });
        }

        describe(`overflow`, () => {
            for (const sandboxWidth of [`75`, `140`, `158`]) {
                it(`sandboxWidth=${sandboxWidth}`, () => {
                    cy.tuiVisit(
                        `components/input-number/API?tuiTextfieldPostfix=$&tuiTextfieldPrefix=VeryLongText&sandboxWidth=${sandboxWidth}`,
                    );

                    cy.get(`#demo-content`).matchImageSnapshot(
                        `input-number-sandboxWidth-${sandboxWidth}`,
                    );
                });
            }
        });
    });

    describe(`Examples`, () => {
        it(`cursor position`, () => {
            cy.tuiVisit(`components/input-number`);

            cy.get(`tui-doc-example[id=currency] .t-demo`)
                .tuiScrollIntoView()
                .as(`currency`);

            cy.get(`@currency`)
                .tuiWaitBeforeScreenshot()
                .matchImageSnapshot(`03-input-number-currency`);

            for (const [index, currency] of [`dollar`, `eur`, `pounds`].entries()) {
                cy.get(`@currency`)
                    .findByAutomationId(`tui-primitive-textfield__native-input`)
                    .eq(index)
                    .focus()
                    .type(`{selectall}{backspace}`)
                    .focused();

                cy.get(`@currency`)
                    .tuiWaitBeforeScreenshot()
                    .matchImageSnapshot(`0${4 + index}-currency-${currency}`);
            }
        });
    });

    describe(`Caret navigation`, () => {
        beforeEach(() => {
            cy.viewport(`iphone-x`);
        });

        describe(`if user tries to erase padded decimal zeroes (decimal="always"), mask triggers caret navigation`, () => {
            beforeEach(() => {
                cy.tuiVisit(`components/input-number/API?decimal=always&precision=2`);
                initializeAliases(`#demo-content tui-input-number`);

                cy.get(`@input`).clear();
            });

            it(`105,00| => Backspace => 105,0|0`, () => {
                cy.get(`@input`)
                    .type(`105,00`)
                    .type(`{backspace}`)
                    .should(`have.value`, `105,00`)
                    .should(`have.prop`, `selectionStart`, `105,0`.length)
                    .should(`have.prop`, `selectionEnd`, `105,0`.length);
            });

            it(`105,0|0 => Backspace => 105,|00`, () => {
                cy.get(`@input`)
                    .type(`105,00`)
                    .type(`{leftArrow}{backspace}`)
                    .should(`have.value`, `105,00`)
                    .should(`have.prop`, `selectionStart`, `105,`.length)
                    .should(`have.prop`, `selectionEnd`, `105,`.length);
            });

            it(`105,|00 => Backspace => 105|,00`, () => {
                cy.get(`@input`)
                    .type(`105,00`)
                    .type(`{leftArrow}`.repeat(2))
                    .type(`{backspace}`)
                    .should(`have.value`, `105,00`)
                    .should(`have.prop`, `selectionStart`, `105`.length)
                    .should(`have.prop`, `selectionEnd`, `105`.length);
            });

            it(`105,|00 => Delete => 105,0|0`, () => {
                cy.get(`@input`)
                    .type(`105,00`)
                    .type(`{leftArrow}`.repeat(2))
                    .type(`{del}`)
                    .should(`have.value`, `105,00`)
                    .should(`have.prop`, `selectionStart`, `105,0`.length)
                    .should(`have.prop`, `selectionEnd`, `105,0`.length);
            });
        });

        describe(`if user tries to erase thousand separator, mask triggers caret navigation`, () => {
            beforeEach(() => {
                cy.tuiVisit(`components/input-number/API?decimal=not-zero`);
                initializeAliases(`#demo-content tui-input-number`);

                cy.get(`@input`).clear();
            });

            it(`1| 000 => Delete => 1 |000`, () => {
                cy.get(`@input`)
                    .type(`1000`)
                    .type(`{moveToStart}{rightArrow}`)
                    .type(`{del}`)
                    .should(`have.value`, `1 000`)
                    .should(`have.prop`, `selectionStart`, `1 `.length)
                    .should(`have.prop`, `selectionEnd`, `1 `.length);
            });

            it(`1 |000 => Backspace => 1| 000`, () => {
                cy.get(`@input`)
                    .type(`1000`)
                    .type(`{moveToStart}{rightArrow}{rightArrow}`)
                    .should(`have.prop`, `selectionStart`, `1 `.length)
                    .should(`have.prop`, `selectionEnd`, `1 `.length)
                    .type(`{backspace}`)
                    .should(`have.value`, `1 000`)
                    .should(`have.prop`, `selectionStart`, `1`.length)
                    .should(`have.prop`, `selectionEnd`, `1`.length);
            });
        });
    });

    describe(`[min] prop`, () => {
        describe(`[min] property is positive number`, () => {
            beforeEach(() => {
                cy.viewport(`iphone-x`);
                cy.tuiVisit(`components/input-number/API?min=5`);
                initializeAliases(`#demo-content tui-input-number`);

                cy.get(`@input`).clear();
            });

            it(`rejects minus sign`, () => {
                cy.get(`@input`)
                    .type(`${CHAR_MINUS}${CHAR_HYPHEN}${CHAR_EN_DASH}${CHAR_EM_DASH}9`)
                    .should(`have.value`, `9`)
                    .should(`have.prop`, `selectionStart`, 1)
                    .should(`have.prop`, `selectionEnd`, 1);
            });

            it(`validates positive value only on blur`, () => {
                cy.get(`@input`)
                    .type(`2`) // less than [min]
                    .wait(100) // to be sure that value is not changed even in case of some async validation
                    .should(`have.value`, `2`)
                    .should(`have.prop`, `selectionStart`, 1)
                    .should(`have.prop`, `selectionEnd`, 1)
                    .blur()
                    .should(`have.value`, `5`);
            });
        });

        describe(`[min] property is negative number`, () => {
            beforeEach(() => {
                cy.viewport(`iphone-x`);
                cy.tuiVisit(`components/input-number/API?min=-5`);
                initializeAliases(`#demo-content tui-input-number`);

                cy.get(`@input`).clear();
            });

            it(`immediately validates negative value`, () => {
                cy.get(`@input`)
                    .type(`-10`) // less than [min]
                    .should(`have.value`, `${CHAR_MINUS}5`)
                    .should(`have.prop`, `selectionStart`, 2)
                    .should(`have.prop`, `selectionEnd`, 2);
            });

            it(`don't touch any positive value`, () => {
                cy.get(`@input`)
                    .type(`1`)
                    .should(`have.value`, `1`)
                    .type(`0`)
                    .should(`have.value`, `10`)
                    .blur()
                    .wait(100) // to be sure that value is not changed even in case of some async validation
                    .should(`have.value`, `10`);
            });
        });
    });

    describe(`[max] prop`, () => {
        describe(`[max] property is negative number`, () => {
            beforeEach(() => {
                cy.viewport(`iphone-x`);
                cy.tuiVisit(`components/input-number/API?max=-5`);
                initializeAliases(`#demo-content tui-input-number`);

                cy.get(`@input`).clear();
            });

            it(`validates negative value only on blur`, () => {
                cy.get(`@input`)
                    .type(`-1`) // more than [max]
                    .wait(100) // to be sure that value is not changed even in case of some async validation
                    .should(`have.value`, `${CHAR_MINUS}1`)
                    .should(`have.prop`, `selectionStart`, 2)
                    .should(`have.prop`, `selectionEnd`, 2)
                    .blur()
                    .should(`have.value`, `${CHAR_MINUS}5`);
            });
        });

        describe(`[max] property is positive number`, () => {
            beforeEach(() => {
                cy.viewport(`iphone-x`);
                cy.tuiVisit(`components/input-number/API?max=12`);
                initializeAliases(`#demo-content tui-input-number`);

                cy.get(`@input`).clear();
            });

            it(`immediately validates positive value`, () => {
                cy.get(`@input`)
                    .type(`19`) // more than [max]
                    .should(`have.value`, `12`)
                    .should(`have.prop`, `selectionStart`, 2)
                    .should(`have.prop`, `selectionEnd`, 2);
            });

            it(`don't touch any negative value`, () => {
                cy.get(`@input`)
                    .type(`-1`)
                    .should(`have.value`, `${CHAR_MINUS}1`)
                    .type(`9`)
                    .should(`have.value`, `${CHAR_MINUS}19`)
                    .blur()
                    .wait(100) // to be sure that value is not changed even in case of some async validation
                    .should(`have.value`, `${CHAR_MINUS}19`);
            });
        });
    });

    describe(`value formatting on blur`, () => {
        it(`Value 42 (decimal=not-zero) => 42`, () => {
            cy.tuiVisit(`components/input-number/API?precision=2&decimal=not-zero`);
            initializeAliases(`#demo-content tui-input-number`);

            cy.get(`@input`)
                .type(`{selectall}`)
                .type(`42`)
                .blur()
                .should(`have.value`, `42`);
        });

        it(`Value 42,1 (decimal=not-zero) => 42,10`, () => {
            cy.tuiVisit(`components/input-number/API?precision=2&decimal=not-zero`);
            initializeAliases(`#demo-content tui-input-number`);

            cy.get(`@input`)
                .type(`{selectall}`)
                .type(`42,1`)
                .blur()
                .should(`have.value`, `42,10`);
        });

        it(`Value 42,00 (decimal=not-zero) => 42`, () => {
            cy.tuiVisit(`components/input-number/API?precision=2&decimal=not-zero`);
            initializeAliases(`#demo-content tui-input-number`);

            cy.get(`@input`)
                .type(`{selectall}`)
                .type(`42,00`)
                .blur()
                .should(`have.value`, `42`);
        });

        it(`Value 42 (decimal=never) => 42`, () => {
            cy.tuiVisit(`components/input-number/API?precision=2&decimal=never`);
            initializeAliases(`#demo-content tui-input-number`);

            cy.get(`@input`)
                .type(`{selectall}`)
                .type(`42`)
                .blur()
                .should(`have.value`, `42`);
        });

        it(`Value 42 (decimal=always) => 42`, () => {
            cy.tuiVisit(`components/input-number/API?precision=2&decimal=always`);
            initializeAliases(`#demo-content tui-input-number`);

            cy.get(`@input`)
                .type(`{selectall}`)
                .type(`42`)
                .blur()
                .should(`have.value`, `42,00`);
        });

        it(`text field does not contain any digit (only prefix + postfix) => clear text field's value on blur`, () => {
            cy.tuiVisit(`components/input-number/API?prefix=$&postfix=kg`);
            initializeAliases(`#demo-content tui-input-number`);

            cy.get(`@input`)
                .type(`{selectall}`)
                .type(`{del}`)
                .should(`have.value`, `$ kg`)
                .blur()
                .should(`have.value`, ``);
        });
    });

    it(`adds prefix & postfix on focus`, () => {
        cy.tuiVisit(`components/input-number/API?prefix=$&postfix=kg`);
        initializeAliases(`#demo-content tui-input-number`);

        cy.get(`@input`)
            .type(`{selectall}`)
            .type(`{del}`)
            .blur()
            .should(`have.value`, ``)
            .focus()
            .should(`have.value`, `$ kg`)
            .should(`have.prop`, `selectionStart`, 1)
            .should(`have.prop`, `selectionEnd`, 1);
    });

    function initializeAliases(selector: string): void {
        cy.get(selector)
            .findByAutomationId(`tui-primitive-textfield__native-input`)
            .as(`input`);
    }
});
