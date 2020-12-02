import Chainable = Cypress.Chainable;
import {TuiSelectElementObject} from './tui-select.element-object';

export class TuiInputElementObject extends TuiSelectElementObject {
    protected listItemSelector = '[automation-id=tui-menu-items__item]';

    get element() {
        return cy.get(this.selector);
    }

    get focusableElement() {
        return this.getFocusableElement(this.element);
    }

    clear(): Chainable<JQuery> {
        return this.focusableElement.clear();
    }

    private getFocusableElement(element: Chainable<JQuery>): Chainable<JQuery> {
        return element.then($element => {
            const elemTagName = $element.get(0).tagName.toLowerCase();
            const isFocusable = elemTagName === 'input' || elemTagName === 'textarea';

            if (isFocusable) {
                return $element;
            }

            return $element.find('input, textarea');
        });
    }
}
