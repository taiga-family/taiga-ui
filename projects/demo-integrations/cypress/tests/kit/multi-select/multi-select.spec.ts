import {MULTI_SELECT_PAGE_URL} from '../../../support/shared.entities';

describe('MultiSelect', () => {
    beforeEach(() => {
        cy.viewport('macbook-13');
        cy.goToDemoPage(MULTI_SELECT_PAGE_URL);
        cy.hideHeader();
    });

    it('does not overflow arrow icon by many tags', () => {
        cy.get('#object-array').findByAutomationId('tui-doc-example').as('wrapper');

        cy.get('@wrapper').find('tui-multi-select').click();

        [0, 1, 2, 3].forEach(() => cy.get('[tuioption]').first().click());

        cy.get('@wrapper').findByAutomationId('tui-multi-select__arrow').click();

        cy.get('@wrapper').wait(100).matchImageSnapshot(`01-not-overflow-by-tags`);
    });
});
