import type {DebugElement} from '@angular/core';
import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {tuiPx} from '@taiga-ui/cdk';
import {TuiHint} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {
    DEFAULT_ROWS,
    LINE_HEIGHT_L,
    TuiTextareaComponent,
    TuiTextareaModule,
} from '@taiga-ui/legacy';
import {
    TuiNativeInputPO,
    TuiPageObject,
    tuiTestFormControlState,
} from '@taiga-ui/testing';

const DEFAULT_HEIGHT = 108;

describe('Textarea', () => {
    @Component({
        standalone: true,
        imports: [ReactiveFormsModule, TuiHint, TuiTextareaModule],
        template: `
            <tui-textarea
                [expandable]="expandable"
                [formControl]="control"
                [maxLength]="maxLength"
                [readOnly]="readOnly"
                [rows]="rows"
                [tuiHintContent]="hintContent"
            ></tui-textarea>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        @ViewChild(TuiTextareaComponent, {static: true})
        public component!: TuiTextareaComponent;

        public control = new FormControl<string>('');

        public readOnly = false;

        public rows = DEFAULT_ROWS;

        public maxLength: number | null = null;

        public expandable = false;

        public hintContent: string | null = 'prompt';
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let pageObject: TuiPageObject<Test>;
    let inputPO: TuiNativeInputPO;
    let component: TuiTextareaComponent;

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

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;
        component = testComponent.component;
        inputPO = new TuiNativeInputPO(fixture, `${testContext.prefix}native`);
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

            expect(getScrollbar().style.maxHeight).toEqual(tuiPx(maxHeight));
        });

        it('when rows (10) change, MaxHeight is calculated correctly', () => {
            testComponent.expandable = true;
            testComponent.rows = 10;
            fixture.detectChanges();

            const maxHeight = component.rows * LINE_HEIGHT_L;

            expect(getScrollbar().style.maxHeight).toEqual(tuiPx(maxHeight));
        });

        it('when rows (15) change, MaxHeight is calculated correctly', () => {
            testComponent.expandable = true;
            testComponent.rows = 15;
            fixture.detectChanges();

            const maxHeight = component.rows * LINE_HEIGHT_L;

            expect(getScrollbar().style.maxHeight).toEqual(tuiPx(maxHeight));
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

            expect(
                (testComponent.component.computeMaxHeight ?? 0) > DEFAULT_HEIGHT,
            ).toBeTruthy();
        });
    });

    describe('counter and maxLength:', () => {
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

    tuiTestFormControlState(testContext);
});
