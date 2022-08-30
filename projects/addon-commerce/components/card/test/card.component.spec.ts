import {HarnessLoader} from '@angular/cdk/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {TuiCardComponent, TuiCardModule} from '@taiga-ui/addon-commerce';
import {TuiSizeS} from '@taiga-ui/core';
import {configureTestSuite, TuiCardHarness} from '@taiga-ui/testing';

describe(`Card`, () => {
    @Component({
        template: `
            <tui-card
                [brandLogo]="brandLogo"
                [paymentSystem]="paymentSystem"
                [size]="size"
            ></tui-card>
        `,
    })
    class TestComponent {
        @ViewChild(TuiCardComponent, {static: true})
        component!: TuiCardComponent;

        paymentSystem: unknown | null = null;
        brandLogo = ``;
        size: TuiSizeS = `m`;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let loader: HarnessLoader;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiCardModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        loader = TestbedHarnessEnvironment.loader(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe(`paymentSystem`, () => {
        it(`gets payment system logo`, async () => {
            testComponent.paymentSystem = `visa`;

            fixture.detectChanges();
            const tuiCard = await loader.getHarness(TuiCardHarness);
            const hasPaymentSystemLogo = await tuiCard.hasPaymentSystemLogo();

            expect(hasPaymentSystemLogo).toBeTruthy();
        });
    });

    describe(`brandLogo`, () => {
        const logo = `logo`;

        beforeEach(() => {
            testComponent.brandLogo = logo;
        });

        it(`is shown if there is and size is m`, async () => {
            testComponent.size = `m`;

            fixture.detectChanges();

            const tuiCard = await loader.getHarness(TuiCardHarness);
            const hasBrandLogo = await tuiCard.hasBrandLogo();

            expect(hasBrandLogo).toBeTruthy();
        });

        it(`is not shown if there is and size is s`, async () => {
            testComponent.size = `s`;

            fixture.detectChanges();

            const tuiCard = await loader.getHarness(TuiCardHarness);
            const hasBrandLogo = await tuiCard.hasBrandLogo();

            expect(hasBrandLogo).toBeFalsy();
        });
    });
});
