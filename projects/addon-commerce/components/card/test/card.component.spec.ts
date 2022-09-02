import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {TuiCardComponent, TuiCardModule} from '@taiga-ui/addon-commerce';
import type {TuiSizeS} from '@taiga-ui/core';
import {configureTestSuite} from '@taiga-ui/testing';

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

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiCardModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe(`paymentSystem`, () => {
        it(`gets payment system logo`, () => {
            testComponent.paymentSystem = `visa`;

            fixture.detectChanges();

            expect(testComponent.component.paymentSystemLogo).toBe(`tuiIconVisaMono`);
        });

        it(`returns empty string if paymentSystem is not inputed`, () => {
            testComponent.paymentSystem = null;

            fixture.detectChanges();

            expect(testComponent.component.paymentSystemLogo).toBe(``);
        });
    });

    describe(`brandLogo`, () => {
        const logo = `logo`;

        beforeEach(() => {
            testComponent.brandLogo = logo;
        });

        it(`is shown if there is and size is m`, () => {
            testComponent.size = `m`;

            fixture.detectChanges();

            expect(testComponent.component.hasBrandLogo).toBe(true);
        });

        it(`is not shown if there is and size is s`, () => {
            testComponent.size = `s`;

            fixture.detectChanges();

            expect(testComponent.component.hasBrandLogo).toBe(false);
        });
    });
});
