import {DEFAULT_TIMEOUT_BEFORE_ACTION} from '../../support/shared.entities';

describe('Viewport', () => {
    it('is desktop when device width >= 768px', () => {
        cy.viewport(768, 900);
        cy.tuiVisit('/getting-started', {hideHeader: false, hideNavigation: false});

        cy.wait(DEFAULT_TIMEOUT_BEFORE_ACTION).matchImageSnapshot(
            '01-getting-started-desktop-viewport',
            {capture: 'viewport'},
        );
    });

    it('is mobile when device width < 768px', () => {
        cy.viewport(767, 900);
        cy.tuiVisit('/getting-started', {hideHeader: false, hideNavigation: false});

        cy.wait(DEFAULT_TIMEOUT_BEFORE_ACTION).matchImageSnapshot(
            '02-getting-started-mobile-viewport',
            {capture: 'viewport'},
        );
    });
});
