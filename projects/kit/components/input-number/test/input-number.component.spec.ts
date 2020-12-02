import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk';
import {
    TuiDecimal,
    TuiHintControllerModule,
    TuiSizeL,
    TuiSizeS,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {NativeInputPO, PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiInputNumberComponent} from '../input-number.component';
import {TuiInputNumberModule} from '../input-number.module';

describe('InputNumber', () => {
    @Component({
        template: `
            <ng-container [formGroup]="form">
                <tui-input-number
                    *ngIf="!defaultValues"
                    formControlName="control"
                    [readOnly]="readOnly"
                    [decimal]="decimal"
                    [tuiTextfieldCleaner]="cleaner"
                    [tuiTextfieldSize]="size"
                    [tuiTextfieldExampleText]="exampleText"
                    [tuiHintContent]="hintContent"
                >
                    Введите сумму
                </tui-input-number>
                <tui-input-number *ngIf="defaultValues" formControlName="control">
                </tui-input-number>
            </ng-container>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputNumberComponent)
        component!: TuiInputNumberComponent;

        control = new FormControl(12345.0);
        form = new FormGroup({
            control: this.control,
        });
        readOnly = false;
        decimal = TuiDecimal.Never;
        cleaner = true;
        defaultValues = false;
        size: TuiSizeS | TuiSizeL = 'm';
        hintContent: string | null = 'Подсказка';
        exampleText = 'placeholder';
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiInputNumberComponent;
    let pageObject: PageObject<TestComponent>;
    let inputPO: NativeInputPO;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                NoopAnimationsModule,
                TuiInputNumberModule,
                ReactiveFormsModule,
                TuiTextfieldControllerModule,
                TuiHintControllerModule,
            ],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        component = testComponent.component;

        inputPO = new NativeInputPO(fixture, `tui-primitive-textfield__native-input`);
    });

    describe('Значения по умолчанию:', () => {
        beforeEach(() => {
            testComponent.defaultValues = true;
            fixture.detectChanges();
        });

        it('Нулевые копейки не показаны', fakeAsync(() => {
            testComponent.control.setValue(1234.0);
            fixture.detectChanges();
            tick();

            expect(getNativeInput()!.nativeElement.value).toBe(
                `1${CHAR_NO_BREAK_SPACE}234`,
            );
        }));

        it('Ненулевые копейки показаны', fakeAsync(() => {
            testComponent.control.setValue(12.345);
            fixture.detectChanges();
            tick();

            expect(getNativeInput()!.nativeElement.value).toBe('12,34');
        }));
    });

    it(`Ненулевые копейки не показаны при decimal = 'never'`, fakeAsync(() => {
        testComponent.control.setValue(12.3);
        fixture.detectChanges();
        tick();

        expect(getNativeInput()!.nativeElement.value).toBe('12');
    }));

    it('Знак минус отсутствует при отрицательных значениях при min >= 0', fakeAsync(() => {
        testComponent.component.min = 0;
        testComponent.control.setValue(-12345);
        fixture.detectChanges();
        tick();

        expect(getNativeInput()!.nativeElement.value).toBe(`12${CHAR_NO_BREAK_SPACE}345`);
    }));

    it('Знак минус отсутствует при неотрицательном значении min', fakeAsync(() => {
        testComponent.component.min = 10;
        testComponent.control.setValue(-12345);
        fixture.detectChanges();
        tick();

        expect(getNativeInput()!.nativeElement!.value).toBe(
            `12${CHAR_NO_BREAK_SPACE}345`,
        );
    }));

    describe('onValue | обновление значений формы', () => {
        describe('Недозаполненное значение передаёт в форму null', () => {
            it(`Значение ''`, () => {
                component.onValue('');

                expect(testComponent.control.value).toBe(null);
            });

            it(`Значение '-'`, () => {
                component.onValue('-');

                expect(testComponent.control.value).toBe(null);
            });

            it(`Значение ','`, () => {
                component.onValue(',');

                expect(testComponent.control.value).toBe(null);
            });

            it(`Значение '-,'`, () => {
                component.onValue('-,');

                expect(testComponent.control.value).toBe(null);
            });
        });

        describe('Свойства min и max', () => {
            beforeEach(() => {
                inputPO.sendText('');
                testComponent.control.setValue(null);
            });

            it('Значение меньше положительного min не обновляет контрол', () => {
                testComponent.component.min = 15;
                component.onValue(`10`);

                expect(testComponent.control.value).toBe(null);
            });

            it('Значение больше max обрезается до max', () => {
                const savedMax = 25;

                testComponent.component.max = savedMax;
                component.onValue(`50`);

                expect(testComponent.control.value).toBe(savedMax);
            });

            it('Значение больше отрицательного max не обновляет контрол', () => {
                testComponent.component.max = -15;
                component.onValue(`-10`);

                expect(testComponent.control.value).toBe(null);
            });

            it('Значение меньше отрицательного min обрезается до min', () => {
                const savedMin = -25;

                testComponent.component.min = savedMin;
                component.onValue(`-50`);

                expect(testComponent.control.value).toBe(savedMin);
            });
        });

        it(`Корректно заполненное значение передаёт в форму number`, () => {
            component.onValue(`-12${CHAR_NO_BREAK_SPACE}345,67`);

            expect(testComponent.control.value).toBe(-12345.67);
        });
    });

    describe('computedValue | значение для отображения', () => {
        describe('Значение формы null не меняет отображаемое значение', () => {
            beforeEach(() => {
                testComponent.control.setValue(null);
            });

            it(`Значение ''`, () => {
                const value = '';

                inputPO.nativeElement.value = value;

                expect(component.computedValue).toBe(value);
            });

            it(`Значение '-'`, () => {
                const value = '-';

                inputPO.nativeElement.value = value;

                expect(component.computedValue).toBe(value);
            });

            it(`Значение ','`, () => {
                const value = ',';

                inputPO.nativeElement.value = value;

                expect(component.computedValue).toBe(value);
            });

            it(`Значение '-,'`, () => {
                const value = '-,';

                inputPO.nativeElement.value = value;

                expect(component.computedValue).toBe(value);
            });
        });

        it(`Заданное значение из формы корректно преобразовывается в строку`, () => {
            testComponent.control.setValue(-12345.67);

            expect(component.computedValue).toBe(`-12${CHAR_NO_BREAK_SPACE}345,67`);
        });

        it(`Не обрезает нули, если инпут в фокусе`, () => {
            component.decimal = TuiDecimal.NotZero;

            inputPO.focus();
            inputPO.sendText('10,07');
            inputPO.sendText('10,0');

            expect(component.computedValue).toBe('10,0');
        });

        it(`форматирует значение, если элемент вне фокуса`, () => {
            component.decimal = TuiDecimal.NotZero;

            inputPO.sendText('10,0');

            expect(component.computedValue).toBe('10');
        });
    });

    it('maxlength по умолчанию установлено на 18', () => {
        const nativeInput = getNativeInput()!.nativeElement;

        expect(nativeInput.getAttribute('maxlength')).toBe('18');
    });

    describe('При decimal === always', () => {
        it(`Добавляет определенное свойством precision количество нулей при обновлении Value целым числом`, () => {
            const value = '123';
            const precision = 2;

            component.decimal = TuiDecimal.Always;
            component.precision = precision;
            component.onValue(value);

            expect(component.computedValue).toBe(`${value},00`);
        });
    });

    function getNativeInput(): DebugElement | null {
        return pageObject.getByAutomationId('tui-primitive-textfield__native-input');
    }
});
