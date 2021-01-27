import {Component, DebugElement, ElementRef, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
    NativeInputPO,
    PageObject,
    testCleaner,
    testExampleText,
    testPlaceholder,
    testTooltip,
} from '@taiga-ui/testing';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';
import {configureTestSuite} from 'ng-bullet';
import {TuiHintControllerModule} from '../../../directives/hint-controller/hint-controller.module';
import {TuiModeModule} from '../../../directives/mode/mode.module';
import {TuiTextfieldControllerModule} from '../../../directives/textfield-controller';
import {TuiBrightness} from '../../../types/brightness';
import {TuiSizeL, TuiSizeS} from '../../../types/size';
import {TuiPrimitiveTextfieldComponent} from '../primitive-textfield.component';
import {TuiPrimitiveTextfieldModule} from '../primitive-textfield.module';

describe('PrimitiveTextfield', () => {
    @Component({
        template: `
            <div [tuiMode]="mode">
                <tui-primitive-textfield
                    [tuiTextfieldCleaner]="cleaner"
                    [tuiTextfieldExampleText]="exampleText"
                    [tuiTextfieldLabelOutside]="labelOutside"
                    [tuiTextfieldSize]="size"
                    [readOnly]="readOnly"
                    [tuiHintContent]="hintContent"
                    [invalid]="invalid"
                    [disabled]="disabled"
                    [(value)]="value"
                ></tui-primitive-textfield>
            </div>
        `,
    })
    class TestComponent {
        @ViewChild(TuiPrimitiveTextfieldComponent, {static: true})
        component: TuiPrimitiveTextfieldComponent;

        @ViewChild('submit')
        submit: ElementRef<HTMLButtonElement>;

        cleaner = false;

        readOnly = false;

        labelOutside = false;

        size: TuiSizeS | TuiSizeL = 'm';

        exampleText = 'placeholder';

        hintContent: string | null = 'prompt';

        value = '';

        invalid = false;

        disabled = false;

        mode: TuiBrightness | null = null;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: PageObject<TestComponent>;
    let inputPO: NativeInputPO;

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
            return 'tui-primitive-textfield__';
        },
    };

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                NoopAnimationsModule,
                TuiPrimitiveTextfieldModule,
                TuiTextfieldControllerModule,
                TuiHintControllerModule,
                TuiModeModule,
            ],
            declarations: [TestComponent],
            providers: NG_EVENT_PLUGINS,
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;

        inputPO = new NativeInputPO(fixture, `${testContext.prefix}native-input`);
    });

    describe('background', () => {
        it('gets light mode correctly', () => {
            testComponent.mode = 'onDark';
            fixture.detectChanges();

            expect(testComponent.component.hostMode).toBe('onDark');
        });

        it('gets dark mode correctly', () => {
            testComponent.mode = 'onLight';
            fixture.detectChanges();

            expect(testComponent.component.hostMode).toBe('onLight');
        });
    });

    describe('value decoration', () => {
        beforeEach(() => {
            testComponent.size = 'l';
        });

        it('is not swown when value is empty and field is not focused', () => {
            const example = 'text';
            const postfix = 'post';

            testComponent.exampleText = example;
            testComponent.component.postfix = postfix;

            fixture.detectChanges();

            expect(getValueDecoration()).toBeNull();
        });

        it('value, filler and postfix are shown when value is not empty and field is focused', () => {
            const value = 'value';
            const filler = 'filler';
            const postfix = 'post';

            testComponent.value = value;
            testComponent.component.filler = filler;
            testComponent.component.postfix = postfix;

            testComponent.component.onFocused(true);

            fixture.detectChanges();

            expect(getValueDecoration()!.nativeElement.textContent.trim()).toBe(
                value + filler.slice(value.length) + postfix,
            );
        });

        it('value and postfix are shpwn when value is not empty', () => {
            const value = 'value';
            const postfix = 'post';

            testComponent.value = value;
            testComponent.component.postfix = postfix;

            fixture.detectChanges();

            expect(getValueDecoration()!.nativeElement.textContent.trim()).toBe(
                value + postfix,
            );
        });
    });

    testCleaner(testContext, 'test', '');

    testExampleText(testContext);

    testTooltip(testContext);

    testPlaceholder(testContext);

    function getValueDecoration(): DebugElement | null {
        return pageObject.getByAutomationId('tui-primitive-textfield__value-decoration');
    }
});
