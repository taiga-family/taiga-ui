import {
    DEFAULT_TIMEOUT_BEFORE_ACTION,
    EXAMPLE_ID,
    INPUT_SLIDER_PAGE_URL,
} from '../../../support/shared.entities';

describe(`InputSlider`, () => {
    describe(`examples page`, () => {
        beforeEach(() => {
            cy.viewport(`iphone-x`);
            cy.tuiVisit(`${INPUT_SLIDER_PAGE_URL}`);
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
                    .findByAutomationId(EXAMPLE_ID)
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
                    .findByAutomationId(EXAMPLE_ID)
                    .matchImageSnapshot(`2-0-arrow-up-checks-${i}`);
            }

            for (let i = 9; i >= 0; i--) {
                cy.get(`@textInput`).focus().type(`{downarrow}`).blur();
                cy.get(`@textInput`).should(`have.value`, i);
                cy.get(`@slider`).should(`have.value`, i);

                cy.get(exampleId)
                    .findByAutomationId(EXAMPLE_ID)
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
                `${INPUT_SLIDER_PAGE_URL}/API?valueContent=TOP-SECRET&postfix=things&prefix=$`,
            );

            initializeAliases(`#demoContent tui-input-slider`);

            cy.get(`@textInput`).focus().wait(DEFAULT_TIMEOUT_BEFORE_ACTION);

            cy.get(`#demoContent`).matchImageSnapshot(`3-value-content-hide-on-focus`);
        });

        it(`[valueContent] is not overlapped by [prefix]/[postfix] (input is NOT focused)`, () => {
            cy.tuiVisit(
                `${INPUT_SLIDER_PAGE_URL}/API?valueContent=TOP-SECRET&postfix=things&prefix=$`,
            );

            cy.get(`#demoContent`)
                .should(`be.visible`)
                .matchImageSnapshot(`4-value-content-not-overlapped`);
        });
    });
});

function initializeAliases(inputSliderSelector: string): void {
    cy.get(`${inputSliderSelector} input[type="range"]`)
        .should(`be.visible`)
        .as(`slider`);
    cy.get(`${inputSliderSelector} tui-input-number input`)
        .should(`exist`)
        .as(`textInput`);
}
