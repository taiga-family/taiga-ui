import {EXAMPLE_ID} from '../../../support/shared.entities';

describe('Tabs', () => {
    it('No extra margin after the last tab', () => {
        cy.viewport(1700, 900);
        cy.tuiVisit('/navigation/tabs');

        cy.get('#complex')
            .findByAutomationId(EXAMPLE_ID)
            .tuiScrollIntoView()
            .matchImageSnapshot('01-[wide-screen]-[no-margin-last-tab]');
    });
});
