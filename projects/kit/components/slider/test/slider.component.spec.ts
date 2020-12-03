import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiPluralize} from '@taiga-ui/core';
import {PageObject} from '@taiga-ui/testing';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';
import {configureTestSuite} from 'ng-bullet';
import {TuiKeySteps} from '../../../types/key-steps';
import {TuiSliderComponent} from '../slider.component';
import {TuiSliderModule} from '../slider.module';

describe('Slider', () => {
    @Component({
        template: `
            <tui-slider *ngIf="default" max="10" [formControl]="testValue"></tui-slider>
            <tui-slider
                *ngIf="!default"
                [formControl]="testValue"
                [max]="max"
                [min]="min"
                [steps]="steps"
                [segments]="segments"
                [keySteps]="keySteps"
                [pluralize]="pluralize"
            ></tui-slider>
        `,
    })
    class TestComponent {
        @ViewChild(TuiSliderComponent, {static: true})
        component!: TuiSliderComponent;

        testValue = new FormControl(5);
        default = false;
        max = 11;
        min = 1;
        segments = 10;
        steps = 10;
        pluralize: TuiPluralize | null = null;
        keySteps: TuiKeySteps | null = null;
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

    function getDot(): HTMLElement {
        return pageObject.getByAutomationId(`${testContext.prefix}right`)!.nativeElement;
    }

    function getSegments(): DebugElement[] {
        return pageObject.getAllByAutomationId(`${testContext.prefix}segment`);
    }

    function getBar(): HTMLElement {
        return pageObject.getByAutomationId(`${testContext.prefix}bar`)!.nativeElement;
    }

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, TuiSliderModule],
            declarations: [TestComponent],
            providers: NG_EVENT_PLUGINS,
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe('Значения по умолчанию', () => {
        beforeEach(() => {
            testComponent.default = true;
            fixture.detectChanges();
        });

        it('Сегменты отсутствуют', () => {
            expect(getSegments().length).toBe(0);
        });

        it('При нажатии на стрелку влево уменьшает значение на 5%', () => {
            getDot().dispatchEvent(keydownArrowLeft);

            expect(testComponent.testValue.value).toBe(4.5);
        });

        it('При нажатии на стрелку вправо увеличивает значение на 5%', () => {
            getDot().dispatchEvent(keydownArrowRight);

            expect(testComponent.testValue.value).toBe(5.5);
        });
    });

    it('Полоса заполнена на 40%', () => {
        expect(getBar().style.right).toBe('60%');
    });

    describe('Сегменты', () => {
        it('Сегменты присутствуют', () => {
            expect(getSegments().length).toBe(11);
        });

        it('Сегменты подписаны правильно', () => {
            expect(getSegments()[1].nativeElement.textContent.trim()).toBe('2');
        });

        it('Сегменты подписаны правильно с формой множественного числа', () => {
            testComponent.pluralize = ['год', 'года', 'лет'];
            fixture.detectChanges();

            expect(
                getSegments()[1].nativeElement.textContent.replace(/\s+/g, ' ').trim(),
            ).toBe('2 года');
        });
    });

    describe('Нелинейная зависимость', () => {
        beforeEach(() => {
            testComponent.keySteps = [[50, 100]];
            testComponent.min = 0;
            testComponent.max = 1000;
            testComponent.testValue.setValue(50);
            fixture.detectChanges();
        });

        it('Полоса заполнена на 25%', () => {
            expect(getBar().style.right).toBe('75%');
        });

        it('Полоса заполнена на 50%', () => {
            testComponent.testValue.setValue(100);
            fixture.detectChanges();

            expect(getBar().style.right).toBe('50%');
        });

        it('Полоса заполнена на 75%', () => {
            testComponent.testValue.setValue(550);
            fixture.detectChanges();

            expect(getBar().style.right).toBe('25%');
        });
    });

    describe('Шаги', () => {
        it('При нажатии на стрелку влево уменьшает значение на один шаг', () => {
            getDot().dispatchEvent(keydownArrowLeft);

            expect(testComponent.testValue.value).toBe(4);
        });

        it('При нажатии на стрелку вправо увеличивает значение на один шаг', () => {
            getDot().dispatchEvent(keydownArrowRight);

            expect(testComponent.testValue.value).toBe(6);
        });

        it('При нажатии на стрелку влево корректно закрашивает полоску', () => {
            getDot().dispatchEvent(keydownArrowLeft);
            fixture.detectChanges();

            expect(getBar().style.right).toBe('70%');
        });

        it('При нажатии на стрелку вправо корректно закрашивает полоску', () => {
            getDot().dispatchEvent(keydownArrowRight);
            fixture.detectChanges();

            expect(getBar().style.right).toBe('50%');
        });

        it('Не даёт значению убавиться ниже минимального', () => {
            testComponent.testValue.setValue(1);
            getDot().dispatchEvent(keydownArrowLeft);
            fixture.detectChanges();

            expect(testComponent.testValue.value).toBe(1);
        });

        it('Не даёт значению привысить максимальное', () => {
            testComponent.testValue.setValue(11);
            getDot().dispatchEvent(keydownArrowRight);
            fixture.detectChanges();

            expect(testComponent.testValue.value).toBe(11);
        });

        it('Прибивает значение к ближайшему допустимому шагу', () => {
            testComponent.testValue.setValue(3.3);
            getDot().dispatchEvent(keydownArrowRight);
            fixture.detectChanges();

            expect(testComponent.testValue.value).toBe(4);
        });
    });
});
