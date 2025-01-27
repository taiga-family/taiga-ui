import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';

describe('InputNumber | Form control is patched with empty string', () => {
    @Component({
        standalone: true,
        imports: [FormsModule, TuiInputNumber, TuiRoot, TuiTextfield],
        template: `
            <tui-root>
                <tui-textfield>
                    <label tuiLabel>Label</label>
                    <input
                        tuiInputNumber
                        [(ngModel)]="value"
                    />
                </tui-textfield>

                <br />

                <button
                    id="42"
                    (click)="value = 42"
                >
                    Click me to set "42"
                </button>
                <button
                    id="null"
                    (click)="value = null"
                >
                    Click me to set "null"
                </button>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        protected value: number | null = null;
    }

    beforeEach(() => {
        cy.mount(Test);
        cy.get('[tuiInputNumber]').as('textfield');
        cy.get('@textfield').type('123');
    });

    it('Patch value with not-empty value', () => {
        cy.get('#42').click();

        cy.get('@textfield').should('have.value', '42');
        cy.get('tui-textfield').compareSnapshot({
            name: 'input-number-write-value-42',
            cypressScreenshotOptions: {padding: 8},
        });
    });

    it('Patch value with empty value', () => {
        cy.get('#null').click();

        cy.get('@textfield').should('have.value', '');
        cy.get('tui-textfield').compareSnapshot({
            name: 'input-number-write-value-empty-string',
            cypressScreenshotOptions: {padding: 8},
        });
    });

    it('Patch not empty value after textfield was already patched with empty string', () => {
        cy.get('#null').click();
        cy.get('#42').click();

        cy.get('@textfield').should('have.value', '42');
        cy.get('tui-textfield').compareSnapshot({
            name: 'input-number-write-value-42-after-empty',
            cypressScreenshotOptions: {padding: 8},
        });
    });
});
