import {INPUT_SLIDER_PAGE_URL} from '../../../support/shared.entities';

describe('InputSlider', () => {
    describe('examples page', () => {
        beforeEach(() => {
            cy.viewport('macbook-13');
            cy.goToDemoPage(`${INPUT_SLIDER_PAGE_URL}`);
            cy.hideHeader();
            cy.hideNavigation();
        });

        it('typing new value inside text input also change slider position', () => {
            const EXAMPLE_ID = '#base';

            cy.get(`${EXAMPLE_ID} input[type="range"]`).should('be.visible').as('slider');
            cy.get(`${EXAMPLE_ID} tui-input-slider tui-input-number input`)
                .should('be.visible')
                .as('textInput');

            const valueToSliderStep = [
                {value: 5, step: 0},
                {value: 9, step: 4},
                {value: 12, step: 7},
                {value: 18, step: 13},
                {value: 20, step: 15},
            ];

            for (const {value, step} of valueToSliderStep) {
                cy.get('@textInput').clear().type(`${value}`);
                cy.get('@slider').should('have.value', step);
                cy.get(EXAMPLE_ID).matchImageSnapshot(`1-slider-check-${value}-${step}`);
            }
        });

        it('pressing ArrowUp/ArrowDown change textInput value and slider position', () => {
            const EXAMPLE_ID = '#right-label';

            cy.get(`${EXAMPLE_ID} input[type="range"]`).should('be.visible').as('slider');
            cy.get(`${EXAMPLE_ID} tui-input-slider tui-input-number input`)
                .should('be.visible')
                .as('textInput');

            cy.get('@textInput').clear().type('0');

            for (let i = 1; i <= 10; i++) {
                cy.get('@textInput').focus().type('{uparrow}').blur();
                cy.get('@textInput').should('have.value', i);
                cy.get('@slider').should('have.value', i);

                cy.get(EXAMPLE_ID).matchImageSnapshot(`2-arrow-up-checks-${i}`);
            }

            for (let i = 9; i >= 0; i--) {
                cy.get('@textInput').focus().type('{downarrow}').blur();
                cy.get('@textInput').should('have.value', i);
                cy.get('@slider').should('have.value', i);

                cy.get(EXAMPLE_ID).matchImageSnapshot(`2-arrow-down-checks-${i}`);
            }
        });
    });
});
