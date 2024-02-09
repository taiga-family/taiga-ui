import {Component, EventEmitter, Output} from '@angular/core';
import {TuiElasticStickyModule} from '@taiga-ui/addon-mobile';
import {TuiRootModule, TuiScrollbarModule} from '@taiga-ui/core';
import {createOutputSpy} from 'cypress/angular';

describe('ElasticSticky', () => {
    @Component({
        template: `
            <tui-root>
                <div
                    id="scroll"
                    style="position: relative; height: 100px; overflow: auto"
                    tuiScrollRef
                >
                    <div style="height: 50px">I'm header</div>
                    <div
                        style="position: sticky; height: 50px; top: 0"
                        (tuiElasticSticky)="change.emit($event)"
                    >
                        I'm sticky
                    </div>
                    <div style="height: 100px">I'm footer</div>
                </div>
            </tui-root>
        `,
    })
    class TestComponent {
        @Output()
        change = new EventEmitter<number>();
    }

    beforeEach(() =>
        cy.mount(TestComponent, {
            imports: [TuiRootModule, TuiScrollbarModule, TuiElasticStickyModule],
            componentProperties: {
                change: createOutputSpy<number>('changeSpy'),
            },
        }),
    );

    it('callback is triggered with 0.5 when half of sticky would be hidden', () => {
        cy.get('#scroll').scrollTo(0, 75);
        cy.get('@changeSpy').should('be.called').should('have.been.calledWithMatch', 0.5);
    });

    it('callback is triggered with 0 when sticky is fully hidden', () => {
        cy.get('#scroll').scrollTo(0, 100);
        cy.get('@changeSpy').should('be.called').should('have.been.calledWithMatch', 0);
    });
});
