import {INPUT_RANGE_PAGE_URL} from '../../../../support/shared.entities';

describe(`InputRange`, () => {
    beforeEach(() => {
        cy.viewport(`macbook-13`);
    });

    describe(`Keyboard interactions`, () => {
        beforeEach(() => {
            cy.tuiVisit(`${INPUT_RANGE_PAGE_URL}/API?min=-100&max=100&quantum=5`);
            initializeAliases(`#demoContent tui-input-range`, [0, 10]);
        });

        it(`pressing Arrow Down decreases LEFT value when LEFT text input is focused`, () => {
            cy.get(`@leftTextInput`).focus();

            cy.get(`body`).type(`{downarrow}`);

            cy.get(`@leftSlider`).should(`have.value`, -5);
            cy.get(`@leftTextInput`).should(`have.value`, -5);

            cy.get(`body`).type(`{downarrow}`);

            cy.get(`@leftSlider`).should(`have.value`, -10);
            cy.get(`@leftTextInput`).should(`have.value`, -10);
        });

        it(`pressing Arrow Down decreases RIGHT value when RIGHT text input is focused`, () => {
            cy.get(`@rightTextInput`).focus();

            cy.get(`body`).type(`{downarrow}`);

            cy.get(`@rightSlider`).should(`have.value`, 5);
            cy.get(`@rightTextInput`).should(`have.value`, 5);

            cy.get(`body`).type(`{downarrow}`);

            cy.get(`@rightSlider`).should(`have.value`, 0);
            cy.get(`@rightTextInput`).should(`have.value`, 0);
        });

        it(`pressing Arrow Up increases LEFT value when LEFT text input is focused`, () => {
            cy.get(`@leftTextInput`).focus();

            cy.get(`body`).type(`{uparrow}`);

            cy.get(`@leftSlider`).should(`have.value`, 5);
            cy.get(`@leftTextInput`).should(`have.value`, 5);

            cy.get(`body`).type(`{uparrow}`);

            cy.get(`@leftSlider`).should(`have.value`, 10);
            cy.get(`@leftTextInput`).should(`have.value`, 10);
        });

        it(`pressing Arrow Up increases RIGHT value when RIGHT text input is focused`, () => {
            cy.get(`@rightTextInput`).focus();

            cy.get(`body`).type(`{uparrow}`);

            cy.get(`@rightSlider`).should(`have.value`, 15);
            cy.get(`@rightTextInput`).should(`have.value`, 15);

            cy.get(`body`).type(`{uparrow}`);

            cy.get(`@rightSlider`).should(`have.value`, 20);
            cy.get(`@rightTextInput`).should(`have.value`, 20);
        });

        it(`cannot set right value less than left value via ArrowDown`, () => {
            cy.get(`@rightTextInput`).focus();

            cy.get(`body`).type(`{downarrow}{downarrow}`);
            cy.get(`body`).type(`{downarrow}{downarrow}`);
            cy.get(`body`).type(`{downarrow}{downarrow}`);

            cy.get(`@leftSlider`).should(`have.value`, 0);
            cy.get(`@leftTextInput`).should(`have.value`, 0);
            cy.get(`@rightSlider`).should(`have.value`, 0);
            cy.get(`@rightTextInput`).should(`have.value`, 0);
        });

        it(`cannot set left value more than right value via ArrowUp`, () => {
            cy.get(`@leftTextInput`).focus();

            cy.get(`body`).type(`{uparrow}{uparrow}`);
            cy.get(`body`).type(`{uparrow}{uparrow}`);
            cy.get(`body`).type(`{uparrow}{uparrow}`);

            cy.get(`@leftSlider`).should(`have.value`, 10);
            cy.get(`@leftTextInput`).should(`have.value`, 10);
            cy.get(`@rightSlider`).should(`have.value`, 10);
            cy.get(`@rightTextInput`).should(`have.value`, 10);
        });

        it(`pressing ArrowRight does not change any value (this key is for caret navigation only)`, () => {
            cy.get(`@leftTextInput`).focus();
            cy.get(`body`).type(`{rightarrow}{rightarrow}`);

            cy.get(`@rightTextInput`).focus();
            cy.get(`body`).type(`{rightarrow}{rightarrow}`);

            cy.get(`@leftSlider`).should(`have.value`, 0);
            cy.get(`@leftTextInput`).should(`have.value`, 0);
            cy.get(`@rightSlider`).should(`have.value`, 10);
            cy.get(`@rightTextInput`).should(`have.value`, 10);
        });

        it(`pressing ArrowLeft does not change any value (this key is for caret navigation only)`, () => {
            cy.get(`@leftTextInput`).focus();
            cy.get(`body`).type(`{leftarrow}{leftarrow}`);

            cy.get(`@rightTextInput`).focus();
            cy.get(`body`).type(`{leftarrow}{leftarrow}`);

            cy.get(`@leftSlider`).should(`have.value`, 0);
            cy.get(`@leftTextInput`).should(`have.value`, 0);
            cy.get(`@rightSlider`).should(`have.value`, 10);
            cy.get(`@rightTextInput`).should(`have.value`, 10);
        });
    });

    describe(`Rounding numbers (to the nearest step which satisfies quantum) (min=0 | max=10 | quantum=2.5)`, () => {
        beforeEach(() => {
            cy.tuiVisit(`${INPUT_RANGE_PAGE_URL}/API?min=0&max=10&quantum=2.5`);
            initializeAliases(`#demoContent tui-input-range`, [0, 10]);
        });

        const testsConditions = [
            {typedValue: `9`, expectedRoundedValue: `10`},
            {typedValue: `8`, expectedRoundedValue: `7,5`},
            {typedValue: `7,6`, expectedRoundedValue: `7,5`},
            {typedValue: `7.4`, expectedRoundedValue: `7,5`},
            {typedValue: `7`, expectedRoundedValue: `7,5`},
            {typedValue: `6`, expectedRoundedValue: `5`},
            {typedValue: `3.2`, expectedRoundedValue: `2,5`},
            {typedValue: `1`, expectedRoundedValue: `0`},
            {typedValue: `0.1`, expectedRoundedValue: `0`},
        ] as const;

        for (const {typedValue, expectedRoundedValue} of testsConditions) {
            it(`${typedValue} => ${expectedRoundedValue}`, () => {
                cy.get(`@rightTextInput`)
                    .focus()
                    .clear()
                    .type(typedValue)
                    .blur()
                    .should(`have.value`, expectedRoundedValue);
            });
        }
    });

    describe(`Range interactions`, () => {
        describe(`click on the sliders' track`, () => {
            beforeEach(() => {
                cy.tuiVisit(`${INPUT_RANGE_PAGE_URL}/API?min=-100&max=100&quantum=10`);
                initializeAliases(`#demoContent tui-input-range`, [0, 10]);
            });

            it(`clicking on the RIGHT side changes only the RIGHT value (+ focuses the RIGHT text input)`, () => {
                cy.get(`@rightSlider`)
                    .click(`right`, {force: true})
                    .should(`have.value`, 100);

                cy.get(`@leftSlider`).should(`have.value`, 0);
                cy.get(`@leftTextInput`).should(`have.value`, 0);

                cy.get(`@rightTextInput`).should(`have.value`, 100).should(`be.focused`);
            });

            it(`clicking on the LEFT side changes only the LEFT value (+ focuses the LEFT text input)`, () => {
                cy.get(`@leftSlider`)
                    .click(`left`, {force: true})
                    .should(`have.value`, -100);

                cy.get(`@rightSlider`).should(`have.value`, 10);
                cy.get(`@rightTextInput`).should(`have.value`, 10);

                cy.get(`@leftTextInput`).should(`have.value`, -100).should(`be.focused`);
            });
        });

        describe(`click on a thumb`, () => {
            beforeEach(() => {
                cy.tuiVisit(`${INPUT_RANGE_PAGE_URL}/API?min=0&max=10&quantum=1`);
                initializeAliases(`#demoContent tui-input-range`, [0, 10]);
            });

            it(`click on the LEFT thumb (with NO value changes) => focuses the LEFT text input`, () => {
                cy.get(`@leftSlider`)
                    .click(`left`, {force: true})
                    .should(`have.value`, 0);

                cy.get(`@leftTextInput`).should(`have.value`, 0).should(`be.focused`);
            });

            it(`click on the RIGHT thumb (with NO value changes) => focuses the RIGHT text input`, () => {
                cy.get(`@rightSlider`)
                    .click(`right`, {force: true})
                    .should(`have.value`, 10);

                cy.get(`@rightTextInput`).should(`have.value`, 10).should(`be.focused`);
            });
        });
    });

    describe(`Very long placeholder`, () => {
        it(`basic case`, () => {
            cy.viewport(`macbook-11`);
            cy.tuiVisit(`${INPUT_RANGE_PAGE_URL}/API`);

            cy.get(`#demoContent`)
                .should(`be.visible`)
                .matchImageSnapshot(`01-long-placeholder_basic`);
        });

        it(`with \`leftValueContent\` and \`rightValueContent\``, () => {
            cy.viewport(`iphone-x`);
            cy.tuiVisit(
                `${INPUT_RANGE_PAGE_URL}/API?rightValueContent=TOP%20SECRET&leftValueContent=I%20am%20a%20leftValueContent`,
            );

            cy.get(`#demoContent`)
                .should(`be.visible`)
                .matchImageSnapshot(`02-long-placeholder_value-content`);
        });

        it(`with \`pluralize\``, () => {
            cy.viewport(`iphone-8`);
            cy.tuiVisit(`${INPUT_RANGE_PAGE_URL}/API?pluralize$=1`);

            cy.get(`#demoContent`)
                .should(`be.visible`)
                .matchImageSnapshot(`03-long-placeholder_pluralize`);
        });
    });

    describe(`Mobile version`, () => {
        beforeEach(() => {
            cy.viewport(`iphone-x`);
            cy.tuiVisit(`${INPUT_RANGE_PAGE_URL}/API?min=-20&max=20&quantum=5`, {
                pseudoMobile: true,
            });
            initializeAliases(`#demoContent tui-input-range`, [0, 10]);
        });

        describe(`After Range interactions`, () => {
            it(`keeps focus if the RIGHT text input was focused before`, () => {
                cy.get(`@rightTextInput`).focus();

                cy.get(`@rightSlider`)
                    .click(`right`, {force: true})
                    .should(`have.value`, 20);

                cy.get(`@rightTextInput`).should(`have.value`, 20).should(`be.focused`);
            });

            it(`keeps focus if the LEFT text input was focused before`, () => {
                cy.get(`@leftTextInput`).focus();

                cy.get(`@leftSlider`)
                    .click(`left`, {force: true})
                    .should(`have.value`, -20);

                cy.get(`@leftTextInput`).should(`have.value`, -20).should(`be.focused`);
            });

            it(`does not focus anything if no text input was focused before`, () => {
                cy.get(`@leftTextInput`).should(`not.be.focused`);
                cy.get(`@rightTextInput`).should(`not.be.focused`);

                cy.get(`@leftSlider`)
                    .click(`left`, {force: true})
                    .should(`have.value`, -20);

                cy.get(`@leftTextInput`)
                    .should(`have.value`, -20)
                    .should(`not.be.focused`);
                cy.get(`@rightTextInput`)
                    .should(`have.value`, 10)
                    .should(`not.be.focused`);

                cy.get(`@rightSlider`)
                    .click(`right`, {force: true})
                    .should(`have.value`, 20);

                cy.get(`@leftTextInput`)
                    .should(`have.value`, -20)
                    .should(`not.be.focused`);
                cy.get(`@rightTextInput`)
                    .should(`have.value`, 20)
                    .should(`not.be.focused`);
            });
        });
    });
});

function initializeAliases(
    inputRangeSelector: string,
    [expectedLeftValue, expectedRightValue]: [number, number],
): void {
    cy.get(`${inputRangeSelector} [automation-id=tui-input-range__left-input] input`)
        .should(`exist`)
        .should(`have.value`, expectedLeftValue)
        .as(`leftTextInput`);

    cy.get(`${inputRangeSelector} [automation-id=tui-input-range__right-input] input`)
        .should(`exist`)
        .should(`have.value`, expectedRightValue)
        .as(`rightTextInput`);

    cy.get(`${inputRangeSelector} tui-range [tuiSlider]:first-of-type`)
        .should(`exist`)
        .should(`have.value`, expectedLeftValue)
        .as(`leftSlider`);

    cy.get(`${inputRangeSelector} tui-range [tuiSlider]:last-of-type`)
        .should(`exist`)
        .should(`have.value`, expectedRightValue)
        .as(`rightSlider`);
}
