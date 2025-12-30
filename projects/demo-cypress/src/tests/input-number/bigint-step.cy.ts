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
                    [step]="step()"
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
    public readonly step = input<bigint | number>(1);
}

describe('InputNumber | [bigint] + [step]', () => {
    let control: FormControl<bigint | null>;
    const huge = String(Number.MAX_SAFE_INTEGER).repeat(2);

    function mount(
        componentProperties?: MountConfig<SandBox>['componentProperties'],
    ): void {
        cy.mount(SandBox, {componentProperties}).then((x) => {
            control = x.component.control;
        });
    }

    it('stores `bigint | null` in control and keeps text as plain number', () => {
        mount();

        cy.get('input')
            .type('1234567')
            .should('have.value', '1234567')
            .then(() => {
                expect(typeof control.value).to.equal('bigint');
                expect(control.value).to.equal(1234567n);
            });
    });

    it('step as number type works with bigint control value', () => {
        mount({step: 123_456_789});

        cy.get('input')
            .type(huge)
            .type('{upArrow}')
            .should('have.value', String(BigInt(huge) + 123_456_789n))
            .then(() => {
                expect(typeof control.value).to.equal('bigint');
                expect(control.value).to.equal(BigInt(huge) + 123_456_789n);
            });
    });

    describe('Keyboard stepping', () => {
        beforeEach(() => mount());

        it('increments and decrements small values by 1 with arrows', () => {
            cy.get('input')
                .type('5')
                .type('{upArrow}')
                .should('have.value', '6')
                .type('{downArrow}'.repeat(2))
                .should('have.value', '4')
                .then(() => {
                    expect(control.value).to.equal(4n);
                });
        });

        it('preserves precision for extremely large integers', () => {
            cy.get('input')
                .type(huge)
                .should('have.value', huge)
                .type('{upArrow}')
                .should('have.value', String(BigInt(huge) + 1n))
                .then(() => {
                    expect(control.value).to.equal(BigInt(huge) + 1n);
                })
                .type('{downArrow}')
                .should('have.value', huge)
                .then(() => {
                    expect(control.value).to.equal(BigInt(huge));
                });
        });
    });

    describe('Step buttons', () => {
        it('increments and decrements by step via +/- buttons', () => {
            mount({step: 3});

            cy.get('tui-textfield button').contains('+').click();
            cy.get('input')
                .should('have.value', '3')
                .then(() => {
                    expect(control.value).to.equal(3n);
                });

            cy.get('tui-textfield button').contains('-').click().click();
            cy.get('input')
                .should('have.value', '-3')
                .then(() => {
                    expect(control.value).to.equal(-3n);
                });
        });
    });

    describe('Empty / zero behavior', () => {
        beforeEach(() => mount());

        it('empty input + up arrow treats empty as 0 and applies step', () => {
            cy.get('input')
                .focus()
                .type('{upArrow}')
                .should('have.value', '1')
                .then(() => {
                    expect(control.value).to.equal(1n);
                });
        });

        it('empty input + down arrow treats empty as 0 and applies step', () => {
            cy.get('input')
                .focus()
                .type('{downArrow}')
                .should('have.value', '-1')
                .then(() => {
                    expect(control.value).to.equal(-1n);
                });
        });

        it('clearing the field resets control to null', () => {
            cy.get('input')
                .type('42')
                .should('have.value', '42')
                .clear()
                .should('have.value', '')
                .then(() => {
                    expect(control.value).to.equal(null);
                });
        });
    });

    describe('Clamping with BigInt', () => {
        beforeEach(() => mount({min: -5n, max: 5n, step: 2n}));

        it('does not cross MAX and disables buttons at bounds', () => {
            cy.get('input')
                .type('5')
                .should('have.value', '5')
                .type('{upArrow}'.repeat(3))
                .should('have.value', '5')
                .then(() => {
                    expect(control.value).to.equal(5n);
                });

            cy.get('tui-textfield button').contains('+').should('be.disabled');
        });

        it('does not cross MIN and disables buttons at bounds', () => {
            cy.get('input').type('1');

            cy.get('tui-textfield button').contains('-').click().click().click();

            cy.get('input')
                .should('have.value', '-5')
                .then(() => {
                    expect(control.value).to.equal(-5n);
                });

            cy.get('tui-textfield button').contains('-').should('be.disabled');

            cy.get('input')
                .type('{downArrow}'.repeat(3))
                .should('have.value', '-5')
                .then(() => {
                    expect(control.value).to.equal(-5n);
                });
        });
    });

    describe('Huge value with huge step', () => {
        it('applies huge bigint step without loss of precision', () => {
            mount({step: BigInt(huge)});

            cy.get('input')
                .type(huge)
                .should('have.value', huge)
                .type('{upArrow}')
                .should('have.value', String(BigInt(huge) * 2n))
                .then(() => {
                    expect(typeof control.value).to.equal('bigint');
                    expect(control.value).to.equal(BigInt(huge) * 2n);
                });
        });
    });
});
