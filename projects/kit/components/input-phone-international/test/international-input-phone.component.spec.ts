import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TUI_ICONS_PATH, TuiRootModule} from '@taiga-ui/core';
import {
    Language,
    TUI_ENGLISH_LANGUAGE,
    TUI_LANGUAGE,
    TUI_RUSSIAN_LANGUAGE,
    TuiCountryIsoCode,
} from '@taiga-ui/i18n';
import {configureTestSuite} from '@taiga-ui/testing';
import {of} from 'rxjs';

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
        component!: TuiInputPhoneInternationalComponent;

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

    const initializeTestModule = (language: Language = TUI_ENGLISH_LANGUAGE) => {
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
                    {
                        provide: TUI_LANGUAGE,
                        useValue: of(language),
                    },
                ],
            });
        });
    };

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        component = testComponent.component;
        fixture.detectChanges();
    });

    describe('flag paths', () => {
        initializeTestModule();

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
        initializeTestModule();

        it('calculates country code by iso code', () => {
            const iso = TuiCountryIsoCode.RU;

            expect(component.isoToCountryCode(iso)).toBe(`+7`);
        });

        it('correct country code in inputPhoneCountryCode', () => {
            component.countryIsoCode = TuiCountryIsoCode.DM;

            expect(component.inputPhoneCountryCode).toBe('+1(767)');
        });
    });

    describe('value', () => {
        initializeTestModule();

        it('should truncate value if current mask is shorter then previous', () => {
            component.onItemClick(TuiCountryIsoCode.UA);
            expect(testComponent.control.value).toBe('+380911033010');
        });
    });

    describe('paste', () => {
        initializeTestModule();

        it('should set correct country code on paste event', () => {
            const data = new DataTransfer();

            data.setData('text/plain', '+380123456789');

            const pasteEvent = new ClipboardEvent('paste', {clipboardData: data as any});

            component.onPaste(pasteEvent);

            expect(component.countryIsoCode).toBe(TuiCountryIsoCode.UA);
        });

        it('should update value on paste', () => {
            const data = new DataTransfer();

            data.setData('text/plain', '+380 (12) 345-67-89');

            const pasteEvent = new ClipboardEvent('paste', {clipboardData: data as any});

            component.onPaste(pasteEvent);

            expect(testComponent.control.value).toEqual('+380123456789');
        });

        it('should update value without "+" on paste', () => {
            const data = new DataTransfer();

            data.setData('text/plain', '380 (12) 345-67-89');

            const pasteEvent = new ClipboardEvent('paste', {clipboardData: data as any});

            component.onPaste(pasteEvent);

            expect(testComponent.control.value).toEqual('+380123456789');
        });

        it('should not update value on paste if there is no country code in list', () => {
            const data = new DataTransfer();

            data.setData('text/plain', '+244 (111)111-111');

            const pasteEvent = new ClipboardEvent('paste', {clipboardData: data as any});

            component.onPaste(pasteEvent);

            expect(testComponent.control.value).toEqual('+79110330102');
        });
    });

    describe('programmatically patch', () => {
        initializeTestModule();

        it('should correct update control', done => {
            const phoneNumber = '+380123456789';

            testComponent.control.valueChanges.subscribe(value => {
                expect(value).toEqual(phoneNumber);
                done();
            });
            testComponent.countryIsoCode = TuiCountryIsoCode.UA;
            testComponent.control.patchValue(phoneNumber);
        });
    });

    describe('phone mask after country code', () => {
        initializeTestModule();

        it('is calculated correctly', () => {
            component.countryIsoCode = TuiCountryIsoCode.RU;

            expect(component.phoneMaskAfterCountryCode).toBe('(###) ###-##-##');
        });
    });

    describe('i18n', () => {
        describe('RUSSIAN', () => {
            initializeTestModule(TUI_RUSSIAN_LANGUAGE);

            it('displays country names in Russian inside dropdown', () => {
                getCountrySelector().nativeElement.click();
                fixture.detectChanges();

                expect(getDropdownCountryNames()).toEqual([
                    'Россия',
                    'Казахстан',
                    'Украина',
                    'Беларусь (Белоруссия)',
                ]);
            });
        });

        describe('ENGLISH', () => {
            initializeTestModule(TUI_ENGLISH_LANGUAGE);

            it('displays country names in English inside dropdown', () => {
                getCountrySelector().nativeElement.click();
                fixture.detectChanges();

                expect(getDropdownCountryNames()).toEqual([
                    'Russia',
                    'Kazakhstan',
                    'Ukraine',
                    'Belarus',
                ]);
            });
        });
    });

    function getDropdownCountryNames(): string[] {
        const countryNameContainers =
            fixture.debugElement.queryAll(By.css('.country-item-name')) || [];

        return countryNameContainers.map(container =>
            container.nativeElement.textContent?.trim(),
        );
    }

    function getCountrySelector(): DebugElement {
        return fixture.debugElement.query(By.css('.country-select'));
    }
});
