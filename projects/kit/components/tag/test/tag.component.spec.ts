import {HarnessLoader, TestKey} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiTagComponent, TuiTagModule} from '@taiga-ui/kit';
import {configureTestSuite, TuiTagHarness} from '@taiga-ui/testing';

describe(`Tag`, () => {
    @Component({
        template: `
            <tui-tag
                id="default"
                [value]="tag"
            ></tui-tag>
            <tui-tag
                id="changed"
                [value]="'Tag'"
                [removable]="true"
                [editable]="true"
                [autoColor]="false"
                (edited)="editedSpy($event)"
            ></tui-tag>
        `,
    })
    class TestComponent {
        @ViewChild(TuiTagComponent, {static: true})
        component!: TuiTagComponent;

        editedSpy = jest.fn();
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let loader: HarnessLoader;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiTagModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        loader = TestbedHarnessEnvironment.loader(fixture);
        testComponent = fixture.componentInstance;
        testComponent.editedSpy.mockClear();
        fixture.detectChanges();
    });

    describe(`Default values:`, () => {
        it(`Cross not shown`, async () => {
            const tag = await loader.getHarness(
                TuiTagHarness.with({selector: `#default`}),
            );
            const icon = await tag.getCrossIcon();

            expect(icon).toBeNull();
        });

        it(`Tag is not editable`, async () => {
            const tag = await loader.getHarness(
                TuiTagHarness.with({selector: `#default`}),
            );

            await tag.sendEnter();
            const input = await tag.getInput();

            expect(input).toBeNull();
        });
    });

    describe(`Editing a tag, editable === true`, () => {
        let tag: TuiTagHarness;

        beforeEach(async () => {
            tag = await loader.getHarness(TuiTagHarness.with({selector: `#changed`}));
            await tag.sendEnter();
        });

        it(`Tag is being edited`, async () => {
            const input = await tag.getInput();

            expect(input).not.toBeNull();
        });

        it(`Emit an edit event on enter`, async () => {
            const input = await tag.getInput();

            await input?.setInputValue(`Hapica`);
            await input?.dispatchEvent(`input`);
            await input?.sendKeys(TestKey.ENTER);
            expect(testComponent.editedSpy).toHaveBeenCalledWith(`Hapica`);
        });

        it(`Emitting edit event on field exit`, async () => {
            const input = await tag.getInput();

            await input?.setInputValue(`Hapica`);
            await input?.dispatchEvent(`input`);
            await input?.blur();
            expect(testComponent.editedSpy).toHaveBeenCalledWith(`Hapica`);
        });

        it(`Emitting edit event on comma input`, async () => {
            const input = await tag.getInput();

            await input?.setInputValue(`Hapica, ogo`);
            await input?.dispatchEvent(`input`);
            expect(testComponent.editedSpy).toHaveBeenCalledWith(`Hapica, ogo`);
        });

        it(`Issuer empty string when storing empty tag`, async () => {
            const input = await tag.getInput();

            await input?.setInputValue(``);
            await input?.dispatchEvent(`input`);
            await input?.blur();
            expect(testComponent.editedSpy).toHaveBeenCalledWith(``);
        });
    });

    describe(`Deleting a tag`, () => {
        it(`Cross shown with removable === true`, async () => {
            const tag = await loader.getHarness(
                TuiTagHarness.with({selector: `#changed`}),
            );
            const icon = await tag.getCrossIcon();

            expect(icon).not.toBeNull();
        });

        it(`Emit an empty line across a cross`, async () => {
            const tag = await loader.getHarness(
                TuiTagHarness.with({selector: `#changed`}),
            );
            const icon = await tag.getCrossIcon();

            await icon?.click();

            expect(testComponent.editedSpy).toHaveBeenCalledWith(``);
        });

        it(`When you press the backspace on the tag, an empty line is emitted`, async () => {
            const tag = await loader.getHarness(
                TuiTagHarness.with({selector: `#changed`}),
            );

            await tag.sendBackspace();
            expect(testComponent.editedSpy).toHaveBeenCalledWith(``);
        });

        it(`When you press delete on the tag, an empty string is emitted`, async () => {
            const tag = await loader.getHarness(
                TuiTagHarness.with({selector: `#changed`}),
            );

            await tag.sendDelete();
            expect(testComponent.editedSpy).toHaveBeenCalledWith(``);
        });
    });

    // TODO: remake stringHashToHsl to stringHashToRgb and include test
    xdescribe(`Tag color`, () => {
        it(`when autoColor is enabled, the color will be rgb(241, 188, 229)`, async () => {
            const tag = await loader.getHarness(TuiTagHarness);
            const backgroundColor = await tag.getBackgroundColor();

            expect(backgroundColor).toBe(`rgb(241, 188, 229)`);
        });
    });
});
