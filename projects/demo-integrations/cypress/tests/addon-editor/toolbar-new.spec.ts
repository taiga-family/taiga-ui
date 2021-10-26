import {EDITOR_PAGE_URL} from '../../support/shared.entities';

const WAIT_BEFORE_SCREENSHOT = 1000; // editor has a huge number of icons (that is why we wait so long)

describe("Editor's toolbar", () => {
    beforeEach(() => {
        cy.viewport(1400, 720);
        cy.goToDemoPage(EDITOR_PAGE_URL, {waitAllIcons: true});
        cy.hideHeader();
    });

    it("closes tool's dropdown if opened new tool's dropdown", () => {
        cy.get('#basic').findByAutomationId('tui-doc-example').as('wrapper');
        cy.get('@wrapper').scrollIntoView().find('tui-editor').click();

        cy.get('@wrapper').findByAutomationId('toolbar__color-button').click();
        cy.get('@wrapper')
            .findByAutomationId('toolbar__hilite-button')
            .click()
            .trigger('mouseleave');

        cy.get('@wrapper')
            .wait(WAIT_BEFORE_SCREENSHOT)
            .matchImageSnapshot('1-open-new-dropdown-close-old-dropdown');
    });

    it("closes tool's dropdown if clicked outside", () => {
        cy.get('#basic').findByAutomationId('tui-doc-example').as('wrapper');
        cy.get('@wrapper').scrollIntoView();

        cy.get('@wrapper').findByAutomationId('toolbar__color-button').click();

        cy.get('tui-palette').should('exist');
        cy.get('@wrapper').find('tui-editor-socket').click();
        cy.get('tui-palette').should('not.exist');
    });

    it('has the possibility to add custom tool', () => {
        cy.get('#custom-tool').findByAutomationId('tui-doc-example').as('wrapper');
        cy.get('@wrapper').find('[contenteditable]').as('input');

        cy.get('@wrapper').scrollIntoView();

        cy.get('.smiles').should('not.exist');
        cy.get('@input').should('not.be.focused');

        cy.get('@wrapper').findByAutomationId('smiles-tool__button').click();

        cy.get('.smiles').should('exist');
        cy.get('@input').should('not.be.focused');

        cy.get('@wrapper')
            .wait(WAIT_BEFORE_SCREENSHOT)
            .matchImageSnapshot('2-1-opened-smiles-tool');

        cy.get('.smile').first().click();
        cy.get('@input').should('be.focused');

        cy.get('@wrapper').matchImageSnapshot('2-2-inserted-smile');

        cy.focused().type('awesome library for awesome people');

        cy.get('@wrapper').findByAutomationId('smiles-tool__button').click();

        cy.get('.smiles').should('exist');
        cy.get('@input').should('not.be.focused');

        cy.get('.smile').last().click();
        cy.get('@input').should('be.focused');

        cy.get('@wrapper').matchImageSnapshot('2-3-inserted-new-smile');
    });
});
