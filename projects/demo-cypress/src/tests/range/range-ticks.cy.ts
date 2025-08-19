import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiRoot} from '@taiga-ui/core';
import {TuiRange} from '@taiga-ui/kit';

describe('Range | With segments + tick labels', () => {
    @Component({
        standalone: true,
        imports: [FormsModule, TuiRange, TuiRoot],
        template: `
            <tui-root>
                <tui-range
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
        styleUrls: ['./slider-ticks.styles.less'],
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class SandBox {
        @Input({required: true})
        public value!: [number, number];
    }

    beforeEach(() => {
        cy.viewport(300, 75);
    });

    const cases: Array<[number, number]> = [
        [0, 0],
        [0, 25],
        [0, 50],
        [25, 50],
        [50, 75],
        [50, 100],
    ];

    cases.forEach((value) => {
        const stringified = JSON.stringify(value);

        it(`value = ${stringified}`, () => {
            cy.mount(SandBox, {
                componentProperties: {
                    value,
                },
            });

            cy.compareSnapshot(`range-ticks-${stringified}`);
        });
    });
});
