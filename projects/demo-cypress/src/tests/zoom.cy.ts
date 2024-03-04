import {Component} from '@angular/core';
import {tuiFloor, type TuiZoom, TuiZoomModule} from '@taiga-ui/cdk';
import {TuiRootModule} from '@taiga-ui/core';

describe('TuiZoom', () => {
    let component: TestComponent;

    @Component({
        template: `
            <tui-root>
                <section
                    style="background: var(--tui-primary); width: 500px; height: 500px"
                    (tuiZoom)="onZoom($event)"
                ></section>
            </tui-root>
        `,
    })
    class TestComponent {
        public scale = 1;

        protected onZoom({delta}: TuiZoom): void {
            this.scale -= delta;
        }
    }

    beforeEach(() =>
        cy
            .mount(TestComponent, {
                imports: [TuiRootModule, TuiZoomModule],
            })
            .then(wrapper => {
                component = wrapper.component;
            }),
    );

    it('pinch', () => {
        cy.get('section')
            .then(query =>
                cy
                    .wrap(query)
                    .trigger(...touch('touchstart', [10, 10], [20, 20], query.get(0)))
                    .trigger(...touch('touchmove', [5, 5], [25, 25], query.get(0)))
                    .trigger(...touch('touchend', [5, 5], [25, 25], query.get(0))),
            )
            .then(() => expect(tuiFloor(component.scale, 2)).to.eql(0.85));
    });

    it('wheel', () => {
        cy.get('section')
            .then(query =>
                cy.wrap(query).trigger('wheel', new WheelEvent('wheel', {deltaY: 1.1})),
            )
            .then(() => expect(tuiFloor(component.scale, 2)).to.eql(1.01));
    });

    function touch(
        eventType: 'touchend' | 'touchmove' | 'touchstart',
        [x, y]: [number, number],
        [x2, y2]: [number, number],
        element: HTMLElement,
    ): ['touchend' | 'touchmove' | 'touchstart', TouchEvent] {
        const touchObj1 = new Touch({
            identifier: Date.now(),
            target: element,
            clientX: x,
            clientY: y,
            radiusX: 2.5,
            radiusY: 2.5,
            rotationAngle: 10,
            force: 0.5,
        });

        const touchObj2 = new Touch({
            identifier: Date.now(),
            target: element,
            clientX: x2,
            clientY: y2,
            radiusX: 2.5,
            radiusY: 2.5,
            rotationAngle: 10,
            force: 0.5,
        });

        return [
            eventType,
            new TouchEvent(eventType, {
                cancelable: true,
                bubbles: true,
                touches: [touchObj1, touchObj2],
                targetTouches: [],
                changedTouches: [touchObj1, touchObj2],
                shiftKey: true,
            }),
        ];
    }
});
