import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CHAR_EN_DASH} from '@taiga-ui/cdk';
import {PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiDecimal} from '../../../../core';
import {TuiCurrency} from '../../../enums/currency';
import {TuiCurrencyCode} from '../../../enums/currency-code';
import {TuiMoneySign} from '../../../enums/money-sign';
import {TuiCurrencyVariants} from '../../../types/currency-variants';
import {TuiMoneyComponent} from '../money.component';
import {TuiMoneyModule} from '../money.module';

describe('Money', () => {
    @Component({
        template: `
            <tui-money
                [value]="value"
                [decimal]="decimal"
                [currency]="currency"
                [precision]="precision"
                [sign]="sign"
                [colored]="colored"
            >
            </tui-money>
        `,
    })
    class TestComponent {
        @ViewChild(TuiMoneyComponent, {static: true})
        component!: TuiMoneyComponent;

        value = 237;
        decimal: TuiDecimal = TuiDecimal.NotZero;
        currency: TuiCurrencyVariants = null;
        sign: TuiMoneySign = TuiMoneySign.NegativeOnly;
        colored = false;
        precision = 2;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiMoneyComponent;
    let pageObject: PageObject<TestComponent>;
    const testContext = {
        get prefix() {
            return 'tui-money__';
        },
    };

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiMoneyModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        component = testComponent.component;
    });

    describe('currency:', () => {
        it('if null is passed, currency symbol is not shown', () => {
            const currency = pageObject.getByAutomationId(
                `${testContext.prefix}currency`,
            );

            expect(currency!.nativeElement.textContent).toEqual('');
        });

        it('if empty string is passed, currency symbol is not shown', () => {
            testComponent.currency = '';
            fixture.detectChanges();

            const currency = pageObject.getByAutomationId(
                `${testContext.prefix}currency`,
            );

            expect(currency!.nativeElement.textContent).toEqual('');
        });

        it('words with currency code', () => {
            testComponent.currency = TuiCurrencyCode.Dollar;
            fixture.detectChanges();

            const currency = pageObject.getByAutomationId(
                `${testContext.prefix}currency`,
            );

            expect(currency!.nativeElement.textContent).toEqual('$');
        });

        it('works with currency name', () => {
            testComponent.currency = TuiCurrency.Dollar;
            fixture.detectChanges();

            const currency = pageObject.getByAutomationId(
                `${testContext.prefix}currency`,
            );

            expect(currency!.nativeElement.textContent).toEqual('$');
        });

        it('works with custom currency', () => {
            const customCurrency = 'CSTM';

            testComponent.currency = customCurrency;
            fixture.detectChanges();

            const currency = pageObject.getByAutomationId(
                `${testContext.prefix}currency`,
            );

            expect(currency!.nativeElement.textContent).toEqual(customCurrency);
        });
    });

    describe('decimal:', () => {
        it('zero decimals not shown by default', () => {
            const fraction = pageObject.getByAutomationId(
                `${testContext.prefix}fraction-part`,
            );

            expect(fraction!.nativeElement.textContent).toEqual('');
        });

        it('non zero decimals a padded with zeroes by default', () => {
            testComponent.value = 237.1;
            fixture.detectChanges();

            const fraction = pageObject.getByAutomationId(
                `${testContext.prefix}fraction-part`,
            );

            expect(fraction!.nativeElement.textContent).toEqual(',10');
        });

        it('decimals only show 2 digits', () => {
            testComponent.value = 237.123;
            fixture.detectChanges();

            const fraction = pageObject.getByAutomationId(
                `${testContext.prefix}fraction-part`,
            );

            expect(fraction!.nativeElement.textContent).toEqual(',12');
        });

        it('if ALWAYS is set, zero decimals are shown', () => {
            testComponent.decimal = TuiDecimal.Always;
            fixture.detectChanges();

            const fraction = pageObject.getByAutomationId(
                `${testContext.prefix}fraction-part`,
            );

            expect(fraction!.nativeElement.textContent).toEqual(',00');
        });

        it('if Never is set, non zero decimals are not shown', () => {
            testComponent.value = 237.123;
            testComponent.decimal = TuiDecimal.Never;
            fixture.detectChanges();

            const fraction = pageObject.getByAutomationId(
                `${testContext.prefix}fraction-part`,
            );

            expect(fraction!.nativeElement.textContent).toEqual('');
        });

        it('if precision = 4, shows 4 digits of decimal part', () => {
            testComponent.value = 237.123;
            testComponent.precision = 4;
            fixture.detectChanges();

            const fraction = pageObject.getByAutomationId(
                `${testContext.prefix}fraction-part`,
            );

            expect(fraction!.nativeElement.textContent).toEqual(',1230');
        });
    });

    describe('sign:', () => {
        it('by default plus is not shown', () => {
            const sign = pageObject.getByAutomationId(`${testContext.prefix}sign`);

            expect(sign!.nativeElement.textContent).toEqual('');
        });

        it('by default minus is not shown', () => {
            testComponent.value = -237;
            fixture.detectChanges();

            const sign = pageObject.getByAutomationId(`${testContext.prefix}sign`);

            expect(sign!.nativeElement.textContent).toEqual(CHAR_EN_DASH);
        });

        it('if set to ALWAYS, plus is shown', () => {
            testComponent.sign = TuiMoneySign.Always;
            fixture.detectChanges();

            const sign = pageObject.getByAutomationId(`${testContext.prefix}sign`);

            expect(sign!.nativeElement.textContent).toEqual('+');
        });

        it('if set to ALWAYS, minus is shown', () => {
            testComponent.value = -237;
            testComponent.sign = TuiMoneySign.Always;
            fixture.detectChanges();

            const sign = pageObject.getByAutomationId(`${testContext.prefix}sign`);

            expect(sign!.nativeElement.textContent).toEqual(CHAR_EN_DASH);
        });

        it('if set to Never, plus is not shown', () => {
            testComponent.sign = TuiMoneySign.Never;
            fixture.detectChanges();

            const sign = pageObject.getByAutomationId(`${testContext.prefix}sign`);

            expect(sign!.nativeElement.textContent).toEqual('');
        });

        it('if set to Never, minus is not shown', () => {
            testComponent.value = -237;
            testComponent.sign = TuiMoneySign.Never;
            fixture.detectChanges();

            const sign = pageObject.getByAutomationId(`${testContext.prefix}sign`);

            expect(sign!.nativeElement.textContent).toEqual('');
        });

        it('if set to FORCE_NEGATIVE, minus is shown for positive numbers', () => {
            testComponent.sign = TuiMoneySign.ForceNegative;
            fixture.detectChanges();

            const sign = pageObject.getByAutomationId(`${testContext.prefix}sign`);

            expect(sign!.nativeElement.textContent).toEqual(CHAR_EN_DASH);
        });

        it('if set to FORCE_NEGATIVE, minus is shown for negative numbers', () => {
            testComponent.value = -237;
            testComponent.sign = TuiMoneySign.ForceNegative;
            fixture.detectChanges();

            const sign = pageObject.getByAutomationId(`${testContext.prefix}sign`);

            expect(sign!.nativeElement.textContent).toEqual(CHAR_EN_DASH);
        });

        it('if set to FORCE_POSITIVE, plus is shown for positive numbers', () => {
            testComponent.sign = TuiMoneySign.ForcePositive;
            fixture.detectChanges();

            const sign = pageObject.getByAutomationId(`${testContext.prefix}sign`);

            expect(sign!.nativeElement.textContent).toEqual('+');
        });

        it('if set to FORCE_POSITIVE, plus is shown for negative numbers', () => {
            testComponent.value = -237;
            testComponent.sign = TuiMoneySign.ForcePositive;
            fixture.detectChanges();

            const sign = pageObject.getByAutomationId(`${testContext.prefix}sign`);

            expect(sign!.nativeElement.textContent).toEqual('+');
        });
    });

    describe('colored:', () => {
        it('by default color is not changed for positive numbers', () => {
            const colored = component.red || component.green;

            expect(colored).toBe(false);
        });

        it('by default color is not changed for negative numbers', () => {
            testComponent.value = -237;
            fixture.detectChanges();

            const colored = component.red || component.green;

            expect(colored).toBe(false);
        });

        it('if set to true, positive numbers are colored in green', () => {
            testComponent.colored = true;
            fixture.detectChanges();

            const colored = !component.red && component.green;

            expect(colored).toBe(true);
        });

        it('if set to true, negative numbers are colored in green', () => {
            testComponent.colored = true;
            testComponent.value = -237;
            fixture.detectChanges();

            const colored = component.red && !component.green;

            expect(colored).toBe(true);
        });

        it('if set to true, FORCE_POSITIVE numbers are colored in green', () => {
            testComponent.colored = true;
            testComponent.value = -237;
            testComponent.sign = TuiMoneySign.ForcePositive;
            fixture.detectChanges();

            const colored = !component.red && component.green;

            expect(colored).toBe(true);
        });

        it('if set to true, FORCE_NEGATIVE numbers are colored in red', () => {
            testComponent.colored = true;
            testComponent.sign = TuiMoneySign.ForceNegative;
            fixture.detectChanges();

            const colored = component.red && !component.green;

            expect(colored).toBe(true);
        });

        it('zero is not colored', () => {
            testComponent.value = 0;
            fixture.detectChanges();

            const colored = component.red || component.green;

            expect(colored).toBe(false);
        });
    });
});
