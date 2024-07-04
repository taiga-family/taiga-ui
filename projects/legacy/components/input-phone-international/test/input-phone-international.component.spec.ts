import type {DebugElement} from '@angular/core';
import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {tuiAssetsPathProvider, TuiRoot} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import type {TuiCountryIsoCode, TuiLanguage} from '@taiga-ui/i18n';
import {TUI_ENGLISH_LANGUAGE, TUI_LANGUAGE, TUI_RUSSIAN_LANGUAGE} from '@taiga-ui/i18n';
import {TuiInputPhoneInternationalComponent} from '@taiga-ui/legacy';
import {of} from 'rxjs';

describe('InputPhoneInternational', () => {
    @Component({
        standalone: true,
        imports: [TuiRoot, TuiInputPhoneInternationalComponent, ReactiveFormsModule],
        template: `
            <tui-root>
                <tui-input-phone-international
                    [countries]="countries"
                    [countryIsoCode]="countryIsoCode"
                    [formControl]="control"
                    [readOnly]="readOnly"
                ></tui-input-phone-international>
            </tui-root>
        `,
    })
    class Test {
        @ViewChild(TuiInputPhoneInternationalComponent, {static: true})
        public component!: TuiInputPhoneInternationalComponent;

        public control = new FormControl('+79110330102');

        public countries: TuiCountryIsoCode[] = ['RU', 'KZ', 'UA', 'BY', 'TW', 'BD'];

        public countryIsoCode: TuiCountryIsoCode = 'RU';

        public readOnly = false;
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let component: TuiInputPhoneInternationalComponent;

    const initializeTestModule = (language: TuiLanguage = TUI_ENGLISH_LANGUAGE): void => {
        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [Test],
                providers: [
                    NG_EVENT_PLUGINS,
                    tuiAssetsPathProvider('path/'),
                    {
                        provide: TUI_LANGUAGE,
                        useValue: of(language),
                    },
                ],
            });
            await TestBed.compileComponents();
            fixture = TestBed.createComponent(Test);
            testComponent = fixture.componentInstance;
            component = testComponent.component;
            fixture.detectChanges();
        });
    };

    describe('country codes', () => {
        initializeTestModule();

        it('correct country code in inputPhoneCountryCode', () => {
            component.countryIsoCode = 'DM';

            expect(component.inputPhoneCountryCode).toBe('+1(767)');
        });
    });

    describe('value', () => {
        initializeTestModule();

        it('should truncate value if current mask is shorter then previous', () => {
            component.onItemClick('UA');
            expect(testComponent.control.value).toBe('+380911033010');
        });
    });

    describe('paste', () => {
        initializeTestModule();

        it('should set correct country code on paste event', () => {
            const data = new DataTransfer();

            data.setData('text/plain', '+380123456789');

            const pasteEvent = new ClipboardEvent('paste', {
                clipboardData: data as unknown as DataTransfer,
            });

            component.onPaste(pasteEvent);

            expect(component.countryIsoCode).toBe('UA');
        });

        it('should set country code on paste event', () => {
            const data = new DataTransfer();

            data.setData('text/plain', '88005553535');

            const pasteEvent = new ClipboardEvent('paste', {
                clipboardData: data as unknown as DataTransfer,
            });

            component.onPaste(pasteEvent);

            expect(component.countryIsoCode).toBe('RU');
        });

        describe('should set KZ country code on paste event', () => {
            ['+7(600)555-3535', '+7 7272 588300'].forEach((phone) => {
                it(`${phone}`, () => {
                    const data = new DataTransfer();

                    data.setData('text/plain', phone);

                    const pasteEvent = new ClipboardEvent('paste', {
                        clipboardData: data as unknown as DataTransfer,
                    });

                    component.onPaste(pasteEvent);

                    expect(component.countryIsoCode).toBe('KZ');
                });
            });
        });

        it('should replace code 8 on paste event', () => {
            const data = new DataTransfer();

            data.setData('text/plain', '88005553535');

            const pasteEvent = new ClipboardEvent('paste', {
                clipboardData: data as unknown as DataTransfer,
            });

            component.onPaste(pasteEvent);

            expect(testComponent.control.value).toBe('+78005553535');
        });

        it('should replace code +8 on paste event', () => {
            const data = new DataTransfer();

            data.setData('text/plain', '+89112223344');

            const pasteEvent = new ClipboardEvent('paste', {
                clipboardData: data as unknown as DataTransfer,
            });

            component.onPaste(pasteEvent);

            expect(testComponent.control.value).toBe('+79112223344');
        });

        it('should update value on paste', () => {
            const data = new DataTransfer();

            data.setData('text/plain', '+380 (12) 345-67-89');

            const pasteEvent = new ClipboardEvent('paste', {
                clipboardData: data as unknown as DataTransfer,
            });

            component.onPaste(pasteEvent);

            expect(testComponent.control.value).toBe('+380123456789');
        });

        it('should update value without "+" on paste', () => {
            const data = new DataTransfer();

            data.setData('text/plain', '380 (12) 345-67-89');

            const pasteEvent = new ClipboardEvent('paste', {
                clipboardData: data as unknown as DataTransfer,
            });

            component.onPaste(pasteEvent);

            expect(testComponent.control.value).toBe('+380123456789');
        });

        it('should set country code on paste event 8(863)', () => {
            const data = new DataTransfer();

            data.setData('text/plain', '88635553535');

            const pasteEvent = new ClipboardEvent('paste', {
                clipboardData: data as unknown as DataTransfer,
            });

            component.onPaste(pasteEvent);

            expect(component.countryIsoCode).toBe('RU');
        });

        it('should set country code on paste event +886', () => {
            const data = new DataTransfer();

            data.setData('text/plain', '886355535353');

            const pasteEvent = new ClipboardEvent('paste', {
                clipboardData: data as unknown as DataTransfer,
            });

            component.onPaste(pasteEvent);

            expect(component.countryIsoCode).toBe('TW');
        });

        it('should paste current code + paste value, if code from paste data not found', () => {
            const data = new DataTransfer();

            data.setData('text/plain', '43578');

            const pasteEvent = new ClipboardEvent('paste', {
                clipboardData: data as unknown as DataTransfer,
            });

            component.countryIsoCode = 'DM';
            component.onPaste(pasteEvent);

            expect(testComponent.control.value).toBe('+176743578');
        });
    });

    describe('programmatically patch', () => {
        initializeTestModule();

        it('should correct update control', () => {
            let result: unknown;
            const phoneNumber = '+380123456789';

            testComponent.control.valueChanges.subscribe((value) => {
                result = value;
            });

            testComponent.countryIsoCode = 'UA';
            testComponent.control.patchValue(phoneNumber);
            expect(result).toEqual(phoneNumber);
        });
    });

    describe('phone mask after country code', () => {
        initializeTestModule();

        it('is calculated correctly', () => {
            component.countryIsoCode = 'RU';

            expect(component.phoneMaskAfterCountryCode).toBe('### ###-##-##');

            component.countryIsoCode = 'KZ';

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
                    'Тайвань',
                    'Бангладеш',
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
                    'Taiwan',
                    'Bangladesh',
                ]);
            });
        });
    });

    function getDropdownCountryNames(): string[] {
        const countryNameContainers =
            fixture.debugElement.queryAll(By.css('.t-country-item-name')) || [];

        return countryNameContainers.map((container) =>
            container.nativeElement.textContent?.trim(),
        );
    }

    function getCountrySelector(): DebugElement {
        return fixture.debugElement.query(By.css('.t-country-select input'));
    }
});
