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
        hintContent: string | null = 'Подсказка';
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

    describe('Начальное значение', () => {
        it('Значение в поле отформатировано по маске', done => {
            fixture.whenStable().then(() => {
                expect(inputPO.value).toBe('12:30');
                done();
            });
        });

        it('Исходное значение в formControl выдается в виде объекта со свойствами hours и minutes', () => {
            expect(testComponent.control.value.hours).toBe(12);
            expect(testComponent.control.value.minutes).toBe(30);
        });
    });

    describe('Значение в formControl меняется снаружи', () => {
        beforeEach(() => {
            testComponent.control.setValue(new TuiTime(22, 30));
            fixture.detectChanges();
        });

        it('В поле появляется новое отформатированное значение', done => {
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                    expect(inputPO.value).toBe('22:30');
                    done();
                });
            });
        });

        it('В formControl выдается в виде объекта со свойствами hours и minutes', () => {
            expect(testComponent.control.value.hours).toBe(22);
            expect(testComponent.control.value.minutes).toBe(30);
        });
    });

    describe('Ввод короткого времени (меньше 5 символов, включая двоеточие)', () => {
        it('В значение formControl передается null', () => {
            component.onValueChange('11:1');
            fixture.detectChanges();
            expect(testComponent.control.value).toBeNull();
        });
    });

    describe('Ввод короткого времени (меньше 5 символов, включая двоеточие)', () => {
        it('В значение formControl передается null', () => {
            component.onValueChange('11:1');
            fixture.detectChanges();
            expect(testComponent.control.value).toBeNull();
        });
    });

    describe('Управление с клавиатуры', () => {
        beforeEach(done => {
            fixture.whenStable().then(() => {
                done();
            });
        });

        it('Если курсор стоит на позиции 0, то при нажатии UP увеличивается час на 1', () => {
            inputPO.focus();
            component.nativeFocusableElement!.setSelectionRange(0, 0);
            inputPO.sendKeydown('ArrowUp');

            expect(inputPO.value).toBe('13:30');
        });

        it('Если курсор стоит на позиции 4, то при нажатии UP увеличивается минута на 1', () => {
            inputPO.focus();
            component.nativeFocusableElement!.setSelectionRange(4, 4);
            inputPO.sendKeydown('ArrowUp');

            expect(inputPO.value).toBe('12:31');
        });

        it('Если курсор стоит на позиции 0, то при нажатии DOWN уменьшается час на 1', () => {
            inputPO.focus();
            component.nativeFocusableElement!.setSelectionRange(0, 0);
            inputPO.sendKeydown('ArrowDown');

            expect(inputPO.value).toBe('11:30');
        });

        it('Если курсор стоит на позиции 4, то при нажатии DOWN уменьшается минута на 1', () => {
            inputPO.focus();
            component.nativeFocusableElement!.setSelectionRange(4, 4);
            inputPO.sendKeydown('ArrowDown');

            expect(inputPO.value).toBe('12:29');
        });

        it('При readOnly игнорируются', done => {
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

    describe('Выпадающий список', () => {
        beforeEach(() => {
            testComponent.items = TIMES;

            fixture.detectChanges();
            inputPO.focus();
        });

        describe('Выпадашка появляется', () => {
            it('при нажатии стрелки вниз', () => {
                inputPO.sendKeydown('arrowDown');

                expect(getDropdown()).not.toBeNull();
            });

            it('при вводе', () => {
                inputPO.sendText('1');

                expect(getDropdown()).not.toBeNull();
            });
        });

        describe('Выпадашка не появляется', () => {
            it('Выпадашка не появляется при фокусе', () => {
                expect(getDropdown()).toBeNull();
            });

            it('при нажатии стрелки вниз когда стоит readonly', () => {
                testComponent.readOnly = true;
                fixture.detectChanges();
                inputPO.sendKeydown('arrowDown');

                expect(getDropdown()).toBeNull();
            });
        });

        it('Ввод фильтрует элементы', () => {
            inputPO.sendText('3');

            expect(pageObject.getAllByAutomationId(`tui-input-time__item`).length).toBe(
                1,
            );
        });

        it('Значение подставляется при выборе элемента из выпадашки', () => {
            inputPO.sendText('3');
            pageObject.getByAutomationId(`tui-input-time__item`)!.nativeElement.click();

            expect(testComponent.control.value.toString().trim()).toBe(
                TIMES[6].toString(),
            );
        });

        describe('strict режим', () => {
            it('по умолчанию он false, и введенное значение свободно выставляется в контроле', () => {
                inputPO.sendText('1111');

                expect(testComponent.control.value.toString().trim()).toBe('11:11');
            });

            it('при strict=true введенное значение не проставляется, если отсутствует в items', () => {
                testComponent.strict = true;
                fixture.detectChanges();
                inputPO.sendText('1111');
                fixture.detectChanges();

                expect(testComponent.control.value.toString().trim()).not.toBe('11:11');
            });

            it('при strict=true введенное значение проставляется, если присутствует в items', () => {
                testComponent.strict = true;
                fixture.detectChanges();
                inputPO.sendText('0130');
                fixture.detectChanges();

                expect(testComponent.control.value.toString().trim()).toBe('01:30');
            });

            it('при strict=true введенное значение округляется к ближайшему в items', () => {
                testComponent.strict = true;
                fixture.detectChanges();
                inputPO.sendText('0120');
                fixture.detectChanges();

                expect(testComponent.control.value.toString().trim()).toBe('01:30');
            });
        });
    });
});
