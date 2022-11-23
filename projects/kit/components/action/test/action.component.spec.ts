import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {configureTestSuite, TuiActionHarness} from '@taiga-ui/testing';

import {TuiActionComponent} from '../action.component';
import {TuiActionModule} from '../action.module';

describe(`Action`, () => {
    @Component({
        template: `
            <button
                tuiAction
                [icon]="icon"
            >
                {{ text || 'Some action' }}
            </button>
            <a
                tuiAction
                target="_blank"
                href="http://www.montypython.com/"
                [icon]="icon"
            >
                {{ text || 'Some action' }}
            </a>
        `,
    })
    class TestComponent {
        @ViewChild(TuiActionComponent, {static: true})
        component!: TuiActionComponent;

        @ViewChild(TuiActionComponent, {read: ElementRef, static: true})
        element!: ElementRef<Element>;

        icon!: string;

        text!: string;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let loader: HarnessLoader;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiActionModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        loader = TestbedHarnessEnvironment.loader(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe(`host element`, () => {
        it(`can be a button`, async () => {
            const action = await loader.getHarness(
                TuiActionHarness.with({selector: `button`}),
            );

            expect(action).toBeTruthy();
        });

        it(`can be an anchor`, async () => {
            const action = await loader.getHarness(
                TuiActionHarness.with({selector: `a`}),
            );

            expect(action).toBeTruthy();
        });
    });

    describe(`icon:`, () => {
        it(`if value is provided, a TuiMarkerIconComponent is displayed`, async () => {
            testComponent.icon = `tuiIconPrintLarge`;

            const action = await loader.getHarness(
                TuiActionHarness.with({selector: `button`}),
            );
            const markerIcon = await action.icon();

            expect(markerIcon).toBeTruthy();
        });

        it(`if value is not provided, no icon is displayed`, async () => {
            const action = await loader.getHarness(
                TuiActionHarness.with({selector: `button`}),
            );
            const markerIcon = await action.icon();

            expect(markerIcon).toBeNull();
        });
    });

    describe(`content`, () => {
        it(`should be displayed inside the component`, async () => {
            testComponent.text = `Foo`;

            const action = await loader.getHarness(
                TuiActionHarness.with({selector: `button`}),
            );
            const text = await (await action.host()).text();

            expect(text).toEqual(`Foo`);
        });
    });

    describe(`focus`, () => {
        it(`should handle focus events`, async () => {
            const action = await loader.getHarness(
                TuiActionHarness.with({selector: `button`}),
            );

            const spy = jest.spyOn(<any>testComponent.component, `updateFocused`);

            await (await action.host()).focus();
            expect(spy).toHaveBeenCalledWith(true);
            await (await action.host()).blur();
            expect(spy).toHaveBeenCalledWith(false);
        });
    });
});
