import {SELECT_PAGE_URL} from '../../../support/shared.entities';

describe('Select', () => {
    beforeEach(() => {
        cy.viewport('macbook-13');
        cy.goToDemoPage(SELECT_PAGE_URL);
    });

    it('opens dropdown by click on icon', () => {
        cy.get('tui-doc-example')
            .first()
            .wait(200)
            .trigger('click', {x: 330, y: 220})
            .wait(100)
            .matchImageSnapshot('01-click-arrow');
    });
});
