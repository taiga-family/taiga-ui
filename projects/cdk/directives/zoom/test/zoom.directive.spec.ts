import {Component, DebugElement} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {configureTestSuite} from '@taiga-ui/testing';

import {TuiZoom} from '../../../interfaces/zoom';
import {floor} from '../../../utils/math';
import {TuiZoomModule} from '../zoom.module';

describe(`TuiZoom directive`, () => {
    @Component({
        template: `
            <div
                class="main"
                (tuiZoom)="onZoom($event)"
            ></div>
        `,
    })
    class TestComponent {
        scale = 1;

        onZoom({delta}: TuiZoom): void {
            this.scale = this.scale - delta;
        }
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let testElement: DebugElement & {nativeElement: HTMLDivElement};

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiZoomModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        testElement = fixture.debugElement.query(By.css(`.main`));

        fixture.detectChanges();
    });

    it(`pinch`, () => {
        sendTouchEvent([10, 10], [20, 20], testElement.nativeElement, `touchstart`);
        sendTouchEvent([5, 5], [25, 25], testElement.nativeElement, `touchmove`);
        sendTouchEvent([5, 5], [25, 25], testElement.nativeElement, `touchend`);

        fixture.detectChanges();

        expect(floor(testComponent.scale, 2)).toEqual(0.85);
    });

    it(`wheel`, () => {
        const wheel = new WheelEvent(`wheel`, {deltaY: 1.1});

        testElement.nativeElement.dispatchEvent(wheel);

        fixture.detectChanges();

        expect(floor(testComponent.scale, 2)).toEqual(1.01);
    });

    function sendTouchEvent(
        [x, y]: [number, number],
        [x2, y2]: [number, number],
        element: HTMLElement,
        eventType: 'touchstart' | 'touchend' | 'touchmove',
    ): void {
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

        const touchEvent = new TouchEvent(eventType, {
            cancelable: true,
            bubbles: true,
            touches: [touchObj1, touchObj2],
            targetTouches: [],
            changedTouches: [touchObj1, touchObj2],
            shiftKey: true,
        });

        element.dispatchEvent(touchEvent);
    }
});
