import type {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {Component} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {configureTestSuite, TuiButtonHarness, TuiLoaderHarness} from '@taiga-ui/testing';

import {TuiButtonModule} from '../button.module';

describe(`Button`, () => {
    @Component({
        template: `
            <button
                tuiButton
                type="button"
                [showLoader]="showLoader"
            >
                My button
            </button>
        `,
    })
    class TestComponent {
        showLoader = false;
    }

    let fixture: ComponentFixture<TestComponent>;
    let component: TestComponent;
    let loader: HarnessLoader;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiButtonModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        loader = TestbedHarnessEnvironment.loader(fixture);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`Show loader`, async () => {
        component.showLoader = true;
        fixture.detectChanges();

        const harness = await loader.getHarness(TuiLoaderHarness);
        const shown = await harness.isLoading();

        expect(shown).toBe(true);
    });

    it(`When loader is shown, native button is disabled`, async () => {
        component.showLoader = true;
        fixture.detectChanges();

        const harness = await loader.getHarness(TuiButtonHarness);
        const host = await harness.host();
        const disabled = await host.matchesSelector(`:disabled`);

        expect(disabled).toBe(true);
    });
});
