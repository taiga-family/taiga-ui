import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {tuiInputNumberOptionsProvider, TuiInputSlider} from '@taiga-ui/kit';

describe('InputSlider | Patch form control value', () => {
    @Component({
        imports: [
            FormsModule,
            TuiInputSlider,
            TuiRoot,
            TuiTextfield,
            ReactiveFormsModule,
        ],
        template: `
            <tui-root>
                <button
                    id="patch"
                    type="button"
                    (click)="value = 0.5; control.setValue(0.5)"
                >
                    Patch
                </button>

                <tui-textfield>
                    @if (formApproach === 'ngModel') {
                        <input
                            tuiInputSlider
                            [(ngModel)]="value"
                        />
                    } @else {
                        <input
                            tuiInputSlider
                            [formControl]="control"
                        />
                    }

                    <input
                        tuiSlider
                        type="range"
                        [step]="0.25"
                    />
                </tui-textfield>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [tuiInputNumberOptionsProvider({min: 0, max: 1})],
    })
    class SandBox {
        protected value = 0;
        protected readonly control = new FormControl(0);

        @Input()
        public formApproach: 'formControl' | 'ngModel' = 'ngModel';
    }

    beforeEach(() => {
        cy.viewport(300, 115);
    });

    (['ngModel', 'formControl'] as const).forEach((formApproach) => {
        it(formApproach, () => {
            cy.mount(SandBox, {componentProperties: {formApproach}});
            cy.get('[tuiInputSlider]').should('have.value', '0');
            cy.get('[tuiSlider]').should('have.value', '0');

            cy.get('#patch').click();

            cy.get('[tuiInputSlider]').should('have.value', '0.50');
            cy.get('[tuiSlider]').should('have.value', 0.5);

            cy.compareSnapshot(`input-slider-patch-control-value-${formApproach}`);
        });
    });
});
