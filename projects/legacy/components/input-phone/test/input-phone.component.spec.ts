import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiRoot} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {TuiInputPhoneComponent, TuiInputPhoneModule} from '@taiga-ui/legacy';
import {TuiNativeInputPO} from '@taiga-ui/testing';

describe('InputPhone', () => {
    @Component({
        standalone: true,
        imports: [TuiRoot, TuiInputPhoneModule, ReactiveFormsModule],
        template: `
            <tui-root>
                <tui-input-phone
                    [allowText]="allowText"
                    [countryCode]="countryCode"
                    [formControl]="control"
                    [phoneMaskAfterCountryCode]="phoneMaskAfterCountryCode"
                    [readOnly]="readOnly"
                ></tui-input-phone>
            </tui-root>
        `,
    })
    class Test {
        @ViewChild(TuiInputPhoneComponent, {static: true})
        public component!: TuiInputPhoneComponent;

        public control = new FormControl('+79110330102');
        public allowText = false;
        public countryCode = '+7';
        public phoneMaskAfterCountryCode = '### ###-##-##';
        public readOnly = false;
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let component: TuiInputPhoneComponent;
    let inputPO: TuiNativeInputPO;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        testComponent = fixture.componentInstance;
        component = testComponent.component;
        fixture.detectChanges();
        await fixture.whenStable();

        inputPO = new TuiNativeInputPO(fixture, 'tui-primitive-textfield__native-input');
    });

    describe('Initial value', () => {
        it('the value in the field is formatted by mask', async () => {
            await fixture.whenStable();
            expect(inputPO.value).toBe('+7 911 033-01-02');
        });

        it('the original value in the formControl has not changed and does not contain brackets', () => {
            expect(testComponent.control.value).toBe('+79110330102');
        });

        it('when focusing on an empty field, the field is set "+7 "', async () => {
            testComponent.control.reset();

            fixture.detectChanges();
            await fixture.whenStable();

            inputPO.focus();
            await fixture.whenStable();

            expect(inputPO.value).toBe(`${testComponent.component.countryCode} `);
        });

        it('when focusing an empty field, +7 is not added to the control"', async () => {
            testComponent.control.reset();
            fixture.detectChanges();
            inputPO.focus();
            await fixture.whenStable();
            fixture.detectChanges();
            expect(testComponent.control.value).toBeNull();
        });

        it('when focusing on an empty field in readOnly mode, the field is not set "+7 "', async () => {
            testComponent.control.reset();
            testComponent.readOnly = true;
            fixture.detectChanges();
            inputPO.focus();
            await fixture.whenStable();
            expect(inputPO.value).toBe('');
        });
    });

    describe('Using different codes and masks', () => {
        beforeEach(async () => {
            testComponent.control.setValue('');
            fixture.detectChanges();
            await fixture.whenStable();
        });

        it('assigning a dialing code and when focusing on an empty field, the specified code is displayed', async () => {
            testComponent.countryCode = '+850';
            fixture.detectChanges();
            await fixture.whenStable();

            inputPO.focus();
            await fixture.whenStable();

            expect(inputPO.value).toBe('+850 ');
        });

        it('entering a number with a new code', async () => {
            testComponent.countryCode = '+850';
            testComponent.control.setValue('+8508121234567');
            fixture.detectChanges();
            await fixture.whenStable();

            expect(inputPO.value).toBe('+850 812 123-45-67');
        });

        it('new mask', async () => {
            testComponent.countryCode = '+850';
            testComponent.phoneMaskAfterCountryCode = '#### ## ##-##';
            fixture.detectChanges();
            testComponent.control.setValue('+8501234567890');
            fixture.detectChanges();
            await fixture.whenStable();

            expect(inputPO.value).toBe('+850 1234 56 78-90');
        });

        it('invalid characters passed to the mask', async () => {
            testComponent.countryCode = '+850';
            testComponent.phoneMaskAfterCountryCode = '(####)+___?$_:-##-@##-!##';
            fixture.detectChanges();
            testComponent.control.setValue('+8501234567890');
            fixture.detectChanges();
            await fixture.whenStable();

            expect(inputPO.value).toBe('+850 (1234)-56-78-90');
        });

        it('can change [countryCode] on the fly', async () => {
            testComponent.control.setValue('+71234567890');
            fixture.detectChanges();
            await fixture.whenStable();

            expect(inputPO.value).toBe('+7 123 456-78-90');

            testComponent.countryCode = '+850';
            fixture.detectChanges();
            await fixture.whenStable();

            expect(inputPO.value).toBe('+850 123 456-78-90');
        });
    });

    describe('The value in the formControl changes outside', () => {
        beforeEach(() => {
            testComponent.control.setValue('+78121234567');
            fixture.detectChanges();
        });

        it('in the field a new formatted value appears', async () => {
            await fixture.whenStable();
            fixture.detectChanges();
            expect(inputPO.value).toBe('+7 812 123-45-67');
        });

        it('no parentheses are added to the new value in the formControl', () => {
            expect(testComponent.control.value).toBe('+78121234567');
        });
    });

    describe('The value in the formControl changes outside to an incomplete number', () => {
        it('the formatted part of the number appears in the field', async () => {
            testComponent.control.setValue('+78121');
            fixture.detectChanges();
            await fixture.whenStable();
            expect(inputPO.value).toBe('+7 812 1');
        });
    });

    describe('The value in the formControl changes to empty outside', () => {
        it('if the value is null, the value "+7" appears in the focus field', async () => {
            testComponent.control.setValue(null);
            fixture.detectChanges();
            await fixture.whenStable();

            expect(inputPO.value).toBe('');

            inputPO.focus();
            await fixture.whenStable();

            expect(inputPO.value).toBe('+7 ');
        });

        it('if the value is an empty string, the value "+7" appears in the focus field', async () => {
            testComponent.control.setValue('');
            inputPO.focus();
            await fixture.whenStable();

            expect(inputPO.value).toBe('+7 ');
        });

        describe('If the value was, and then deleted to +7', () => {
            it('allowText is false', async () => {
                testComponent.control.setValue('+7999');

                await fixture.whenStable();
                fixture.detectChanges();
                await fixture.whenStable();

                expect(inputPO.value).toBe('+7 999');
                expect(testComponent.control.value).toBe('+7999');

                inputPO.sendText('+7 ');
                await fixture.whenStable();
                fixture.detectChanges();

                expect(inputPO.value).toBe('+7 ');
                expect(testComponent.control.value).toBe('');
            });

            it('allowText is true', async () => {
                testComponent.allowText = true;
                testComponent.countryCode = '+52';
                testComponent.control.setValue('+5252');

                await fixture.whenStable();
                fixture.detectChanges();
                await fixture.whenStable();

                expect(inputPO.value).toBe('+52 52');
                expect(testComponent.control.value).toBe('+5252');

                inputPO.sendText('+52 ');
                await fixture.whenStable();
                fixture.detectChanges();

                expect(inputPO.value).toBe('+52 ');
                expect(testComponent.control.value).toBe('');

                inputPO.sendText('52 ');
                await fixture.whenStable();
                fixture.detectChanges();

                expect(inputPO.value).toBe('+52 ');
                expect(testComponent.control.value).toBe('');
            });
        });
    });

    describe('Entering a short phone number (less than 12 characters)', () => {
        it('a short phone number is passed to the formControl value', () => {
            component.onValueChange('+712345');
            fixture.detectChanges();
            expect(testComponent.control.value).toBe('+712345');
        });
    });

    describe('Entering a long phone number (more than mask allow)', () => {
        it('a long phone number is truncated', () => {
            component.onValueChange('+712345678901');
            fixture.detectChanges();
            expect(testComponent.control.value).toBe('+71234567890');
        });
    });
});
