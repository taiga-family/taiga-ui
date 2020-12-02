export class TuiSelectElementObject {
    protected listItemSelector = '[automation-id=tui-select__item]';

    get element() {
        return cy.get(this.selector);
    }

    constructor(protected readonly selector: string) {}

    select(index: number) {
        this.element.click();

        cy.get(this.listItemSelector)
            .eq(index)
            .should('not.have.css', 'pointer-events', 'none')
            .click();
    }
}
