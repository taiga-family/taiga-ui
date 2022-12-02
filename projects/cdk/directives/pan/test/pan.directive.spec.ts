import {Component, DebugElement} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {TuiPanModule} from '@taiga-ui/cdk';
import {configureTestSuite} from '@taiga-ui/testing';

// TODO: Move to cypress, jest doesn't support touch events
xdescribe(`TuiPan directive`, () => {
    @Component({
        template: `
            <div
                class="main"
                (tuiPan)="pan($event)"
            ></div>
        `,
    })
    class TestComponent {
        coords = [0, 0];

        pan(delta: [number, number]): void {
            this.coords = delta;
        }
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let testElement: DebugElement & {nativeElement: HTMLDivElement};

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiPanModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        testElement = fixture.debugElement.query(By.css(`.main`));

        fixture.detectChanges();
    });

    it(`emits delta`, () => {
        sendTouchEvent(0, 0, testElement.nativeElement, `touchstart`);
        sendTouchEvent(0, 0, testElement.nativeElement, `touchmove`);
        sendTouchEvent(0, 20, testElement.nativeElement, `touchmove`);
        sendTouchEvent(0, 20, testElement.nativeElement, `touchend`);

        fixture.detectChanges();

        expect(testComponent.coords).toEqual([0, 20]);
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
});
