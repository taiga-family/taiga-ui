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

    describe('Field', () => {
        describe('when you click on it', () => {
            beforeEach(() => {
                // Focus happens before click, after mousedown
                inputPO.focus();
            });

            it('opens a dropdown', () => {
                getInputTag().nativeElement.click();
                fixture.detectChanges();

                expect(getDropdown()).not.toBeNull();
            });

            describe('does not open the dropdown', () => {
                it('in readOnly mode', () => {
                    testComponent.readOnly = true;
                    fixture.detectChanges();
                    getInputTag().nativeElement.click();
                    fixture.detectChanges();

                    expect(getDropdown()).toBeNull();
                });

                it('if control is disabled', () => {
                    testComponent.control.disable();
                    fixture.detectChanges();
                    getInputTag().nativeElement.click();
                    fixture.detectChanges();

                    expect(getDropdown()).toBeNull();
                });
            });
        });
    });

    describe('Arrow', () => {
        it('Click on the arrow to open the dropdown', () => {
            getArrow()!.nativeElement.click();
            fixture.detectChanges();

            expect(getDropdown()).not.toBeNull();
        });

        it('Clicking the arrow again closes the dropdown', () => {
            getArrow()!.nativeElement.click();
            fixture.detectChanges();
            getArrow()!.nativeElement.click();
            fixture.detectChanges();

            expect(getDropdown()).toBeNull();
        });

        it('There is no interactive arrow in readOnly mode', () => {
            testComponent.readOnly = true;
            fixture.detectChanges();

            expect(getArrow()).toBeNull();
        });

        it('In disabled mode there is no interactive arrow', () => {
            testComponent.control.disable();
            fixture.detectChanges();

            expect(getArrow()).toBeNull();
        });
    });

    describe('Keyboard', () => {
        beforeEach(() => {
            inputPO.focus();
        });

        it('Down arrow opens a dropdown', () => {
            inputPO.sendKeydown('ArrowDown');
            fixture.detectChanges();

            expect(getDropdown()).not.toBeNull();
        });

        it('Esc closes the dropdown', () => {
            inputPO.sendKeydown('ArrowDown');
            fixture.detectChanges();
            inputPO.sendKeydown('Escape');
            fixture.detectChanges();

            expect(getDropdown()).not.toBeNull();
        });

        it('Down arrow does not open dropdown in readOnly mode', () => {
            testComponent.readOnly = true;
            fixture.detectChanges();
            inputPO.sendKeydown('ArrowDown');
            fixture.detectChanges();

            expect(getDropdown()).toBeNull();
        });

        it('The repeated down arrow moves focus to the item', () => {
            inputPO.sendKeydown('ArrowDown');
            inputPO.sendKeydown('ArrowDown');

            expect(document.activeElement!.tagName.toLowerCase()).toBe('button');
        });

        it('Click to remove the selected item', () => {
            inputPO.sendKeydown('ArrowDown');
            inputPO.sendKeydown('ArrowDown');
            (document.activeElement as HTMLElement).click();

            expect(testComponent.control.value).toEqual([]);
        });

        it('Click to select an unselected item', () => {
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
