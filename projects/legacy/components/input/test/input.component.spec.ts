import type {DebugElement, ElementRef} from '@angular/core';
import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TuiDataListDirective, TuiHint, TuiRoot} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {TuiDataListWrapperComponent} from '@taiga-ui/kit';
import {
    TuiInputComponent,
    TuiInputModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
import {
    tuiActiveText,
    tuiDispatchOnActive,
    TuiNativeInputPO,
    TuiPageObject,
} from '@taiga-ui/testing';

class User {
    constructor(
        public readonly firstName: string,
        public readonly lastName: string,
        public readonly id: string,
    ) {}

    public toString(): string {
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
        standalone: true,
        imports: [
            ReactiveFormsModule,
            TuiDataListDirective,
            TuiDataListWrapperComponent,
            TuiHint,
            TuiInputModule,
            TuiRoot,
            TuiTextfieldControllerModule,
        ],
        template: `
            <tui-root>
                <form [formGroup]="group">
                    <tui-input
                        formControlName="control"
                        [readOnly]="readOnly"
                        [tuiHintContent]="hintContent"
                        [tuiTextfieldCleaner]="cleaner"
                        [tuiTextfieldLabelOutside]="labelOutside"
                        [tuiTextfieldSize]="size"
                    >
                        <tui-data-list-wrapper
                            *tuiDataList
                            automation-id="tui-data-list-wrapper"
                            [items]="items"
                        ></tui-data-list-wrapper>
                    </tui-input>
                    <button
                        #submit
                        type="submit"
                    >
                        submit
                    </button>
                </form>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        @ViewChild(TuiInputComponent, {static: true})
        public component!: TuiInputComponent;

        @ViewChild('submit')
        public submit!: ElementRef<HTMLButtonElement>;

        public cleaner = false;

        public readOnly = false;

        public labelOutside = false;

        public items: User[] | null = ITEMS;

        public size: TuiSizeL | TuiSizeS = 'm';

        public hintContent: string | null = 'prompt';

        public group = new FormGroup({control: new FormControl()});

        public get control(): FormControl {
            return this.group.get('control') as FormControl;
        }
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let pageObject: TuiPageObject<Test>;
    let inputPO: TuiNativeInputPO;
    let updateSpy: any;

    function getDropdown(): DebugElement | null {
        return pageObject.getByAutomationId('tui-data-list-wrapper');
    }

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;

        inputPO = new TuiNativeInputPO(fixture, 'tui-primitive-textfield__native-input');
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
            it('dropdown does not appear on focus', () => {
                expect(getDropdown()).toBeNull();
            });

            it('down arrow when readonly is on', () => {
                testComponent.readOnly = true;
                fixture.detectChanges();
                inputPO.sendKeydown('arrowDown');

                expect(getDropdown()).toBeNull();
            });
        });

        it('dropdown is hidden by Esc', () => {
            inputPO.sendText('ен');
            inputPO.sendKeydown('escape');

            expect(getDropdown()).toBeNull();
        });

        it('the value is substituted when selecting an item from the dropdown', () => {
            inputPO.sendText('ен');
            pageObject
                .getByAutomationId('tui-data-list-wrapper__option')!
                .nativeElement.click();

            expect(testComponent.control.value).toBe(ITEMS[0]?.toString());
        });
    });

    describe('Updating the state of the control', () => {
        beforeEach(() => {
            updateSpy = jest.spyOn(testComponent.component, 'checkControlUpdate');
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

        it('updating the control updates the input', async () => {
            testComponent.control.setValue('321');
            fixture.detectChanges();
            await fixture.whenStable();

            fixture.detectChanges();
            await fixture.whenStable();

            expect(inputPO.value).toBe('321');
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

        it('focus in the dropdown', () => {
            expect(tuiActiveText()).toBe(ITEMS[0]?.toString());
        });

        it('entering characters brings focus to the input field', () => {
            tuiDispatchOnActive('e');

            expect(document.activeElement).toBe(inputPO.nativeElement);
        });

        it("pressing 'Spacebar' moves focus to the input field", () => {
            tuiDispatchOnActive('Spacebar');

            expect(document.activeElement).toBe(inputPO.nativeElement);
        });

        it("pressing 'Backspace' moves focus to the input field", () => {
            tuiDispatchOnActive('Backspace');

            expect(document.activeElement).toBe(inputPO.nativeElement);
        });

        it("pressing 'Delete' moves focus to the input field", () => {
            tuiDispatchOnActive('Delete');

            expect(document.activeElement).toBe(inputPO.nativeElement);
        });

        it("pressing 'ArrowLeft' moves focus to the input field", () => {
            tuiDispatchOnActive('ArrowLeft');

            expect(document.activeElement).toBe(inputPO.nativeElement);
        });

        it("pressing 'ArrowRight' moves focus to the input field", () => {
            tuiDispatchOnActive('ArrowRight');

            expect(document.activeElement).toBe(inputPO.nativeElement);
        });

        it("pressing 'Left' moves focus to the input field", () => {
            tuiDispatchOnActive('Left');

            expect(document.activeElement).toBe(inputPO.nativeElement);
        });

        it("pressing 'Right' moves focus to the input field", () => {
            tuiDispatchOnActive('Right');

            expect(document.activeElement).toBe(inputPO.nativeElement);
        });

        it("pressing 'End' moves focus to the input field", () => {
            tuiDispatchOnActive('End');

            expect(document.activeElement).toBe(inputPO.nativeElement);
        });

        it("pressing 'Home' moves focus to the input field", () => {
            tuiDispatchOnActive('Home');

            expect(document.activeElement).toBe(inputPO.nativeElement);
        });
    });

    it('loading shown when items === null', () => {
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
