import {
    ChangeDetectionStrategy,
    Component,
    effect,
    EventEmitter,
    Output,
    signal,
} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {TuiInputNumber} from '@taiga-ui/kit';
import {createOutputSpy} from 'cypress/angular';

describe('InputNumber | control.setValue is used inside effect', () => {
    @Component({
        standalone: true,
        imports: [ReactiveFormsModule, TuiInputNumber, TuiRoot, TuiTextfield],
        template: `
            <tui-root>
                <tui-textfield>
                    <label tuiLabel>Label</label>
                    <input
                        tuiInputNumber
                        [formControl]="control"
                    />
                </tui-textfield>

                <button
                    id="42"
                    type="button"
                    (click)="value.set(42)"
                >
                    Click me to set "42"
                </button>

                <button
                    id="null"
                    type="button"
                    (click)="value.set(null)"
                >
                    Click me to set "null"
                </button>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class SandBox {
        protected readonly value = signal<number | null>(99);
        protected readonly control = new FormControl(this.value());

        protected readonly onChangeEffect = effect(
            () => {
                this.count.emit();
                this.control.setValue(this.value());
            },
            {allowSignalWrites: true},
        );

        @Output()
        public readonly count = new EventEmitter<void>();
    }

    beforeEach(() => {
        cy.mount(SandBox, {
            componentProperties: {count: createOutputSpy('count')},
        });
        cy.get('[tuiInputNumber]').as('textfield');
        cy.get('@textfield').type('123');
    });

    it('Patch value with not-empty value', () => {
        cy.get('#42').click();

        cy.get('@textfield').should('have.value', '42');
        cy.get('@count').should(
            'have.callCount',
            2, // Initial writeValue with 99 and then effect with 42
        );
    });

    it('Patch value with empty value (when form control is not empty)', () => {
        cy.get('#42').click();
        cy.get('#null').click();

        cy.get('@textfield').should('have.value', '');
        cy.get('@count').should(
            'have.callCount',
            3, // Initial writeValue + 42 + null
        );
    });
});
