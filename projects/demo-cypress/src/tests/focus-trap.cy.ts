import {NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiFocusTrap} from '@taiga-ui/cdk';

const TOUCHED = '_touched';

describe('FocusTrap', () => {
    @Component({
        standalone: true,
        imports: [NgIf, TuiFocusTrap],
        template: `
            <button
                id="increase"
                (click)="increase()"
            >
                Increase counter
            </button>

            <div
                *ngIf="i % 2 === 0"
                tuiFocusTrap
                class="even"
            >
                <input />
                <button (click)="i = -1">Close</button>
            </div>

            <div
                *ngIf="i % 2 === 1"
                tuiFocusTrap
                class="odd"
            >
                <input (focus)="markTouched($event.target)" />
                <button (click)="i = -1">Close</button>
            </div>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        protected i = -1;
        protected increase = (): number => this.i++;
        protected markTouched = (el: HTMLElement): void => el.classList.add(TOUCHED);
    }

    beforeEach(() => {
        cy.mount(Test);
        cy.get('#increase').focus().click();
    });

    it('move focus inside trap on mounting', () => {
        cy.get('.even').should('be.visible').should('be.focused');
    });

    it('moving focus on another element inside focus trap works', () => {
        cy.tab();
        cy.get('.even input').first().should('be.focused');
        cy.tab();
        cy.get('.even button').should('be.focused');
    });

    it('focus cannot be moved outside active focus trap', () => {
        cy.tab();
        cy.get('.even input').first().should('be.focused');
        cy.tab();
        cy.get('.even button').should('be.focused');
        cy.tab();
        cy.get('.even input').first().should('be.focused');
        cy.tab();
        cy.get('.even button').should('be.focused');
        cy.tab();
        cy.get('.even input').first().should('be.focused');
    });

    it('focus should be returned to the element (focused before opening trap) on closing focus trap', () => {
        cy.get('.even button').click();
        cy.get('.even').should('not.exist');
        cy.get('#increase').should('be.focused');
    });

    it('synchronous closing already opened focus trap and opening another one dont cause race condition', () => {
        cy.get('#increase').click();
        cy.get('.odd').should('be.visible').should('be.focused');
        cy.get('.odd input').should('not.be.focused').should('not.have.class', TOUCHED);
        cy.get('.odd button').click();
        cy.get('#increase').should('be.focused');
    });
});
