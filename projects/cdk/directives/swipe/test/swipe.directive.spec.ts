import {Component, DebugElement} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {configureTestSuite} from '@taiga-ui/testing';

import {TuiSwipe} from '../../../interfaces/swipe';
import {TuiSwipeModule} from '../swipe.module';

describe(`TuiSwipe directive`, () => {
    @Component({
        template: `
            <div
                class="main"
                (tuiSwipe)="onSwipe($event)"
            ></div>
        `,
    })
    class TestComponent {
        swiped = ``;

        onSwipe(swipe: TuiSwipe): void {
            this.swiped = swipe.direction;
        }
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let testElement: DebugElement & {nativeElement: HTMLDivElement};

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiSwipeModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        testElement = fixture.debugElement.query(By.css(`.main`));

        fixture.detectChanges();
    });

    it(`emits events bottom`, () => {
        sendTouchEvent(0, 0, testElement.nativeElement, `touchstart`, 1);
        sendTouchEvent(0, 100, testElement.nativeElement, `touchend`, 1);

        fixture.detectChanges();

        expect(testComponent.swiped).toBe(`bottom`);
    });

    it(`emits events right`, () => {
        sendTouchEvent(0, 0, testElement.nativeElement, `touchstart`, 1);
        sendTouchEvent(100, 0, testElement.nativeElement, `touchend`, 1);

        fixture.detectChanges();

        expect(testComponent.swiped).toBe(`right`);
    });

    it(`does not emits events due to threshold`, () => {
        sendTouchEvent(0, 0, testElement.nativeElement, `touchstart`, 1);
        sendTouchEvent(0, 20, testElement.nativeElement, `touchend`, 1);

        fixture.detectChanges();

        expect(testComponent.swiped).toBe(``);
    });

    function sendTouchEvent(
        x: number,
        y: number,
        element: HTMLElement,
        eventType: 'touchstart' | 'touchend',
        identifier: number,
    ): void {
        const touchObj = new Touch({
            identifier: identifier,
            target: element,
            clientX: x,
            clientY: y,
            radiusX: 2.5,
            radiusY: 2.5,
            rotationAngle: 10,
            force: 0.5,
        }) as Touch;

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
});
