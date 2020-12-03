import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TUI_ICONS_PATH, TuiRootModule} from '@taiga-ui/core';
import {configureTestSuite} from 'ng-bullet';
import {TuiCountryIsoCode} from '../country-iso-code';
import {TuiInputPhoneInternationalComponent} from '../input-phone-international.component';
import {TuiInputPhoneInternationalModule} from '../input-phone-international.module';

describe('InputPhoneInternational', () => {
    @Component({
        template: `
            <tui-root>
                <tui-input-phone-international
                    [formControl]="control"
                    [readOnly]="readOnly"
                    [countryIsoCode]="countryIsoCode"
                    [countries]="countries"
                ></tui-input-phone-international>
            </tui-root>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputPhoneInternationalComponent, {static: true})
        component: TuiInputPhoneInternationalComponent;

        control = new FormControl('+79110330102');

        countries = [
            TuiCountryIsoCode.RU,
            TuiCountryIsoCode.KZ,
            TuiCountryIsoCode.UA,
            TuiCountryIsoCode.BY,
        ];

        countryIsoCode = TuiCountryIsoCode.RU;

        readOnly = false;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiInputPhoneInternationalComponent;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                TuiRootModule,
                TuiInputPhoneInternationalModule,
                ReactiveFormsModule,
                NoopAnimationsModule,
            ],
            declarations: [TestComponent],
            providers: [
                {
                    provide: TUI_ICONS_PATH,
                    useValue: (_: string) => 'path/tuiIcon.svg#tuiIcon',
                },
            ],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        component = testComponent.component;
        fixture.detectChanges();
    });

    describe('flag paths', () => {
        it('resolves path from TUI_ICONS_PATH', () => {
            expect(component.countryFlagPath).toContain('path/');
        });

        it('calculates countryFlagPath to flag from TUI_ICONS_PATH', () => {
            component.countryIsoCode = TuiCountryIsoCode.RU;

            expect(component.countryFlagPath).toBe(`path/${TuiCountryIsoCode.RU}.png`);
        });

        it('calculates flag path from isoCode', () => {
            expect(component.getFlagPath(TuiCountryIsoCode.AD)).toBe(
                `path/${TuiCountryIsoCode.AD}.png`,
            );
        });
    });

    describe('country codes', () => {
        it('calculates country code by iso code', () => {
            const iso = TuiCountryIsoCode.RU;

            expect(component.isoToCountryCode(iso)).toBe(`+7`);
        });

        it('correct country code in inputPhoneCountryCode', () => {
            component.countryIsoCode = TuiCountryIsoCode.UA;

            expect(component.inputPhoneCountryCode).toBe('+380');
        });
    });

    describe('phone mask after country code', () => {
        it('is calculated correctly', () => {
            component.countryIsoCode = TuiCountryIsoCode.RU;

            expect(component.phoneMaskAfterCountryCode).toBe('(###) ###-##-##');
        });
    });
});
