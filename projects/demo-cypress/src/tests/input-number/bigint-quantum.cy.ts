import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {tuiNumberFormatProvider, TuiRoot} from '@taiga-ui/core';
import {TuiInputNumber, tuiInputNumberOptionsProvider} from '@taiga-ui/kit';
import {type MountConfig} from 'cypress/angular';

@Component({
    imports: [ReactiveFormsModule, TuiInputNumber, TuiRoot],
    template: `
        <tui-root>
            <tui-textfield>
                <input
                    bigint
                    tuiInputNumber
                    [formControl]="control"
                    [max]="max()"
                    [min]="min()"
                    [quantum]="quantum()"
                />
            </tui-textfield>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        tuiInputNumberOptionsProvider({minusSign: '-'}),
        tuiNumberFormatProvider({
            thousandSeparator: '',
        }),
    ],
})
class SandBox {
    public readonly control = new FormControl<bigint | null>(null);
    public readonly max = input<bigint | number>(Infinity);
    public readonly min = input<bigint | number>(-Infinity);
    public readonly quantum = input<bigint>(0n);
}

describe('InputNumber | [bigint] + [step]', () => {
    let control: FormControl<bigint | null>;

    function mount(
        componentProperties?: MountConfig<SandBox>['componentProperties'],
    ): void {
        cy.mount(SandBox, {componentProperties}).then((x) => {
            control = x.component.control;
        });
    }

    describe('Quantum === 5n', () => {
        beforeEach(() => {
            mount({quantum: 5n});
        });

        it('Type 12 -> Control contains 10n -> Textfield becomes 10 only on blur', () => {
            cy.get('input')
                .type('12')
                .then(() => {
                    expect(control.value).to.equal(10n);
                });

            cy.get('input')
                .should('have.value', '12')
                .blur()
                .should('have.value', '10')
                .then(() => {
                    expect(control.value).to.equal(10n);
                });
        });

        it('Type 14 -> Control contains 15n -> Textfield becomes 15 only on blur', () => {
            cy.get('input')
                .type('14')
                .then(() => {
                    expect(control.value).to.equal(15n);
                });

            cy.get('input')
                .should('have.value', '14')
                .blur()
                .should('have.value', '15')
                .then(() => {
                    expect(control.value).to.equal(15n);
                });
        });

        it('Type 15 -> Control contains 15n -> Textfield remains 15', () => {
            cy.get('input')
                .type('15')
                .then(() => {
                    expect(control.value).to.equal(15n);
                });

            cy.get('input')
                .should('have.value', '15')
                .blur()
                .should('have.value', '15')
                .then(() => {
                    expect(control.value).to.equal(15n);
                });
        });
    });

    describe('Quantum === 0n (disabled feature)', () => {
        beforeEach(() => {
            mount({quantum: 0n});
        });

        it('Type 0 -> Control contains 0n -> Textfield remains 0', () => {
            cy.get('input')
                .type('0')
                .then(() => {
                    expect(control.value).to.equal(0n);
                });

            cy.get('input')
                .should('have.value', '0')
                .blur()
                .should('have.value', '0')
                .then(() => {
                    expect(control.value).to.equal(0n);
                });
        });

        it('Type 12 -> Control contains 12n -> Textfield remains 12', () => {
            cy.get('input')
                .type('12')
                .then(() => {
                    expect(control.value).to.equal(12n);
                });

            cy.get('input')
                .should('have.value', '12')
                .blur()
                .should('have.value', '12')
                .then(() => {
                    expect(control.value).to.equal(12n);
                });
        });

        it('Type 14 -> Control contains 14n -> Textfield remains 14', () => {
            cy.get('input')
                .type('14')
                .then(() => {
                    expect(control.value).to.equal(14n);
                });

            cy.get('input')
                .should('have.value', '14')
                .blur()
                .should('have.value', '14')
                .then(() => {
                    expect(control.value).to.equal(14n);
                });
        });

        it('Type 15 -> Control contains 15n -> Textfield remains 15', () => {
            cy.get('input')
                .type('15')
                .then(() => {
                    expect(control.value).to.equal(15n);
                });

            cy.get('input')
                .should('have.value', '15')
                .blur()
                .should('have.value', '15')
                .then(() => {
                    expect(control.value).to.equal(15n);
                });
        });
    });
});
