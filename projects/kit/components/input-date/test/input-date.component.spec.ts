import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiDay} from '@taiga-ui/cdk';
import {
    TuiHintControllerModule,
    TuiRootModule,
    TuiSizeL,
    TuiSizeS,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {NativeInputPO, PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiInputDateComponent} from '../input-date.component';
import {TuiInputDateModule} from '../input-date.module';

describe('InputDate', () => {
    @Component({
        template: `
            <tui-root>
                <tui-input-date
                    [formControl]="control"
                    [readOnly]="readOnly"
                    [min]="min"
                    [tuiTextfieldCleaner]="cleaner"
                    [tuiTextfieldExampleText]="exampleText"
                    [tuiTextfieldLabelOutside]="labelOutside"
                    [tuiTextfieldSize]="size"
                    [tuiHintContent]="hintContent"
                >
                    Select date
                </tui-input-date>
            </tui-root>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputDateComponent)
        readonly component: TuiInputDateComponent;

        control = new FormControl(new TuiDay(2017, 2, 1));

        cleaner = false;

        readOnly = false;

        min = new TuiDay(1900, 0, 1);

        labelOutside = false;

        size: TuiSizeS | TuiSizeL = 'm';

        hintContent: string | null = 'prompt';

        exampleText = '';
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: PageObject<TestComponent>;
    let inputPO: NativeInputPO;

    const testContext = {
        get pageObject() {
            return pageObject;
        },
        get fixture() {
            return fixture;
        },
        get testComponent() {
            return testComponent;
        },
        get inputPO() {
            return inputPO;
        },
        get prefix() {
            return 'tui-input-date__';
        },
    };

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                TuiRootModule,
                NoopAnimationsModule,
                TuiInputDateModule,
                ReactiveFormsModule,
                TuiHintControllerModule,
                TuiTextfieldControllerModule,
            ],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        inputPO = new NativeInputPO(fixture, `tui-primitive-textfield__native-input`);
    });

    beforeEach(done => {
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            done();
        });
    });

    it('If there is min and an initial value and an initial value less than min - keep the initial value', done => {
        testComponent.min = new TuiDay(2018, 3, 11);
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                expect(inputPO.value).toBe('01.03.2017');
                done();
            });
        });
    });

    describe('Keyboard input', () => {
        it('The passed date is inserted into the field', () => {
            inputPO.sendText('01.03.2017');

            expect(inputPO.value).toBe('01.03.2017');
        });

        it('If you enter an invalid date, the value is adjusted', () => {
            inputPO.sendText('32.12.2012');

            expect(inputPO.value).toBe('31.12.2012');
        });

        it('When entering an incomplete date, leaves it in the field', () => {
            inputPO.sendText('31.12.20');

            expect(inputPO.value).toBe('31.12.20');
        });

        it('When entering an incomplete date, the control value is null', () => {
            inputPO.sendText('31.12.20');

            expect(testComponent.control.value).toBeNull();
        });
    });

    describe('textfield', () => {
        describe('when mousedown on it', () => {
            describe('unless the field is locked and not read-only', () => {
                it('opens the calendar', () => {
                    mouseDownOnTextfield();

                    expect(getCalendar()).not.toBeNull();
                });

                it('on repeated mousedown will close the calendar', () => {
                    mouseDownOnTextfield();
                    mouseDownOnTextfield();

                    expect(getCalendar()).toBeNull();
                });

                describe('if the field is locked', () => {
                    it('the calendar does not open', () => {
                        testComponent.control.disable();
                        fixture.detectChanges();
                        mouseDownOnTextfield();

                        expect(getCalendar()).toBeNull();
                    });
                });

                describe('if the readOnly field', () => {
                    it('the calendar does not open', () => {
                        testComponent.readOnly = true;
                        fixture.detectChanges();
                        mouseDownOnTextfield();

                        expect(getCalendar()).toBeNull();
                    });
                });
            });
        });
    });

    function mouseDownOnTextfield() {
        getTextfield()!.nativeElement.dispatchEvent(
            new MouseEvent('mousedown', {bubbles: true}),
        );
        getTextfield()!.nativeElement.click();
        fixture.detectChanges();
    }

    function getTextfield(): DebugElement | null {
        return pageObject.getByAutomationId('tui-input-date-range__textfield');
    }

    function getCalendar(): DebugElement | null {
        return pageObject.getByAutomationId(`${testContext.prefix}calendar`);
    }
});
