import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {Component} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiToggleModule, tuiToggleOptionsProvider} from '@taiga-ui/kit';
import {configureTestSuite, TuiToggleHarness} from '@taiga-ui/testing';

describe(`Toggle`, () => {
    @Component({
        template: `
            <tui-toggle
                id="default"
                [formControl]="control"
                [showIcons]="false"
                [showLoader]="false"
            ></tui-toggle>
            <tui-toggle
                id="icons-shown"
                [formControl]="control"
                [showIcons]="true"
                [showLoader]="false"
            ></tui-toggle>
            <tui-toggle
                id="loader-shown"
                [formControl]="control"
                [showIcons]="false"
                [showLoader]="true"
            ></tui-toggle>
            <tui-toggle
                id="both-shown"
                [formControl]="control"
                [showIcons]="true"
                [showLoader]="true"
            ></tui-toggle>
        `,
    })
    class TestComponent {
        control = new FormControl();
    }

    let fixture: ComponentFixture<TestComponent>;
    let loader: HarnessLoader;
    let testComponent: TestComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, TuiToggleModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        loader = TestbedHarnessEnvironment.loader(fixture);
        testComponent = fixture.componentInstance;
    });

    it(`If value is not set, click changes the value to true`, async () => {
        const toggle = await loader.getHarness(
            TuiToggleHarness.with({selector: `#default`}),
        );

        await toggle.toggle();
        expect(testComponent.control.value).toBe(true);
    });

    it(`If value === false, click changes the value to true`, async () => {
        testComponent.control.setValue(false);
        const toggle = await loader.getHarness(
            TuiToggleHarness.with({selector: `#default`}),
        );

        await toggle.toggle();
        expect(testComponent.control.value).toBe(true);
    });

    it(`If value === true, click changes the value to false`, async () => {
        testComponent.control.setValue(true);
        const toggle = await loader.getHarness(
            TuiToggleHarness.with({selector: `#default`}),
        );

        await toggle.toggle();
        expect(testComponent.control.value).toBe(false);
    });

    it(`If the control is disabled, the click does not change the value`, async () => {
        testComponent.control.setValue(false);
        testComponent.control.disable();
        const toggle = await loader.getHarness(
            TuiToggleHarness.with({selector: `#default`}),
        );

        await toggle.toggle();
        expect(testComponent.control.value).toBe(false);
    });

    it(`If the control is un-disabled again, click reverses the value`, async () => {
        testComponent.control.setValue(false);
        testComponent.control.disable();
        const toggle = await loader.getHarness(
            TuiToggleHarness.with({selector: `#default`}),
        );

        testComponent.control.enable();
        await toggle.toggle();
        expect(testComponent.control.value).toBe(true);
    });

    describe(`Icons`, () => {
        describe(`showIcons === false`, () => {
            it(`Icons are hidden when toggle is "disabled"`, async () => {
                testComponent.control.setValue(false);
                const toggle = await loader.getHarness(
                    TuiToggleHarness.with({selector: `#default`}),
                );

                const icons = await toggle.getIcons();

                expect(icons.length).toBe(0);
            });

            it(`Icons are hidden when toggle is "on"`, async () => {
                testComponent.control.setValue(true);
                const toggle = await loader.getHarness(
                    TuiToggleHarness.with({selector: `#default`}),
                );

                const icons = await toggle.getIcons();

                expect(icons.length).toBe(0);
            });
        });

        describe(`showIcons === true`, () => {
            it(`Icons are shown when toggle is "disabled"`, async () => {
                testComponent.control.setValue(false);
                const toggle = await loader.getHarness(
                    TuiToggleHarness.with({selector: `#icons-shown`}),
                );
                const icons = await toggle.getIcons();

                // If icons are enabled, then both are added to the DOM at once -
                // implementation feature for smooth animation
                expect(icons.length).toBe(2);
            });

            it(`Icons are shown when toggle is "on"`, async () => {
                testComponent.control.setValue(true);
                const toggle = await loader.getHarness(
                    TuiToggleHarness.with({selector: `#icons-shown`}),
                );
                const icons = await toggle.getIcons();

                expect(icons.length).toBe(2);
            });
        });
    });

    describe(`Loader`, () => {
        describe(`showLoader === false`, () => {
            it(`Icons are hidden when toggle is "disabled"`, async () => {
                testComponent.control.setValue(false);
                const toggle = await loader.getHarness(
                    TuiToggleHarness.with({selector: `#default`}),
                );
                const icons = await toggle.getIcons();

                expect(icons.length).toBe(0);
            });

            it(`Icons are hidden when toggle is "on"`, async () => {
                testComponent.control.setValue(true);
                const toggle = await loader.getHarness(
                    TuiToggleHarness.with({selector: `#default`}),
                );

                const icons = await toggle.getIcons();

                expect(icons.length).toBe(0);
            });
        });

        describe(`showLoader === true`, () => {
            it(`Icons are hidden when toggle is disabled, loader takes precedence over them`, async () => {
                testComponent.control.setValue(false);
                const toggle = await loader.getHarness(
                    TuiToggleHarness.with({selector: `#both-shown`}),
                );
                const icons = await toggle.getIcons();

                expect(icons.length).toBe(0);
            });

            it(`Icons are hidden when toggle is on, loader takes precedence over them`, async () => {
                testComponent.control.setValue(true);
                const toggle = await loader.getHarness(
                    TuiToggleHarness.with({selector: `#both-shown`}),
                );
                const icons = await toggle.getIcons();

                expect(icons.length).toBe(0);
            });
        });
    });
});

describe(`Toggle with TUI_TOGGLE_OPTIONS`, () => {
    @Component({
        template: `
            <tui-toggle
                id="default"
                [formControl]="control"
                [showLoader]="false"
            ></tui-toggle>
        `,
    })
    class TestComponent {
        control = new FormControl();
    }

    let fixture: ComponentFixture<TestComponent>;
    let loader: HarnessLoader;
    let testComponent: TestComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, TuiToggleModule],
            declarations: [TestComponent],
            providers: [
                tuiToggleOptionsProvider({
                    showIcons: true,
                }),
            ],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        loader = TestbedHarnessEnvironment.loader(fixture);
        testComponent = fixture.componentInstance;
    });

    describe(`Icons`, () => {
        describe(`showIcons === true`, () => {
            it(`Icons are shown when toggle is "disabled"`, async () => {
                testComponent.control.setValue(false);
                const toggle = await loader.getHarness(
                    TuiToggleHarness.with({selector: `#default`}),
                );

                // If icons are enabled, then both are added to the DOM at once -
                // implementation feature for smooth animation
                const icons = await toggle.getIcons();

                expect(icons.length).toBe(2);
            });

            it(`Icons are shown when toggle is "on"`, async () => {
                testComponent.control.setValue(true);
                const toggle = await loader.getHarness(
                    TuiToggleHarness.with({selector: `#default`}),
                );

                const icons = await toggle.getIcons();

                expect(icons.length).toBe(2);
            });
        });
    });

    describe(`Loader`, () => {
        describe(`showLoader === false`, () => {
            it(`Icons are shown when toggle is "disabled"`, async () => {
                testComponent.control.setValue(false);
                const toggle = await loader.getHarness(
                    TuiToggleHarness.with({selector: `#default`}),
                );
                const icons = await toggle.getIcons();

                expect(icons.length).toBe(2);
            });

            it(`Icons are shown when toggle is "on"`, async () => {
                testComponent.control.setValue(true);
                const toggle = await loader.getHarness(
                    TuiToggleHarness.with({selector: `#default`}),
                );
                const icons = await toggle.getIcons();

                expect(icons.length).toBe(2);
            });
        });
    });
});
