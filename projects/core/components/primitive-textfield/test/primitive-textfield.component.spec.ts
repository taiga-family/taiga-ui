import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiRootModule} from '@taiga-ui/core/components/root';
import {
    configureTestSuite,
    TuiNativeInputPO,
    TuiPageObject,
    tuiTestCleaner,
    tuiTestPlaceholder,
    tuiTestTooltip,
} from '@taiga-ui/testing';

import {TuiHintControllerModule} from '../../../directives/hint-controller/hint-controller.module';
import {TuiTextfieldControllerModule} from '../../../directives/textfield-controller';
import {TuiSizeL, TuiSizeS} from '../../../types/size';
import {TuiPrimitiveTextfieldComponent} from '../primitive-textfield.component';
import {TuiPrimitiveTextfieldModule} from '../primitive-textfield.module';

describe(`PrimitiveTextfield`, () => {
    @Component({
        template: `
            <tui-primitive-textfield
                [tuiTextfieldCleaner]="cleaner"
                [tuiTextfieldLabelOutside]="labelOutside"
                [tuiTextfieldSize]="size"
                [tuiHintContent]="hintContent"
                [readOnly]="readOnly"
                [invalid]="invalid"
                [disabled]="disabled"
                [filler]="filler"
                [postfix]="postfix"
                [pseudoFocus]="focused"
                [(value)]="value"
            >
                <input
                    tuiTextfield
                    placeholder="exampleText"
                />
            </tui-primitive-textfield>
        `,
    })
    class TestComponent {
        @ViewChild(TuiPrimitiveTextfieldComponent, {static: true})
        component!: TuiPrimitiveTextfieldComponent;

        cleaner = false;

        readOnly = false;

        labelOutside = false;

        size: TuiSizeS | TuiSizeL = `m`;

        exampleText = `placeholder`;

        hintContent: string | null = `prompt`;

        value = ``;

        filler = ``;

        postfix = ``;

        invalid = false;

        disabled = false;

        focused = false;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: TuiPageObject<TestComponent>;
    let inputPO: TuiNativeInputPO;

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
            return `tui-primitive-textfield__`;
        },
    };

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                NoopAnimationsModule,
                TuiPrimitiveTextfieldModule,
                TuiTextfieldControllerModule,
                TuiHintControllerModule,
                TuiRootModule,
            ],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;

        inputPO = new TuiNativeInputPO(fixture, `${testContext.prefix}native-input`);
    });

    describe(`value decoration`, () => {
        beforeEach(() => {
            testComponent.size = `l`;
        });

        it(`is not shown when value is empty and field is not focused`, () => {
            const example = `text`;
            const postfix = `post`;

            testComponent.exampleText = example;
            testComponent.postfix = postfix;

            fixture.detectChanges();

            expect(getValueDecoration()).toBe(``);
        });

        it(`value, filler and postfix are shown when value is not empty and field is focused`, () => {
            const value = `value`;
            const filler = `filler`;
            const postfix = `post`;

            testComponent.value = value;
            testComponent.filler = filler;
            testComponent.postfix = postfix;
            testComponent.focused = true;

            fixture.detectChanges();

            expect(getValueDecoration()).toBe(
                `${value}${filler.slice(value.length)} ${postfix}`,
            );
        });

        it(`value and postfix are shown when value is not empty`, () => {
            const value = `value`;
            const postfix = `post`;

            testComponent.value = value;
            testComponent.postfix = postfix;

            fixture.detectChanges();

            expect(getValueDecoration()).toBe(`${value} ${postfix}`);
        });
    });

    describe(`Example of filling in the field (example-text)`, () => {
        it(`if the input is not focused, then example-text is not shown`, async () => {
            await fixture.whenStable();
            expect(getValueDecoration()).toBe(``);
        });

        it(`if the input has value, then example-text is not shown`, async () => {
            testComponent.value = `value`;
            await fixture.whenStable();
            fixture.detectChanges();
            expect(getValueDecoration()).toBe(testComponent.value);
        });

        it(`if the input is focused, then example-text is shown`, async () => {
            testComponent.value = ``;
            testComponent.focused = true;

            fixture.detectChanges();
            await fixture.whenStable();
            fixture.detectChanges();
            expect(getValueDecoration()).toBe(testComponent.exampleText);
        });
    });

    tuiTestCleaner(testContext, `test`, ``);

    tuiTestTooltip(testContext);

    tuiTestPlaceholder(testContext);

    function getValueDecoration(): string {
        return pageObject
            .getByAutomationId(`tui-primitive-textfield__value-decoration`)!
            .nativeElement.textContent.trim()
            .replace(`\n `, ``);
    }
});
