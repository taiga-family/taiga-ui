import {ViewportScroller} from '@angular/common';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {configureTestSuite} from 'ng-bullet';
import {TuiRootComponent} from '../../components/root/root.component';
import {TuiRootModule} from '../../components/root/root.module';
import {TuiRootScroller} from '../root-scroller.service';

describe('rootScroller', () => {
    @Component({
        template: `
            <tui-root style="height: 200px">
                <div style="height: 500px"></div>
            </tui-root>
        `,
    })
    class TestComponent {
        @ViewChild(TuiRootComponent, {read: ElementRef})
        element: ElementRef<HTMLElement>;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let service: TuiRootScroller;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiRootModule, NoopAnimationsModule],
            declarations: [TestComponent],
            providers: [
                {
                    provide: ViewportScroller,
                    useExisting: TuiRootScroller,
                },
            ],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        service = TestBed.get(ViewportScroller);
        fixture.detectChanges();
    });

    it('tui-root is not scrolled', () => {
        expect(testComponent.element.nativeElement.scrollTop).toBe(0);
    });

    it('tui-root is scrolled', () => {
        service.scrollToPosition([0, 100]);

        expect(service.getScrollPosition()).toEqual([
            testComponent.element.nativeElement.scrollLeft,
            testComponent.element.nativeElement.scrollTop,
        ]);
    });
});
