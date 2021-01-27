import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';
import {NativeInputPO, PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiInputSliderComponent} from '../input-slider.component';
import {TuiInputSliderModule} from '../input-slider.module';

describe('InputSlider', () => {
    @Component({
        template: `
            <tui-input-slider
                *ngIf="default"
                max="10"
                [formControl]="control"
            ></tui-input-slider>
            <tui-input-slider
                *ngIf="!default"
                [formControl]="control"
                [max]="max"
                [min]="min"
                [steps]="steps"
                [minLabel]="minLabel"
                [maxLabel]="maxLabel"
                [pluralize]="pluralize"
                [readOnly]="readOnly"
                [secondary]="secondary"
                [quantum]="quantum"
            ></tui-input-slider>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputSliderComponent)
        component: TuiInputSliderComponent;

        control = new FormControl(0);
        default = false;
        readOnly = false;
        max = 10;
        min = -10;
        quantum = 5;
        steps = 0;
        minLabel = 'Nothing';
        maxLabel = 'All';
        secondary = 'Хоп';
        pluralize = ['год', 'года', 'лет'];
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: PageObject<TestComponent>;
    let inputPO: NativeInputPO;
    const testContext = {
        get prefix() {
            return 'tui-input-slider__';
        },
    };

    function aid(aid: string): HTMLElement & {textContent: string} {
        return pageObject.getByAutomationId(aid)!.nativeElement;
    }

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiInputSliderModule, ReactiveFormsModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        inputPO = new NativeInputPO(fixture, `${testContext.prefix}native`);
    });

    describe('Default values', () => {
        beforeEach(() => {
            testComponent.default = true;
            fixture.detectChanges();
        });

        it('min is zero', () => {
            expect(testComponent.component.min).toBe(0);
        });

        it('minLabel is missing', () => {
            expect(
                pageObject.getByAutomationId(`${testContext.prefix}min-label`),
            ).toBeNull();
        });

        it('maxLabel is missing', () => {
            testComponent.control.setValue(10);
            fixture.detectChanges();

            expect(
                pageObject.getByAutomationId(`${testContext.prefix}min-label`),
            ).toBeNull();
        });

        it('Plural signature missing', () => {
            expect(
                pageObject.getByAutomationId(`${testContext.prefix}pluralize`),
            ).toBeNull();
        });

        it('There is no label on the right', () => {
            expect(aid(`${testContext.prefix}secondary`).textContent.trim()).toBe('');
        });
    });

    describe('Labels', () => {
        it('The label on the right is shown', () => {
            expect(aid(`${testContext.prefix}secondary`).textContent.trim()).toBe(
                testComponent.secondary,
            );
        });

        it('Plural signature is present', () => {
            expect(aid(`${testContext.prefix}pluralize`).textContent.trim()).toBe('лет');
        });

        it('minLabel not shown at start> min', () => {
            expect(
                pageObject.getByAutomationId(`${testContext.prefix}min-label`),
            ).toBeNull();
        });

        it('minLabel is shown', () => {
            testComponent.control.setValue(-10);
            fixture.detectChanges();

            expect(aid(`${testContext.prefix}min-label`).textContent.trim()).toBe(
                testComponent.minLabel,
            );
        });

        it('minLabel missing on focus', () => {
            testComponent.control.setValue(-10);
            inputPO.focus();

            expect(
                pageObject.getByAutomationId(`${testContext.prefix}min-label`),
            ).toBeNull();
        });

        it('maxLabel not shown when end < max', () => {
            expect(
                pageObject.getByAutomationId(`${testContext.prefix}min-label`),
            ).toBeNull();
        });

        it('maxLabel is shown', () => {
            testComponent.control.setValue(10);
            fixture.detectChanges();

            expect(aid(`${testContext.prefix}max-label`).textContent.trim()).toBe(
                testComponent.maxLabel,
            );
        });

        it('maxLabel missing on focus', () => {
            testComponent.control.setValue(10);
            inputPO.focus();

            expect(
                pageObject.getByAutomationId(`${testContext.prefix}max-label`),
            ).toBeNull();
        });
    });

    describe('quantum', () => {
        it('Rounds value to nearest quantum when focus is lost', () => {
            inputPO.sendTextAndBlur('7');

            expect(testComponent.control.value).toBe(5);
        });

        it('Rounds the input field value to the nearest quantum when focus is lost', () => {
            inputPO.sendTextAndBlur('7');

            expect(inputPO.value).toBe('5');
        });
    });

    describe('Format', () => {
        beforeEach(() => {
            testComponent.max = 100000;
            testComponent.quantum = 0.01;
            fixture.detectChanges();
            inputPO.sendTextAndBlur('12345.67');
        });

        it('Formats input', () => {
            expect(inputPO.value).toBe(`12${CHAR_NO_BREAK_SPACE}345,67`);
        });

        it(`Doesn't format the value`, () => {
            expect(testComponent.control.value).toBe(12345.67);
        });
    });

    it(`Doesn't change value when content is removed`, () => {
        inputPO.sendTextAndBlur('5');
        inputPO.sendTextAndBlur('');

        expect(testComponent.control.value).toBe(5);
        expect(inputPO.value).toBe('5');
    });

    describe('Arrows', () => {
        beforeEach(() => {
            testComponent.min = 0;
            testComponent.max = 10;
            testComponent.quantum = 1;
            testComponent.control.setValue(6);
            fixture.detectChanges();
        });

        describe('Quantum', () => {
            it('Up arrow increases the value by a quantum', () => {
                inputPO.sendKeydown('arrowUp');

                expect(testComponent.control.value).toBe(7);
            });

            it('Down arrow decrements the value by a quantum', () => {
                inputPO.sendKeydown('arrowDown');

                expect(testComponent.control.value).toBe(5);
            });
        });

        describe('readOnly', () => {
            it('Up arrow does not increase the value', () => {
                testComponent.readOnly = true;
                fixture.detectChanges();

                inputPO.sendKeydown('arrowUp');

                expect(testComponent.control.value).toBe(6);
            });

            it('Down arrow does not decrease value', () => {
                testComponent.readOnly = true;
                fixture.detectChanges();

                inputPO.sendKeydown('arrowDown');

                expect(testComponent.control.value).toBe(6);
            });
        });

        describe('Steps', () => {
            beforeEach(() => {
                testComponent.steps = 5;
                fixture.detectChanges();
            });

            it('Up arrow increments the value', () => {
                inputPO.sendKeydown('arrowUp');

                expect(testComponent.control.value).toBe(8);
            });

            it('Down arrow decreases the value by one step', () => {
                inputPO.sendKeydown('arrowDown');

                expect(testComponent.control.value).toBe(4);
            });
        });

        describe('Limitations', () => {
            it('Up arrow increases the value out of the max', () => {
                testComponent.control.setValue(10);
                inputPO.sendKeydown('arrowUp');

                expect(testComponent.control.value).toBe(10);
            });

            it('Down arrow does not decrease the value beyond the min boundary', () => {
                testComponent.control.setValue(0);
                inputPO.sendKeydown('arrowDown');

                expect(testComponent.control.value).toBe(0);
            });

            it('Keyboard input does not exceed max', () => {
                inputPO.sendText('12345');

                expect(inputPO.value).toBe('10');
            });

            it('Keyboard input does not exceed min', () => {
                testComponent.min = -10;
                fixture.detectChanges();
                inputPO.sendText('-123');

                expect(inputPO.value).toBe('-10');
            });
        });
    });
});
