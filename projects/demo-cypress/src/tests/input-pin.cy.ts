import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule, Validators} from '@angular/forms';
import {TuiTextfield} from '@taiga-ui/core';
import {TuiInputPin} from '@taiga-ui/kit';

@Component({
    imports: [ReactiveFormsModule, TuiInputPin, TuiTextfield],
    template: `
        <tui-textfield>
            <input
                id="pin-input"
                maxlength="4"
                placeholder="••••"
                tuiInputPin
                [formControl]="control"
            />
        </tui-textfield>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestInputPin {
    protected readonly control = new FormControl('', Validators.minLength(4));
}

describe('InputPin', () => {
    beforeEach(() => {
        cy.mount(TestInputPin);
        cy.get('#pin-input').as('pin');
    });

    it('should focus input and place cursor at start when clicking on empty input', () => {
        cy.get('@pin').click();

        cy.get('@pin').should('have.focus');
        cy.get('@pin').should('have.prop', 'selectionStart', 0);
        cy.get('@pin').should('have.prop', 'selectionEnd', 0);
    });

    it('should select first character when focusing on filled input', () => {
        cy.get('@pin').type('1234');

        cy.get('@pin').click();

        cy.get('@pin').should('have.prop', 'selectionStart', 0);
        cy.get('@pin').should('have.prop', 'selectionEnd', 1);
    });

    it('should collapse cursor before last character when navigating past the end', () => {
        cy.get('@pin').type('1234');

        cy.get('@pin').type('{rightArrow}'.repeat(4));

        cy.get('@pin').should('have.prop', 'selectionStart', 3);
        cy.get('@pin').should('have.prop', 'selectionEnd', 3);
    });

    it('should not move cursor when selection is in the middle', () => {
        cy.get('@pin').type('12');
        cy.get('@pin').type('{leftArrow}');

        cy.get('@pin').should('have.prop', 'selectionStart', 1);
        cy.get('@pin').should('have.prop', 'selectionEnd', 1);
    });

    it('should allow typing PIN code', () => {
        cy.get('@pin').type('1234');

        cy.get('@pin').should('have.value', '1234');
    });

    it('should respect maxlength attribute', () => {
        cy.get('@pin').type('12345678');

        cy.get('@pin').should('have.value', '1234');
    });
});
