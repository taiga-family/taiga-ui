import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
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

import {TuiMultiSelectModule} from '../multi-select.module';
import {
    getArrow,
    getDropdown,
    getInputTag,
    ITEMS,
    MultiSelectTestComponent,
} from './multi-select.helpers';

describe('MultiSelect', () => {
    let fixture: ComponentFixture<MultiSelectTestComponent>;
    let testComponent: MultiSelectTestComponent;
    let pageObject: PageObject<MultiSelectTestComponent>;
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
            declarations: [MultiSelectTestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MultiSelectTestComponent);
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
                getInputTag(pageObject).nativeElement.click();
                fixture.detectChanges();

                expect(getDropdown(pageObject)).not.toBeNull();
            });

            describe('does not open the dropdown', () => {
                it('in readOnly mode', () => {
                    testComponent.readOnly = true;
                    fixture.detectChanges();
                    getInputTag(pageObject).nativeElement.click();
                    fixture.detectChanges();

                    expect(getDropdown(pageObject)).toBeNull();
                });

                it('if control is disabled', () => {
                    testComponent.control.disable();
                    fixture.detectChanges();
                    getInputTag(pageObject).nativeElement.click();
                    fixture.detectChanges();

                    expect(getDropdown(pageObject)).toBeNull();
                });
            });
        });
    });

    describe('Arrow', () => {
        it('Click on the arrow to open the dropdown', () => {
            getArrow(pageObject)?.nativeElement.click();
            fixture.detectChanges();

            expect(getDropdown(pageObject)).not.toBeNull();
        });

        it('Clicking the arrow again closes the dropdown', () => {
            getArrow(pageObject)?.nativeElement.click();
            fixture.detectChanges();
            getArrow(pageObject)?.nativeElement.click();
            fixture.detectChanges();

            expect(getDropdown(pageObject)).toBeNull();
        });

        it('There is exists interactive arrow in readOnly mode', () => {
            testComponent.readOnly = true;
            fixture.detectChanges();

            expect(getArrow(pageObject)?.nativeElement).toBeTruthy();
        });

        it('In disabled mode there is interactive arrow exists', () => {
            testComponent.control.disable();
            fixture.detectChanges();

            expect(getArrow(pageObject)?.nativeElement).toBeTruthy();
        });
    });

    describe('Keyboard', () => {
        beforeEach(() => {
            inputPO.focus();
        });

        it('Down arrow opens a dropdown', () => {
            inputPO.sendKeydown('ArrowDown');
            fixture.detectChanges();

            expect(getDropdown(pageObject)).not.toBeNull();
        });

        it('Esc closes the dropdown', () => {
            inputPO.sendKeydown('ArrowDown');
            fixture.detectChanges();
            inputPO.sendKeydown('Escape');
            fixture.detectChanges();

            expect(getDropdown(pageObject)).toBeNull();
        });

        it('Down arrow does not open dropdown in readOnly mode', () => {
            testComponent.readOnly = true;
            fixture.detectChanges();
            inputPO.sendKeydown('ArrowDown');
            fixture.detectChanges();

            expect(getDropdown(pageObject)).toBeNull();
        });

        it('The repeated down arrow moves focus to the item', () => {
            inputPO.sendKeydown('ArrowDown');
            inputPO.sendKeydown('ArrowDown');

            expect(document.activeElement?.tagName.toLowerCase()).toBe('button');
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
});
