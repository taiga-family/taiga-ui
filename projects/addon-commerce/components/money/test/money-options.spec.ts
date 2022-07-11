import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {
    TuiMoneyComponent,
    TuiMoneyModule,
    tuiMoneyOptionsProvider,
} from '@taiga-ui/addon-commerce';

describe('Money component options', () => {
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
                    currency: 'EUR',
                    sign: 'never',
                    precision: 1,
                }),
            ],
        });

        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('override by custom options', () => {
        expect(testComponent.component.currency).toEqual('EUR');
        expect(testComponent.component.sign).toEqual('never');
        expect(testComponent.component.singleColor).toEqual(false);
        expect(testComponent.component.precision).toEqual(1);
        expect(testComponent.component.colored).toEqual(false);
        expect(testComponent.component.red).toEqual(false);
        expect(testComponent.component.signSymbol).toEqual('');
    });
});
