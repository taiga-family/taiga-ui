import {ChangeDetectionStrategy, Component, input} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {type TuiDecimalMode, TuiNumberFormat, TuiRoot} from '@taiga-ui/core';
import {TuiInputNumber, tuiInputNumberOptionsProvider} from '@taiga-ui/kit';
import {type MountConfig} from 'cypress/angular';

import {
    BigIntWithDecimal,
    type ControlValue,
} from '../../../../demo/src/pages/components/input-number/examples/11/transformer';

@Component({
    imports: [
        BigIntWithDecimal,
        ReactiveFormsModule,
        TuiInputNumber,
        TuiNumberFormat,
        TuiRoot,
    ],
    template: `
        <tui-root>
            <tui-textfield>
                <input
                    bigintWithDecimal
                    tuiInputNumber
                    [formControl]="control"
                    [min]="0"
                    prefix="$"
                    [tuiNumberFormat]="{
                        precision: precision(),
                        decimalMode: decimalMode(),
                    }"
                />
            </tui-textfield>
        </tui-root>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiInputNumberOptionsProvider({max: Infinity})],
})
class SandBox {
    public readonly control = new FormControl<ControlValue>(null);
    public readonly precision = input(2);
    public readonly decimalMode = input<TuiDecimalMode>('not-zero');
}

describe('InputNumber | [bigintWithDecimal]', () => {
    let control: FormControl<ControlValue>;

    function mount(
        componentProperties?: MountConfig<SandBox>['componentProperties'],
    ): void {
        cy.mount(SandBox, {componentProperties}).then((x) => {
            control = x.component.control;
        });
    }

    describe('precision === 10 && decimalMode: "always"', () => {
        beforeEach(() => {
            mount({precision: 10, decimalMode: 'always'});
        });

        it('Type 1 -> Control contains {significand: 10000000000n, exp: -10} -> Textfield becomes $1.0000000000', () => {
            cy.get('input')
                .should('have.value', '')
                .type('1')
                .should('have.value', '$1.0000000000')
                .then(() => {
                    expect(control.value).to.deep.equal({
                        significand: 10000000000n,
                        exp: -10,
                    });
                });
        });

        it('Type 1 + blur -> Control still contains {significand: 10000000000n, exp: -10} -> Textfield still has $1.0000000000', () => {
            cy.get('input')
                .type('1')
                .blur()
                .wait(100) // ensure all async actions are finished
                .should('have.value', '$1.0000000000')
                .then(() => {
                    expect(control.value).to.deep.equal({
                        significand: 10000000000n,
                        exp: -10,
                    });
                });
        });

        it('Type 123.456 -> Control contains {significand: 1234560000000n, exp: -10} -> Textfield has $123.4560000000', () => {
            cy.get('input')
                .type('123.456')
                .should('have.value', '$123.4560000000')
                .then(() => {
                    expect(control.value).to.deep.equal({
                        significand: 1234560000000n,
                        exp: -10,
                    });
                });
        });
    });
});
