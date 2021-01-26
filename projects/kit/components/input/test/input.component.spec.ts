import {Component, DebugElement, ElementRef, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
    TuiDataListModule,
    tuiEditingKeys,
    TuiHintControllerModule,
    TuiRootModule,
    TuiSizeL,
    TuiSizeS,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiDataListWrapperModule} from '@taiga-ui/kit/components';
import {activeText, dispatchOnActive, NativeInputPO, PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiInputComponent} from '../input.component';
import {TuiInputModule} from '../input.module';

class User {
    constructor(
        readonly firstName: string,
        readonly lastName: string,
        readonly id: string,
    ) {}

    toString(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

const ITEMS = [
    new User('Роман', 'Седов', '0'),
    new User('Roman', 'Sedov', '1'),
    new User('Water', 'plea', '2'),
    new User('Alex', 'Inkin', '3'),
    new User('Александр', 'Инкин', '4'),
];

describe('Input', () => {
    @Component({
        template: `
            <tui-root>
                <form [formGroup]="group">
                    <tui-input
                        formControlName="control"
                        [tuiTextfieldCleaner]="cleaner"
                        [tuiTextfieldExampleText]="exampleText"
                        [tuiTextfieldLabelOutside]="labelOutside"
                        [tuiTextfieldSize]="size"
                        [tuiHintContent]="hintContent"
                        [readOnly]="readOnly"
                    >
                        <tui-data-list-wrapper
                            *tuiDataList
                            automation-id="tui-data-list-wrapper"
                            [items]="items"
                        ></tui-data-list-wrapper>
                    </tui-input>
                    <button #submit type="submit">submit</button>
                </form>
            </tui-root>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputComponent, {static: true})
        component: TuiInputComponent;

        @ViewChild('submit')
        submit: ElementRef<HTMLButtonElement>;

        cleaner = false;

        readOnly = false;

        labelOutside = false;

        items: User[] | null = ITEMS;

        size: TuiSizeS | TuiSizeL = 'm';

        exampleText = 'placeholder';

        hintContent: string | null = 'prompt';

        group = new FormGroup({control: new FormControl()});

        get control(): FormControl {
            return this.group.get('control') as FormControl;
        }
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: PageObject<TestComponent>;
    let inputPO: NativeInputPO;
    let updateSpy: jasmine.Spy;

    function getDropdown(): DebugElement | null {
        return pageObject.getByAutomationId('tui-data-list-wrapper');
    }

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                TuiRootModule,
                NoopAnimationsModule,
                ReactiveFormsModule,
                TuiInputModule,
                TuiTextfieldControllerModule,
                TuiHintControllerModule,
                TuiDataListModule,
                TuiDataListWrapperModule,
            ],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;

        inputPO = new NativeInputPO(fixture, `tui-primitive-textfield__native-input`);
    });

    describe('Autocomplete', () => {
        beforeEach(() => {
            fixture.detectChanges();
            inputPO.focus();
        });

        describe('Dropdown appears', () => {
            it('down arrow', () => {
                inputPO.sendKeydown('arrowDown');

                expect(getDropdown()).not.toBeNull();
            });

            it('при вводе', () => {
                inputPO.sendText('ен');

                expect(getDropdown()).not.toBeNull();
            });
        });

        describe('Dropdown does not appear', () => {
            it('Dropdown does not appear on focus', () => {
                expect(getDropdown()).toBeNull();
            });

            it('down arrow when readonly is on', () => {
                testComponent.readOnly = true;
                fixture.detectChanges();
                inputPO.sendKeydown('arrowDown');

                expect(getDropdown()).toBeNull();
            });
        });

        it('Dropdown is hidden by Esc', () => {
            inputPO.sendText('ен');
            inputPO.sendKeydown('escape');

            expect(getDropdown()).toBeNull();
        });

        it('The value is substituted when selecting an item from the dropdown', () => {
            inputPO.sendText('ен');
            pageObject
                .getByAutomationId('tui-data-list-wrapper__option')!
                .nativeElement.click();

            expect(testComponent.control.value).toBe(ITEMS[0].toString());
        });
    });

    describe('Updating the state of the control', () => {
        beforeEach(() => {
            updateSpy = spyOn(testComponent.component, 'checkControlUpdate');
        });

        it('updateValueAndValidity causes the control to be updated', () => {
            testComponent.control.updateValueAndValidity();
            fixture.detectChanges();

            expect(updateSpy).toHaveBeenCalled();
        });

        it('setErrors calls update of the control', () => {
            testComponent.control.setErrors({test: true});
            fixture.detectChanges();

            expect(updateSpy).toHaveBeenCalled();
        });

        it('Updating the control updates the input', done => {
            testComponent.control.setValue('321');
            fixture.detectChanges();
            fixture.whenStable().then(() => {
                fixture.detectChanges();
                fixture.whenStable().then(() => {
                    expect(inputPO.value).toBe('321');
                    done();
                });
            });
        });

        it('updateOn: change is updated when the value is changed', () => {
            testComponent.control.setValue('321');
            fixture.detectChanges();
            inputPO.sendText('123');

            expect(testComponent.control.value).toBe('123');
        });

        it('updateOn: blur is not updated on value change', () => {
            testComponent.group = new FormGroup({
                control: new FormControl('321', {updateOn: 'blur'}),
            });
            fixture.detectChanges();

            inputPO.focus();
            inputPO.sendText('123');

            expect(testComponent.control.value).toBe('321');
        });

        it('updateOn: blur is updated on leaving the field', () => {
            testComponent.group = new FormGroup({
                control: new FormControl('321', {updateOn: 'blur'}),
            });
            fixture.detectChanges();

            inputPO.focus();
            inputPO.sendText('123');
            testComponent.submit.nativeElement.focus();

            expect(testComponent.control.value).toBe('123');
        });

        it('updateOn: submit is not updated on value change', () => {
            testComponent.group = new FormGroup({
                control: new FormControl('321', {updateOn: 'submit'}),
            });
            fixture.detectChanges();

            inputPO.focus();
            inputPO.sendText('123');

            expect(testComponent.control.value).toBe('321');
        });

        it('updateOn: submit is not updated on leaving the field', () => {
            testComponent.group = new FormGroup({
                control: new FormControl('321', {updateOn: 'submit'}),
            });
            fixture.detectChanges();

            inputPO.focus();
            inputPO.sendText('123');
            testComponent.submit.nativeElement.focus();

            expect(testComponent.control.value).toBe('321');
        });

        it('updateOn: submit is updated on form submission', () => {
            testComponent.group = new FormGroup({
                control: new FormControl('321', {updateOn: 'submit'}),
            });
            fixture.detectChanges();

            inputPO.focus();
            inputPO.sendText('123');
            testComponent.submit.nativeElement.click();

            expect(testComponent.control.value).toBe('123');
        });
    });

    describe('Return to field as you type', () => {
        beforeEach(() => {
            fixture.detectChanges();
            inputPO.focus();
            inputPO.sendKeydown('ArrowDown');
            inputPO.sendKeydown('ArrowDown');
        });

        it('Focus in the dropdown', () => {
            expect(activeText()).toBe(ITEMS[0].toString());
        });

        it('Entering characters brings focus to the input field', () => {
            dispatchOnActive('e');

            expect(document.activeElement).toBe(inputPO.nativeElement);
        });

        it(`Pressing ${tuiEditingKeys[0]} moves focus to the input field`, () => {
            dispatchOnActive(tuiEditingKeys[0]);

            expect(document.activeElement).toBe(inputPO.nativeElement);
        });

        it(`Pressing ${tuiEditingKeys[1]} moves focus to the input field`, () => {
            dispatchOnActive(tuiEditingKeys[1]);

            expect(document.activeElement).toBe(inputPO.nativeElement);
        });

        it(`Pressing ${tuiEditingKeys[2]} moves focus to the input field`, () => {
            dispatchOnActive(tuiEditingKeys[2]);

            expect(document.activeElement).toBe(inputPO.nativeElement);
        });

        it(`Pressing ${tuiEditingKeys[3]} moves focus to the input field`, () => {
            dispatchOnActive(tuiEditingKeys[3]);

            expect(document.activeElement).toBe(inputPO.nativeElement);
        });

        it(`Pressing ${tuiEditingKeys[4]} moves focus to the input field`, () => {
            dispatchOnActive(tuiEditingKeys[4]);

            expect(document.activeElement).toBe(inputPO.nativeElement);
        });

        it(`Pressing ${tuiEditingKeys[5]} moves focus to the input field`, () => {
            dispatchOnActive(tuiEditingKeys[5]);

            expect(document.activeElement).toBe(inputPO.nativeElement);
        });

        it(`Pressing ${tuiEditingKeys[6]} moves focus to the input field`, () => {
            dispatchOnActive(tuiEditingKeys[6]);

            expect(document.activeElement).toBe(inputPO.nativeElement);
        });
    });

    it('Loading shown when items === null', () => {
        testComponent.items = null;
        fixture.detectChanges();
        inputPO.focus();
        inputPO.sendKeydown('ArrowDown');
        fixture.detectChanges();

        expect(
            pageObject.getByAutomationId('tui-data-list-wrapper__loader'),
        ).not.toBeNull();
    });
});
