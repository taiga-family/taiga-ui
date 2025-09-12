import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiSwipe, type TuiSwipeEvent} from '@taiga-ui/cdk';

describe('TuiSwipe', () => {
    let component: Test;

    @Component({
        imports: [TuiSwipe],
        template: `
            <section
                style="background: var(--tui-background-accent-1); width: 500px; height: 500px"
                (tuiSwipe)="onSwipe($event)"
            ></section>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public swiped = '';

        protected onSwipe(swipe: TuiSwipeEvent): void {
            this.swiped = swipe.direction;
        }
    }

    beforeEach(() =>
        cy.mount(Test).then((wrapper) => {
            component = wrapper.component;
        }),
    );

    it('emits events bottom', () => {
        cy.get('section')
            .then((query) =>
                cy
                    .wrap(query)
                    .trigger(...touch('touchstart', 0, 0, query.get(0)))
                    .trigger(...touch('touchend', 0, 100, query.get(0))),
            )
            .then(() => expect(component.swiped).to.eql('bottom'));
    });

    it('emits events right', () => {
        cy.get('section')
            .then((query) =>
                cy
                    .wrap(query)
                    .trigger(...touch('touchstart', 0, 0, query.get(0)))
                    .trigger(...touch('touchend', 100, 0, query.get(0))),
            )
            .then(() => expect(component.swiped).to.eql('right'));
    });

    it('does not emit events due to threshold', () => {
        cy.get('section')
            .then((query) =>
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
