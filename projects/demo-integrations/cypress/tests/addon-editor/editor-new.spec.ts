import {EDITOR_PAGE_URL} from '../../support/shared.entities';
import {WAIT_BEFORE_SCREENSHOT} from './utils';

describe('Editor', () => {
    beforeEach(() => {
        cy.viewport(1400, 720);
    });

    describe('Dark mode', () => {
        beforeEach(() => {
            cy.goToDemoPage(EDITOR_PAGE_URL, {waitAllIcons: true, enableNightMode: true});
            cy.hideHeader();
        });

        it('supports dark mode (input)', () => {
            cy.get('#basic').findByAutomationId('tui-doc-example').as('wrapper');
            cy.get('@wrapper').find('tui-editor').as('editor');

            cy.get('@wrapper').scrollIntoView();

            cy.get('@editor')
                .wait(WAIT_BEFORE_SCREENSHOT)
                .matchImageSnapshot('1-1-dark-mode-input');

            cy.get('@editor').find('tui-scrollbar').scrollTo(0, 500);

            cy.get('@editor').matchImageSnapshot('1-2-dark-mode-input');
        });

        it('supports dark mode (output)', () => {
            cy.get('#basic').findByAutomationId('tui-doc-example').as('wrapper');

            cy.get('@wrapper')
                .find('tui-editor-socket')
                .wait(WAIT_BEFORE_SCREENSHOT)
                .matchImageSnapshot('2-1-dark-mode-output');
        });
    });
});
