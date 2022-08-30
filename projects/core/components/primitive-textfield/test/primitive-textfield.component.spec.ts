import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
    TuiHintModule,
    TuiPrimitiveTextfieldModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiRootModule} from '@taiga-ui/core/components/root';
import {configureTestSuite, TuiPrimitiveTextfieldHarness} from '@taiga-ui/testing';

describe(`PrimitiveTextfield`, () => {
    @Component({
        template: `
            <tui-primitive-textfield id="test1"></tui-primitive-textfield>
            <tui-primitive-textfield
                id="test2"
                [filler]="'filler'"
                [postfix]="'post'"
                [value]="'value'"
                [pseudoFocus]="true"
            ></tui-primitive-textfield>
            <tui-primitive-textfield
                id="test3"
                [postfix]="'post'"
                [value]="'value'"
            ></tui-primitive-textfield>
            <tui-primitive-textfield id="test4"></tui-primitive-textfield>
            <tui-primitive-textfield
                id="test5"
                [value]="'value'"
            ></tui-primitive-textfield>
            <tui-primitive-textfield
                id="test6"
                [pseudoFocus]="focused"
                [value]="''"
            >
                <input
                    tuiTextfield
                    [attr.placeholder]="'placeholder'"
                />
            </tui-primitive-textfield>
        `,
    })
    class TestComponent {}

    let fixture: ComponentFixture<TestComponent>;
    let loader: HarnessLoader;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                NoopAnimationsModule,
                TuiPrimitiveTextfieldModule,
                TuiTextfieldControllerModule,
                TuiHintModule,
                TuiRootModule,
            ],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        loader = TestbedHarnessEnvironment.loader(fixture);
    });

    describe(`value decoration`, () => {
        it(`is not shown when value is empty and field is not focused`, async () => {
            const component = await loader.getHarness(
                TuiPrimitiveTextfieldHarness.with({selector: `#test1`}),
            );
            const valueDecorationText = await component.valueDecorationText();

            expect(valueDecorationText).toBe(``);
        });

        it(`value, filler and postfix are shown when value is not empty and field is focused`, async () => {
            const value = `value`;
            const filler = `filler`;
            const postfix = `post`;

            const component = await loader.getHarness(
                TuiPrimitiveTextfieldHarness.with({selector: `#test2`}),
            );
            const valueDecorationText = await component.valueDecorationText();

            expect(valueDecorationText).toBe(
                `${value}${filler.slice(value.length)} ${postfix}`,
            );
        });

        it(`value and postfix are shown when value is not empty`, async () => {
            const component = await loader.getHarness(
                TuiPrimitiveTextfieldHarness.with({selector: `#test3`}),
            );
            const valueDecorationText = await component.valueDecorationText();

            expect(valueDecorationText).toBe(`value post`);
        });
    });

    describe(`Example of filling in the field (example-text)`, () => {
        it(`if the input is not focused, then example-text is not shown`, async () => {
            const component = await loader.getHarness(
                TuiPrimitiveTextfieldHarness.with({selector: `#test4`}),
            );
            const valueDecorationText = await component.valueDecorationText();

            expect(valueDecorationText).toBe(``);
        });

        it(`if the input has value, then example-text is not shown`, async () => {
            const component = await loader.getHarness(
                TuiPrimitiveTextfieldHarness.with({selector: `#test5`}),
            );
            const valueDecorationText = await component.valueDecorationText();

            expect(valueDecorationText).toBe(`value`);
        });

        it(`if the input is focused, then example-text is shown`, async () => {
            const component = await loader.getHarness(
                TuiPrimitiveTextfieldHarness.with({selector: `#test6`}),
            );
            const placeholder = await component.inputPlaceholder();

            expect(placeholder).toBe(`placeholder`);
        });
    });
});
