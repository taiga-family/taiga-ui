import {ChangeDetectionStrategy, Component} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDay, TuiDayRange} from '@taiga-ui/cdk';
import {TUI_ANIMATIONS_SPEED, TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {TuiInputDateRange} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [ReactiveFormsModule, TuiInputDateRange, TuiRoot, TuiTextfield],
    template: `
        <tui-root>
            <tui-textfield>
                <label tuiLabel>Choose a date range</label>
                <input
                    tuiInputDateRange
                    [formControl]="control"
                />
                <tui-calendar-range *tuiTextfieldDropdown />
            </tui-textfield>

            <div id="control-value">{{ control.value?.toString() || 'null' }}</div>
            <div id="control-valid">{{ control.valid ? 'valid' : 'invalid' }}</div>

            <button
                id="set-range"
                type="button"
                (click)="setRange()"
            >
                Set range
            </button>

            <button
                id="reset"
                type="button"
                (click)="control.reset()"
            >
                Reset
            </button>

            <button
                id="rapid-updates"
                type="button"
                (click)="rapidUpdates()"
            >
                Rapid updates
            </button>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{provide: TUI_ANIMATIONS_SPEED, useValue: 0}],
})
export class TestInputDateRangeCircularDependency {
    protected readonly control = new FormControl<TuiDayRange | null>(null);

    protected setRange(): void {
        const today = TuiDay.currentLocal();
        const nextWeek = today.append({day: 7});

        this.control.setValue(new TuiDayRange(today, nextWeek));
    }

    protected rapidUpdates(): void {
        // Perform multiple rapid updates to test for circular dependency issues
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const day = TuiDay.currentLocal().append({day: i});

                this.control.setValue(new TuiDayRange(day, day.append({day: 1})));
            }, i * 10);
        }
    }
}

describe('InputDateRange Circular Dependency', () => {
    beforeEach(() => cy.mount(TestInputDateRangeCircularDependency));

    it('should handle form control updates without performance issues', () => {
        // Verify initial state
        cy.get('#control-value').should('contain', 'null');
        cy.get('#control-valid').should('contain', 'valid');

        // Set a date range programmatically
        cy.get('#set-range').click();

        // Verify the range was set
        cy.get('#control-value').should('not.contain', 'null');
        cy.get('[tuiInputDateRange]').should('not.have.value', '');
    });

    it('should handle form control reset without issues', () => {
        // Set a range first
        cy.get('#set-range').click();
        cy.get('#control-value').should('not.contain', 'null');

        // Reset the form control
        cy.get('#reset').click();

        // Verify reset worked
        cy.get('#control-value').should('contain', 'null');
        cy.get('[tuiInputDateRange]').should('have.value', '');
    });

    it('should handle rapid updates without circular dependency issues', () => {
        // Record start time to measure performance
        const startTime = Date.now();

        // Trigger rapid updates
        cy.get('#rapid-updates').click();

        // Wait for all updates to complete
        cy.wait(100);

        // Verify the component is still responsive
        cy.get('#control-value').should('not.contain', 'null');

        // Verify operation completed in reasonable time
        cy.then(() => {
            const endTime = Date.now();
            const duration = endTime - startTime;

            expect(duration).to.be.lessThan(500); // Should complete quickly
        });
    });

    it('should handle typing in the input field correctly', () => {
        // Type a date range manually
        cy.get('[tuiInputDateRange]').type('01.01.2024 – 15.01.2024');

        // Verify the value was entered (use should() callback to handle potential character encoding)
        cy.get('[tuiInputDateRange]').should(($input) => {
            const value = $input.val() as string;

            expect(value).to.include('01.01.2024');
            expect(value).to.include('15.01.2024');
        });

        // Verify form control was updated
        cy.get('#control-value').should('not.contain', 'null');
    });

    it('should handle clearing the input field', () => {
        // Set a range first
        cy.get('#set-range').click();
        cy.get('[tuiInputDateRange]').should('not.have.value', '');

        // Clear the input
        cy.get('[tuiInputDateRange]').clear();

        // Verify it was cleared
        cy.get('[tuiInputDateRange]').should('have.value', '');
    });

    it('should maintain form control synchronization', () => {
        // Set programmatically
        cy.get('#set-range').click();

        // Verify both input and control value are updated
        cy.get('[tuiInputDateRange]').should('not.have.value', '');
        cy.get('#control-value').should('not.contain', 'null');

        // Reset and verify synchronization
        cy.get('#reset').click();
        cy.get('[tuiInputDateRange]').should('have.value', '');
        cy.get('#control-value').should('contain', 'null');
    });
});
