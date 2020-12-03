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

    describe('Начальное значение', () => {
        it('Значение в поле отформатировано по маске', done => {
            fixture.whenStable().then(() => {
                expect(inputPO.value).toBe('+7 911 033-01-02');
                done();
            });
        });

        it('Исходное значение в formControl не изменилось и не содержит скобок', () => {
            expect(testComponent.control.value).toBe('+79110330102');
        });

        it('При фокусе на пустое поле, в поле выставляется "+7 "', done => {
            testComponent.control.reset();
            fixture.detectChanges();
            inputPO.focus();
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(inputPO.value).toBe(`${testComponent.component.countryCode} `);
                done();
            });
        });

        it('При фокусе пустого поля, +7 не добавляется в контрол"', done => {
            testComponent.control.reset();
            fixture.detectChanges();
            inputPO.focus();
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(testComponent.control.value).toBe(null);
                done();
            });
        });

        it('При фокусе на пустое поле в режиме readOnly, в поле не выставляется "+7 "', done => {
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

        it('При блюре из поля, в котором введено только "+7 ", значение очищается', () => {
            inputPO.nativeElement.focus();
            inputPO.nativeElement.blur();
            fixture.detectChanges();

            expect(inputPO.value).toBe('');
        });
    });

    describe('Использование различных кодов и маск', () => {
        beforeEach(done => {
            fixture.whenStable().then(() => {
                testComponent.control.setValue('');
                fixture.detectChanges();
                done();
            });
        });

        it('Назначении телефонного кода и при фокусе на пустом поле, отображается заданный код', done => {
            testComponent.countryCode = '+850';
            fixture.detectChanges();
            inputPO.focus();
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(inputPO.value).toBe('+850 ');
                done();
            });
        });

        it('Ввод номера с новым кодом', done => {
            testComponent.countryCode = '+850';
            testComponent.control.setValue('+8508121234567');
            fixture.detectChanges();

            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(inputPO.value).toBe('+850 812 123-45-67');
                done();
            });
        });

        it('Новая маска', done => {
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

        it('В маску переданы невалидные символы', done => {
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

    describe('Значение в formControl меняется снаружи', () => {
        beforeEach(() => {
            testComponent.control.setValue('+78121234567');
            fixture.detectChanges();
        });

        it('В поле появляется новое отформатированное значение', done => {
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(inputPO.value).toBe('+7 812 123-45-67');
                done();
            });
        });

        it('В новое значение в formControl скобки не добавляются', () => {
            expect(testComponent.control.value).toBe('+78121234567');
        });
    });

    describe('Значение в formControl меняется снаружи на неполный номер', () => {
        it('В поле появилась отформатированная часть номера', done => {
            testComponent.control.setValue('+78121');
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                expect(inputPO.value).toBe('+7 812 1');
                done();
            });
        });
    });

    describe('Значение в formControl меняется снаружи на пустое', () => {
        it('Если значение null, в поле при фокусе появилась значение "+7"', done => {
            testComponent.control.setValue(null);
            fixture.detectChanges();
            inputPO.focus();

            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(inputPO.value).toBe('+7 ');
                done();
            });
        });

        it('Если значение пустая строка, в поле при фокусе появилась значение "+7"', done => {
            testComponent.control.setValue('');
            inputPO.focus();

            fixture.whenStable().then(() => {
                fixture.detectChanges();
                expect(inputPO.value).toBe('+7 ');
                done();
            });
        });

        it('Если значение было, а после стерли до +7', done => {
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

    describe('Ввод короткого телефона (меньше 12 символов)', () => {
        it('В значение formControl передается короткий телефон', () => {
            component.onValueChange('+712345');
            fixture.detectChanges();
            expect(testComponent.control.value).toBe('+712345');
        });
    });

    describe('Ввод телефона через Drag&Drop', () => {
        beforeEach(() => {
            testComponent.control.setValue('');
            fixture.detectChanges();
        });

        it('Если номер начинается с префикса +7', done => {
            onDropRemovePrefix('+71234567890', done);
        });

        it('Если номер начинается с префикса 7', done => {
            onDropRemovePrefix('71234567890', done);
        });

        it('Если номер начинается с префикса 8', done => {
            onDropRemovePrefix('81234567890', done);
        });

        it('Если номер без префикса', done => {
            onDropRemovePrefix('1234567890', done);
        });

        it('Если в номере присутсвуют ненужные символы', done => {
            onDropRemovePrefix('12%3--4(5)6ЕН78?90', done);
        });
    });

    describe('Ввод телефона через copy/paste', () => {
        beforeEach(() => {
            testComponent.control.setValue('');
            fixture.detectChanges();
        });

        it('Если номер начинается с префикса +7', done => {
            onPasteRemovePrefix('+71234567890', done);
        });

        it('Если номер начинается с префикса 7', done => {
            onPasteRemovePrefix('71234567890', done);
        });

        it('Если номер начинается с префикса 8', done => {
            onPasteRemovePrefix('81234567890', done);
        });

        it('Если номер без префикса', done => {
            onPasteRemovePrefix('1234567890', done);
        });

        it('Если в номере присутсвуют ненужные символы', done => {
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
