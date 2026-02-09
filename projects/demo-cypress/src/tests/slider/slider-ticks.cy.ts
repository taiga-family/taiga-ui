import {ChangeDetectionStrategy, Component, model} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiRoot, TuiSlider} from '@taiga-ui/core';

describe('Slider | With segments + tick labels', () => {
    @Component({
        imports: [FormsModule, TuiRoot, TuiSlider],
        template: `
            <tui-root>
                <input
                    tuiSlider
                    type="range"
                    [max]="100"
                    [min]="0"
                    [segments]="4"
                    [(ngModel)]="value"
                />

                <div class="t-ticks-labels">
                    <span>|</span>
                    <span>↑</span>
                    <span>|</span>
                    <span>|</span>
                    <span>|</span>
                </div>
            </tui-root>
        `,
        styleUrl: './slider-ticks.styles.less',
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class SandBox {
        public readonly value = model<number>();
    }

    beforeEach(() => {
        cy.viewport(300, 75);
    });

    [0, 25, 50, 75, 100].forEach((value) => {
        it(`value = ${value}`, () => {
            cy.mount(SandBox, {componentProperties: {value}});

            cy.compareSnapshot(`slider-ticks-${value}`);
        });
    });
});
