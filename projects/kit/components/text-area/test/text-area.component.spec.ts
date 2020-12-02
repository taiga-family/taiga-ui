import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiHintControllerModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {
    NativeInputPO,
    PageObject,
    testExampleText,
    testFormControlState,
} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {DEFAULT_ROWS, LINE_HEIGHT_L, TuiTextAreaComponent} from '../text-area.component';
import {TuiTextAreaModule} from '../text-area.module';

const DEFAULT_HEIGHT = 108;

describe('TextArea', () => {
    @Component({
        template: `
            <tui-text-area
                [expandable]="expandable"
                [formControl]="control"
                [tuiTextfieldExampleText]="exampleText"
                [tuiTextfieldMaxLength]="maxLength"
                [readOnly]="readOnly"
                [rows]="rows"
                [tuiHintContent]="hintContent"
            ></tui-text-area>
        `,
    })
    class TestComponent {
        @ViewChild(TuiTextAreaComponent)
        component!: TuiTextAreaComponent;

        control = new FormControl();

        readOnly = false;

        rows = DEFAULT_ROWS;

        maxLength: number | null = null;

        exampleText = 'placeholder';

        expandable = false;

        hintContent: string | null = 'Подсказка';
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: PageObject<TestComponent>;
    let inputPO: NativeInputPO;
    let component: TuiTextAreaComponent;

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
            return 'tui-text-area__';
        },
    };

    function getPlaceholder(): DebugElement | null {
        return pageObject.getByAutomationId(`${testContext.prefix}placeholder`);
    }

    function getWrapper(): DebugElement {
        return pageObject.getByAutomationId(`${testContext.prefix}wrapper`)!;
    }

    function getTooltip(): DebugElement {
        return pageObject.getByAutomationId(`${testContext.prefix}tooltip`)!;
    }

    function getScrollbar(): HTMLElement {
        return pageObject.getByAutomationId(`${testContext.prefix}scrollbar`)!
            .nativeElement;
    }

    function getCounter(): DebugElement {
        return pageObject.getByAutomationId(`${testContext.prefix}counter`)!;
    }

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                NoopAnimationsModule,
                ReactiveFormsModule,
                TuiTextAreaModule,
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
        component = testComponent.component;
        inputPO = new NativeInputPO(fixture, `${testContext.prefix}native`);
    });

    describe('expandable:', () => {
        it('по умолчанию поле не растягивается', () => {
            fixture.detectChanges();

            expect(component.computeMaxHeight).toBeNull();
        });

        it('при expandable true у поля появляется MaxHeight', () => {
            testComponent.expandable = true;
            fixture.detectChanges();

            expect(component.computeMaxHeight).not.toBeNull();
        });

        it('дефолтное значение MaxHeight корректно рассчитывается', () => {
            testComponent.expandable = true;
            fixture.detectChanges();

            const maxHeight = component.rows * LINE_HEIGHT_L;

            expect(getScrollbar().style.maxHeight).toEqual(maxHeight + 'px');
        });

        it('при изменении rows MaxHeight корректно рассчитывается', () => {
            testComponent.expandable = true;
            testComponent.rows = 10;
            fixture.detectChanges();

            const maxHeight = component.rows * LINE_HEIGHT_L;

            expect(getScrollbar().style.maxHeight).toEqual(maxHeight + 'px');
        });

        it('при изменении rows MaxHeight корректно рассчитывается', () => {
            testComponent.expandable = true;
            testComponent.rows = 15;
            fixture.detectChanges();

            const maxHeight = component.rows * LINE_HEIGHT_L;

            expect(getScrollbar().style.maxHeight).toEqual(maxHeight + 'px');
        });

        it('при expandable true и увеличении размера контента увеличивается высота tui-outline', () => {
            testComponent.expandable = true;
            testComponent.control.setValue(`
                Льется дождик золотой,
                С ёлочки стекая.
                Полюбуйтесь на неё:
                Вот она какая!
                Вся сверкает и цветёт
                Яркими огнями.
                Приглашает в хоровод
                Веселиться с нами.
                Новый год уже в пути,
                Скоро к нам приедет.
                Ярче, елочка, свети
                Ты на радость детям!
            `);

            fixture.detectChanges();

            expect(getWrapper().nativeElement.offsetHeight > DEFAULT_HEIGHT).toBeTruthy();
        });
    });

    describe('counter и maxLength:', () => {
        it('по умолчанию счетчика нет', () => {
            fixture.detectChanges();

            expect(getCounter()).toBeNull();
        });

        it('по умолчанию счетчика нет', () => {
            fixture.detectChanges();

            expect(getCounter()).toBeNull();
        });

        it('с выставленным maxLength счетчик есть', () => {
            testComponent.maxLength = 200;
            fixture.detectChanges();

            expect(getCounter()).not.toBeNull();
        });

        it('с выставленным maxLength и в disabled-состоянии счетчика нет', () => {
            testComponent.maxLength = 200;
            testComponent.control.disable();
            fixture.detectChanges();

            expect(getCounter()).toBeNull();
        });

        it('с выставленным maxLength и в readOnly-состоянии счетчика нет', () => {
            testComponent.maxLength = 200;
            testComponent.readOnly = true;
            fixture.detectChanges();

            expect(getCounter()).toBeNull();
        });
    });

    describe('placeholder', () => {
        it('если значение не задано, показан placeholder', () => {
            fixture.detectChanges();

            expect(getPlaceholder()).not.toBeNull();
        });

        it('если значение - пустая строка, показан placeholder', () => {
            testComponent.control.setValue('');
            fixture.detectChanges();

            expect(getPlaceholder()).not.toBeNull();
        });

        it('значение задано, то placeholder показан', () => {
            testComponent.control.setValue('test');
            fixture.detectChanges();

            expect(getPlaceholder()).not.toBeNull();
        });
    });

    describe('tooltip', () => {
        it('если значение задано, показан tooltip', () => {
            testComponent.hintContent = 'Tooltip';

            fixture.detectChanges();

            expect(getTooltip()).not.toBeNull();
        });
    });

    testFormControlState(testContext);

    testExampleText(testContext, 'value', null);
});
