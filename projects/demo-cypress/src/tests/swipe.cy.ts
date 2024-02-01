import {Component} from '@angular/core';
import {TuiSwipe, TuiSwipeModule} from '@taiga-ui/cdk';
import {TuiRootModule} from '@taiga-ui/core';

describe('TuiSwipe', () => {
    let component: TestComponent;

    @Component({
        template: `
            <tui-root>
                <section
                    style="background: var(--tui-primary); width: 500px; height: 500px"
                    (tuiSwipe)="onSwipe($event)"
                ></section>
            </tui-root>
        `,
    })
    class TestComponent {
        swiped = '';

        onSwipe(swipe: TuiSwipe): void {
            this.swiped = swipe.direction;
        }
    }

    beforeEach(() =>
        cy
            .mount(TestComponent, {
                imports: [TuiRootModule, TuiSwipeModule],
            })
            .then(wrapper => {
                component = wrapper.component;
            }),
    );

    it('emits events bottom', () => {
        cy.get('section')
            .then(query =>
                cy
                    .wrap(query)
                    .trigger(...touch('touchstart', 0, 0, query.get(0)))
                    .trigger(...touch('touchend', 0, 100, query.get(0))),
            )
            .then(() => expect(component.swiped).to.eql('bottom'));
    });

    it('emits events right', () => {
        cy.get('section')
            .then(query =>
                cy
                    .wrap(query)
                    .trigger(...touch('touchstart', 0, 0, query.get(0)))
                    .trigger(...touch('touchend', 100, 0, query.get(0))),
            )
            .then(() => expect(component.swiped).to.eql('right'));
    });

    it('does not emit events due to threshold', () => {
        cy.get('section')
            .then(query =>
                cy
                    .wrap(query)
                    .trigger(...touch('touchstart', 0, 0, query.get(0)))
                    .trigger(...touch('touchend', 0, 20, query.get(0))),
            )
            .then(() => expect(component.swiped).to.eql(''));
    });

    function touch(
        eventType: 'touchend' | 'touchstart',
        x: number,
        y: number,
        element: HTMLElement,
    ): ['touchend' | 'touchstart', TouchEvent] {
        const touchObj = new Touch({
            identifier: 1,
            target: element,
            clientX: x,
            clientY: y,
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
                touches: [touchObj],
                targetTouches: [],
                changedTouches: [touchObj],
                shiftKey: true,
            }),
        ];
    }
});
