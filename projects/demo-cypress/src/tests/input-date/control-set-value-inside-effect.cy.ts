import {
    ChangeDetectionStrategy,
    Component,
    effect,
    EventEmitter,
    Output,
    signal,
} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDay} from '@taiga-ui/cdk';
import {TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {TuiInputDate} from '@taiga-ui/kit';
import {createOutputSpy} from 'cypress/angular';

describe('InputDate | control.setValue is used inside effect', () => {
    @Component({
        imports: [ReactiveFormsModule, TuiInputDate, TuiRoot, TuiTextfield],
        template: `
            <tui-root>
                <tui-textfield>
                    <input
                        tuiInputDate
                        [formControl]="control"
                    />

                    <tui-calendar *tuiDropdown />
                </tui-textfield>

                <button
                    id="today"
                    type="button"
                    (click)="value.set('2025-08-13')"
                >
                    Click me to set new date
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
        protected readonly value = signal<string | null>('2000-01-02');
        protected readonly control = new FormControl(TuiDay.jsonParse(this.value()!));

        protected readonly onChangeEffect = effect(
            () => {
                const value = this.value();
                /**
                 * Intentionally create new object on every effect run
                 * to reproduce any possible circular dependency effect
                 */
                const date = value ? TuiDay.jsonParse(value) : null;

                this.count.emit();
                this.control.setValue(date);
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
        cy.get('[tuiInputDate]').as('textfield');
        cy.get('@textfield').should('have.value', '02.01.2000');
        cy.get('@count').should('have.been.calledOnce');
    });

    it('Patch value with not-empty value', () => {
        cy.get('#today').click();

        cy.get('@textfield').should('have.value', '13.08.2025');
        cy.get('@count').should(
            'have.callCount',
            2, // Initial writeValue and then effect
        );
    });

    it('Patch value with empty value (when form control is not empty)', () => {
        cy.get('#today').click();
        cy.get('#null').click();

        cy.get('@textfield').should('have.value', '');
        cy.get('@count').should(
            'have.callCount',
            3, // Initial writeValue + effect + effect
        );
    });
});
