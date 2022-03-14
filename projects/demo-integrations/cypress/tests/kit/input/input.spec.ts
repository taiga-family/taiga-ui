import {INPUT_PAGE_URL} from '../../../support/shared.entities';

describe('Input', () => {
    beforeEach(() => {
        cy.viewport('macbook-13');
    });

    it('has custom content + cleaner + hint which dont overlapping each others', () => {
        cy.goToDemoPage(
            `${INPUT_PAGE_URL}/API?tuiHintContent=Some%20content&tuiTextfieldCleaner=true&tuiTextfieldCustomContent=%3Cspan%3ELongTextContent%3C%2Fspan%3E`,
        );
        cy.hideHeader();
        cy.hideNavigation();

        cy.get('#demoContent')
            .should('be.visible')
            .matchImageSnapshot('01-custom-content-cleaner-hint');
    });
});
