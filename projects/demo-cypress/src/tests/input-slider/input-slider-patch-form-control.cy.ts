import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {tuiInputNumberOptionsProvider, TuiInputSlider} from '@taiga-ui/kit';
import {NgIf} from '@angular/common';

describe('InputSlider | Patch form control value', () => {
    @Component({
        standalone: true,
        imports: [
            FormsModule,
            TuiInputSlider,
            TuiRoot,
            TuiTextfield,
            ReactiveFormsModule,
            NgIf,
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
                    <input
                        *ngIf="formApproach === 'ngModel'; else formControlApproach"
                        tuiInputSlider
                        [(ngModel)]="value"
                    />

                    <ng-template #formControlApproach>
                        <input
                            tuiInputSlider
                            [formControl]="control"
                        />
                    </ng-template>

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
