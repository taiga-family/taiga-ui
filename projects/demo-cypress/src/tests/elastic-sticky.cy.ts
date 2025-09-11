import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {TuiElasticSticky} from '@taiga-ui/addon-mobile';
import {createOutputSpy} from 'cypress/angular';

describe('ElasticSticky', () => {
    @Component({
        imports: [TuiElasticSticky],
        template: `
            <div
                id="scroll"
                style="position: relative; height: 100px; overflow: auto"
                tuiScrollRef
            >
                <div style="height: 50px">I'm header</div>
                <div
                    style="position: sticky; height: 50px; top: 0"
                    (tuiElasticSticky)="change.emit(transform($event))"
                >
                    I'm sticky
                </div>
                <div style="height: 100px">I'm footer</div>
            </div>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        @Output()
        public readonly change = new EventEmitter<number>();

        protected transform(value: number): number {
            // sometimes tuiElasticSticky emit 0.5, 0.52 or 0.53 on CI
            return Number(value.toFixed(1));
        }
    }

    beforeEach(() =>
        cy.mount(Test, {
            componentProperties: {
                change: createOutputSpy<number>('changeSpy'),
            },
        }),
    );

    it('callback is triggered with 0.5 when half of sticky would be hidden', () => {
        cy.get('#scroll').scrollTo(0, 75);
        cy.get('@changeSpy').should('be.called').should('have.been.calledWith', 0.5);
    });

    it('callback is triggered with 0 when sticky is fully hidden', () => {
        cy.get('#scroll').scrollTo(0, 100);
        cy.get('@changeSpy').should('be.called').should('have.been.calledWith', 0);
    });
});
