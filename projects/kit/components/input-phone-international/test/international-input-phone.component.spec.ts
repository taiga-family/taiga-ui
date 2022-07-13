import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TUI_ICONS_PATH, TuiRootModule} from '@taiga-ui/core';
import {
    TUI_ENGLISH_LANGUAGE,
    TUI_LANGUAGE,
    TUI_RUSSIAN_LANGUAGE,
    TuiCountryIsoCode,
    TuiLanguage,
} from '@taiga-ui/i18n';
import {
    TuiInputPhoneInternationalComponent,
    TuiInputPhoneInternationalModule,
} from '@taiga-ui/kit';
import {configureTestSuite} from '@taiga-ui/testing';
import {of} from 'rxjs';

describe(`InputPhoneInternational`, () => {
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

        control = new FormControl(`+79110330102`);

        countries = [
            TuiCountryIsoCode.RU,
            TuiCountryIsoCode.KZ,
            TuiCountryIsoCode.UA,
            TuiCountryIsoCode.BY,
            TuiCountryIsoCode.TW,
            TuiCountryIsoCode.BD,
        ];

        countryIsoCode = TuiCountryIsoCode.RU;

        readOnly = false;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiInputPhoneInternationalComponent;

    const initializeTestModule = (language: TuiLanguage = TUI_ENGLISH_LANGUAGE): void => {
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
                        useValue: (_: string) => `path/tuiIcon.svg#tuiIcon`,
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

    describe(`flag paths`, () => {
        initializeTestModule();

        it(`resolves path from TUI_ICONS_PATH`, () => {
            expect(component.countryFlagPath).toContain(`path/`);
        });

        it(`calculates countryFlagPath to flag from TUI_ICONS_PATH`, () => {
            component.countryIsoCode = TuiCountryIsoCode.RU;

            expect(component.countryFlagPath).toBe(`path/${TuiCountryIsoCode.RU}.png`);
        });

        it(`calculates flag path from isoCode`, () => {
            expect(component.getFlagPath(TuiCountryIsoCode.AD)).toBe(
                `path/${TuiCountryIsoCode.AD}.png`,
            );
        });
    });

    describe(`country codes`, () => {
        initializeTestModule();

        it(`calculates country code by iso code`, () => {
            const iso = TuiCountryIsoCode.RU;

            expect(component.isoToCountryCode(iso)).toBe(`+7`);
        });

        it(`correct country code in inputPhoneCountryCode`, () => {
            component.countryIsoCode = TuiCountryIsoCode.DM;

            expect(component.inputPhoneCountryCode).toBe(`+1(767)`);
        });
    });

    describe(`value`, () => {
        initializeTestModule();

        it(`should truncate value if current mask is shorter then previous`, () => {
            component.onItemClick(TuiCountryIsoCode.UA);
            expect(testComponent.control.value).toBe(`+380911033010`);
        });
    });

    describe(`paste`, () => {
        initializeTestModule();

        it(`should set correct country code on paste event`, () => {
            const data = new DataTransfer();

            data.setData(`text/plain`, `+380123456789`);

            const pasteEvent = new ClipboardEvent(`paste`, {
                clipboardData: data as unknown as DataTransfer,
            });

            component.onPaste(pasteEvent);

            expect(component.countryIsoCode).toBe(TuiCountryIsoCode.UA);
        });

        it(`should set country code on paste event `, () => {
            const data = new DataTransfer();

            data.setData(`text/plain`, `88005553535`);

            const pasteEvent = new ClipboardEvent(`paste`, {
                clipboardData: data as unknown as DataTransfer,
            });

            component.onPaste(pasteEvent);

            expect(component.countryIsoCode).toBe(TuiCountryIsoCode.RU);
        });

        it(`should replace code 8 on paste event`, () => {
            const data = new DataTransfer();

            data.setData(`text/plain`, `88005553535`);

            const pasteEvent = new ClipboardEvent(`paste`, {
                clipboardData: data as unknown as DataTransfer,
            });

            component.onPaste(pasteEvent);

            expect(testComponent.control.value).toEqual(`+78005553535`);
        });

        it(`should replace code +8 on paste event`, () => {
            const data = new DataTransfer();

            data.setData(`text/plain`, `+89112223344`);

            const pasteEvent = new ClipboardEvent(`paste`, {
                clipboardData: data as unknown as DataTransfer,
            });

            component.onPaste(pasteEvent);

            expect(testComponent.control.value).toEqual(`+79112223344`);
        });

        it(`should update value on paste`, () => {
            const data = new DataTransfer();

            data.setData(`text/plain`, `+380 (12) 345-67-89`);

            const pasteEvent = new ClipboardEvent(`paste`, {
                clipboardData: data as unknown as DataTransfer,
            });

            component.onPaste(pasteEvent);

            expect(testComponent.control.value).toEqual(`+380123456789`);
        });

        it(`should update value without "+" on paste`, () => {
            const data = new DataTransfer();

            data.setData(`text/plain`, `380 (12) 345-67-89`);

            const pasteEvent = new ClipboardEvent(`paste`, {
                clipboardData: data as unknown as DataTransfer,
            });

            component.onPaste(pasteEvent);

            expect(testComponent.control.value).toEqual(`+380123456789`);
        });

        it(`should set country code on paste event 8(863)`, () => {
            const data = new DataTransfer();

            data.setData(`text/plain`, `88635553535`);

            const pasteEvent = new ClipboardEvent(`paste`, {
                clipboardData: data as unknown as DataTransfer,
            });

            component.onPaste(pasteEvent);

            expect(component.countryIsoCode).toBe(TuiCountryIsoCode.RU);
        });

        it(`should set country code on paste event +886`, () => {
            const data = new DataTransfer();

            data.setData(`text/plain`, `886355535353`);

            const pasteEvent = new ClipboardEvent(`paste`, {
                clipboardData: data as unknown as DataTransfer,
            });

            component.onPaste(pasteEvent);

            expect(component.countryIsoCode).toBe(TuiCountryIsoCode.TW);
        });

        it(`should paste current code + paste value, if code from paste data not found`, () => {
            const data = new DataTransfer();

            data.setData(`text/plain`, `43578`);

            const pasteEvent = new ClipboardEvent(`paste`, {
                clipboardData: data as unknown as DataTransfer,
            });

            component.countryIsoCode = TuiCountryIsoCode.DM;
            component.onPaste(pasteEvent);

            expect(testComponent.control.value).toBe(`+176743578`);
        });
    });

    describe(`programmatically patch`, () => {
        initializeTestModule();

        it(`should correct update control`, () => {
            let result: unknown;
            const phoneNumber = `+380123456789`;

            testComponent.control.valueChanges.subscribe(value => {
                result = value;
            });

            testComponent.countryIsoCode = TuiCountryIsoCode.UA;
            testComponent.control.patchValue(phoneNumber);
            expect(result).toEqual(phoneNumber);
        });
    });

    describe(`phone mask after country code`, () => {
        initializeTestModule();

        it(`is calculated correctly`, () => {
            component.countryIsoCode = TuiCountryIsoCode.RU;

            expect(component.phoneMaskAfterCountryCode).toBe(`### ###-##-##`);

            component.countryIsoCode = TuiCountryIsoCode.KZ;

            expect(component.phoneMaskAfterCountryCode).toBe(`(###) ###-##-##`);
        });
    });

    describe(`i18n`, () => {
        describe(`RUSSIAN`, () => {
            initializeTestModule(TUI_RUSSIAN_LANGUAGE);

            it(`displays country names in Russian inside dropdown`, () => {
                getCountrySelector().nativeElement.click();
                fixture.detectChanges();

                expect(getDropdownCountryNames()).toEqual([
                    `Россия`,
                    `Казахстан`,
                    `Украина`,
                    `Беларусь (Белоруссия)`,
                    `Тайвань`,
                    `Бангладеш`,
                ]);
            });
        });

        describe(`ENGLISH`, () => {
            initializeTestModule(TUI_ENGLISH_LANGUAGE);

            it(`displays country names in English inside dropdown`, () => {
                getCountrySelector().nativeElement.click();
                fixture.detectChanges();

                expect(getDropdownCountryNames()).toEqual([
                    `Russia`,
                    `Kazakhstan`,
                    `Ukraine`,
                    `Belarus`,
                    `Taiwan`,
                    `Bangladesh`,
                ]);
            });
        });
    });

    function getDropdownCountryNames(): string[] {
        const countryNameContainers =
            fixture.debugElement.queryAll(By.css(`.t-country-item-name`)) || [];

        return countryNameContainers.map(container =>
            container.nativeElement.textContent?.trim(),
        );
    }

    function getCountrySelector(): DebugElement {
        return fixture.debugElement.query(By.css(`.t-country-select`));
    }
});
