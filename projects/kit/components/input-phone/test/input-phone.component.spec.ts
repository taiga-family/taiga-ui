import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
    TuiHintControllerModule,
    TuiRootModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {NativeInputPO, PageObject} from '@taiga-ui/testing';
import {NG_EVENT_PLUGINS} from '@tinkoff/ng-event-plugins';
import {configureTestSuite} from 'ng-bullet';
import {TuiInputPhoneComponent} from '../input-phone.component';
import {TuiInputPhoneModule} from '../input-phone.module';

describe('InputPhone', () => {
    @Component({
        template: `
            <tui-root>
                <tui-input-phone
                    [formControl]="control"
                    [readOnly]="readOnly"
                    [countryCode]="countryCode"
                    [phoneMaskAfterCountryCode]="phoneMaskAfterCountryCode"
                >
                </tui-input-phone>
            </tui-root>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputPhoneComponent, {static: true})
        component!: TuiInputPhoneComponent;

        control = new FormControl('+79110330102');
        countryCode = '+7';
        phoneMaskAfterCountryCode = '### ###-##-##';
        readOnly = false;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiInputPhoneComponent;
    let pageObject: PageObject<TestComponent>;
    let inputPO: NativeInputPO;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                TuiRootModule,
                TuiInputPhoneModule,
                ReactiveFormsModule,
                NoopAnimationsModule,
                TuiTextfieldControllerModule,
                TuiHintControllerModule,
            ],
            declarations: [TestComponent],
            providers: NG_EVENT_PLUGINS,
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        component = testComponent.component;
        fixture.detectChanges();

        inputPO = new NativeInputPO(fixture, `tui-primitive-textfield__native-input`);
    });

    describe('Initial value', () => {
        it('The value in the field is formatted by mask', done => {
            fixture.whenStable().then(() => {
                expect(inputPO.value).toBe('+7 911 033-01-02');
                done();
            });
        });

        it('The original value in the formControl has not changed and does not contain brackets', () => {
            expect(testComponent.control.value).toBe('+79110330102');
        });

        it('When focusing on an empty field, the field is set "+7 "', done => {
            testComponent.control.reset();
            fixture.detectChanges();
            inputPO.focus();
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(inputPO.value).toBe(`${testComponent.component.countryCode} `);
                done();
            });
        });

        it('When focusing an empty field, +7 is not added to the control"', done => {
            testComponent.control.reset();
            fixture.detectChanges();
            inputPO.focus();
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(testComponent.control.value).toBe(null);
                done();
            });
        });

        it('When focusing on an empty field in readOnly mode, the field is not set "+7 "', done => {
            testComponent.control.reset();
            testComponent.readOnly = true;
            fixture.detectChanges();
            inputPO.focus();
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                expect(inputPO.value).toBe('');
                done();
            });
        });

        it('When blurring from a field in which only "+7" is entered, the value is cleared', () => {
            inputPO.nativeElement.focus();
            inputPO.nativeElement.blur();
            fixture.detectChanges();

            expect(inputPO.value).toBe('');
        });
    });

    describe('Using different codes and masks', () => {
        beforeEach(done => {
            fixture.whenStable().then(() => {
                testComponent.control.setValue('');
                fixture.detectChanges();
                done();
            });
        });

        it('Assigning a dialing code and when focusing on an empty field, the specified code is displayed', done => {
            testComponent.countryCode = '+850';
            fixture.detectChanges();
            inputPO.focus();
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(inputPO.value).toBe('+850 ');
                done();
            });
        });

        it('Entering a number with a new code', done => {
            testComponent.countryCode = '+850';
            testComponent.control.setValue('+8508121234567');
            fixture.detectChanges();

            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(inputPO.value).toBe('+850 812 123-45-67');
                done();
            });
        });

        it('New mask', done => {
            testComponent.countryCode = '+850';
            testComponent.phoneMaskAfterCountryCode = '#### ## ##-##';
            testComponent.control.setValue('+8501234567890');
            fixture.detectChanges();

            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(inputPO.value).toBe('+850 1234 56 78-90');
                done();
            });
        });

        it('Invalid characters passed to the mask', done => {
            testComponent.countryCode = '+850';
            testComponent.phoneMaskAfterCountryCode = '(####)+___?$_:-##-@##-!##';
            testComponent.control.setValue('+8501234567890');
            fixture.detectChanges();

            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(inputPO.value).toBe('+850 (1234)-56-78-90');
                done();
            });
        });
    });

    describe('The value in the formControl changes outside', () => {
        beforeEach(() => {
            testComponent.control.setValue('+78121234567');
            fixture.detectChanges();
        });

        it('In the field a new formatted value appears', done => {
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(inputPO.value).toBe('+7 812 123-45-67');
                done();
            });
        });

        it('No parentheses are added to the new value in the formControl', () => {
            expect(testComponent.control.value).toBe('+78121234567');
        });
    });

    describe('The value in the formControl changes outside to an incomplete number', () => {
        it('The formatted part of the number appears in the field', done => {
            testComponent.control.setValue('+78121');
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                expect(inputPO.value).toBe('+7 812 1');
                done();
            });
        });
    });

    describe('The value in the formControl changes to empty outside', () => {
        it('If the value is null, the value "+7" appears in the focus field', done => {
            testComponent.control.setValue(null);
            fixture.detectChanges();
            inputPO.focus();

            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(inputPO.value).toBe('+7 ');
                done();
            });
        });

        it('If the value is an empty string, the value "+7" appears in the focus field', done => {
            testComponent.control.setValue('');
            inputPO.focus();

            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(inputPO.value).toBe('+7 ');
                done();
            });
        });

        it('If the value was, and then deleted to +7', done => {
            testComponent.control.setValue('+7999');
            inputPO.focus();
            inputPO.sendText('+7 ');

            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(testComponent.control.value).toBe('');
                done();
            });
        });
    });

    describe('Entering a short phone number (less than 12 characters)', () => {
        it('A short phone number is passed to the formControl value', () => {
            component.onValueChange('+712345');
            fixture.detectChanges();
            expect(testComponent.control.value).toBe('+712345');
        });
    });

    describe('Drag & Drop Phone Input', () => {
        beforeEach(() => {
            testComponent.control.setValue('');
            fixture.detectChanges();
        });

        it('If the number starts with a prefix +7', done => {
            onDropRemovePrefix('+71234567890', done);
        });

        it('If the number starts with a prefix 7', done => {
            onDropRemovePrefix('71234567890', done);
        });

        it('If the number starts with a prefix 8', done => {
            onDropRemovePrefix('81234567890', done);
        });

        it('If the number without a prefix', done => {
            onDropRemovePrefix('1234567890', done);
        });

        it('If there are unnecessary characters in the room', done => {
            onDropRemovePrefix('12%3--4(5)6ЕН78?90', done);
        });
    });

    describe('Phone input via copy / paste', () => {
        beforeEach(() => {
            testComponent.control.setValue('');
            fixture.detectChanges();
        });

        it('If the number starts with a prefix +7', done => {
            onPasteRemovePrefix('+71234567890', done);
        });

        it('If the number starts with a prefix 7', done => {
            onPasteRemovePrefix('71234567890', done);
        });

        it('If the number starts with a prefix 8', done => {
            onPasteRemovePrefix('81234567890', done);
        });

        it('If the number without a prefix', done => {
            onPasteRemovePrefix('1234567890', done);
        });

        it('If there are unnecessary characters in the room', done => {
            onPasteRemovePrefix('12%3--4(5)6ЕН78?90', done);
        });
    });

    function getTel(): HTMLElement {
        return pageObject.getByAutomationId(`tui-primitive-textfield__native-input`)!
            .nativeElement;
    }

    function onPasteRemovePrefix(value: string, done: DoneFn) {
        const pasteEvent = new ClipboardEvent('paste', {bubbles: true});
        const clipboardData = {
            getData: () => value,
        };

        Object.defineProperty(pasteEvent, 'clipboardData', {value: clipboardData});

        fixture.detectChanges();

        getTel().dispatchEvent(pasteEvent);

        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(component.nativeValue).toBe('+7 123 456-78-90');
            done();
        });
    }

    function onDropRemovePrefix(value: string, done: DoneFn) {
        const dragEvent = new DragEvent('drop', {bubbles: true});
        const dataTransfer = {
            getData: () => value,
        };

        Object.defineProperty(dragEvent, 'dataTransfer', {value: dataTransfer});

        fixture.detectChanges();

        getTel().dispatchEvent(dragEvent);
        fixture.whenStable().then(() => {
            fixture.detectChanges();
            expect(component.nativeValue).toBe('+7 123 456-78-90');
            done();
        });
    }
});
