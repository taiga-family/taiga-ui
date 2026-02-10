import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {TuiYear} from '@taiga-ui/cdk';
import {TuiRoot} from '@taiga-ui/core';
import {
    TuiChevron,
    TuiComboBox,
    TuiDataListWrapper,
    TuiInputDate,
    TuiInputDateRange,
    TuiInputMonth,
    TuiInputNumber,
    TuiInputPhone,
    TuiInputTime,
    TuiSelect,
} from '@taiga-ui/kit';

@Component({
    imports: [
        ReactiveFormsModule,
        TuiChevron,
        TuiComboBox,
        TuiDataListWrapper,
        TuiInputDate,
        TuiInputDateRange,
        TuiInputMonth,
        TuiInputNumber,
        TuiInputPhone,
        TuiInputTime,
        TuiRoot,
        TuiSelect,
    ],
    template: `
        <tui-root>
            <button
                id="reset"
                type="button"
                (mouseenter)="formGroup().reset()"
            >
                Reset
            </button>

            <form [formGroup]="formGroup()">
                <tui-textfield tuiChevron>
                    <input
                        formControlName="comboBox"
                        tuiComboBox
                    />

                    <tui-data-list-wrapper
                        *tuiDropdown
                        new
                        [items]="['Option 1', 'Option 2']"
                    />
                </tui-textfield>

                <tui-textfield>
                    <input
                        formControlName="time"
                        tuiInputTime
                    />
                </tui-textfield>

                <tui-textfield>
                    <input
                        formControlName="number"
                        tuiInputNumber
                    />
                </tui-textfield>

                <tui-textfield>
                    <input
                        formControlName="phone"
                        tuiInputPhone
                    />
                </tui-textfield>

                <tui-textfield>
                    <input
                        formControlName="date"
                        tuiInputDate
                    />

                    <tui-calendar *tuiDropdown />
                </tui-textfield>

                <tui-textfield>
                    <input
                        formControlName="dateRange"
                        tuiInputDateRange
                    />

                    <tui-calendar-range *tuiDropdown />
                </tui-textfield>

                <tui-textfield>
                    <input
                        formControlName="month"
                        tuiInputMonth
                    />

                    <tui-calendar-month
                        *tuiDropdown
                        [year]="year"
                    />
                </tui-textfield>

                <tui-textfield tuiChevron>
                    <input
                        formControlName="select"
                        tuiSelect
                    />

                    <tui-data-list-wrapper
                        *tuiDropdown
                        new
                        [items]="['Taiga UI', 'Maskito']"
                    />
                </tui-textfield>
            </form>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Sandbox {
    protected readonly year = new TuiYear(2020);

    public readonly formGroup = input.required<FormGroup>();
}

describe('Textfield + form.reset()', () => {
    let form!: FormGroup;

    beforeEach(() => {
        form = new FormGroup({
            comboBox: new FormControl(null),
            time: new FormControl(null),
            number: new FormControl(null),
            date: new FormControl(null),
            dateRange: new FormControl(null),
            month: new FormControl(null),
            phone: new FormControl(null),
            select: new FormControl(null),
        });
        cy.mount(Sandbox, {componentProperties: {formGroup: form}});
    });

    it('ComboBox', () => {
        cy.get('[tuiComboBox]')
            .type('opt')
            .should('have.value', 'opt')
            .then(() => {
                expect(form.get('comboBox')!.value).to.be.equal(null);
            });

        cy.get('#reset').trigger('mouseenter');
        cy.get('[tuiComboBox]').should('have.value', '');
    });

    it('InputTime', () => {
        cy.get('[tuiInputTime]')
            .type('123')
            .should('have.value', '12:3')
            .then(() => {
                expect(form.get('time')!.value).to.be.equal(null);
            });

        cy.get('#reset').trigger('mouseenter');
        cy.get('[tuiInputTime]').should('have.value', '');
    });

    it('InputNumber', () => {
        cy.get('[tuiInputNumber]')
            .type('-')
            .should('have.value', '−')
            .then(() => {
                expect(form.get('number')!.value).to.be.equal(null);
            });

        cy.get('#reset').trigger('mouseenter');
        cy.get('[tuiInputNumber]').should('have.value', '');
    });

    it('InputDate (pristine form control)', () => {
        cy.get('[tuiInputDate]')
            .type('99')
            .should('have.value', '09.09')
            .then(() => {
                const control = form.get('date')!;

                expect(control.value).to.be.equal(null);
                expect(control.pristine).to.be.equal(true);
            });

        cy.get('#reset').trigger('mouseenter');
        cy.get('[tuiInputDate]').should('have.value', '');
    });

    it('InputPhone', () => {
        cy.get('[tuiInputPhone]')
            .type('123')
            .should('have.value', '+1 123')
            .then(() => {
                expect(form.get('phone')!.value).to.be.equal('+1123');
            });

        cy.get('#reset').click();
        cy.get('[tuiInputPhone]').should('have.value', '');
    });

    it('InputDate (already dirty form control)', () => {
        cy.get('[tuiInputDate]')
            .type('992000')
            .should('have.value', '09.09.2000')
            .then(() => {
                const control = form.get('date')!;
                const {year, month, day} = control.value;

                expect(year).be.equal(2000);
                expect(month).be.equal(8);
                expect(day).be.equal(9);
                expect(control.pristine).be.equal(false);
            })
            .clear()
            .type('99')
            .should('have.value', '09.09')
            .then(() => {
                expect(form.get('date')!.value).to.be.equal(null);
            });

        cy.get('#reset').trigger('mouseenter');
        cy.get('[tuiInputDate]').should('have.value', '');
    });

    it('InputDateRange', () => {
        cy.get('[tuiInputDateRange]')
            .type('992025')
            .should('have.value', '09.09.2025')
            .then(() => {
                expect(form.get('dateRange')!.value).to.be.equal(null);
            });

        cy.get('#reset').trigger('mouseenter');
        cy.get('[tuiInputDateRange]').should('have.value', '');
    });

    it('InputMonth', () => {
        cy.get('[tuiInputMonth]').click();
        cy.get('tui-calendar-month .t-cell').first().click();

        cy.get('[tuiInputMonth]')
            .should('have.value', 'January 2020')
            .then(() => {
                const {year, month} = form.get('month')!.value;

                expect(year).to.be.equal(2020);
                expect(month).to.be.equal(0);
            });

        cy.get('#reset').trigger('mouseenter');
        cy.get('[tuiInputMonth]')
            .should('have.value', '')
            .then(() => {
                expect(form.get('month')!.value).to.be.equal(null);
            });
    });

    it('Select', () => {
        cy.get('[tuiSelect]').click();
        cy.get('[tuiOption]').first().click();

        cy.get('[tuiSelect]').should('have.value', 'Taiga UI');

        cy.get('#reset').trigger('mouseenter');
        cy.get('[tuiSelect]')
            .should('have.value', '')
            .then(() => {
                expect(form.get('select')!.value).to.deep.equal(null);
            });
    });
});
