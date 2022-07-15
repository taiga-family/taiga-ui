import {
    tuiGetContentEditable,
    tuiGetScreenshotArea,
    tuiInitBaseWrapper,
    tuiOpenFontTool,
} from '../../support/editor/helpers';
import {EDITOR_PAGE_URL} from '../../support/shared.entities';
import {WAIT_BEFORE_SCREENSHOT} from './utils';

describe('Editor', () => {
    beforeEach(() => cy.viewport(1600, 900));

    describe('Check fonts in light and dark mode', () => {
        for (const [index, {enableNightMode}] of [
            {enableNightMode: true},
            {enableNightMode: false},
        ].entries()) {
            it(`check font in editor, enableNightMode is ${enableNightMode}`, () => {
                cy.tuiVisit(EDITOR_PAGE_URL, {enableNightMode});

                tuiInitBaseWrapper();
                tuiGetContentEditable().type('{selectall}{backspace}');

                for (const [position, type] of [
                    'Small',
                    'Normal',
                    'Large',
                    'Subtitle',
                    'Title',
                ].entries()) {
                    const screenshot = `${
                        index + 1
                    }-1-night-mode-enabled-${enableNightMode}-font-${position}-${type}`;

                    tuiOpenFontTool()
                        .findByAutomationId(`tui_font__${type.toLowerCase()}`)
                        .click();

                    tuiGetContentEditable().type(`${type}{enter}`);
                    tuiGetScreenshotArea().matchImageSnapshot(screenshot);
                }
            });
        }
    });

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

            function closePreview(): void {
                cy.get('tui-preview').find('button[icon=tuiIconCloseLarge]').click();
            }
        });

        it('support regular bullet/ordered lists without paragraph in content', () => {
            cy.get('#basic')
                .findByAutomationId('tui-doc-example')
                .tuiScrollIntoView()
                .as('wrapper');

            cy.get('@wrapper').find('button').eq(1).click();
            cy.get('@wrapper').find('[contenteditable]').as('editor');

            cy.get('@wrapper')
                .wait(WAIT_BEFORE_SCREENSHOT)
                .matchImageSnapshot('4-1-bullet-and-ordered-list');

            clearEditor();
            toggleBullet('tuiIconViewListLarge');

            cy.get('@editor').type('1{enter}').type('{enter}');

            toggleBullet('tuiIconOLLarge');

            cy.get('@editor').type('A');
            cy.get('@wrapper')
                .wait(WAIT_BEFORE_SCREENSHOT)
                .matchImageSnapshot('4-2-bullet-and-ordered-list');

            clearEditor();
            toggleBullet('tuiIconViewListLarge');

            cy.get('@editor').type(
                'first line{shift+enter}second line{shift+enter}third line{shift+enter}{enter}first line',
            );
            cy.get('@wrapper')
                .wait(WAIT_BEFORE_SCREENSHOT)
                .matchImageSnapshot('4-3-bullet-and-ordered-list');

            clearEditor();
            toggleBullet('tuiIconOLLarge');

            cy.get('@editor').type(
                'first line{shift+enter}second line{shift+enter}third line{shift+enter}{enter}first line',
            );
            cy.get('@wrapper')
                .wait(WAIT_BEFORE_SCREENSHOT)
                .matchImageSnapshot('4-4-bullet-and-ordered-list');

            function toggleBullet(iconType: string): void {
                cy.get('@wrapper')
                    .find(`button[icon="tuiIconViewListLarge"]`)
                    .click({force: true});
                cy.get('tui-dropdown-box')
                    .find(`button[icon="${iconType}"]`)
                    .click({force: true});
            }

            function clearEditor(): void {
                cy.get('@editor').type('{selectall}{backspace}');
            }
        });
    });
});
