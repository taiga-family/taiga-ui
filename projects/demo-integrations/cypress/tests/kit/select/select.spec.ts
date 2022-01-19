import {SELECT_PAGE_URL} from '../../../support/shared.entities';

describe('Select', () => {
    beforeEach(() => {
        cy.viewport('macbook-13');
        cy.goToDemoPage(SELECT_PAGE_URL);
    });

    it('opens dropdown by click on icon', () => {
        cy.get('body')
            .wait(200)
            .trigger('click', {x: 720, y: 530})
            .wait(100)
            .matchImageSnapshot('01-click-arrow');
    });
});
