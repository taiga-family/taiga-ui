import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiSizeL} from '@taiga-ui/core';
import {TuiStatus} from '@taiga-ui/kit/types';
import {configureTestSuite, TuiBadgeHarness} from '@taiga-ui/testing';

import {TuiBadgeComponent} from '../badge.component';
import {TuiBadgeModule} from '../badge.module';

describe(`Badge`, () => {
    @Component({
        template: `
            <tui-badge
                [size]="size"
                [status]="status"
                [value]="value"
            ></tui-badge>
        `,
    })
    class TestComponent {
        @ViewChild(TuiBadgeComponent, {static: true})
        component!: TuiBadgeComponent;

        @ViewChild(TuiBadgeComponent, {read: ElementRef, static: true})
        element!: ElementRef<Element>;

        size: TuiSizeL = `m`;
        value!: number | string;
        status: TuiStatus = `default`;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let loader: HarnessLoader;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiBadgeModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        loader = TestbedHarnessEnvironment.loader(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe(`value:`, () => {
        it(`if it accepts a two-digit number, it outputs it`, async () => {
            testComponent.value = 99;

            const badge = await loader.getHarness(TuiBadgeHarness);
            const text = await badge.text();

            expect(text).toEqual(`99`);
        });

        it(`if it takes three digits or more, it displays the abbreviation 99+`, async () => {
            testComponent.value = 999;

            const badge = await loader.getHarness(TuiBadgeHarness);
            const text = await badge.text();

            expect(text).toEqual(`99+`);
        });

        it(`if it accepts a string, it outputs it`, async () => {
            testComponent.value = `Text`;
            const badge = await loader.getHarness(TuiBadgeHarness);
            const text = await badge.text();

            expect(text).toEqual(`Text`);
        });

        it(`if it accepts a string containing a number, it outputs it unchanged`, async () => {
            testComponent.value = `125`;
            const badge = await loader.getHarness(TuiBadgeHarness);
            const text = await badge.text();

            expect(text).toEqual(`125`);
        });
    });

    describe(`padding:`, () => {
        it(`if value is a number, padding has size m`, async () => {
            testComponent.value = 99;
            const badge = await loader.getHarness(TuiBadgeHarness);
            const padding = await badge.padding();

            expect(padding).toBe(`m`);
        });

        it(`if value is a string, padding has size l`, async () => {
            testComponent.value = `99`;
            const badge = await loader.getHarness(TuiBadgeHarness);
            const padding = await badge.padding();

            expect(padding).toBe(`l`);
        });

        it(`if value is empty, padding is none`, async () => {
            const badge = await loader.getHarness(TuiBadgeHarness);
            const padding = await badge.padding();

            expect(padding).toBe(`none`);
        });
    });

    describe(`states: `, () => {
        it(`if value is empty, add appropriate css class`, async () => {
            testComponent.value = ``;

            const badge = await loader.getHarness(TuiBadgeHarness);
            const hasClass = await badge.hasClass(`_empty-value`);

            expect(hasClass).toBeTruthy();
        });
    });
});
