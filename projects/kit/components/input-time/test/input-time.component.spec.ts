import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiTime} from '@taiga-ui/cdk';
import {
    TuiHintControllerModule,
    TuiRootModule,
    TuiSizeL,
    TuiSizeS,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {NativeInputPO, PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiInputTimeComponent} from '../input-time.component';
import {TuiInputTimeModule} from '../input-time.module';

const TIMES = [
    new TuiTime(0, 0),
    new TuiTime(0, 30),
    new TuiTime(1, 0),
    new TuiTime(1, 30),
    new TuiTime(2, 0),
    new TuiTime(2, 30),
    new TuiTime(3, 0),
];

describe('InputTime', () => {
    @Component({
        template: `
            <tui-root>
                <tui-input-time
                    [formControl]="control"
                    [readOnly]="readOnly"
                    [items]="items"
                    [strict]="strict"
                    [tuiTextfieldCleaner]="cleaner"
                    [tuiTextfieldLabelOutside]="labelOutside"
                    [tuiTextfieldSize]="size"
                    [tuiHintContent]="hintContent"
                >
                </tui-input-time>
            </tui-root>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputTimeComponent, {static: true})
        component: TuiInputTimeComponent;

        control = new FormControl(new TuiTime(12, 30));
        cleaner = false;
        readOnly = false;
        items: TuiTime[] | null = [];
        labelOutside = false;
        size: TuiSizeS | TuiSizeL = 'l';
        strict = false;
        hintContent: string | null = 'prompt';
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiInputTimeComponent;
    let pageObject: PageObject<TestComponent>;
    let inputPO: NativeInputPO;

    function getDropdown(): DebugElement | null {
        return pageObject.getByAutomationId(`tui-input-time__dropdown`);
    }

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                TuiRootModule,
                TuiInputTimeModule,
                ReactiveFormsModule,
                NoopAnimationsModule,
                TuiTextfieldControllerModule,
                TuiHintControllerModule,
            ],
            declarations: [TestComponent],
        });
    });

    beforeEach(done => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        component = testComponent.component;
        inputPO = new NativeInputPO(fixture, 'tui-primitive-textfield__native-input');
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            done();
        });
    });

    describe('Initial value', () => {
        it('The value in the field is formatted by mask', done => {
            fixture.whenStable().then(() => {
                expect(inputPO.value).toBe('12:30');
                done();
            });
        });

        it('The initial value in the formControl is issued as an object with the hours and minutes properties', () => {
            expect(testComponent.control.value.hours).toBe(12);
            expect(testComponent.control.value.minutes).toBe(30);
        });
    });

    describe('The value in the formControl changes outside', () => {
        beforeEach(() => {
            testComponent.control.setValue(new TuiTime(22, 30));
            fixture.detectChanges();
        });

        it('A new formatted value appears in the field', done => {
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                    expect(inputPO.value).toBe('22:30');
                    done();
                });
            });
        });

        it('In the formControl is issued as an object with hours and minutes properties', () => {
            expect(testComponent.control.value.hours).toBe(22);
            expect(testComponent.control.value.minutes).toBe(30);
        });
    });

    describe('Short time input (less than 5 characters, including colon)', () => {
        it('The value of formControl is passed null', () => {
            component.onValueChange('11:1');
            fixture.detectChanges();
            expect(testComponent.control.value).toBeNull();
        });
    });

    describe('Short time input (less than 5 characters, including colon)', () => {
        it('The value of formControl is passed null', () => {
            component.onValueChange('11:1');
            fixture.detectChanges();
            expect(testComponent.control.value).toBeNull();
        });
    });

    describe('Keyboard control', () => {
        beforeEach(done => {
            fixture.whenStable().then(() => {
                done();
            });
        });

        it('If the cursor is at position 0, then pressing UP increases the hour by 1', () => {
            inputPO.focus();
            component.nativeFocusableElement!.setSelectionRange(0, 0);
            inputPO.sendKeydown('ArrowUp');

            expect(inputPO.value).toBe('13:30');
        });

        it('If the cursor is at position 4, then pressing UP increases the minute by 1', () => {
            inputPO.focus();
            component.nativeFocusableElement!.setSelectionRange(4, 4);
            inputPO.sendKeydown('ArrowUp');

            expect(inputPO.value).toBe('12:31');
        });

        it('If the cursor is at position 0, then pressing DOWN decreases the hour by 1', () => {
            inputPO.focus();
            component.nativeFocusableElement!.setSelectionRange(0, 0);
            inputPO.sendKeydown('ArrowDown');

            expect(inputPO.value).toBe('11:30');
        });

        it('If the cursor is at position 4, then pressing DOWN decreases the minute by 1', () => {
            inputPO.focus();
            component.nativeFocusableElement!.setSelectionRange(4, 4);
            inputPO.sendKeydown('ArrowDown');

            expect(inputPO.value).toBe('12:29');
        });

        it('When readOnly is ignored', done => {
            testComponent.readOnly = true;
            inputPO.focus();
            component.nativeFocusableElement!.setSelectionRange(0, 0);
            fixture.whenStable().then(() => {
                inputPO.sendKeydown('ArrowUp');

                expect(inputPO.value).toBe('12:30');

                inputPO.sendKeydown('ArrowDown');

                expect(inputPO.value).toBe('12:30');
                done();
            });
        });
    });

    describe('Drop-down list', () => {
        beforeEach(() => {
            testComponent.items = TIMES;

            fixture.detectChanges();
            inputPO.focus();
        });

        describe('Dropdown appears', () => {
            it('down arrow', () => {
                inputPO.sendKeydown('arrowDown');

                expect(getDropdown()).not.toBeNull();
            });

            it('when typing', () => {
                inputPO.sendText('1');

                expect(getDropdown()).not.toBeNull();
            });
        });

        describe('Dropdown does not appear', () => {
            it('Dropdown does not appear on focus', () => {
                expect(getDropdown()).toBeNull();
            });

            it('down arrow when readonly is on', () => {
                testComponent.readOnly = true;
                fixture.detectChanges();
                inputPO.sendKeydown('arrowDown');

                expect(getDropdown()).toBeNull();
            });
        });

        it('Input filters items', () => {
            inputPO.sendText('3');

            expect(pageObject.getAllByAutomationId(`tui-input-time__item`).length).toBe(
                1,
            );
        });

        it('The value is substituted when selecting an item from the dropdown', () => {
            inputPO.sendText('3');
            pageObject.getByAutomationId(`tui-input-time__item`)!.nativeElement.click();

            expect(testComponent.control.value.toString().trim()).toBe(
                TIMES[6].toString(),
            );
        });

        describe('strict mode', () => {
            it('by default it is false, and the entered value is freely exposed in the control', () => {
                inputPO.sendText('1111');

                expect(testComponent.control.value.toString().trim()).toBe('11:11');
            });

            it('with strict = true, the entered value is not set if it is absent in items', () => {
                testComponent.strict = true;
                fixture.detectChanges();
                inputPO.sendText('1111');
                fixture.detectChanges();

                expect(testComponent.control.value.toString().trim()).not.toBe('11:11');
            });

            it('with strict = true, the entered value is added if present in items', () => {
                testComponent.strict = true;
                fixture.detectChanges();
                inputPO.sendText('0130');
                fixture.detectChanges();

                expect(testComponent.control.value.toString().trim()).toBe('01:30');
            });

            it('with strict = true, the entered value is rounded to the nearest in items', () => {
                testComponent.strict = true;
                fixture.detectChanges();
                inputPO.sendText('0120');
                fixture.detectChanges();

                expect(testComponent.control.value.toString().trim()).toBe('01:30');
            });
        });
    });
});
