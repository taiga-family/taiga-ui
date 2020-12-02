import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NativeInputPO, PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiInputCountComponent} from '../input-count.component';
import {TuiInputCountModule} from '../input-count.module';

describe('InputCount', () => {
    @Component({
        template: `
            <tui-input-count
                *ngIf="defaultStep"
                [formControl]="control"
                [min]="min"
                [max]="max"
                [readOnly]="readOnly"
            ></tui-input-count>
            <tui-input-count
                *ngIf="customStep"
                [formControl]="control"
                [step]="step"
                [min]="min"
                [max]="max"
            ></tui-input-count>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputCountComponent)
        component: TuiInputCountComponent;

        control = new FormControl();

        defaultStep = false;
        customStep = false;
        readOnly = false;

        min = 0;
        max = 999;
        step = 5;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: PageObject<TestComponent>;
    let inputPO: NativeInputPO;
    const testContext = {
        get prefix() {
            return 'tui-input-count__';
        },
    };

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, TuiInputCountModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;

        inputPO = new NativeInputPO(fixture, `tui-primitive-textfield__native-input`);
    });

    describe('Инициализация', () => {
        describe('Значение не передано', () => {
            beforeEach(() => {
                testComponent.defaultStep = true;
                fixture.detectChanges();
            });

            it('При инициализации отображается fallback значение 0, контрол не меняет значения', done => {
                fixture.whenStable().then(() => {
                    expect(inputPO.value).toBe('0');
                    expect(testComponent.control.value).toBe(null);
                    done();
                });
            });
        });

        describe('Значение передано при создании контрола', () => {
            beforeEach(() => {
                testComponent.control.setValue(12);
                testComponent.defaultStep = true;
                fixture.detectChanges();
            });

            it('При инициализации значение не меняется', done => {
                fixture.whenStable().then(() => {
                    expect(inputPO.value).toBe('12');
                    expect(testComponent.control.value).toBe(12);
                    done();
                });
            });
        });
    });

    describe('Изменение значения при помощи кнопок', () => {
        describe('шаг не задан', () => {
            beforeEach(done => {
                testComponent.defaultStep = true;
                testComponent.control.setValue(1);
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                    done();
                });
            });

            it('Нажатие на "плюс" увеличивает значение на 1', () => {
                clickPlusButton();

                expect(inputPO.value).toBe('2');
                expect(testComponent.control.value).toBe(2);
            });

            it('Нажатие на "минус" уменьшает значение на 1', () => {
                clickMinusButton();

                expect(inputPO.value).toBe('0');
                expect(testComponent.control.value).toBe(0);
            });

            it('При readOnly нажатие на "плюс" и "минус" игнорируются', () => {
                testComponent.readOnly = true;
                fixture.detectChanges();

                clickPlusButton();

                expect(inputPO.value).toBe('1');
                expect(testComponent.control.value).toBe(1);

                clickMinusButton();

                expect(inputPO.value).toBe('1');
                expect(testComponent.control.value).toBe(1);
            });
        });

        describe('Задан шаг, отличный от 1', () => {
            beforeEach(() => {
                testComponent.customStep = true;
                testComponent.control.setValue(6);
                testComponent.step = 5;
                testComponent.min = -1;
                testComponent.max = 12;
                fixture.detectChanges();
            });

            it('Нажатие на "плюс" увеличивает значение на заданный шаг', () => {
                clickPlusButton();

                expect(inputPO.value).toBe('11');
                expect(testComponent.control.value).toBe(11);
            });

            it('Нажатие на "минус" уменьшает значение на заданный шаг', () => {
                clickMinusButton();

                expect(inputPO.value).toBe('1');
                expect(testComponent.control.value).toBe(1);
            });

            it('Невозможно сделать значение больше, чем maxValue', () => {
                clickPlusButton(); // новое значение стало 11
                clickPlusButton(); // новое значение стало бы 16, но это больше maxValue

                expect(inputPO.value).toBe('12');
                expect(testComponent.control.value).toBe(12);
            });

            it('Невозможно сделать значение меньше, чем min', () => {
                clickMinusButton(); // значение стало === 1
                clickMinusButton(); // новое значение стало бы -4, но это меньше min

                expect(inputPO.value).toBe(testComponent.min.toString());
                expect(testComponent.control.value).toBe(testComponent.min);
            });

            it('Если значение равно максимальному, кнопка "плюс" дизейблится', () => {
                testComponent.control.setValue(12);
                fixture.detectChanges();

                expect(testComponent.component.plusButtonDisabled).toBe(true);
            });

            it('Если значение равно минимальному, кнопка "минус" дизейблится', () => {
                testComponent.control.setValue(testComponent.min);
                fixture.detectChanges();

                expect(testComponent.component.minusButtonDisabled).toBe(true);
            });
        });
    });

    describe('Изменение значения при помощи текстового поля', () => {
        beforeEach(() => {
            testComponent.defaultStep = true;
        });

        it('Ввод в поле изменяет значение контрола', () => {
            fixture.detectChanges();

            inputPO.sendText('12');

            expect(testComponent.control.value).toBe(12);
        });

        it('Ввод в поле большого числа изменяет значение на предельное значение', () => {
            fixture.detectChanges();

            inputPO.sendText('43000789');

            expect(testComponent.control.value).toBe(testComponent.max);
        });

        it('Если ввести число, меньшее min, новое значение равно min', done => {
            testComponent.min = 10;
            fixture.detectChanges();

            inputPO.sendTextAndBlur('7');

            fixture.whenStable().then(() => {
                expect(inputPO.value).toBe('10');
                expect(testComponent.control.value).toBe(10);
                done();
            });
        });

        it('Если ввести число, большее max, новое значение равно max', () => {
            testComponent.max = 10;
            fixture.detectChanges();

            inputPO.sendTextAndBlur('15');

            expect(inputPO.value).toBe('10');
            expect(testComponent.control.value).toBe(10);
        });

        it('Если стереть содержимое поля, восстанавливается минимальное значение', () => {
            testComponent.control.setValue(123);
            fixture.detectChanges();

            inputPO.sendText('');
            testComponent.component.onFocused(false);

            expect(testComponent.control.value).toBe(0);
        });
    });

    describe('Изменение значения при помощи стрелок на клавиатуре', () => {
        beforeEach(() => {
            testComponent.customStep = true;
            testComponent.control.setValue(10);
            testComponent.step = 5;
            testComponent.min = 2;
            testComponent.max = 17;
            fixture.detectChanges();
        });

        it('Нажатие стрелки вверх увеличивает значение на заданный шаг', () => {
            inputPO.sendKeydown('ArrowUp');

            expect(inputPO.value).toBe('15');
            expect(testComponent.control.value).toBe(15);
        });

        it('Нажатие стрелки вниз уменьшает значение на заданный шаг', () => {
            inputPO.sendKeydown('ArrowDown');

            expect(inputPO.value).toBe('5');
            expect(testComponent.control.value).toBe(5);
        });

        it('Невозможно сделать значение больше, чем maxValue', () => {
            inputPO.sendKeydown('ArrowUp'); // value стало === 15
            inputPO.sendKeydown('ArrowUp'); // value должно было стать 20, но это > maxValue

            expect(inputPO.value).toBe('17');
            expect(testComponent.control.value).toBe(17);
        });

        it('Невозможно сделать значение меньше, чем min', () => {
            inputPO.sendKeydown('ArrowDown'); // value стало === 5
            inputPO.sendKeydown('ArrowDown'); // value должно было стать 0, но это < min

            expect(inputPO.value).toBe('2');
            expect(testComponent.control.value).toBe(2);
        });
    });

    it('maxlength по умолчанию установлено на 18', () => {
        testComponent.defaultStep = true;
        fixture.detectChanges();

        expect(inputPO.nativeElement.getAttribute('maxlength')).toBe('18');
    });

    function clickPlusButton() {
        const plusButton = getPlusButton();

        plusButton!.nativeElement.click();
        fixture.detectChanges();
    }

    function clickMinusButton() {
        const minusButton = getMinusButton();

        minusButton!.nativeElement.click();
        fixture.detectChanges();
    }

    function getPlusButton(): DebugElement | null {
        return pageObject.getByAutomationId(`${testContext.prefix}plus-button`);
    }

    function getMinusButton(): DebugElement | null {
        return pageObject.getByAutomationId(`${testContext.prefix}minus-button`);
    }
});
