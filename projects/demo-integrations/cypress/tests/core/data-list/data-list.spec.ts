import {
    DEFAULT_TIMEOUT_BEFORE_ACTION,
    EXAMPLE_ID,
} from '../../../support/shared.entities';

describe('DataList', () => {
    beforeEach(() => {
        cy.tuiVisit('/components/data-list');
    });

    it('Custom list', () => {
        cy.get('#custom tui-select').should('be.visible').click();
        cy.get('tui-dropdown-box').should('be.visible').matchImageSnapshot('1-#custom');
    });

    it('Links', () => {
        cy.get(`#links [automation-id=${EXAMPLE_ID}] tui-hosted-dropdown`).click();
        cy.get('tui-dropdown-box').should('be.visible').matchImageSnapshot('2-#links');
    });

    it('Submenu', () => {
        // 300ms - debounce time of DataListDropdownManager + 100ms for flaky-free test
        const DATA_LIST_DEBOUNCE_WAIT = 400;

        cy.get(`#submenu [automation-id=${EXAMPLE_ID}] tui-hosted-dropdown`)
            .scrollIntoView()
            .should('be.visible')
            .click();
        cy.get('body')
            .type('{downarrow}'.repeat(2))
            .wait(DATA_LIST_DEBOUNCE_WAIT)
            .type('{rightarrow}')
            .type('{downarrow}'.repeat(3))
            .wait(DATA_LIST_DEBOUNCE_WAIT)
            .type('{rightarrow}')
            .type('{downarrow}'.repeat(2));

        cy.matchImageSnapshot('3-#submenu', {
            capture: 'viewport',
            blackout: ['tui-doc-navigation'],
        });
    });

    it('Form control', () => {
        cy.get(`#control [automation-id=${EXAMPLE_ID}] tui-hosted-dropdown`)
            .scrollIntoView()
            .should('be.visible')
            .click();

        cy.get('tui-dropdown-box').should('be.visible').matchImageSnapshot('4-#control');
    });

    it('Complex', {responseTimeout: 30_000}, () => {
        const demo = `tui-doc-example[id=complex] .t-demo`;

        cy.get(demo).scrollIntoView().should('be.visible');
        cy.matchImageSnapshot('5-1-data-list-initial', {
            capture: 'viewport',
            blackout: ['tui-doc-navigation'],
        });

        cy.get(demo).find('button').first().click();
        cy.matchImageSnapshot('5-2-data-list-opened', {
            capture: 'viewport',
            blackout: ['tui-doc-navigation'],
        });

        cy.getByAutomationId('tui-data-money-input')
            .findByAutomationId('tui-primitive-textfield__native-input')
            .should('have.value', '1000')
            .focus()
            .clear()
            .should('have.value', '')
            .type('2000', {force: true});

        cy.matchImageSnapshot('5-3-data-list-converted-money', {
            capture: 'viewport',
            blackout: ['tui-doc-navigation'],
        });

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

        cy.matchImageSnapshot('5-4-data-list-email-opened', {
            capture: 'viewport',
            blackout: ['tui-doc-navigation'],
        });

        cy.getByAutomationId('tui-data-list-range-option')
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            .click({force: true})
            .getByAutomationId('tui-data-list-range-field')
            .findByAutomationId('tui-primitive-textfield__native-input')
            .focus()
            .clear()
            .should('have.value', '')
            .type('04.02.2022 – 04.02.2023', {force: true});

        cy.matchImageSnapshot('5-5-data-list-range-opened', {
            capture: 'viewport',
            blackout: ['tui-doc-navigation'],
        });

        cy.getByAutomationId('tui-data-list-calendar-option')
            .wait(DEFAULT_TIMEOUT_BEFORE_ACTION)
            .click({force: true})
            .getByAutomationId('tui-primitive-calendar__cell')
            .eq(4)
            .click({force: true});

        cy.matchImageSnapshot('5-6-data-list-calendar-opened', {
            capture: 'viewport',
            blackout: ['tui-doc-navigation'],
        });

        cy.get(demo).wait(DEFAULT_TIMEOUT_BEFORE_ACTION).click();

        cy.matchImageSnapshot('5-7-data-list-finish', {
            capture: 'viewport',
            blackout: ['tui-doc-navigation'],
        });
    });

    it('Options with long text', () => {
        cy.get(`#long-text-options [automation-id=${EXAMPLE_ID}] tui-hosted-dropdown`)
            .scrollIntoView()
            .should('be.visible')
            .click();

        cy.get('tui-dropdown-box')
            .should('be.visible')
            .matchImageSnapshot('6-#long-text-options');
    });
});
