import {
    ChangeDetectionStrategy,
    Component,
    effect,
    EventEmitter,
    Output,
    signal,
} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateRange} from '@taiga-ui/kit';
import {createOutputSpy} from 'cypress/angular';

describe('InputDateRange | control.setValue is used inside effect', () => {
    @Component({
        imports: [ReactiveFormsModule, TuiInputDateRange, TuiRoot, TuiTextfield],
        template: `
            <tui-root>
                <tui-textfield>
                    <input
                        tuiInputDateRange
                        [formControl]="control"
                    />
                    <tui-calendar-range *tuiDropdown />
                </tui-textfield>
                <button
                    id="today"
                    type="button"
                    (click)="value.set('2025-08-13|2025-08-20')"
                >
                    Click me to set new date range
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
        protected readonly value = signal<string | null>('2000-01-02|2000-01-10');
        protected readonly control = new FormControl(this.parseRange(this.value()!));
        protected readonly onChangeEffect = effect(
            () => {
                const value = this.value();
                /**
                 * Intentionally create new object on every effect run
                 * to reproduce any possible circular dependency effect
                 */
                const range = value ? this.parseRange(value) : null;

                this.count.emit();
                this.control.setValue(range);
            },
            {allowSignalWrites: true},
        );

        @Output()
        public readonly count = new EventEmitter<void>();

        private parseRange(value: string): TuiDayRange {
            const [from, to] = value.split('|');

            return new TuiDayRange(TuiDay.jsonParse(from), TuiDay.jsonParse(to));
        }
    }

    beforeEach(() => {
        cy.mount(SandBox, {
            componentProperties: {count: createOutputSpy('count')},
        });
        cy.get('[tuiInputDateRange]').as('textfield');
        cy.get('@textfield').should('have.value', '02.01.2000 – 10.01.2000');
        cy.get('@count').should('have.been.calledOnce');
    });

    it('Patch value with not-empty value', () => {
        cy.get('#today').click();
        cy.get('@textfield').should('have.value', '13.08.2025 – 20.08.2025');
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

    it('User interaction should not retrigger effect', () => {
        // Type in the input to simulate user interaction
        cy.get('@textfield').clear().type('15.08.2025 – 25.08.2025');

        // Effect should still have been called only once (initial)
        cy.get('@count').should('have.been.calledOnce');
    });
});
