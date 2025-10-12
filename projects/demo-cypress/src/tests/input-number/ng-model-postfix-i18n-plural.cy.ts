import {I18nPluralPipe} from '@angular/common';
import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

@Component({
    imports: [FormsModule, I18nPluralPipe, TuiInputNumber, TuiRoot, TuiTextfield],
    template: `
        <tui-root>
            <tui-textfield>
                <input
                    tuiInputNumber
                    [postfix]="value | i18nPlural: pluralize"
                    [(ngModel)]="value"
                    (keydown.arrowDown)="value = value - 1"
                    (keydown.arrowUp)="value = value + 1"
                />
            </tui-textfield>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
class SandBox {
    protected readonly pluralize = {
        '=1': ' day ago',
        other: ' days ago',
    };

    public value = 2;
}

describe('InputNumber with [postfix]="value | i18nPlural" has race condition for [ngModel]', () => {
    let component: SandBox;

    beforeEach(() => {
        cy.mount(SandBox).then((x) => {
            component = x.component;
        });
    });

    it('Press ArrowDown => Textfield contains `1 day ago`', () => {
        cy.get('[tuiInputNumber]')
            .should('have.value', '2 days ago')
            .type('{downArrow}')
            .should('have.value', '1 day ago')
            .should('have.prop', 'selectionStart', 1)
            .should('have.prop', 'selectionEnd', 1);
    });

    it('Press ArrowDown => form control value equals to 1', () => {
        cy.get('[tuiInputNumber]')
            .then(() => {
                expect(component.value).to.equal(2);
            })
            .type('{downArrow}')
            .then(() => {
                expect(component.value).to.equal(1);
            });
    });

    it('Press ArrowDown x2 => Textfield contains `0 day ago`', () => {
        cy.get('[tuiInputNumber]')
            .should('have.value', '2 days ago')
            .type('{downArrow}'.repeat(2))
            .should('have.value', '0 days ago')
            .should('have.prop', 'selectionStart', 1)
            .should('have.prop', 'selectionEnd', 1);
    });

    it('Press ArrowDown x2 => form control value equals to 0', () => {
        cy.get('[tuiInputNumber]')
            .then(() => {
                expect(component.value).to.equal(2);
            })
            .type('{downArrow}'.repeat(2))
            .then(() => {
                expect(component.value).to.equal(0);
            });
    });

    it('Value equals to 0 => Press ArrowUp => Textfield contains `1 day ago`', () => {
        cy.get('[tuiInputNumber]')
            .clear()
            .type('0')
            .should('have.value', '0 days ago')
            .type('{upArrow}')
            .should('have.value', '1 day ago')
            .should('have.prop', 'selectionStart', 1)
            .should('have.prop', 'selectionEnd', 1);
    });

    it('Value equals to 0 => Press ArrowUp => form control value equals to 1', () => {
        cy.get('[tuiInputNumber]')
            .clear()
            .type('0')
            .then(() => {
                expect(component.value).to.equal(0);
            })
            .type('{upArrow}')
            .then(() => {
                expect(component.value).to.equal(1);
            });
    });

    it('Value equal to 0 => Press ArrowUp x2 => Textfield contains `2 days ago`', () => {
        cy.get('[tuiInputNumber]')
            .clear()
            .type('0')
            .should('have.value', '0 days ago')
            .type('{upArrow}'.repeat(2))
            .should('have.value', '2 days ago')
            .should('have.prop', 'selectionStart', 1)
            .should('have.prop', 'selectionEnd', 1);
    });

    it('Value equals to 0 => Press ArrowUp x2 => form control value equals to 2', () => {
        cy.get('[tuiInputNumber]')
            .clear()
            .type('0')
            .then(() => {
                expect(component.value).to.equal(0);
            })
            .type('{upArrow}'.repeat(2))
            .then(() => {
                expect(component.value).to.equal(2);
            });
    });
});
