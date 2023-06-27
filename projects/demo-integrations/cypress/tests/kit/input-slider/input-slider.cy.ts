// eslint-disable-next-line @taiga-ui/no-deep-imports
import {CHAR_MINUS} from '@taiga-ui/cdk/constants';

describe(`InputSlider`, () => {
    describe(`examples page`, () => {
        beforeEach(() => {
            cy.viewport(`iphone-x`);
            cy.tuiVisit(`components/input-slider`);
        });

        it(`typing new value inside text input also change slider position`, () => {
            const exampleId = `#base`;

            initializeAliases(`${exampleId} tui-input-slider`);

            const valueToSliderStep = [
                {value: 5, step: 0},
                {value: 9, step: 4},
                {value: 12, step: 7},
                {value: 18, step: 13},
                {value: 20, step: 15},
            ];

            for (const {value, step} of valueToSliderStep) {
                cy.get(`@textInput`).clear().type(`${value}`);
                cy.get(`@slider`).should(`have.value`, step);
                cy.get(exampleId)
                    .tuiFindByExampleId()
                    .matchImageSnapshot(`1-slider-check-${value}-${step}`);
            }
        });

        it(`pressing ArrowUp/ArrowDown change textInput value and slider position`, () => {
            const exampleId = `#right-label`;

            initializeAliases(`${exampleId} tui-input-slider`);

            cy.get(`@textInput`).clear().type(`0`);

            for (let i = 1; i <= 10; i++) {
                cy.get(`@textInput`).focus().type(`{uparrow}`).blur();
                cy.get(`@textInput`).should(`have.value`, i);
                cy.get(`@slider`).should(`have.value`, i);

                cy.get(exampleId)
                    .tuiFindByExampleId()
                    .matchImageSnapshot(`2-0-arrow-up-checks-${i}`);
            }

            for (let i = 9; i >= 0; i--) {
                cy.get(`@textInput`).focus().type(`{downarrow}`).blur();
                cy.get(`@textInput`).should(`have.value`, i);
                cy.get(`@slider`).should(`have.value`, i);

                cy.get(exampleId)
                    .tuiFindByExampleId()
                    .matchImageSnapshot(`2-1-arrow-down-checks-${i}`);
            }
        });
    });

    describe(`[valueContent] prop`, () => {
        beforeEach(() => {
            cy.viewport(`iphone-x`);
        });

        it(`hide [valueContent] when input is focused`, () => {
            cy.tuiVisit(
                `components/input-slider/API?valueContent=TOP-SECRET&postfix=things&prefix=$`,
            );

            initializeAliases(`#demo-content tui-input-slider`);

            cy.get(`@textInput`).focus().tuiWaitBeforeAction();

            cy.get(`#demo-content`).matchImageSnapshot(`3-value-content-hide-on-focus`);
        });

        it(`[valueContent] is not overlapped by [prefix]/[postfix] (input is NOT focused)`, () => {
            cy.tuiVisit(
                `components/input-slider/API?valueContent=TOP-SECRET&postfix=things&prefix=$`,
            );

            cy.get(`#demo-content`)
                .should(`be.visible`)
                .matchImageSnapshot(`4-value-content-not-overlapped`);
        });
    });

    describe(`[min] prop`, () => {
        describe(`positive numbers`, () => {
            beforeEach(() => {
                cy.viewport(`iphone-x`);
                cy.tuiVisit(
                    `components/input-slider/API?min=10&max=100&quantum=0.001&steps=90`,
                );
                initializeAliases(`#demo-content tui-input-slider`);
                cy.get(`@textInput`).clear();
            });

            it(`cannot type number less than [min] property`, () => {
                cy.get(`@textInput`).type(`9.999`).blur().should(`have.value`, `10`);
            });

            it(`cannot even type minus if [min] is positive`, () => {
                cy.get(`@textInput`).type(`-11`).should(`have.value`, `11`);
            });

            it(`cannot set value less than min using ArrowDown`, () => {
                cy.get(`@textInput`)
                    .type(`11`)
                    .type(`{downArrow}`)
                    .should(`have.value`, `10`)
                    .type(`{downArrow}`)
                    .should(`have.value`, `10`);
            });
        });

        describe(`negative numbers`, () => {
            beforeEach(() => {
                cy.viewport(`iphone-x`);
                cy.tuiVisit(
                    `components/input-slider/API?min=-10&max=100&quantum=0.001&steps=90`,
                );
                initializeAliases(`#demo-content tui-input-slider`);
                cy.get(`@textInput`).clear();
            });

            it(`can type negative number more than [min]`, () => {
                cy.get(`@textInput`).type(`-5`).should(`have.value`, `${CHAR_MINUS}5`);
            });

            it(`cannot type negative number less than [min]`, () => {
                cy.get(`@textInput`).type(`-11`).should(`have.value`, `${CHAR_MINUS}10`);
            });
        });

        describe(`if [min]-property equals to [max]-property`, () => {
            beforeEach(() => {
                cy.viewport(`iphone-x`);
                cy.tuiVisit(`components/input-slider/API?min=25&max=25&quantum=1`);
                initializeAliases(`#demo-content tui-input-slider`);
                cy.get(`@textInput`).clear().type(`25`);
            });

            it(`pressing ArrowUp does not change value`, () => {
                cy.get(`@textInput`).type(`{upArrow}`).should(`have.value`, `25`);
            });

            it(`pressing ArrowDown does not change value`, () => {
                cy.get(`@textInput`).type(`{downArrow}`).should(`have.value`, `25`);
            });
        });
    });

    it(`disables both text field and slider when host component has disabled state`, () => {
        cy.viewport(`iphone-x`);
        cy.tuiVisit(`components/input-slider/API?min=-10&max=10`);
        initializeAliases(`#demo-content tui-input-slider`);

        cy.get(`tr`).contains(`Disabled state`).parents(`tr`).find(`tui-toggle`).click();

        cy.get(`@textInput`).should(`be.disabled`);
        cy.get(`@slider`).should(`be.disabled`);

        cy.get(`#demo-content`).matchImageSnapshot(`5-disabled-state`);
    });

    function initializeAliases(inputSliderSelector: string): void {
        cy.get(`${inputSliderSelector} input[type="range"]`)
            .should(`be.visible`)
            .as(`slider`);
        cy.get(`${inputSliderSelector} tui-input-number input`)
            .should(`exist`)
            .as(`textInput`);
    }
});
