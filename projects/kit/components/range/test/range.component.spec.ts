import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {PageObject} from '@taiga-ui/testing';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';
import {TuiRangeComponent} from '../range.component';
import {TuiRangeModule} from '../range.module';

describe('Range', () => {
    @Component({
        template: `
            <tui-range
                [formControl]="testValue"
                [max]="max"
                [min]="min"
                [steps]="steps"
                [segments]="segments"
            ></tui-range>
        `,
    })
    class TestComponent {
        @ViewChild(TuiRangeComponent, {static: true})
        component: TuiRangeComponent;

        testValue = new FormControl([3, 5]);
        max = 11;
        min = 1;
        segments = 10;
        steps = 10;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: PageObject<TestComponent>;
    const keydownArrowLeft = new KeyboardEvent('keydown', {
        key: 'arrowLeft',
    });
    const keydownArrowRight = new KeyboardEvent('keydown', {
        key: 'arrowRight',
    });
    const testContext = {
        get prefix() {
            return 'tui-slider__';
        },
    };

    function getLeft(): HTMLElement {
        return pageObject.getByAutomationId(`${testContext.prefix}left`)!.nativeElement;
    }

    function getRight(): HTMLElement {
        return pageObject.getByAutomationId(`${testContext.prefix}right`)!.nativeElement;
    }

    function getBar(): HTMLElement {
        return pageObject.getByAutomationId(`${testContext.prefix}bar`)!.nativeElement;
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, TuiRangeModule],
            declarations: [TestComponent],
            providers: NG_EVENT_PLUGINS,
        });

        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('Полоса заполнена с 20% до 40%', () => {
        expect(getBar().style.left).toBe('20%');
        expect(getBar().style.right).toBe('60%');
    });

    describe('Изменение значений', () => {
        describe('Левая точка', () => {
            it('При нажатии на стрелку влево уменьшает значение на один шаг', () => {
                getLeft().dispatchEvent(keydownArrowLeft);

                expect(testComponent.testValue.value[0]).toBe(2);
                expect(testComponent.testValue.value[1]).toBe(5);
            });

            it('При нажатии на стрелку вправо увеличивает значение на один шаг', () => {
                getLeft().dispatchEvent(keydownArrowRight);

                expect(testComponent.testValue.value[0]).toBe(4);
                expect(testComponent.testValue.value[1]).toBe(5);
            });

            it('При нажатии на стрелку влево корректно закрашивает полоску', () => {
                getLeft().dispatchEvent(keydownArrowLeft);
                fixture.detectChanges();

                expect(getBar().style.left).toBe('10%');
                expect(getBar().style.right).toBe('60%');
            });

            it('При нажатии на стрелку вправо корректно закрашивает полоску', () => {
                getLeft().dispatchEvent(keydownArrowRight);
                fixture.detectChanges();

                expect(getBar().style.left).toBe('30%');
                expect(getBar().style.right).toBe('60%');
            });
        });

        describe('Правая точка', () => {
            it('При нажатии на стрелку влево уменьшает значение на один шаг', () => {
                getRight().dispatchEvent(keydownArrowLeft);

                expect(testComponent.testValue.value[0]).toBe(3);
                expect(testComponent.testValue.value[1]).toBe(4);
            });

            it('При нажатии на стрелку вправо увеличивает значение на один шаг', () => {
                getRight().dispatchEvent(keydownArrowRight);

                expect(testComponent.testValue.value[0]).toBe(3);
                expect(testComponent.testValue.value[1]).toBe(6);
            });

            it('При нажатии на стрелку влево корректно закрашивает полоску', () => {
                getRight().dispatchEvent(keydownArrowLeft);
                fixture.detectChanges();

                expect(getBar().style.left).toBe('20%');
                expect(getBar().style.right).toBe('70%');
            });

            it('При нажатии на стрелку вправо корректно закрашивает полоску', () => {
                getRight().dispatchEvent(keydownArrowRight);
                fixture.detectChanges();

                expect(getBar().style.left).toBe('20%');
                expect(getBar().style.right).toBe('50%');
            });
        });

        describe('Границы', () => {
            it('Не даёт левой границе превысить правую', () => {
                testComponent.testValue.setValue([5, 5]);
                getLeft().dispatchEvent(keydownArrowRight);
                fixture.detectChanges();

                expect(testComponent.testValue.value[0]).toBe(5);
            });

            it('Не даёт правой границе снизиться ниже левой', () => {
                testComponent.testValue.setValue([5, 5]);
                getRight().dispatchEvent(keydownArrowLeft);
                fixture.detectChanges();

                expect(testComponent.testValue.value[1]).toBe(5);
            });

            it('Не даёт значению убавиться ниже минимального', () => {
                testComponent.testValue.setValue([1, 11]);
                getLeft().dispatchEvent(keydownArrowLeft);
                fixture.detectChanges();

                expect(testComponent.testValue.value[0]).toBe(1);
            });

            it('Не даёт значению превысить максимальное', () => {
                testComponent.testValue.setValue([1, 11]);
                getRight().dispatchEvent(keydownArrowRight);
                fixture.detectChanges();

                expect(testComponent.testValue.value[1]).toBe(11);
            });

            it('Прибивает значение к ближайшему допустимому шагу', () => {
                testComponent.testValue.setValue([3.3, 5]);
                getLeft().dispatchEvent(keydownArrowRight);
                fixture.detectChanges();

                expect(testComponent.testValue.value[0]).toBe(4);
            });
        });
    });
});
