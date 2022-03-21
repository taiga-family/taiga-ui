import {INPUT_PAGE_URL} from '../../../support/shared.entities';

describe('Input', () => {
    beforeEach(() => {
        cy.viewport('macbook-13');
    });

    it('has custom content (text) + cleaner + hint which dont overlapping each others', () => {
        cy.goToDemoPage(
            `${INPUT_PAGE_URL}/API?tuiHintContent=Some%20content&tuiTextfieldCleaner=true&tuiTextfieldCustomContent=%3Cspan%3ELongTextContent%3C%2Fspan%3E`,
        );
        cy.hideHeader();
        cy.hideNavigation();

        cy.get('#demoContent')
            .should('be.visible')
            .matchImageSnapshot('01-custom-text-content-cleaner-hint');
    });

    it('correctly aligns single custom content (as large icon)', () => {
        cy.goToDemoPage(
            `${INPUT_PAGE_URL}/API?tuiTextfieldCustomContent=tuiIconCalendarLarge`,
        );
        cy.hideHeader();
        cy.hideNavigation();

        cy.get('#demoContent')
            .should('be.visible')
            .matchImageSnapshot('02-custom-large-icon-content');
    });

    it('custom content (as large icon) + cleaner + hint dont overlapping each others', () => {
        cy.goToDemoPage(
            `${INPUT_PAGE_URL}/API?tuiTextfieldCleaner=true&tuiTextfieldCustomContent=tuiIconSearchLarge&tuiHintContent=Some%20content`,
        );
        cy.hideHeader();
        cy.hideNavigation();

        cy.get('#demoContent')
            .should('be.visible')
            .matchImageSnapshot('03-custom-large-icon-content-cleaner-hint');
    });

    it('custom content (as normal-size icon) + cleaner + hint dont overlapping each others', () => {
        cy.goToDemoPage(
            `${INPUT_PAGE_URL}/API?tuiTextfieldCleaner=true&tuiTextfieldCustomContent=tuiIconVisaMono&tuiHintContent=Some%20content`,
        );
        cy.hideHeader();
        cy.hideNavigation();

        cy.get('#demoContent')
            .should('be.visible')
            .matchImageSnapshot('04-custom-normal-icon-content-cleaner-hint');
    });
});
