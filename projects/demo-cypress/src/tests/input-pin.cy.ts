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

    it('should not remove last symbol when navigating to start of a filled input', () => {
        cy.get('@pin').type('1234');
        cy.get('@pin').type('{leftArrow}'.repeat(4));
        cy.get('@pin').type('5');

        cy.get('@pin').should('have.value', '5234');
    });

    it('should not move cursor when selection is in the middle', () => {
        cy.get('@pin').type('12');
        cy.get('@pin').type('{leftArrow}');

        cy.get('@pin').should('have.prop', 'selectionStart', 1);
        cy.get('@pin').should('have.prop', 'selectionEnd', 1);
    });
});
