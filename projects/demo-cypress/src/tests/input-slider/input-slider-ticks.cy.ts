import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {TuiInputSlider} from '@taiga-ui/kit';

describe('InputSlider | With segments + tick labels', () => {
    @Component({
        standalone: true,
        imports: [FormsModule, TuiInputSlider, TuiRoot, TuiTextfield],
        template: `
            <tui-root>
                <tui-textfield>
                    <input
                        tuiInputSlider
                        [max]="100"
                        [min]="0"
                        [(ngModel)]="value"
                    />

                    <input
                        tuiSlider
                        type="range"
                        [segments]="4"
                    />
                </tui-textfield>

                <div class="t-ticks-labels">
                    <span>|</span>
                    <span>↑</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                </div>
            </tui-root>
        `,
        styleUrls: ['./slider-ticks.styles.less'],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class SandBox {
        @Input({required: true})
        public value!: number;
    }

    beforeEach(() => {
        cy.viewport(300, 110);
    });

    [0, 25, 50, 75, 100].forEach((value) => {
        it(`value = ${value}`, () => {
            cy.mount(SandBox, {
                componentProperties: {
                    value,
                },
            });

            cy.compareSnapshot(`input-slider-ticks-${value}`);
        });
    });
});
