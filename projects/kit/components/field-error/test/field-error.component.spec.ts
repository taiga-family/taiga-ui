import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {
    AbstractControl,
    FormArray,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    ValidationErrors,
    Validators,
} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiValidationError} from '@taiga-ui/cdk';
import {NativeInputPO, PageObject} from '@taiga-ui/testing';
import {
    PolymorpheusContent,
    PolymorpheusModule,
    PolymorpheusTemplate,
} from '@tinkoff/ng-polymorpheus';
import {configureTestSuite} from 'ng-bullet';
import {TuiInputModule} from '../../input/input.module';
import {TuiFieldErrorComponent} from '../field-error.component';
import {TuiFieldErrorModule} from '../field-error.module';

const ZIP_CODE_REGEXP = /^\d{6}$/;
const ZIP_CODE_MESSAGE = 'Индекс - 6 цифр';

const testContext = {
    get prefix() {
        return 'tui-error__';
    },
};

function arrayValidator(array: AbstractControl): ValidationErrors | null {
    return array instanceof FormArray && array.controls.length < 2
        ? {length: new TuiValidationError('Invalid array length')}
        : null;
}

function formGroupValidator(form: AbstractControl): ValidationErrors | null {
    let error = false;

    if (!(form instanceof FormGroup)) {
        return null;
    }

    for (const key in form.controls) {
        if (!form.controls[key].value) {
            error = true;
            break;
        }
    }

    return error ? {error: new TuiValidationError('There are empty values')} : null;
}

function zipCodeValidator(field: AbstractControl): ValidationErrors | null {
    return field.value && ZIP_CODE_REGEXP.test(field.value)
        ? null
        : {zipCode: new TuiValidationError(ZIP_CODE_MESSAGE)};
}

function getZipCodeValidatorWithContent(
    content: PolymorpheusContent,
): (field: AbstractControl) => ValidationErrors | null {
    return (field: AbstractControl): ValidationErrors | null =>
        field.value && ZIP_CODE_REGEXP.test(field.value)
            ? null
            : {zipCode: new TuiValidationError(content)};
}

describe('FieldError', () => {
    describe('formArray', () => {
        @Component({
            template: `
                <div [formGroup]="testForm">
                    <tui-field-error formArrayName="formArray"></tui-field-error>
                </div>
            `,
        })
        class TestComponent {
            @ViewChild(TuiFieldErrorComponent, {static: true})
            component: TuiFieldErrorComponent;

            testForm = new FormGroup({
                formArray: new FormArray([new FormControl('')], [arrayValidator]),
            });

            get formData() {
                return <FormArray>this.testForm.get('formArray');
            }

            addItem() {
                this.formData.push(new FormControl(''));
            }
        }

        let fixture: ComponentFixture<TestComponent>;
        let testComponent: TestComponent;
        let pageObject: PageObject<TestComponent>;

        configureTestSuite(() => {
            TestBed.configureTestingModule({
                imports: [
                    NoopAnimationsModule,
                    ReactiveFormsModule,
                    TuiFieldErrorModule,
                    TuiInputModule,
                ],
                declarations: [TestComponent],
            });
        });

        beforeEach(() => {
            fixture = TestBed.createComponent(TestComponent);
            pageObject = new PageObject(fixture);
            testComponent = fixture.componentInstance;

            fixture.detectChanges();
        });

        it('Validator error output due to incorrect length', () => {
            testComponent.formData.markAsTouched();
            fixture.detectChanges();

            expect(isErrorVisible(pageObject)).toBe(true);
            expect(getErrorText(pageObject)).toBe('Invalid array length');
        });

        it('If the conditions of the validator are met, hide the error', () => {
            testComponent.addItem();
            fixture.detectChanges();

            expect(isErrorVisible(pageObject)).toBe(false);
        });
    });

    describe('formGroup', () => {
        @Component({
            template: `
                <div [formGroup]="testForm">
                    <tui-input formControlName="item_1"></tui-input>
                    <tui-input formControlName="item_2"></tui-input>

                    <tui-field-error [formGroup]="testForm"></tui-field-error>
                </div>
            `,
        })
        class TestComponent {
            @ViewChild(TuiFieldErrorComponent, {static: true})
            component: TuiFieldErrorComponent;

            testForm = new FormGroup(
                {
                    item_1: new FormControl(''),
                    item_2: new FormControl(''),
                },
                [formGroupValidator],
            );
        }

        let fixture: ComponentFixture<TestComponent>;
        let testComponent: TestComponent;
        let pageObject: PageObject<TestComponent>;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [
                    NoopAnimationsModule,
                    ReactiveFormsModule,
                    TuiInputModule,
                    TuiFieldErrorModule,
                ],
                declarations: [TestComponent],
            });

            fixture = TestBed.createComponent(TestComponent);
            pageObject = new PageObject(fixture);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
        });

        it('Displaying validator error due to lack of value from form checkers', () => {
            testComponent.testForm.controls.item_1.setValue('test');
            testComponent.testForm.markAsTouched();
            fixture.detectChanges();

            expect(isErrorVisible(pageObject)).toBe(true);
            expect(getErrorText(pageObject)).toBe('There are empty values');
        });

        it('If the conditions of the validator are met, hide the error', () => {
            testComponent.testForm.controls.item_1.setValue('test');
            testComponent.testForm.controls.item_2.setValue('test');
            fixture.detectChanges();

            expect(isErrorVisible(pageObject)).toBe(false);
        });
    });

    describe('formControlName', () => {
        @Component({
            template: `
                <form [formGroup]="testForm">
                    <tui-input formControlName="control"></tui-input>

                    <ng-template #errorContent="polymorpheus" polymorpheus>
                        {{ testMes }}
                    </ng-template>

                    <tui-field-error
                        formControlName="control"
                        [order]="order"
                    ></tui-field-error>
                </form>
            `,
        })
        class TestComponent {
            @ViewChild('errorContent', {static: true})
            errorContent: PolymorpheusTemplate<{}>;

            readonly testMes = ZIP_CODE_MESSAGE;

            testForm = new FormGroup({
                control: new FormControl(),
            });

            order: string[];
        }

        let fixture: ComponentFixture<TestComponent>;
        let testComponent: TestComponent;
        let pageObject: PageObject<TestComponent>;
        let input: AbstractControl;
        let inputPO: NativeInputPO;

        beforeEach(() => {
            TestBed.configureTestingModule({
                imports: [
                    ReactiveFormsModule,
                    NoopAnimationsModule,
                    TuiInputModule,
                    TuiFieldErrorModule,
                    PolymorpheusModule,
                ],
                declarations: [TestComponent],
            });

            fixture = TestBed.createComponent(TestComponent);
            pageObject = new PageObject(fixture);
            testComponent = fixture.componentInstance;
            input = testComponent.testForm.controls['control'];

            inputPO = new NativeInputPO(fixture, 'tui-primitive-textfield__native-input');
        });

        describe('untouched', () => {
            it('The error is not shown in an empty field', () => {
                input.setValidators([Validators.required]);
                fixture.detectChanges();

                expect(isErrorVisible(pageObject)).toBe(false);
            });

            it('The error is not shown in the filled field', () => {
                input.setValidators([zipCodeValidator]);
                input.setValue('012');
                fixture.detectChanges();

                expect(isErrorVisible(pageObject)).toBe(false);
            });
        });

        describe('touched', () => {
            it('Default error shown for standard validator', () => {
                input.setValidators([Validators.required]);
                input.markAsTouched();
                fixture.detectChanges();

                const errorText = getErrorText(pageObject);

                expect(isErrorVisible(pageObject)).toBe(true);
                expect(errorText).toBe('Value is invalid');
            });

            it('For a custom validator with a string, the corresponding error text is shown', () => {
                input.setValidators([zipCodeValidator]);
                input.setValue('012');
                input.markAsTouched();
                fixture.detectChanges();

                const errorText = getErrorText(pageObject);

                expect(isErrorVisible(pageObject)).toBe(true);
                expect(errorText).toBe(ZIP_CODE_MESSAGE);
            });

            it('For a custom validator with a template, the corresponding error text is shown', () => {
                const content = testComponent.errorContent;

                input.setValidators([getZipCodeValidatorWithContent(content)]);
                input.setValue('012');
                input.markAsTouched();
                fixture.detectChanges();

                const errorText = getErrorText(pageObject);

                expect(isErrorVisible(pageObject)).toBe(true);
                expect(errorText).toBe(ZIP_CODE_MESSAGE);
            });

            it('If you enter a correct value in an invalid field, the error is hidden', done => {
                input.setValidators([zipCodeValidator]);
                input.setValue('012');
                input.markAsTouched();
                fixture.detectChanges();

                inputPO.sendText('012345');
                fixture.detectChanges();

                fixture.whenStable().then(() => {
                    fixture.detectChanges();
                    expect(isErrorVisible(pageObject)).toBe(false);
                    done();
                });
            });

            it('If you enter an incorrect value in a valid field, an error appears', () => {
                input.setValidators([zipCodeValidator]);
                input.setValue('012345');
                input.markAsTouched();
                fixture.detectChanges();

                inputPO.sendText('012');

                expect(isErrorVisible(pageObject)).toBe(true);
                expect(getErrorText(pageObject)).toBe(ZIP_CODE_MESSAGE);
            });
        });

        describe('Custom error order', () => {
            it('Errors are displayed in the specified order', () => {
                testComponent.order = ['required', 'zipCode'];
                input.setValidators([Validators.required, zipCodeValidator]);
                input.markAsTouched();
                fixture.detectChanges();

                expect(isErrorVisible(pageObject)).toBe(true);
                expect(getErrorText(pageObject)).toBe('Value is invalid');
            });

            it('Changing the order changes the error text', () => {
                testComponent.order = ['required', 'zipCode'];
                input.setValidators([Validators.required, zipCodeValidator]);
                input.markAsTouched();
                fixture.detectChanges();

                testComponent.order = ['zipCode', 'required'];
                fixture.detectChanges();

                expect(isErrorVisible(pageObject)).toBe(true);
                expect(getErrorText(pageObject)).toBe(ZIP_CODE_MESSAGE);
            });
        });
    });

    function isErrorVisible(pageObject: any): boolean {
        const errorTextElement = getErrorElement(pageObject);

        return !!errorTextElement;
    }

    function getErrorText(pageObject: any): string {
        return getErrorElement(pageObject)!.nativeElement.textContent.trim();
    }

    function getErrorElement(pageObject: any): DebugElement | null {
        return pageObject.getByAutomationId(`${testContext.prefix}text`);
    }
});
