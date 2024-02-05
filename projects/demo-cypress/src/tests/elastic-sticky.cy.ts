import {Component} from '@angular/core';
import {TuiElasticStickyModule} from '@taiga-ui/addon-mobile';
import {TuiRootModule, TuiScrollbarModule} from '@taiga-ui/core';

describe('ElasticSticky', () => {
    let component: TestComponent;

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
                        (tuiElasticSticky)="onElastic($event)"
                    >
                        I'm sticky
                    </div>
                    <div style="height: 100px">I'm footer</div>
                </div>
            </tui-root>
        `,
    })
    class TestComponent {
        activeItemIndex = 0;
        offset = NaN;

        onElastic(value: number): void {
            this.offset = value;
        }
    }

    beforeEach(() =>
        cy
            .mount(TestComponent, {
                imports: [TuiRootModule, TuiScrollbarModule, TuiElasticStickyModule],
            })
            .then(wrapper => {
                component = wrapper.component;
            }),
    );

    it('callback is not triggered initially', () => {
        void expect(Number.isNaN(component.offset)).to.true;
    });

    it('callback is triggered with 0.5 when half of sticky would be hidden', () => {
        cy.get('#scroll')
            .then(query => query.get(0).scrollTo({top: 75}))
            .then(() => cy.wait(300))
            .then(() => expect(Number(component.offset.toFixed(1))).to.equal(0.5));
    });

    it('callback is triggered with 0 when sticky is fully hidden', () => {
        cy.get('#scroll')
            .then(query => query.get(0).scrollTo({top: 100}))
            .then(() => cy.wait(300))
            .then(() => expect(Number(component.offset.toFixed(1))).to.equal(0));
    });
});
