import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiRoot, TuiTextfield} from '@taiga-ui/core';
import {TuiInputRange} from '@taiga-ui/kit';

describe('InputRange | With segments + tick labels', () => {
    @Component({
        imports: [FormsModule, TuiInputRange, TuiRoot, TuiTextfield],
        template: `
            <tui-root>
                <tui-input-range
                    [max]="100"
                    [min]="0"
                    [segments]="4"
                    [tuiTextfieldSize]="size"
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
        @Input({required: true})
        public value!: [number, number];

        @Input({required: true})
        public size!: 'l' | 'm' | 's';
    }

    beforeEach(() => {
        cy.viewport(300, 110);
    });

    const cases: Array<[number, number]> = [
        [0, 0],
        [0, 25],
        [0, 50],
        [25, 50],
        [50, 75],
        [50, 100],
    ];

    (['s', 'm', 'l'] as const).forEach((size) => {
        describe(`size = ${size}`, () => {
            cases.forEach((value) => {
                const stringified = JSON.stringify(value);

                it(`value = ${stringified}`, () => {
                    cy.mount(SandBox, {
                        componentProperties: {
                            size,
                            value,
                        },
                    });

                    cy.compareSnapshot(
                        `input-range-ticks-size-${size}-value-${stringified}`,
                    );
                });
            });
        });
    });
});
