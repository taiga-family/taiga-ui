import {
    DEFAULT_TIMEOUT_BEFORE_ACTION,
    SLIDER_PAGE_URL,
} from '../../../support/shared.entities';

describe('Slider', () => {
    beforeEach(() => {
        cy.viewport('macbook-13');
    });

    it('correctly displays values with float percentage progress', () => {
        cy.tuiVisit(`${SLIDER_PAGE_URL}/API?tuiMode=null&max=89&min=0&step=1&size=s`);

        cy.get('input[type="range"]').as('slider');

        const makeSnapOnValue = (value: number): void => {
            cy.get('@slider').invoke('val', value).trigger('input');

            cy.get('tui-doc-demo')
                .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
                .matchImageSnapshot(`01-slider-float-percentage-${value}`);
        };

        makeSnapOnValue(4);
        makeSnapOnValue(7);
        makeSnapOnValue(13);
        makeSnapOnValue(24);
        makeSnapOnValue(39);
        makeSnapOnValue(78);
    });

    it('correctly sets control value on input change (using TuiSliderKeyStepsDirective)', () => {
        cy.tuiVisit(SLIDER_PAGE_URL);

        cy.get('#keySteps').as('example');
        cy.get('@example').find('input[type="range"]').as('slider');
        cy.get('@example')
            .findByAutomationId('key-steps-example-control-value')
            .as('controlValue');

        cy.get('@slider').tuiScrollIntoView();

        const testsMeta = [
            {inputStep: 1, prettifiedControlValue: '14,500'},
            {inputStep: 4, prettifiedControlValue: '43,000'},
            {inputStep: 9, prettifiedControlValue: '90,500'},
            {inputStep: 16, prettifiedControlValue: '220,000'},
            {inputStep: 18, prettifiedControlValue: '260,000'},
            {inputStep: 21, prettifiedControlValue: '370,000'},
            {inputStep: 27, prettifiedControlValue: '790,000'},
            {inputStep: 30, prettifiedControlValue: '1,000,000'},
        ] as const;

        for (const {inputStep, prettifiedControlValue} of testsMeta) {
            cy.get('@slider').invoke('val', inputStep).trigger('change');
            cy.get('@controlValue').contains(prettifiedControlValue);
            cy.get('@example').matchImageSnapshot(`02-slider-key-steps-${inputStep}step`);
        }
    });

    it('with `min` > 0', () => {
        cy.tuiVisit(`${SLIDER_PAGE_URL}/API?min=1&max=10&segments=9`);

        cy.get('tui-doc-demo')
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            .matchImageSnapshot(`03-min_1__max_10__value_1__segments_9`);
    });

    it('with `min` < 0 && `max` > 0 ', () => {
        cy.tuiVisit(`${SLIDER_PAGE_URL}/API?min=-5&max=5&segments=5`);

        cy.get('tui-doc-demo')
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            .matchImageSnapshot(`04-min_-5__max_5__value_1__segments_5`);
    });
});
