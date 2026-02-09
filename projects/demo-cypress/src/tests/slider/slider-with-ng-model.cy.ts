import {ChangeDetectionStrategy, Component, input, model} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {TuiRoot, TuiSlider} from '@taiga-ui/core';

describe('Slider | With [(ngModel)]', () => {
    @Component({
        imports: [FormsModule, TuiRoot, TuiSlider],
        template: `
            <tui-root>
                <input
                    tuiSlider
                    type="range"
                    [step]="step()"
                    [(ngModel)]="value"
                />

                <button
                    type="button"
                    [style.margin-block-start.rem]="2"
                    (click)="value.set(37)"
                >
                    Patch
                </button>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public readonly value = model<number>();

        public readonly step = input(1);
    }

    beforeEach(() => {
        cy.viewport(300, 150);
        cy.mount(Test, {
            componentProperties: {
                step: 25,
                value: 38,
            },
        });
    });

    it('initial control value', () => {
        cy.get('[tuiSlider]').compareSnapshot({
            name: 'slider-ng-model-initial-control-value',
            cypressScreenshotOptions: {padding: 8},
        });
    });

    it('programmatic control update', () => {
        cy.get('button').click();
        cy.get('[tuiSlider]').compareSnapshot({
            name: 'slider-ng-model-programmatic-control-update',
            cypressScreenshotOptions: {padding: 8},
        });
    });
});
