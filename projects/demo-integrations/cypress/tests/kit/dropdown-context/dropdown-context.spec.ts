const DROPDOWN_CONTEXT_PAGE_URL = 'directives/dropdown-context';

describe('DropdownContext', () => {
    beforeEach(() => {
        cy.viewport(720, 900);
        cy.goToDemoPage(DROPDOWN_CONTEXT_PAGE_URL);
    });

    it('opens dropdown on right click', () => {
        cy.get('#contextMenu').find('tr').last().rightclick();

        cy.window()
            .wait(100)
            .matchImageSnapshot(`01-opened-context-menu`, {capture: 'viewport'});
    });

    it('focuses content inside on Arrow Down key', () => {
        cy.get('#contextMenu').find('tr').eq(1).rightclick();

        cy.get('body').type('{downarrow}{downarrow}');
        cy.window().wait(100).matchImageSnapshot(`02-arrow-down`, {capture: 'viewport'});

        cy.focused().click();
        cy.window()
            .wait(100)
            .matchImageSnapshot(`02-arrow-down-clicked`, {capture: 'viewport'});
    });

    it('focuses content inside on Arrow Up key', () => {
        cy.get('#contextMenu').find('tr').eq(2).rightclick();

        cy.get('body').type('{uparrow}');
        cy.window().wait(100).matchImageSnapshot(`03-arrow-up`, {capture: 'viewport'});

        cy.focused().click();
        cy.window()
            .wait(100)
            .matchImageSnapshot(`03-arrow-up-clicked`, {capture: 'viewport'});
    });
});
