import {Component, DebugElement} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {configureTestSuite} from 'ng-bullet';
import {TuiPressedModule} from '../pressed.module';

describe('TuiPressed directive', () => {
    @Component({
        template: `
            <div class="wrapper">
                text
                <div class="inner" (tuiPressedChange)="pressed = $event"></div>
                text
            </div>
        `,
    })
    class TestComponent {
        pressed = false;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let wrapperElement: DebugElement & {nativeElement: HTMLDivElement};
    let innerElement: DebugElement & {nativeElement: HTMLDivElement};

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiPressedModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        wrapperElement = fixture.debugElement.query(By.css('.wrapper'));
        innerElement = fixture.debugElement.query(By.css('.inner'));

        fixture.detectChanges();
    });

    describe('when pressed', () => {
        beforeEach(() => {
            innerElement.nativeElement.dispatchEvent(
                new MouseEvent('mousedown', {bubbles: true}),
            );
            fixture.detectChanges();
        });

        it('emits "true"', () => {
            expect(testComponent.pressed).toBe(true);
        });

        describe('emits "false" after pressing stopped', () => {
            describe('on initial element via', () => {
                it('mouseup', () => {
                    innerElement.nativeElement.dispatchEvent(
                        new MouseEvent('mouseup', {bubbles: true}),
                    );
                    fixture.detectChanges();
                    expect(testComponent.pressed).toBe(false);
                });

                it('dragend', () => {
                    innerElement.nativeElement.dispatchEvent(
                        new MouseEvent('dragend', {bubbles: true}),
                    );
                    fixture.detectChanges();
                    expect(testComponent.pressed).toBe(false);
                });
            });

            describe('on other element via', () => {
                it('mouseup', () => {
                    wrapperElement.nativeElement.dispatchEvent(
                        new MouseEvent('mouseup', {bubbles: true}),
                    );
                    fixture.detectChanges();
                    expect(testComponent.pressed).toBe(false);
                });

                it('dragend', () => {
                    wrapperElement.nativeElement.dispatchEvent(
                        new MouseEvent('dragend', {bubbles: true}),
                    );
                    fixture.detectChanges();
                    expect(testComponent.pressed).toBe(false);
                });
            });
        });
    });
});
