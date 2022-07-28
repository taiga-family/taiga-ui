import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiRootModule} from '@taiga-ui/core';
import {configureTestSuite, TuiNativeInputPO, TuiPageObject} from '@taiga-ui/testing';

import {TuiInputSliderComponent} from '../input-slider.component';
import {TuiInputSliderModule} from '../input-slider.module';

describe(`InputSlider[legacy props]`, () => {
    @Component({
        template: `
            <tui-root>
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
            </tui-root>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputSliderComponent)
        component!: TuiInputSliderComponent;

        control = new FormControl(0);
        default = false;
        readOnly = false;
        max = 10;
        min = -10;
        quantum = 5;
        steps = 0;
        minLabel = `Nothing`;
        maxLabel = `All`;
        secondary = `Хоп`;
        pluralize = [`год`, `года`, `лет`];
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: TuiPageObject<TestComponent>;
    let inputPO: TuiNativeInputPO;
    const testContext = {
        get prefix() {
            return `tui-input-slider__`;
        },

        get customContentAutoId() {
            return `tui-primitive-textfield__custom-content`;
        },

        get valueContentAutoId() {
            return `${this.prefix}value-content`;
        },

        get valueDecorationAutoId() {
            return `tui-primitive-textfield__value-decoration`;
        },
    };

    function aid(aid: string): HTMLElement & {textContent: string} {
        return pageObject.getByAutomationId(aid)!.nativeElement;
    }

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiRootModule, TuiInputSliderModule, ReactiveFormsModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        inputPO = new TuiNativeInputPO(fixture, `tui-primitive-textfield__native-input`);
    });

    describe(`Default values`, () => {
        beforeEach(() => {
            testComponent.default = true;
            fixture.detectChanges();
        });

        it(`min is zero`, () => {
            expect(testComponent.component.min).toBe(0);
        });

        it(`custom valueContent is missing (value is min)`, () => {
            expect(
                pageObject.getByAutomationId(testContext.valueContentAutoId),
            ).toBeNull();
        });

        it(`valueContent is missing (value is max)`, () => {
            testComponent.control.setValue(10);
            fixture.detectChanges();

            expect(
                pageObject.getByAutomationId(testContext.valueContentAutoId),
            ).toBeNull();
        });

        it(`Plural signature missing (legacy prop)`, () => {
            expect(
                pageObject
                    .getByAutomationId(testContext.valueDecorationAutoId)
                    ?.nativeElement.textContent.trim(),
            ).toBe(`0`);
        });

        it(`There is no label on the right`, () => {
            expect(aid(testContext.customContentAutoId).textContent.trim()).toBe(``);
        });
    });

    describe(`Labels`, () => {
        it(`valueDecoration (postfix/prefix) not shown (max > value > min; no focus)`, () => {
            expect(aid(testContext.valueDecorationAutoId).textContent.trim()).toBe(`0`);
            expect(aid(testContext.valueContentAutoId).textContent.trim()).toMatch(
                /^0\s+лет$/,
            );
        });

        it(`valueContent is missing on focus (value = min)`, () => {
            testComponent.control.setValue(-10);
            inputPO.focus();

            expect(
                pageObject.getByAutomationId(testContext.valueContentAutoId),
            ).toBeNull();
        });

        it(`valueContent missing on focus (value = max)`, () => {
            testComponent.control.setValue(10);
            inputPO.focus();

            expect(
                pageObject.getByAutomationId(testContext.valueContentAutoId),
            ).toBeNull();
        });

        describe(`legacy props checks`, () => {
            it(`Plural signature is present (legacy \`pluralize\` prop)`, () => {
                expect(aid(testContext.valueContentAutoId).textContent.trim()).toMatch(
                    /0\s+лет/,
                );
            });

            it(`minLabel is shown (legacy prop)`, () => {
                testComponent.control.setValue(-10);
                fixture.detectChanges();

                expect(aid(testContext.valueContentAutoId).textContent.trim()).toBe(
                    testComponent.minLabel,
                );
            });

            it(`The label on the right is shown (legacy \`secondary\` prop)`, () => {
                expect(aid(testContext.customContentAutoId).textContent.trim()).toBe(
                    testComponent.secondary,
                );
            });

            it(`maxLabel is shown (legacy prop)`, () => {
                testComponent.control.setValue(10);
                fixture.detectChanges();

                expect(aid(testContext.valueContentAutoId).textContent.trim()).toBe(
                    testComponent.maxLabel,
                );
            });
        });
    });

    describe(`quantum`, () => {
        it(`Rounds value to nearest quantum when focus is lost`, () => {
            inputPO.sendTextAndBlur(`7`);

            expect(testComponent.control.value).toBe(5);
        });

        it(`Rounds the input field value to the nearest quantum when focus is lost`, async () => {
            inputPO.sendTextAndBlur(`7`);

            await fixture.whenStable();
            fixture.detectChanges();
            await fixture.whenStable();

            expect(inputPO.value).toBe(`5`);
        });
    });

    describe(`Format`, () => {
        beforeEach(() => {
            testComponent.max = 100000;
            testComponent.quantum = 0.01;
            fixture.detectChanges();
            inputPO.sendTextAndBlur(`12345.67`);
        });

        it(`Formats input`, () => {
            expect(inputPO.value).toBe(`12 345,67`);
        });

        it(`Doesn't format the value`, () => {
            expect(testComponent.control.value).toBe(12345.67);
        });
    });

    it(`Doesn't change value when content is removed`, async () => {
        inputPO.sendTextAndBlur(`5`);
        await fixture.whenStable();

        inputPO.sendTextAndBlur(``);
        fixture.detectChanges();
        await fixture.whenStable();

        expect(testComponent.control.value).toBe(5);
        expect(inputPO.value).toBe(`5`);
    });

    describe(`Arrows`, () => {
        beforeEach(() => {
            testComponent.min = 0;
            testComponent.max = 10;
            testComponent.quantum = 1;
            testComponent.control.setValue(6);
            fixture.detectChanges();
        });

        describe(`Quantum (Steps were not set)`, () => {
            it(`Up arrow increases the value by a quantum`, () => {
                inputPO.sendKeydown(`arrowUp`);

                expect(testComponent.control.value).toBe(7);
            });

            it(`Down arrow decrements the value by a quantum`, () => {
                inputPO.sendKeydown(`arrowDown`);

                expect(testComponent.control.value).toBe(5);
            });
        });

        describe(`readOnly`, () => {
            it(`Up arrow does not increase the value`, () => {
                testComponent.readOnly = true;
                fixture.detectChanges();

                inputPO.sendKeydown(`arrowUp`);

                expect(testComponent.control.value).toBe(6);
            });

            it(`Down arrow does not decrease value`, () => {
                testComponent.readOnly = true;
                fixture.detectChanges();

                inputPO.sendKeydown(`arrowDown`);

                expect(testComponent.control.value).toBe(6);
            });
        });

        describe(`Steps`, () => {
            beforeEach(() => {
                testComponent.steps = 5;
                fixture.detectChanges();
            });

            it(`Up arrow increments the value`, async () => {
                inputPO.sendKeydown(`arrowUp`);

                fixture.detectChanges();
                await fixture.whenStable();

                expect(testComponent.control.value).toBe(8);
            });

            it(`Down arrow decreases the value by one step`, () => {
                inputPO.sendKeydown(`arrowDown`);

                expect(testComponent.control.value).toBe(4);
            });
        });

        describe(`Limitations`, () => {
            it(`Up arrow increases the value out of the max`, () => {
                testComponent.control.setValue(10);
                inputPO.sendKeydown(`arrowUp`);

                expect(testComponent.control.value).toBe(10);
            });

            it(`Down arrow does not decrease the value beyond the min boundary`, () => {
                testComponent.control.setValue(0);
                inputPO.sendKeydown(`arrowDown`);

                expect(testComponent.control.value).toBe(0);
            });

            it(`Keyboard input does not exceed max`, () => {
                inputPO.sendText(`12345`);

                expect(inputPO.value).toBe(`10`);
            });

            it(`Keyboard input does not exceed min`, () => {
                testComponent.min = -10;
                fixture.detectChanges();
                inputPO.sendText(`-123`);

                expect(inputPO.value).toBe(`-10`);
            });
        });
    });
});
