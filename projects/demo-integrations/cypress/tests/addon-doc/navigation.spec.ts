import {DEFAULT_TIMEOUT_BEFORE_ACTION} from '../../support/shared.entities';

describe('Navigation', () => {
    it('getting started / [light mode]', () => {
        cy.tuiVisit('/getting-started', {hideNavigation: false, hideHeader: false});

        cy.get('tui-doc-navigation')
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            .matchImageSnapshot('01-tui-doc-navigation-light-mode');
    });

    it('getting started / [night mode]', () => {
        cy.tuiVisit('/getting-started', {
            hideNavigation: false,
            hideHeader: false,
            enableNightMode: true,
        });

        cy.get('tui-doc-navigation')
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            .matchImageSnapshot('02-tui-doc-navigation-night-mode');
    });

    // TODO: flaky tests. Investigate and fix/delete them.
    describe.skip('anchor links navigation works', {scrollBehavior: false}, () => {
        const waitShakeAnimationAndScroll = 2000;

        it('scroll to `tui-doc-example`', () => {
            cy.tuiVisit('/components/input#table');

            cy.get('#table').should('be.visible');

            cy.wait(waitShakeAnimationAndScroll).matchImageSnapshot(
                '03-anchor-link-doc-example',
                {capture: 'viewport'},
            );
        });

        it('scroll to `tui-doc-code`', () => {
            cy.tuiVisit('/getting-started#options');

            cy.get('#options').should('be.visible');

            cy.wait(waitShakeAnimationAndScroll).matchImageSnapshot(
                '04-anchor-link-doc-code',
                {capture: 'viewport'},
            );
        });
    });
});
