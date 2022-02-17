import {
    DEFAULT_TIMEOUT_BEFORE_ACTION,
    SLIDER_PAGE_URL,
} from '../../../support/shared.entities';

describe('Slider', () => {
    beforeEach(() => {
        cy.viewport('macbook-13');
        cy.goToDemoPage(`${SLIDER_PAGE_URL}/API?tuiMode=null&max=89&min=0&step=1&size=s`);
        cy.hideHeader();
        cy.hideNavigation();
    });

    it('correctly displays values with float percentage progress', () => {
        cy.get('input[type="range"]').as('slider');

        const makeSnapOnValue = (value: number) => {
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
});
