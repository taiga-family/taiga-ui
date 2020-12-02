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
                    Выберите дату
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

        hintContent: string | null = 'Подсказка';

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

    it('Если есть min и начальное значение, и начальное значение меньше min - оставлять начальное значение', done => {
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

    describe('Ввод с клавиатуры', () => {
        it('Переданная дата вставляется в поле', () => {
            inputPO.sendText('01.03.2017');

            expect(inputPO.value).toBe('01.03.2017');
        });

        it('При вводе неверной даты значение корректируется', () => {
            inputPO.sendText('32.12.2012');

            expect(inputPO.value).toBe('31.12.2012');
        });

        it('При вводе неполной даты оставляет её в поле', () => {
            inputPO.sendText('31.12.20');

            expect(inputPO.value).toBe('31.12.20');
        });

        it('При вводе неполной даты значение контрола — null', () => {
            inputPO.sendText('31.12.20');

            expect(testComponent.control.value).toBeNull();
        });
    });

    describe('textfield', () => {
        describe('при mousedown на него', () => {
            describe('если поле не заблокировано и не только для чтения', () => {
                it('открывает календарь', () => {
                    mouseDownOnTextfield();

                    expect(getCalendar()).not.toBeNull();
                });

                it('при повторном mousedown закроет календарь', () => {
                    mouseDownOnTextfield();
                    mouseDownOnTextfield();

                    expect(getCalendar()).toBeNull();
                });

                describe('если поле заблокировано', () => {
                    it('календарь не открывается', () => {
                        testComponent.control.disable();
                        fixture.detectChanges();
                        mouseDownOnTextfield();

                        expect(getCalendar()).toBeNull();
                    });
                });

                describe('если поле readOnly', () => {
                    it('календарь не открывается', () => {
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
