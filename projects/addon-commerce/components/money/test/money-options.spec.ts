import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {
    TuiCurrency,
    TuiMoneyComponent,
    TuiMoneyModule,
    tuiMoneyOptionsProvider,
} from '@taiga-ui/addon-commerce';

describe(`Money component options`, () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    @Component({
        template: `
            <tui-money></tui-money>
        `,
    })
    class TestComponent {
        @ViewChild(TuiMoneyComponent, {static: true})
        component!: TuiMoneyComponent;
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TuiMoneyModule],
            declarations: [TestComponent],
            providers: [
                tuiMoneyOptionsProvider({
                    currency: TuiCurrency.Euro,
                    sign: `never`,
                    precision: 1,
                }),
            ],
        });

        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it(`override by custom options`, () => {
        expect(testComponent.component.currency).toBe(`EUR`);
        expect(testComponent.component.sign).toBe(`never`);
        expect(testComponent.component.singleColor).toBe(false);
        expect(testComponent.component.precision).toBe(1);
        expect(testComponent.component.colored).toBe(false);
        expect(testComponent.component.red).toBe(false);
        expect(testComponent.component.signSymbol).toBe(``);
    });
});
