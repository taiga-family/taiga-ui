import {DEFAULT_TIMEOUT_BEFORE_ACTION} from '../../support/shared.entities';

describe('Code blocks', () => {
    ['HTML', 'TypeScript', 'LESS'].forEach((tabName, i) => {
        it(tabName, () => {
            cy.tuiVisit('/components/line-clamp');
            cy.get('#basic tui-tabs-with-more [tuiTab]').contains(tabName).click();

            cy.tuiWaitCodeHighlight();

            cy.get('#basic')
                .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
                .matchImageSnapshot(`01-${i}-code-block-${tabName}`);
        });
    });

    it('API page', () => {
        cy.tuiVisit('/components/line-clamp/Setup');

        cy.tuiWaitCodeHighlight();

        cy.get('tui-doc-code').each(($el, index) => {
            cy.wrap($el)
                .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
                .matchImageSnapshot(`02-${index}-API-page`);
        });
    });
});
