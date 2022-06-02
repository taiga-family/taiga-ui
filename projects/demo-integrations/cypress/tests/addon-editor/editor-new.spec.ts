import {EDITOR_PAGE_URL} from '../../support/shared.entities';
import {WAIT_BEFORE_SCREENSHOT} from './utils';

describe('Editor', () => {
    describe('Dark mode', () => {
        beforeEach(() => cy.tuiVisit(EDITOR_PAGE_URL, {enableNightMode: true}));

        it('supports dark mode (input)', () => {
            cy.get('#basic')
                .findByAutomationId('tui-doc-example')
                .tuiScrollIntoView()
                .as('wrapper');

            cy.get('@wrapper').find('tui-editor').as('editor');

            cy.get('@editor')
                .wait(WAIT_BEFORE_SCREENSHOT)
                .matchImageSnapshot('1-1-dark-mode-input');

            cy.get('@editor').find('tui-scrollbar').scrollTo(0, 500);

            cy.get('@editor').matchImageSnapshot('1-2-dark-mode-input');
        });

        it('supports dark mode (output)', () => {
            cy.get('#basic')
                .findByAutomationId('tui-doc-example')
                .tuiScrollIntoView()
                .as('wrapper');

            cy.get('@wrapper')
                .find('tui-editor-socket')
                .wait(WAIT_BEFORE_SCREENSHOT)
                .matchImageSnapshot('2-1-dark-mode-output');
        });
    });

    describe('Examples', () => {
        beforeEach(() => cy.tuiVisit(EDITOR_PAGE_URL));

        it('preview display of images', () => {
            cy.get('#preview-image')
                .findByAutomationId('tui-doc-example')
                .tuiScrollIntoView()
                .as('wrapper');

            cy.get('@wrapper')
                .click()
                .wait(WAIT_BEFORE_SCREENSHOT)
                .matchImageSnapshot('3-1-two-visible-image');

            cy.get('@wrapper')
                .find('tui-editor-socket')
                .find('img')
                .filter('[src="assets/images/big-wallpaper.jpg"]')
                .filter(':visible')
                .click()
                .wait(WAIT_BEFORE_SCREENSHOT)
                .matchImageSnapshot('3-1-preview-big-wallpaper');

            closePreview();

            cy.get('@wrapper')
                .find('tui-editor-socket')
                .find('img')
                .filter('[src="assets/images/lumberjack.png"]')
                .filter(':visible')
                .click()
                .wait(WAIT_BEFORE_SCREENSHOT)
                .matchImageSnapshot('3-1-preview-lumberjack');

            closePreview();
        });

        function closePreview(): void {
            cy.get('tui-preview').find('button[icon=tuiIconCloseLarge]').click();
        }
    });
});
