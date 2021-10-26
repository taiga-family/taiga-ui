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

    describe('has keyboard horizontal navigation between tool-buttons', () => {
        it('focuses nearest left/right active tool on "Arrow Right"/"Arrow Left"', () => {
            cy.get('#basic').findByAutomationId('tui-doc-example').as('wrapper');
            cy.get('@wrapper')
                .find('button[icon="tuiIconAlignLeftLarge"]')
                .as('initialTool');
            cy.get('@wrapper').find('button[icon="tuiIconFormatLarge"]').as('leftTool');
            cy.get('@wrapper')
                .find('button[icon="tuiIconViewListLarge"]')
                .as('rightTool');

            cy.get('@initialTool').focus().should('be.focused');

            // <==
            cy.get('body').type('{leftarrow}');
            cy.get('@leftTool').should('be.focused');

            // ==> ==>
            cy.get('body').type('{rightarrow}');
            cy.get('@initialTool').should('be.focused');
            cy.get('body').type('{rightarrow}');
            cy.get('@rightTool').should('be.focused');
        });

        it('skips disabled tools and selects next tool after disabled', () => {
            cy.get('#basic').findByAutomationId('tui-doc-example').as('wrapper');
            cy.get('@wrapper')
                .find('button[icon="tuiIconUndoLarge"]')
                .as('leftActiveTool');
            cy.get('@wrapper')
                .find('button[icon="tuiIconRedoLarge"]')
                .as('betweenDisabledTool');
            cy.get('@wrapper')
                .find('button[icon="tuiIconFontLarge"]')
                .as('rightActiveTool');

            // | (active) | disabled | active |
            // ==>
            // | active | disabled | (active) |
            cy.get('@leftActiveTool').focus().should('be.focused');
            cy.get('body').type('{rightarrow}');
            cy.get('@betweenDisabledTool').should('not.be.focused');
            cy.get('@rightActiveTool').should('be.focused');

            // | active | disabled | (active) |
            // <==
            // | (active) | disabled | active |
            cy.get('body').type('{leftarrow}');
            cy.get('@betweenDisabledTool').should('not.be.focused');
            cy.get('@leftActiveTool').should('be.focused');
        });

        it('works with custom tools', () => {
            cy.get('#custom-tool').findByAutomationId('tui-doc-example').as('wrapper');
            cy.get('@wrapper')
                .find('button[icon="tuiIconUndoLarge"]')
                .as('leftBuiltInTool');
            cy.get('@wrapper')
                .find('button[icon="tuiIconStarLarge"]')
                .as('rightCustomTool');

            // ==>
            cy.get('@leftBuiltInTool').focus().should('be.focused');
            cy.get('body').type('{rightarrow}');
            cy.get('@rightCustomTool').should('be.focused');

            // <==
            cy.get('body').type('{leftarrow}');
            cy.get('@leftBuiltInTool').should('be.focused');
        });
    });
});
