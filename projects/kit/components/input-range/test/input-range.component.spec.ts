import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';
import {NativeInputPO, PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiInputRangeComponent} from '../input-range.component';
import {TuiInputRangeModule} from '../input-range.module';

describe('InputRange', () => {
    @Component({
        template: `
            <tui-input-range
                *ngIf="default"
                max="10"
                [formControl]="control"
            ></tui-input-range>
            <tui-input-range
                *ngIf="!default"
                [formControl]="control"
                [max]="max"
                [min]="min"
                [minLabel]="minLabel"
                [maxLabel]="maxLabel"
                [pluralize]="pluralize"
                [readOnly]="readOnly"
                [steps]="steps"
                [quantum]="quantum"
            ></tui-input-range>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputRangeComponent, {static: true})
        component: TuiInputRangeComponent;

        control = new FormControl([0, 1]);
        default = false;
        max = 10;
        min = -10;
        quantum = 5;
        readOnly = false;
        steps = 0;
        minLabel = 'Ничего';
        maxLabel = 'Всё';
        pluralize = ['год', 'года', 'лет'];
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: PageObject<TestComponent>;
    let inputPOLeft: NativeInputPO;
    let inputPORight: NativeInputPO;
    const testContext = {
        get prefix() {
            return 'tui-input-range__';
        },
    };

    function aid(aid: string): HTMLElement & {textContent: string} {
        return pageObject.getByAutomationId(aid)!.nativeElement;
    }

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiInputRangeModule, ReactiveFormsModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        inputPOLeft = new NativeInputPO(fixture, `${testContext.prefix}native-left`);
        inputPORight = new NativeInputPO(fixture, `${testContext.prefix}native-right`);
    });

    describe('Значения по-умолчанию', () => {
        beforeEach(() => {
            testComponent.default = true;
            fixture.detectChanges();
        });

        it('min равен нулю', () => {
            expect(testComponent.component.min).toBe(0);
        });

        it('minLabel отсутствует', () => {
            expect(
                pageObject.getByAutomationId(`${testContext.prefix}min-label`),
            ).toBeNull();
        });

        it('maxLabel отсутствует', () => {
            testComponent.control.setValue([0, 10]);
            fixture.detectChanges();

            expect(
                pageObject.getByAutomationId(`${testContext.prefix}min-label`),
            ).toBeNull();
        });

        it('Подпись множественного числа отсутствует', () => {
            expect(
                pageObject.getByAutomationId(`${testContext.prefix}pluralize-left`),
            ).toBeNull();
            expect(
                pageObject.getByAutomationId(`${testContext.prefix}pluralize-right`),
            ).toBeNull();
        });
    });

    describe('Лейблы', () => {
        it('Подпись множественного числа присутствует', () => {
            expect(aid(`${testContext.prefix}pluralize-left`).textContent.trim()).toBe(
                'лет',
            );
            expect(aid(`${testContext.prefix}pluralize-right`).textContent.trim()).toBe(
                'год',
            );
        });

        it('minLabel не показан при start > min', () => {
            expect(
                pageObject.getByAutomationId(`${testContext.prefix}min-label`),
            ).toBeNull();
        });

        it('minLabel показан', () => {
            testComponent.control.setValue([-10, 10]);
            fixture.detectChanges();

            expect(aid(`${testContext.prefix}min-label`).textContent.trim()).toBe(
                testComponent.minLabel,
            );
        });

        it('minLabel отсутствует при фокусе', () => {
            testComponent.control.setValue([-10, 10]);
            inputPOLeft.focus();

            expect(
                pageObject.getByAutomationId(`${testContext.prefix}min-label`),
            ).toBeNull();
        });

        it('maxLabel не показан при end < max', () => {
            expect(
                pageObject.getByAutomationId(`${testContext.prefix}min-label`),
            ).toBeNull();
        });

        it('maxLabel показан', () => {
            testComponent.control.setValue([-10, 10]);
            fixture.detectChanges();

            expect(aid(`${testContext.prefix}max-label`).textContent.trim()).toBe(
                testComponent.maxLabel,
            );
        });

        it('maxLabel отсутствует при фокусе', () => {
            testComponent.control.setValue([-10, 10]);
            inputPORight.focus();

            expect(
                pageObject.getByAutomationId(`${testContext.prefix}max-label`),
            ).toBeNull();
        });
    });

    describe('quantum', () => {
        it('Округляет левое значение до ближайшего кванта при потере фокуса', () => {
            inputPOLeft.sendTextAndBlur('-7');

            expect(testComponent.control.value[0]).toBe(-5);
        });

        it('Округляет левое значение поля ввода до ближайшего кванта при потере фокуса', () => {
            inputPOLeft.sendTextAndBlur('-7');

            expect(inputPOLeft.value).toBe('-5');
        });

        it('Округляет правое значение до ближайшего кванта при потере фокуса', () => {
            inputPORight.sendTextAndBlur('7');

            expect(testComponent.control.value[1]).toBe(5);
        });

        it('Округляет правое значение поля ввода до ближайшего кванта при потере фокуса', () => {
            inputPORight.sendTextAndBlur('7');

            expect(inputPORight.value).toBe('5');
        });
    });

    describe('Удаление значений', () => {
        it('Не меняет значение при удалении левого содержимого', () => {
            inputPOLeft.sendTextAndBlur('-5');
            inputPOLeft.sendTextAndBlur('');

            expect(testComponent.control.value[0]).toBe(-5);
            expect(inputPOLeft.value).toBe('-5');
        });

        it('Не меняет значение при удалении правого содержимого', () => {
            inputPORight.sendTextAndBlur('5');
            inputPORight.sendTextAndBlur('');

            expect(testComponent.control.value[1]).toBe(5);
            expect(inputPORight.value).toBe('5');
        });
    });

    describe('Изменение значений', () => {
        it('Не даёт левому значению превысить правое при вводе', () => {
            inputPORight.sendTextAndBlur('5');
            inputPOLeft.sendTextAndBlur('123');

            expect(testComponent.control.value[0]).toBe(testComponent.control.value[1]);
            expect(inputPOLeft.value).toBe(testComponent.control.value[1].toString());
        });

        it('Не даёт правому значению стать меньше левого при выходе из поля', () => {
            inputPORight.sendTextAndBlur('-5');

            expect(testComponent.control.value[1]).toBe(testComponent.control.value[0]);
            expect(inputPORight.value).toBe(testComponent.control.value[0].toString());
        });
    });

    describe('Формат', () => {
        beforeEach(() => {
            testComponent.max = 100000;
            testComponent.quantum = 0.01;
            fixture.detectChanges();
            inputPORight.sendTextAndBlur('12345.67');
        });

        it('Форматирует ввод', () => {
            expect(inputPORight.value).toBe(`12${CHAR_NO_BREAK_SPACE}345,67`);
        });

        it('Не форматирует значение', () => {
            expect(testComponent.control.value[1]).toBe(12345.67);
        });
    });

    describe('Стрелочки', () => {
        beforeEach(() => {
            testComponent.min = 0;
            testComponent.max = 10;
            testComponent.quantum = 1;
            testComponent.control.setValue([2, 6]);
            fixture.detectChanges();
        });

        describe('readOnly', () => {
            it('Стрелка вверх на левом поле не увеличивает значение', () => {
                testComponent.readOnly = true;
                fixture.detectChanges();

                inputPOLeft.sendKeydown('arrowUp');

                expect(testComponent.control.value[0]).toBe(2);
            });

            it('Стрелка вниз на левом поле не уменьшает значение', () => {
                testComponent.readOnly = true;
                fixture.detectChanges();

                inputPOLeft.sendKeydown('arrowDown');

                expect(testComponent.control.value[0]).toBe(2);
            });

            it('Стрелка вверх на правом поле не увеличивает значение', () => {
                testComponent.readOnly = true;
                fixture.detectChanges();

                inputPORight.sendKeydown('arrowUp');

                expect(testComponent.control.value[1]).toBe(6);
            });

            it('Стрелка вниз на правом поле не уменьшает значение', () => {
                testComponent.readOnly = true;
                fixture.detectChanges();

                inputPORight.sendKeydown('arrowDown');

                expect(testComponent.control.value[1]).toBe(6);
            });
        });

        describe('Квант', () => {
            it('Стрелка вверх на левом поле увеличивает start на квант', () => {
                inputPOLeft.sendKeydown('arrowUp');

                expect(testComponent.control.value[0]).toBe(3);
            });

            it('Стрелка вниз на левом поле уменьшает start на квант', () => {
                inputPOLeft.sendKeydown('arrowDown');

                expect(testComponent.control.value[0]).toBe(1);
            });

            it('Стрелка вверх на правом поле увеличивает end на квант', () => {
                inputPORight.sendKeydown('arrowUp');

                expect(testComponent.control.value[1]).toBe(7);
            });

            it('Стрелка вниз на правом поле уменьшает end на квант', () => {
                inputPORight.sendKeydown('arrowDown');

                expect(testComponent.control.value[1]).toBe(5);
            });
        });

        describe('Шаги', () => {
            beforeEach(() => {
                testComponent.steps = 5;
                fixture.detectChanges();
            });

            it('Стрелка вверх на левом поле увеличивает start на шаг', () => {
                inputPOLeft.sendKeydown('arrowUp');

                expect(testComponent.control.value[0]).toBe(4);
            });

            it('Стрелка вниз на левом поле уменьшает start на шаг', () => {
                inputPOLeft.sendKeydown('arrowDown');

                expect(testComponent.control.value[0]).toBe(0);
            });

            it('Стрелка вверх на правом поле увеличивает end на шаг', () => {
                inputPORight.sendKeydown('arrowUp');

                expect(testComponent.control.value[1]).toBe(8);
            });

            it('Стрелка вниз на правом поле уменьшает end на шаг', () => {
                inputPORight.sendKeydown('arrowDown');

                expect(testComponent.control.value[1]).toBe(4);
            });
        });

        describe('Ограничения', () => {
            it('Стрелка вверх на левом поле не увеличивает start до значения, больше end', () => {
                testComponent.control.setValue([6, 6]);
                inputPOLeft.sendKeydown('arrowUp');

                expect(testComponent.control.value[0]).toBe(6);
            });

            it('Стрелка вниз на левом поле не уменьшает start до значения, меньше min', () => {
                testComponent.control.setValue([0, 6]);
                inputPOLeft.sendKeydown('arrowDown');

                expect(testComponent.control.value[0]).toBe(0);
            });

            it('Стрелка вверх на правом поле не увеличивает end до значения, больше max', () => {
                testComponent.control.setValue([6, 10]);
                inputPORight.sendKeydown('arrowUp');

                expect(testComponent.control.value[1]).toBe(10);
            });

            it('Стрелка вниз на правом поле не уменьшает end до значения, меньше start', () => {
                testComponent.control.setValue([6, 6]);
                inputPORight.sendKeydown('arrowDown');

                expect(testComponent.control.value[1]).toBe(6);
            });

            it('Ввод с клавиатуры не выходит за max', () => {
                inputPORight.sendText('12345');

                expect(inputPORight.value).toBe('10');
            });

            it('Ввод с клавиатуры не выходит за min', () => {
                testComponent.min = -10;
                fixture.detectChanges();
                inputPOLeft.sendText('-123');

                expect(inputPOLeft.value).toBe('-10');
            });

            it('Ввод с клавиатуры не выходит за value[1]', () => {
                inputPOLeft.sendText('12345');

                expect(inputPOLeft.value).toBe('6');
            });

            it('Ввод с клавиатуры не выводит значение value[1] за value[0]', () => {
                inputPORight.sendText('1');

                expect(inputPORight.value).toBe('1');
                expect(testComponent.control.value[1]).toBe(6);
            });
        });
    });
});
