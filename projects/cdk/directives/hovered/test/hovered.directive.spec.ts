import {Component, DebugElement} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {configureTestSuite} from '@taiga-ui/testing';

import {TuiHoveredModule} from '../hovered.module';

describe('TuiHovered directive', () => {
    @Component({
        template: `
            <div class="main">
                <div class="hovered-1" (tuiHoveredChange)="hoveredChange(1)"></div>
                <div class="hovered-2" (tuiHoveredChange)="hoveredChange(2)"></div>
            </div>
        `,
    })
    class TestComponent {
        index = 0;

        hoveredChange(index: number) {
            this.index = index;
        }
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let firstTestElement: DebugElement & {nativeElement: HTMLDivElement};
    let secondTestElement: DebugElement & {nativeElement: HTMLDivElement};

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiHoveredModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        firstTestElement = fixture.debugElement.query(By.css('.hovered-1'));
        secondTestElement = fixture.debugElement.query(By.css('.hovered-2'));

        fixture.detectChanges();
    });

    it('right order with touches', () => {
        sendTouchEvent(0, 0, firstTestElement.nativeElement, 'touchstart');
        sendTouchEvent(0, 0, secondTestElement.nativeElement, 'touchstart');

        fixture.detectChanges();

        expect(testComponent.index).toEqual(2);
    });

    function sendTouchEvent(
        x: number,
        y: number,
        element: HTMLElement,
        eventType: 'touchstart' | 'touchend' | 'touchmove',
    ) {
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
