import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TuiPan} from '@taiga-ui/cdk';

describe('TuiPan', () => {
    let component: Test;

    @Component({
        standalone: true,
        imports: [TuiPan],
        template: `
            <section (tuiPan)="pan($event)"></section>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        public coords: readonly number[] = [0, 0];

        protected pan(delta: readonly [number, number]): void {
            this.coords = delta;
        }
    }

    beforeEach(() =>
        cy.mount(Test).then((wrapper) => {
            component = wrapper.component;
        }),
    );

    it('emits delta', () => {
        cy.get('section')
            .then((query) => {
                const element = query.get(0);

                sendTouchEvent(0, 0, element, 'touchstart');
                sendTouchEvent(0, 0, element, 'touchmove');
                sendTouchEvent(0, 20, element, 'touchmove');
                sendTouchEvent(0, 20, element, 'touchend');
            })
            .then(() => expect(component.coords).to.include.members([0, 20]));
    });
});

function sendTouchEvent(
    x: number,
    y: number,
    element: HTMLElement,
    eventType: 'touchend' | 'touchmove' | 'touchstart',
): void {
    const touchObj = new Touch({
        identifier: Date.now(),
        target: element,
        clientX: x,
        clientY: y,
        radiusX: 2.5,
        radiusY: 2.5,
        rotationAngle: 10,
        force: 0.5,
    });

    const touchEvent = new TouchEvent(eventType, {
        cancelable: true,
        bubbles: true,
        touches: [touchObj],
        targetTouches: [],
        changedTouches: [touchObj],
        shiftKey: true,
    });

    element.dispatchEvent(touchEvent);
}
