import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiHintModule, TuiRootModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {TuiInputPhoneComponent, TuiInputPhoneModule} from '@taiga-ui/kit';
import {configureTestSuite, TuiNativeInputPO} from '@taiga-ui/testing';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';

describe(`InputPhone`, () => {
    @Component({
        template: `
            <tui-root>
                <tui-input-phone
                    [formControl]="control"
                    [readOnly]="readOnly"
                    [countryCode]="countryCode"
                    [phoneMaskAfterCountryCode]="phoneMaskAfterCountryCode"
                ></tui-input-phone>
            </tui-root>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputPhoneComponent, {static: true})
        component!: TuiInputPhoneComponent;

        control = new FormControl(`+79110330102`);
        countryCode = `+7`;
        phoneMaskAfterCountryCode = `### ###-##-##`;
        readOnly = false;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiInputPhoneComponent;
    let inputPO: TuiNativeInputPO;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                TuiRootModule,
                TuiInputPhoneModule,
                ReactiveFormsModule,
                NoopAnimationsModule,
                TuiTextfieldControllerModule,
                TuiHintModule,
            ],
            declarations: [TestComponent],
            providers: NG_EVENT_PLUGINS,
        });
    });

    beforeEach(async () => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        component = testComponent.component;
        fixture.detectChanges();
        await fixture.whenStable();

        inputPO = new TuiNativeInputPO(fixture, `tui-primitive-textfield__native-input`);
    });

    describe(`Initial value`, () => {
        it(`The value in the field is formatted by mask`, async () => {
            await fixture.whenStable();
            expect(inputPO.value).toBe(`+7 911 033-01-02`);
        });

        it(`The original value in the formControl has not changed and does not contain brackets`, () => {
            expect(testComponent.control.value).toBe(`+79110330102`);
        });

        it(`When focusing on an empty field, the field is set "+7 "`, async () => {
            testComponent.control.reset();
            fixture.detectChanges();
            inputPO.focus();
            await fixture.whenStable();
            fixture.detectChanges();
            expect(inputPO.value).toBe(`${testComponent.component.countryCode} `);
        });

        it(`When focusing an empty field, +7 is not added to the control"`, async () => {
            testComponent.control.reset();
            fixture.detectChanges();
            inputPO.focus();
            await fixture.whenStable();
            fixture.detectChanges();
            expect(testComponent.control.value).toBe(null);
        });

        it(`When focusing on an empty field in readOnly mode, the field is not set "+7 "`, async () => {
            testComponent.control.reset();
            testComponent.readOnly = true;
            fixture.detectChanges();
            inputPO.focus();
            await fixture.whenStable();
            expect(inputPO.value).toBe(``);
        });

        // TODO: check why enable of this successful test causes failure of another test
        xit(`When blurring from a field in which only "+7" is entered, the value is cleared`, async () => {
            testComponent.control.reset();
            inputPO.focus();
            await fixture.whenStable();

            expect(inputPO.value).toBe(`+7 `);

            inputPO.blur();
            await fixture.whenStable();

            expect(inputPO.value).toBe(``);
        });
    });

    describe(`Using different codes and masks`, () => {
        beforeEach(async () => {
            testComponent.control.setValue(``);
            fixture.detectChanges();
            await fixture.whenStable();
        });

        it(`Assigning a dialing code and when focusing on an empty field, the specified code is displayed`, async () => {
            testComponent.countryCode = `+850`;
            fixture.detectChanges();
            await fixture.whenStable();

            inputPO.focus();
            await fixture.whenStable();

            expect(inputPO.value).toBe(`+850 `);
        });

        it(`Entering a number with a new code`, async () => {
            testComponent.countryCode = `+850`;
            testComponent.control.setValue(`+8508121234567`);
            fixture.detectChanges();
            await fixture.whenStable();

            expect(inputPO.value).toBe(`+850 812 123-45-67`);
        });

        it(`New mask`, async () => {
            testComponent.countryCode = `+850`;
            testComponent.phoneMaskAfterCountryCode = `#### ## ##-##`;
            testComponent.control.setValue(`+8501234567890`);
            fixture.detectChanges();
            await fixture.whenStable();

            expect(inputPO.value).toBe(`+850 1234 56 78-90`);
        });

        it(`Invalid characters passed to the mask`, async () => {
            testComponent.countryCode = `+850`;
            testComponent.phoneMaskAfterCountryCode = `(####)+___?$_:-##-@##-!##`;
            testComponent.control.setValue(`+8501234567890`);
            fixture.detectChanges();
            await fixture.whenStable();

            expect(inputPO.value).toBe(`+850 (1234)-56-78-90`);
        });

        it(`can change [countryCode] on the fly`, async () => {
            testComponent.control.setValue(`+71234567890`);
            fixture.detectChanges();
            await fixture.whenStable();

            expect(inputPO.value).toBe(`+7 123 456-78-90`);

            testComponent.countryCode = `+850`;
            fixture.detectChanges();
            await fixture.whenStable();

            expect(inputPO.value).toBe(`+850 123 456-78-90`);
        });
    });

    describe(`The value in the formControl changes outside`, () => {
        beforeEach(() => {
            testComponent.control.setValue(`+78121234567`);
            fixture.detectChanges();
        });

        it(`In the field a new formatted value appears`, async () => {
            await fixture.whenStable();
            fixture.detectChanges();
            expect(inputPO.value).toBe(`+7 812 123-45-67`);
        });

        it(`No parentheses are added to the new value in the formControl`, () => {
            expect(testComponent.control.value).toBe(`+78121234567`);
        });
    });

    describe(`The value in the formControl changes outside to an incomplete number`, () => {
        it(`The formatted part of the number appears in the field`, async () => {
            testComponent.control.setValue(`+78121`);
            fixture.detectChanges();
            await fixture.whenStable();
            expect(inputPO.value).toBe(`+7 812 1`);
        });
    });

    describe(`The value in the formControl changes to empty outside`, () => {
        it(`If the value is null, the value "+7" appears in the focus field`, async () => {
            testComponent.control.setValue(null);
            fixture.detectChanges();
            await fixture.whenStable();

            expect(inputPO.value).toBe(``);

            inputPO.focus();
            await fixture.whenStable();

            expect(inputPO.value).toBe(`+7 `);
        });

        it(`If the value is an empty string, the value "+7" appears in the focus field`, async () => {
            testComponent.control.setValue(``);
            inputPO.focus();
            await fixture.whenStable();

            expect(inputPO.value).toBe(`+7 `);
        });

        it(`If the value was, and then deleted to +7`, async () => {
            testComponent.control.setValue(`+7999`);

            await fixture.whenStable();
            fixture.detectChanges();
            await fixture.whenStable();

            expect(inputPO.value).toBe(`+7 999`);
            expect(testComponent.control.value).toBe(`+7999`);

            inputPO.sendText(`+7 `);
            await fixture.whenStable();
            fixture.detectChanges();

            expect(inputPO.value).toBe(`+7 `);
            expect(testComponent.control.value).toBe(``);
        });
    });

    describe(`Entering a short phone number (less than 12 characters)`, () => {
        it(`A short phone number is passed to the formControl value`, () => {
            component.onValueChange(`+712345`);
            fixture.detectChanges();
            expect(testComponent.control.value).toBe(`+712345`);
        });
    });

    describe(`Entering a long phone number (more than mask allow)`, () => {
        it(`A long phone number is truncated`, () => {
            component.onValueChange(`+712345678901`);
            fixture.detectChanges();
            expect(testComponent.control.value).toBe(`+71234567890`);
        });
    });
});
