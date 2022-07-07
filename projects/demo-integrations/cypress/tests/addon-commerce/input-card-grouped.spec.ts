import {DEFAULT_TIMEOUT_BEFORE_ACTION} from '../../support/shared.entities';

describe('InputCardGrouped', () => {
    describe('API mode', () => {
        beforeEach(() => {
            cy.viewport('macbook-13');
            cy.tuiVisit('components/input-card-grouped/API?tuiMode=null');
        });

        it('set value and clear after', () => {
            cy.get('#demoContent').should('be.visible').as('wrapper');

            cy.get('@wrapper')
                .findByAutomationId('tui-input-card-grouped__card')
                .type('1234 4567 8910 1112');

            closeTuiAlerts();

            cy.get('@wrapper').matchImageSnapshot('01-input-card-grouped-filled');

            cy.get('@wrapper').find('[src="tuiIconCloseLarge"]').click({force: true});
            cy.get('@wrapper').matchImageSnapshot('02-input-card-grouped-cleared');

            cy.get('@wrapper').click({force: true});
            cy.get('@wrapper').matchImageSnapshot('03-input-card-grouped-unfocused');
        });

        it('set value and disable', () => {
            cy.get('#demoContent').should('be.visible').as('wrapper');

            cy.get('@wrapper')
                .findByAutomationId('tui-input-card-grouped__card')
                .type('1234 4567 1000 1112');

            closeTuiAlerts();

            cy.get('.t-table tr')
                .eq(1) // formControl.disable()
                .findByAutomationId('tui-toggle__checkbox')
                .click({force: true});

            cy.get('@wrapper').matchImageSnapshot('04-input-card-grouped-disabled');
        });

        // prevent flaky screenshot tests
        function closeTuiAlerts(): void {
            cy.get('tui-alert-host')
                .findByAutomationId('tui-notification__close')
                .click({force: true});
        }
    });

    describe('Examples', () => {
        beforeEach(() => {
            cy.viewport('macbook-13');
            cy.tuiVisit('components/input-card-grouped');
        });

        it('input card grouped with validation', () => {
            cy.get('tui-doc-example[heading="With validation"]')
                .findByAutomationId('tui-doc-example')
                .should('be.visible')
                .as('example');

            cy.get('@example').tuiScrollIntoView();

            cy.get('@example')
                .findByAutomationId('tui-input-card-grouped__card')
                .as('cardNumber');

            cy.get('@example').matchImageSnapshot('05-default-state-input-card');

            cy.get('@cardNumber')
                .type('5213 0000 4039 5834')
                .wait(DEFAULT_TIMEOUT_BEFORE_ACTION);

            cy.get('@example').matchImageSnapshot('06-input-card-with-value');

            cy.get('@cardNumber').should('be.visible').focus();

            cy.get('@example').matchImageSnapshot(
                '07-input-card-with-value-focus-edit-card',
            );

            cy.get('@cardNumber')
                .should('be.visible')
                .focused()
                .tuiTab('forward')
                .wait(DEFAULT_TIMEOUT_BEFORE_ACTION);

            cy.get('@example').matchImageSnapshot(
                '08-input-card-with-value-tab-to-expired',
            );

            cy.get('@example')
                .findByAutomationId('tui-input-card-grouped__expire')
                .should('be.visible')
                .as('cardExpired');

            cy.get('@cardExpired').type('02/38');
            cy.get('@example').matchImageSnapshot(
                '09-input-card-with-value-expire-filled',
            );

            cy.get('@example')
                .findByAutomationId('tui-input-card-grouped__cvc')
                .should('be.visible')
                .as('cvc');

            cy.get('@cvc').type('123');
            cy.get('@example').matchImageSnapshot('10-input-card-with-value-cvc-filled');

            cy.get('@example')
                .find('tui-svg[src=tuiIconCloseLarge]')
                .click({force: true});
            cy.get('@example').matchImageSnapshot(
                '11-input-card-with-focused-after-clear',
            );

            cy.get('@example').click({force: true});
            cy.get('@example').matchImageSnapshot('12-default-state-input-card');
        });

        it('input card grouped with saved cards', () => {
            cy.get('tui-doc-example[heading="With saved cards"]')
                .findByAutomationId('tui-doc-example')
                .should('be.visible')
                .as('example');

            cy.get('@example').tuiScrollIntoView();

            cy.get('@example')
                .findByAutomationId('tui-input-card-grouped__card')
                .as('cardNumber');
            cy.get('@example').matchImageSnapshot(
                '13-default-prefilled-state-input-card',
            );

            cy.get('@cardNumber')
                .should('have.css', 'pointer-events')
                .and('match', /none/);
            cy.get('@example').matchImageSnapshot('14-prefilled-value-cannot-be-edit');

            cy.get('@example')
                .findByAutomationId('tui-input-card-grouped__cvc')
                .focus()
                .type('123');
            cy.get('@example').matchImageSnapshot('15-input-card-with-value-cvc-filled');

            cy.get('@example')
                .find('tui-svg[src=tuiIconCloseLarge]')
                .click({force: true});
            cy.get('@example').matchImageSnapshot(
                '16-input-card-with-focused-after-clear',
            );

            cy.get('@example').click({force: true});
            cy.get('@example').matchImageSnapshot(
                '17-default-prefilled-state-input-card',
            );
        });
    });
});
