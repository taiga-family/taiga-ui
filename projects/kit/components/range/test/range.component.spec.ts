import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {PageObject} from '@taiga-ui/testing';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';
import {TuiRangeComponent} from '../range.component';
import {TuiRangeModule} from '../range.module';

describe('Range', () => {
    @Component({
        template: `
            <tui-range
                [formControl]="testValue"
                [max]="max"
                [min]="min"
                [steps]="steps"
                [segments]="segments"
            ></tui-range>
        `,
    })
    class TestComponent {
        @ViewChild(TuiRangeComponent, {static: true})
        component: TuiRangeComponent;

        testValue = new FormControl([3, 5]);
        max = 11;
        min = 1;
        segments = 10;
        steps = 10;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: PageObject<TestComponent>;
    const keydownArrowLeft = new KeyboardEvent('keydown', {
        key: 'arrowLeft',
    });
    const keydownArrowRight = new KeyboardEvent('keydown', {
        key: 'arrowRight',
    });
    const testContext = {
        get prefix() {
            return 'tui-slider__';
        },
    };

    function getLeft(): HTMLElement {
        return pageObject.getByAutomationId(`${testContext.prefix}left`)!.nativeElement;
    }

    function getRight(): HTMLElement {
        return pageObject.getByAutomationId(`${testContext.prefix}right`)!.nativeElement;
    }

    function getBar(): HTMLElement {
        return pageObject.getByAutomationId(`${testContext.prefix}bar`)!.nativeElement;
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, TuiRangeModule],
            declarations: [TestComponent],
            providers: NG_EVENT_PLUGINS,
        });

        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('The bar is filled from 20% to 40%', () => {
        expect(getBar().style.left).toBe('20%');
        expect(getBar().style.right).toBe('60%');
    });

    describe('Changing values', () => {
        describe('Left point', () => {
            it('Pressing the left arrow decreases the value by one step', () => {
                getLeft().dispatchEvent(keydownArrowLeft);

                expect(testComponent.testValue.value[0]).toBe(2);
                expect(testComponent.testValue.value[1]).toBe(5);
            });

            it('Pressing the right arrow increases the value by one step', () => {
                getLeft().dispatchEvent(keydownArrowRight);

                expect(testComponent.testValue.value[0]).toBe(4);
                expect(testComponent.testValue.value[1]).toBe(5);
            });

            it('Pressing the left arrow correctly paints the strip', () => {
                getLeft().dispatchEvent(keydownArrowLeft);
                fixture.detectChanges();

                expect(getBar().style.left).toBe('10%');
                expect(getBar().style.right).toBe('60%');
            });

            it('Pressing the right arrow correctly paints the strip', () => {
                getLeft().dispatchEvent(keydownArrowRight);
                fixture.detectChanges();

                expect(getBar().style.left).toBe('30%');
                expect(getBar().style.right).toBe('60%');
            });
        });

        describe('Right point', () => {
            it('Pressing the left arrow decreases the value by one step', () => {
                getRight().dispatchEvent(keydownArrowLeft);

                expect(testComponent.testValue.value[0]).toBe(3);
                expect(testComponent.testValue.value[1]).toBe(4);
            });

            it('Pressing the right arrow increases the value by one step', () => {
                getRight().dispatchEvent(keydownArrowRight);

                expect(testComponent.testValue.value[0]).toBe(3);
                expect(testComponent.testValue.value[1]).toBe(6);
            });

            it('Pressing the left arrow correctly paints the strip', () => {
                getRight().dispatchEvent(keydownArrowLeft);
                fixture.detectChanges();

                expect(getBar().style.left).toBe('20%');
                expect(getBar().style.right).toBe('70%');
            });

            it('Pressing the right arrow correctly paints the strip', () => {
                getRight().dispatchEvent(keydownArrowRight);
                fixture.detectChanges();

                expect(getBar().style.left).toBe('20%');
                expect(getBar().style.right).toBe('50%');
            });
        });

        describe('Borders', () => {
            it('Prevents the left border from exceeding the right', () => {
                testComponent.testValue.setValue([5, 5]);
                getLeft().dispatchEvent(keydownArrowRight);
                fixture.detectChanges();

                expect(testComponent.testValue.value[0]).toBe(5);
            });

            it('Prevents the right border from dropping below the left', () => {
                testComponent.testValue.setValue([5, 5]);
                getRight().dispatchEvent(keydownArrowLeft);
                fixture.detectChanges();

                expect(testComponent.testValue.value[1]).toBe(5);
            });

            it('Prevents the value from decreasing below the minimum', () => {
                testComponent.testValue.setValue([1, 11]);
                getLeft().dispatchEvent(keydownArrowLeft);
                fixture.detectChanges();

                expect(testComponent.testValue.value[0]).toBe(1);
            });

            it('Prevents the value from exceeding the maximum', () => {
                testComponent.testValue.setValue([1, 11]);
                getRight().dispatchEvent(keydownArrowRight);
                fixture.detectChanges();

                expect(testComponent.testValue.value[1]).toBe(11);
            });

            it('Adds a value to the closest allowed step', () => {
                testComponent.testValue.setValue([3.3, 5]);
                getLeft().dispatchEvent(keydownArrowRight);
                fixture.detectChanges();

                expect(testComponent.testValue.value[0]).toBe(4);
            });
        });
    });
});
