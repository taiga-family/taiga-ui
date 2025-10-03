import {
    ChangeDetectionStrategy,
    Component,
    type DebugElement,
    ViewChild,
} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {provideTaiga, TuiRoot} from '@taiga-ui/core';
import {
    TUI_ENGLISH_LANGUAGE,
    TUI_FRENCH_LANGUAGE,
    TUI_LANGUAGE,
    TUI_RUSSIAN_LANGUAGE,
    type TuiCountryIsoCode,
    type TuiLanguage,
} from '@taiga-ui/i18n';
import {
    TuiInputPhoneInternational,
    tuiInputPhoneInternationalOptionsProvider,
} from '@taiga-ui/kit';
import {TuiNativeInputPO} from '@taiga-ui/testing';
import metadata from 'libphonenumber-js/max/metadata';
import {of} from 'rxjs';

describe('InputPhoneInternational', () => {
    @Component({
        standalone: true,
        imports: [ReactiveFormsModule, TuiInputPhoneInternational, TuiRoot],
        template: `
            <tui-root>
                <tui-input-phone-international
                    [countries]="countries"
                    [formControl]="control"
                    [readOnly]="readOnly"
                    [(countryIsoCode)]="countryIsoCode"
                />
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        @ViewChild(TuiInputPhoneInternational, {static: true})
        public component!: TuiInputPhoneInternational;

        public control = new FormControl('+79110330102');

        public countries: TuiCountryIsoCode[] = ['RU', 'KZ', 'UA', 'BY', 'TW', 'BD'];

        public countryIsoCode: TuiCountryIsoCode = 'RU';

        public readOnly = false;
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let component: TuiInputPhoneInternational;
    let inputPO: TuiNativeInputPO;

    const initializeTestModule = (
        language: TuiLanguage = TUI_ENGLISH_LANGUAGE,
        separator?: string,
    ): void => {
        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [Test],
                providers: [
                    provideTaiga(),
                    {
                        provide: TUI_LANGUAGE,
                        useValue: of(language),
                    },
                    tuiInputPhoneInternationalOptionsProvider({
                        metadata: of(metadata),
                        separator,
                    }),
                ],
            });
            await TestBed.compileComponents();
            fixture = TestBed.createComponent(Test);
            testComponent = fixture.componentInstance;
            component = testComponent.component;
            fixture.detectChanges();
            inputPO = new TuiNativeInputPO(
                fixture,
                fixture.debugElement.query(By.css('input')),
            );
        });
    };

    describe('select new country from dropdown', () => {
        initializeTestModule();

        it('should switch country calling code and keeps all rest digits', async () => {
            component.onItemClick('UA');

            fixture.detectChanges();
            await fixture.whenStable();

            expect(testComponent.control.value).toBe('+3809110330102');
        });
    });

    describe('paste', () => {
        initializeTestModule();

        const paste = async (data: string): Promise<void> => {
            const event = new InputEvent('beforeinput', {
                inputType: 'insertFromPaste',
                data,
            });

            component.onPaste(event);
            fixture.detectChanges();

            inputPO.sendText(data);
            await fixture.whenStable();
        };

        it('should set correct country code on paste event', async () => {
            await paste('+380123456789');

            expect(testComponent.countryIsoCode).toBe('UA');
        });

        it('should set country code on paste event', async () => {
            await paste('+77777777777');

            expect(testComponent.countryIsoCode).toBe('KZ');
        });

        describe('should set KZ country code on paste event', () => {
            ['+7 777 777-7777', '+7 7272 588300'].forEach((phone) => {
                it(`${phone}`, async () => {
                    await paste(phone);

                    expect(testComponent.countryIsoCode).toBe('KZ');
                });
            });
        });

        it('should replace code 8 on paste event', async () => {
            await paste('87777777777');

            fixture.detectChanges();
            await fixture.whenStable();

            expect(inputPO.value).toBe('+7 777 777-7777');
        });

        it('should update value on paste', async () => {
            await paste('+380 (12) 345-67-89');

            expect(testComponent.control.value).toBe('+380123456789');
        });

        it('should update value without "+" on paste', async () => {
            await paste('380 (98) 765-4321');

            expect(inputPO.value).toBe('+380 98 765-4321');
        });

        it('should set country code on paste event +886', async () => {
            await paste('+886355535353');

            expect(testComponent.countryIsoCode).toBe('TW');
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

    describe('separator', () => {
        initializeTestModule(TUI_FRENCH_LANGUAGE, ' ');

        it('should have correct input value with provided custom separator', () => {
            const phoneNumber = '+33724783794';

            testComponent.countryIsoCode = 'FR';

            inputPO.sendText(phoneNumber);

            expect(inputPO.value).toBe('+33 7 24 78 37 94');
        });
    });

    function getDropdownCountryNames(): string[] {
        const countryNameContainers =
            fixture.debugElement.queryAll(By.css('.t-name')) || [];

        return countryNameContainers.map((container) =>
            container.nativeElement.textContent?.trim(),
        );
    }

    function getCountrySelector(): DebugElement {
        return fixture.debugElement.query(By.css('.t-select select'));
    }
});
