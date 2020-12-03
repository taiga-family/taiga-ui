import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
    TuiDataListModule,
    TuiHintControllerModule,
    TuiRootModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiDataListWrapperModule} from '@taiga-ui/kit/components';
import {NativeInputPO, PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiMultiSelectComponent} from '../multi-select.component';
import {TuiMultiSelectModule} from '../multi-select.module';

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
    new User('Marsi', 'Barsi', '0'),
    new User('Роман', 'Седов', '1'),
    new User('Water', 'Plea', '2'),
    new User('Alexander', 'Inkin', '3'),
    new User('Александр', 'Инкин', '4'),
];

describe('MultiSelect', () => {
    @Component({
        template: `
            <tui-root>
                <tui-multi-select [formControl]="control" [readOnly]="readOnly">
                    <tui-data-list-wrapper
                        *tuiDataList
                        automation-id="tui-multi-select__menu"
                        [items]="items"
                    ></tui-data-list-wrapper>
                </tui-multi-select>
            </tui-root>
        `,
    })
    class TestComponent {
        @ViewChild(TuiMultiSelectComponent, {static: true})
        component: TuiMultiSelectComponent<User>;

        items = ITEMS;

        control = new FormControl([ITEMS[0]]);

        readOnly = false;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: PageObject<TestComponent>;
    let inputPO: NativeInputPO;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                NoopAnimationsModule,
                TuiMultiSelectModule,
                TuiRootModule,
                TuiDataListModule,
                TuiDataListWrapperModule,
                TuiTextfieldControllerModule,
                TuiHintControllerModule,
            ],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;

        inputPO = new NativeInputPO(fixture, 'tui-input-tag__native');
        fixture.detectChanges();
    });

    describe('Поле', () => {
        describe('при клике на него', () => {
            beforeEach(() => {
                // Focus happens before click, after mousedown
                inputPO.focus();
            });

            it('открывает выпадашку', () => {
                getInputTag().nativeElement.click();
                fixture.detectChanges();

                expect(getDropdown()).not.toBeNull();
            });

            describe('не открывает выпадашку', () => {
                it('в режиме readOnly', () => {
                    testComponent.readOnly = true;
                    fixture.detectChanges();
                    getInputTag().nativeElement.click();
                    fixture.detectChanges();

                    expect(getDropdown()).toBeNull();
                });

                it('если контрол отключен', () => {
                    testComponent.control.disable();
                    fixture.detectChanges();
                    getInputTag().nativeElement.click();
                    fixture.detectChanges();

                    expect(getDropdown()).toBeNull();
                });
            });
        });
    });

    describe('Стрелочка', () => {
        it('Клик по стрелке открывает выпадашку', () => {
            getArrow()!.nativeElement.click();
            fixture.detectChanges();

            expect(getDropdown()).not.toBeNull();
        });

        it('Повторный клик по стрелке закрывает выпадашку', () => {
            getArrow()!.nativeElement.click();
            fixture.detectChanges();
            getArrow()!.nativeElement.click();
            fixture.detectChanges();

            expect(getDropdown()).toBeNull();
        });

        it('В режиме readOnly интерактивной стрелочки нет', () => {
            testComponent.readOnly = true;
            fixture.detectChanges();

            expect(getArrow()).toBeNull();
        });

        it('В режиме disabled интерактивной стрелочки нет', () => {
            testComponent.control.disable();
            fixture.detectChanges();

            expect(getArrow()).toBeNull();
        });
    });

    describe('Клавиатура', () => {
        beforeEach(() => {
            inputPO.focus();
        });

        it('Стрелка вниз открывает выпадашку', () => {
            inputPO.sendKeydown('ArrowDown');
            fixture.detectChanges();

            expect(getDropdown()).not.toBeNull();
        });

        it('Esc закрывает выпадашку', () => {
            inputPO.sendKeydown('ArrowDown');
            fixture.detectChanges();
            inputPO.sendKeydown('Escape');
            fixture.detectChanges();

            expect(getDropdown()).not.toBeNull();
        });

        it('В режиме readOnly стрелка вниз не открывает выпадашку', () => {
            testComponent.readOnly = true;
            fixture.detectChanges();
            inputPO.sendKeydown('ArrowDown');
            fixture.detectChanges();

            expect(getDropdown()).toBeNull();
        });

        it('Повторная стрелка вниз переводит фокус на пункт', () => {
            inputPO.sendKeydown('ArrowDown');
            inputPO.sendKeydown('ArrowDown');

            expect(document.activeElement!.tagName.toLowerCase()).toBe('button');
        });

        it('Клик снимает выбранный пункт', () => {
            inputPO.sendKeydown('ArrowDown');
            inputPO.sendKeydown('ArrowDown');
            (document.activeElement as HTMLElement).click();

            expect(testComponent.control.value).toEqual([]);
        });

        it('Клик выбирает невыбранный пункт', () => {
            inputPO.sendKeydown('ArrowDown');
            inputPO.sendKeydown('ArrowDown');
            (document.activeElement as HTMLElement).click();
            (document.activeElement as HTMLElement).click();

            expect(testComponent.control.value).toEqual([ITEMS[0]]);
        });
    });

    function getInputTag(): DebugElement {
        return pageObject.getByAutomationId('tui-multi-select__input')!;
    }

    function getDropdown(): DebugElement | null {
        return pageObject.getByAutomationId('tui-multi-select__menu');
    }

    function getArrow(): DebugElement | null {
        return pageObject.getByAutomationId('tui-multi-select__arrow');
    }
});
