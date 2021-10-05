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
        @ViewChild(TuiTextAreaComponent, {static: true})
        component!: TuiTextAreaComponent;

        control = new FormControl();

        readOnly = false;

        rows = DEFAULT_ROWS;

        maxLength: number | null = null;

        exampleText = 'placeholder';

        expandable = false;

        hintContent: string | null = 'prompt';
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
        it('by default the field is not stretched', () => {
            fixture.detectChanges();

            expect(component.computeMaxHeight).toBeNull();
        });

        it('when expandable true, the field has MaxHeight', () => {
            testComponent.expandable = true;
            fixture.detectChanges();

            expect(component.computeMaxHeight).not.toBeNull();
        });

        it('the default MaxHeight value is calculated correctly', () => {
            testComponent.expandable = true;
            fixture.detectChanges();

            const maxHeight = component.rows * LINE_HEIGHT_L;

            expect(getScrollbar().style.maxHeight).toEqual(maxHeight + 'px');
        });

        it('when rows change, MaxHeight is calculated correctly', () => {
            testComponent.expandable = true;
            testComponent.rows = 10;
            fixture.detectChanges();

            const maxHeight = component.rows * LINE_HEIGHT_L;

            expect(getScrollbar().style.maxHeight).toEqual(maxHeight + 'px');
        });

        it('when rows change, MaxHeight is calculated correctly', () => {
            testComponent.expandable = true;
            testComponent.rows = 15;
            fixture.detectChanges();

            const maxHeight = component.rows * LINE_HEIGHT_L;

            expect(getScrollbar().style.maxHeight).toEqual(maxHeight + 'px');
        });

        it('when expandable is true and the content size increases, the tui-outline height increases', () => {
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

    describe('counter and maxLength:', () => {
        it('there is no counter by default', () => {
            fixture.detectChanges();

            expect(getCounter()).toBeNull();
        });

        it('there is no counter by default', () => {
            fixture.detectChanges();

            expect(getCounter()).toBeNull();
        });

        it('with set maxLength the counter is', () => {
            testComponent.maxLength = 200;
            fixture.detectChanges();

            expect(getCounter()).not.toBeNull();
        });

        it('with maxLength set and there is no counter in the disabled state', () => {
            testComponent.maxLength = 200;
            testComponent.control.disable();
            fixture.detectChanges();

            expect(getCounter()).toBeNull();
        });

        it('with maxLength set and there is no counter in the readOnly state', () => {
            testComponent.maxLength = 200;
            testComponent.readOnly = true;
            fixture.detectChanges();

            expect(getCounter()).toBeNull();
        });
    });

    describe('placeholder', () => {
        it('if no value is given, placeholder is shown', () => {
            fixture.detectChanges();

            expect(getPlaceholder()).not.toBeNull();
        });

        it('if value is empty string, placeholder is shown', () => {
            testComponent.control.setValue('');
            fixture.detectChanges();

            expect(getPlaceholder()).not.toBeNull();
        });

        it('value is given then placeholder is shown', () => {
            testComponent.control.setValue('test');
            fixture.detectChanges();

            expect(getPlaceholder()).not.toBeNull();
        });
    });

    describe('tooltip', () => {
        it('if set, tooltip is shown', () => {
            testComponent.hintContent = 'Tooltip';

            fixture.detectChanges();

            expect(getTooltip()).not.toBeNull();
        });
    });

    testFormControlState(testContext);

    testExampleText(testContext, 'value', null);
});
