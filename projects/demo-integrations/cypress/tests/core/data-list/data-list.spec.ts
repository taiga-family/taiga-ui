import {DEFAULT_TIMEOUT_BEFORE_ACTION} from '../../../support/shared.entities';

describe('DataList', () => {
    beforeEach(() => {
        cy.viewport(1500, 800);
        cy.goToDemoPage('/components/data-list');
        cy.hideHeader();
    });

    it('Complex', () => {
        const demo = `tui-doc-example[id=complex] .t-demo`;

        cy.get(demo).scrollIntoView();
        cy.matchImageSnapshot('1-initial', {capture: 'viewport'});

        cy.get(demo).find('button').first().click();
        cy.matchImageSnapshot('2-opened', {capture: 'viewport'});

        cy.getByAutomationId('tui-data-money-input')
            .findByAutomationId('tui-primitive-textfield__native-input')
            .should('have.value', '1000')
            .focus()
            .clear()
            .should('have.value', '')
            .type('2000', {force: true});

        cy.matchImageSnapshot('3-converted-money', {capture: 'viewport'});

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

        cy.matchImageSnapshot('4-email-opened', {capture: 'viewport'});

        cy.getByAutomationId('tui-data-list-range-option')
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            .click()
            .getByAutomationId('tui-data-list-range-field')
            .findByAutomationId('tui-primitive-textfield__native-input')
            .focus()
            .clear()
            .should('have.value', '')
            .type('04.02.2022 – 04.02.2023', {force: true});

        cy.matchImageSnapshot('5-range-opened', {capture: 'viewport'});

        cy.getByAutomationId('tui-data-list-calendar-option')
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            .click()
            .getByAutomationId('tui-primitive-calendar__cell')
            .eq(4)
            .click();

        cy.matchImageSnapshot('6-calendar-opened', {capture: 'viewport'});

        cy.get(demo).wait(DEFAULT_TIMEOUT_BEFORE_ACTION).click();

        cy.matchImageSnapshot('7-finish', {capture: 'viewport'});
    });
});
