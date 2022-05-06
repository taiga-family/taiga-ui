import {DEFAULT_TIMEOUT_BEFORE_ACTION} from '../../../support/shared.entities';

describe('DataList', () => {
    beforeEach(() => {
        cy.tuiVisit('/components/data-list');
    });

    it('Complex', {responseTimeout: 30_000}, () => {
        const demo = `tui-doc-example[id=complex] .t-demo`;

        cy.get(demo).scrollIntoView().should('be.visible');
        cy.get('tui-doc-page').matchImageSnapshot('1-data-list-initial');

        cy.get(demo).find('button').first().click();
        cy.get('tui-doc-page').matchImageSnapshot('2-data-list-opened');

        cy.getByAutomationId('tui-data-money-input')
            .findByAutomationId('tui-primitive-textfield__native-input')
            .should('have.value', '1000')
            .focus()
            .clear()
            .should('have.value', '')
            .type('2000', {force: true});

        cy.get('tui-doc-page').matchImageSnapshot('3-data-list-converted-money');

        cy.getByAutomationId('tui-data-list-email-option')
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            .click()
            .getByAutomationId('tui-data-list-email-field')
            .findByAutomationId('tui-primitive-textfield__native-input')
            .should('have.value', 'mail@mail.ru')
            .focus()
            .clear()
            .should('have.value', '')
            .type('demo@taiga-ui.io', {force: true});

        cy.get('tui-doc-page').matchImageSnapshot('4-data-list-email-opened');

        cy.getByAutomationId('tui-data-list-range-option')
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            .click({force: true})
            .getByAutomationId('tui-data-list-range-field')
            .findByAutomationId('tui-primitive-textfield__native-input')
            .focus()
            .clear()
            .should('have.value', '')
            .type('04.02.2022 – 04.02.2023', {force: true});

        cy.get('tui-doc-page').matchImageSnapshot('5-data-list-range-opened');

        cy.getByAutomationId('tui-data-list-calendar-option')
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            .click({force: true})
            .getByAutomationId('tui-primitive-calendar__cell')
            .eq(4)
            .click({force: true});

        cy.get('tui-doc-page').matchImageSnapshot('6-data-list-calendar-opened');

        cy.get(demo).wait(DEFAULT_TIMEOUT_BEFORE_ACTION).click();

        cy.matchImageSnapshot('7-data-list-finish');
    });
});
