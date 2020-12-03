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
        minLabel = 'Ничего';
        maxLabel = 'Всё';
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
            testComponent.control.setValue(10);
            fixture.detectChanges();

            expect(
                pageObject.getByAutomationId(`${testContext.prefix}min-label`),
            ).toBeNull();
        });

        it('Подпись множественного числа отсутствует', () => {
            expect(
                pageObject.getByAutomationId(`${testContext.prefix}pluralize`),
            ).toBeNull();
        });

        it('Лейбл справа отсутствует', () => {
            expect(aid(`${testContext.prefix}secondary`).textContent.trim()).toBe('');
        });
    });

    describe('Лейблы', () => {
        it('Лейбл справа показан', () => {
            expect(aid(`${testContext.prefix}secondary`).textContent.trim()).toBe(
                testComponent.secondary,
            );
        });

        it('Подпись множественного числа присутствует', () => {
            expect(aid(`${testContext.prefix}pluralize`).textContent.trim()).toBe('лет');
        });

        it('minLabel не показан при start > min', () => {
            expect(
                pageObject.getByAutomationId(`${testContext.prefix}min-label`),
            ).toBeNull();
        });

        it('minLabel показан', () => {
            testComponent.control.setValue(-10);
            fixture.detectChanges();

            expect(aid(`${testContext.prefix}min-label`).textContent.trim()).toBe(
                testComponent.minLabel,
            );
        });

        it('minLabel отсутствует при фокусе', () => {
            testComponent.control.setValue(-10);
            inputPO.focus();

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
            testComponent.control.setValue(10);
            fixture.detectChanges();

            expect(aid(`${testContext.prefix}max-label`).textContent.trim()).toBe(
                testComponent.maxLabel,
            );
        });

        it('maxLabel отсутствует при фокусе', () => {
            testComponent.control.setValue(10);
            inputPO.focus();

            expect(
                pageObject.getByAutomationId(`${testContext.prefix}max-label`),
            ).toBeNull();
        });
    });

    describe('quantum', () => {
        it('Округляет значение до ближайшего кванта при потере фокуса', () => {
            inputPO.sendTextAndBlur('7');

            expect(testComponent.control.value).toBe(5);
        });

        it('Округляет значение поля ввода до ближайшего кванта при потере фокуса', () => {
            inputPO.sendTextAndBlur('7');

            expect(inputPO.value).toBe('5');
        });
    });

    describe('Формат', () => {
        beforeEach(() => {
            testComponent.max = 100000;
            testComponent.quantum = 0.01;
            fixture.detectChanges();
            inputPO.sendTextAndBlur('12345.67');
        });

        it('Форматирует ввод', () => {
            expect(inputPO.value).toBe(`12${CHAR_NO_BREAK_SPACE}345,67`);
        });

        it('Не форматирует значение', () => {
            expect(testComponent.control.value).toBe(12345.67);
        });
    });

    it('Не меняет значение при удалении содержимого', () => {
        inputPO.sendTextAndBlur('5');
        inputPO.sendTextAndBlur('');

        expect(testComponent.control.value).toBe(5);
        expect(inputPO.value).toBe('5');
    });

    describe('Стрелочки', () => {
        beforeEach(() => {
            testComponent.min = 0;
            testComponent.max = 10;
            testComponent.quantum = 1;
            testComponent.control.setValue(6);
            fixture.detectChanges();
        });

        describe('Квант', () => {
            it('Стрелка вверх увеличивает значение на квант', () => {
                inputPO.sendKeydown('arrowUp');

                expect(testComponent.control.value).toBe(7);
            });

            it('Стрелка вниз уменьшает значение на квант', () => {
                inputPO.sendKeydown('arrowDown');

                expect(testComponent.control.value).toBe(5);
            });
        });

        describe('readOnly', () => {
            it('Стрелка вверх не увеличивает значение', () => {
                testComponent.readOnly = true;
                fixture.detectChanges();

                inputPO.sendKeydown('arrowUp');

                expect(testComponent.control.value).toBe(6);
            });

            it('Стрелка вниз не уменьшает значение', () => {
                testComponent.readOnly = true;
                fixture.detectChanges();

                inputPO.sendKeydown('arrowDown');

                expect(testComponent.control.value).toBe(6);
            });
        });

        describe('Шаги', () => {
            beforeEach(() => {
                testComponent.steps = 5;
                fixture.detectChanges();
            });

            it('Стрелка вверх увеличивает значение на шаг', () => {
                inputPO.sendKeydown('arrowUp');

                expect(testComponent.control.value).toBe(8);
            });

            it('Стрелка вниз уменьшает значение на шаг', () => {
                inputPO.sendKeydown('arrowDown');

                expect(testComponent.control.value).toBe(4);
            });
        });

        describe('Ограничения', () => {
            it('Стрелка вверх на увеличивает значение за границу max', () => {
                testComponent.control.setValue(10);
                inputPO.sendKeydown('arrowUp');

                expect(testComponent.control.value).toBe(10);
            });

            it('Стрелка вниз не уменьшает значение за границу min', () => {
                testComponent.control.setValue(0);
                inputPO.sendKeydown('arrowDown');

                expect(testComponent.control.value).toBe(0);
            });

            it('Ввод с клавиатуры не выходит за max', () => {
                inputPO.sendText('12345');

                expect(inputPO.value).toBe('10');
            });

            it('Ввод с клавиатуры не выходит за min', () => {
                testComponent.min = -10;
                fixture.detectChanges();
                inputPO.sendText('-123');

                expect(inputPO.value).toBe('-10');
            });
        });
    });
});
