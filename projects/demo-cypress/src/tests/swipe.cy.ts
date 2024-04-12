import {Component} from '@angular/core';
import type {TuiSwipe} from '@taiga-ui/cdk';
import {TuiSwipeModule} from '@taiga-ui/cdk';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';

describe('TuiSwipe', () => {
    let component: TestComponent;

    @Component({
        template: `
            <section
                style="background: var(--tui-primary); width: 500px; height: 500px"
                (tuiSwipe)="onSwipe($event)"
            ></section>
        `,
    })
    class TestComponent {
        public swiped = '';

        protected onSwipe(swipe: TuiSwipe): void {
            this.swiped = swipe.direction;
        }
    }

    beforeEach(() =>
        cy
            .mount(TestComponent, {
                imports: [TuiSwipeModule],
                providers: [NG_EVENT_PLUGINS],
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
