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

        hintContent: string | null = 'Подсказка';

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

    describe('Автокомплит', () => {
        beforeEach(() => {
            fixture.detectChanges();
            inputPO.focus();
        });

        describe('Выпадашка появляется', () => {
            it('при нажатии стрелки вниз', () => {
                inputPO.sendKeydown('arrowDown');

                expect(getDropdown()).not.toBeNull();
            });

            it('при вводе', () => {
                inputPO.sendText('ен');

                expect(getDropdown()).not.toBeNull();
            });
        });

        describe('Выпадашка не появляется', () => {
            it('Выпадашка не появляется при фокусе', () => {
                expect(getDropdown()).toBeNull();
            });

            it('при нажатии стрелки вниз когда стоит readonly', () => {
                testComponent.readOnly = true;
                fixture.detectChanges();
                inputPO.sendKeydown('arrowDown');

                expect(getDropdown()).toBeNull();
            });
        });

        it('Выпадашка скрывается по Esc', () => {
            inputPO.sendText('ен');
            inputPO.sendKeydown('escape');

            expect(getDropdown()).toBeNull();
        });

        it('Значение подставляется при выборе элемента из выпадашки', () => {
            inputPO.sendText('ен');
            pageObject
                .getByAutomationId('tui-data-list-wrapper__option')!
                .nativeElement.click();

            expect(testComponent.control.value).toBe(ITEMS[0].toString());
        });
    });

    describe('Обновление состояния контрола', () => {
        beforeEach(() => {
            updateSpy = spyOn(testComponent.component, 'checkControlUpdate');
        });

        it('updateValueAndValidity вызывает обновление контрола', () => {
            testComponent.control.updateValueAndValidity();
            fixture.detectChanges();

            expect(updateSpy).toHaveBeenCalled();
        });

        it('setErrors вызывает обновление контрола', () => {
            testComponent.control.setErrors({test: true});
            fixture.detectChanges();

            expect(updateSpy).toHaveBeenCalled();
        });

        it('Обновление контрола обновляет инпут', done => {
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

        it('updateOn: change обновляется по смене значения', () => {
            testComponent.control.setValue('321');
            fixture.detectChanges();
            inputPO.sendText('123');

            expect(testComponent.control.value).toBe('123');
        });

        it('updateOn: blur не обновляется по смене значения', () => {
            testComponent.group = new FormGroup({
                control: new FormControl('321', {updateOn: 'blur'}),
            });
            fixture.detectChanges();

            inputPO.focus();
            inputPO.sendText('123');

            expect(testComponent.control.value).toBe('321');
        });

        it('updateOn: blur обновляется по выходу из поля', () => {
            testComponent.group = new FormGroup({
                control: new FormControl('321', {updateOn: 'blur'}),
            });
            fixture.detectChanges();

            inputPO.focus();
            inputPO.sendText('123');
            testComponent.submit.nativeElement.focus();

            expect(testComponent.control.value).toBe('123');
        });

        it('updateOn: submit не обновляется по смене значения', () => {
            testComponent.group = new FormGroup({
                control: new FormControl('321', {updateOn: 'submit'}),
            });
            fixture.detectChanges();

            inputPO.focus();
            inputPO.sendText('123');

            expect(testComponent.control.value).toBe('321');
        });

        it('updateOn: submit не обновляется по выходу из поля', () => {
            testComponent.group = new FormGroup({
                control: new FormControl('321', {updateOn: 'submit'}),
            });
            fixture.detectChanges();

            inputPO.focus();
            inputPO.sendText('123');
            testComponent.submit.nativeElement.focus();

            expect(testComponent.control.value).toBe('321');
        });

        it('updateOn: submit обновляется по сабмиту формы', () => {
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

    describe('Возврат в поле при вводе', () => {
        beforeEach(() => {
            fixture.detectChanges();
            inputPO.focus();
            inputPO.sendKeydown('ArrowDown');
            inputPO.sendKeydown('ArrowDown');
        });

        it('Фокус в выпадашке', () => {
            expect(activeText()).toBe(ITEMS[0].toString());
        });

        it('Ввод символов переносит фокус в поле ввода', () => {
            dispatchOnActive('e');

            expect(document.activeElement).toBe(inputPO.nativeElement);
        });

        it(`Нажатие ${tuiEditingKeys[0]} переносит фокус в поле ввода`, () => {
            dispatchOnActive(tuiEditingKeys[0]);

            expect(document.activeElement).toBe(inputPO.nativeElement);
        });

        it(`Нажатие ${tuiEditingKeys[1]} переносит фокус в поле ввода`, () => {
            dispatchOnActive(tuiEditingKeys[1]);

            expect(document.activeElement).toBe(inputPO.nativeElement);
        });

        it(`Нажатие ${tuiEditingKeys[2]} переносит фокус в поле ввода`, () => {
            dispatchOnActive(tuiEditingKeys[2]);

            expect(document.activeElement).toBe(inputPO.nativeElement);
        });

        it(`Нажатие ${tuiEditingKeys[3]} переносит фокус в поле ввода`, () => {
            dispatchOnActive(tuiEditingKeys[3]);

            expect(document.activeElement).toBe(inputPO.nativeElement);
        });

        it(`Нажатие ${tuiEditingKeys[4]} переносит фокус в поле ввода`, () => {
            dispatchOnActive(tuiEditingKeys[4]);

            expect(document.activeElement).toBe(inputPO.nativeElement);
        });

        it(`Нажатие ${tuiEditingKeys[5]} переносит фокус в поле ввода`, () => {
            dispatchOnActive(tuiEditingKeys[5]);

            expect(document.activeElement).toBe(inputPO.nativeElement);
        });

        it(`Нажатие ${tuiEditingKeys[6]} переносит фокус в поле ввода`, () => {
            dispatchOnActive(tuiEditingKeys[6]);

            expect(document.activeElement).toBe(inputPO.nativeElement);
        });
    });

    it('Загрузка показана при items === null', () => {
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
