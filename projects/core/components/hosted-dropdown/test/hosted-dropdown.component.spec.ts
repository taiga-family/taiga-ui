import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {dispatchOnActive, PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiTextfieldControllerModule} from '../../../directives';
import {TuiButtonComponent} from '../../button/button.component';
import {TuiButtonModule} from '../../button/button.module';
import {TuiDataListModule} from '../../data-list/data-list.module';
import {TuiPrimitiveTextfieldComponent} from '../../primitive-textfield/primitive-textfield.component';
import {TuiPrimitiveTextfieldModule} from '../../primitive-textfield/primitive-textfield.module';
import {TuiRootModule} from '../../root/root.module';
import {TuiHostedDropdownModule} from '../hosted-dropdown.module';

describe('TuiHostedDropdown', () => {
    @Component({
        template: `
            <tui-root>
                <tui-hosted-dropdown
                    *ngIf="default"
                    [canOpen]="canOpen"
                    [content]="dropdown"
                    [(open)]="open"
                >
                    <button id="native-button">Native button</button>
                    <button tuiButton>Button</button>
                </tui-hosted-dropdown>
                <tui-hosted-dropdown *ngIf="input" [content]="dropdown" [(open)]="open">
                    <tui-primitive-textfield> Entry field </tui-primitive-textfield>
                </tui-hosted-dropdown>
                <tui-hosted-dropdown
                    *ngIf="targeted"
                    [content]="dropdown"
                    [(open)]="open"
                >
                    <div>
                        <button tuiButton>Button</button>
                        <button #host tuiButton tuiHostedDropdownHost>Arrow</button>
                    </div>
                </tui-hosted-dropdown>
                <ng-template #dropdown>
                    <tui-data-list>
                        <button
                            *ngFor="let item of items"
                            tuiOption
                            automation-id="tui-menu-items__item"
                        >
                            {{ item }}
                        </button>
                    </tui-data-list>
                </ng-template>
            </tui-root>
        `,
    })
    class TestComponent {
        open = false;
        items = ['Item 1', 'Item 2'];
        mode: 'default' | 'input' | 'targeted' = 'default';
        canOpen = true;

        @ViewChild(TuiPrimitiveTextfieldComponent)
        tuiTextfield: TuiPrimitiveTextfieldComponent;
        @ViewChild(TuiButtonComponent)
        tuiButton: TuiButtonComponent;
        @ViewChild('host', {read: TuiButtonComponent})
        target: TuiButtonComponent;

        get input(): boolean {
            return this.mode === 'input';
        }

        get default(): boolean {
            return this.mode === 'default';
        }

        get targeted(): boolean {
            return this.mode === 'targeted';
        }
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: PageObject<TestComponent>;
    let nativeButton: HTMLElement;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                NoopAnimationsModule,
                TuiHostedDropdownModule,
                TuiButtonModule,
                TuiPrimitiveTextfieldModule,
                TuiTextfieldControllerModule,
                TuiDataListModule,
                TuiRootModule,
            ],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        pageObject = new PageObject(fixture);
        fixture.detectChanges();
        nativeButton = document.querySelector('#native-button') as HTMLElement;
    });

    describe('Buttons', () => {
        it('The first element to be focused is the host, clicking on it opens a dropdown', () => {
            nativeButton.click();
            fixture.detectChanges();

            expect(getItems().length).toBe(2);
        });

        it('Clicking on another button does not open the dropdown', () => {
            (testComponent.tuiButton.nativeFocusableElement as HTMLElement).click();
            fixture.detectChanges();

            expect(getItems().length).toBe(0);
        });

        it('Down arrow opens a dropdown', () => {
            nativeButton.focus();
            dispatchOnActive('arrowDown', fixture);

            expect(getItems().length).toBe(2);
        });

        it('Down arrow on another button does not open the dropdown', () => {
            testComponent.tuiButton.nativeFocusableElement!.focus();
            dispatchOnActive('arrowDown', fixture);

            expect(getItems().length).toBe(0);
        });

        it('Down arrow moves focus to dropdown', () => {
            nativeButton.focus();
            dispatchOnActive('arrowDown', fixture);
            dispatchOnActive('arrowDown', fixture);

            expect(document.activeElement).toBe(getItems()[0].nativeElement);
        });

        it('Escape closes the dropdown', () => {
            nativeButton.focus();
            dispatchOnActive('arrowDown', fixture);
            dispatchOnActive('escape', fixture);

            expect(getItems().length).toBe(0);
        });

        it('Escape in the dropdown closes it and brings focus to the host', () => {
            nativeButton.focus();
            dispatchOnActive('arrowDown', fixture);
            dispatchOnActive('arrowDown', fixture);
            dispatchOnActive('escape', fixture);

            expect(getItems().length).toBe(0);
            expect(document.activeElement).toBe(nativeButton);
        });

        it('Loss of focus closes the dropdown', () => {
            nativeButton.focus();
            dispatchOnActive('arrowDown', fixture);
            dispatchOnActive('arrowDown', fixture);
            testComponent.tuiButton.nativeFocusableElement!.focus();
            fixture.detectChanges();

            expect(getItems().length).toBe(0);
        });

        it('Down arrow does not open dropdown if canOpen === false', () => {
            testComponent.canOpen = false;
            fixture.detectChanges();
            nativeButton.focus();
            dispatchOnActive('arrowDown', fixture);

            expect(getItems().length).toBe(0);
        });

        it('Click does not open the dropdown if canOpen === false', () => {
            testComponent.canOpen = false;
            fixture.detectChanges();
            nativeButton.click();
            fixture.detectChanges();

            expect(getItems().length).toBe(0);
        });
    });

    describe('Entry field', () => {
        beforeEach(() => {
            testComponent.mode = 'input';
            fixture.detectChanges();
        });

        it('Clicking on the host does not open the dropdown', () => {
            (testComponent.tuiTextfield.nativeFocusableElement as HTMLElement).click();
            fixture.detectChanges();

            expect(getItems().length).toBe(0);
        });

        it('Down arrow opens a dropdown', () => {
            testComponent.tuiTextfield.nativeFocusableElement!.focus();
            dispatchOnActive('arrowDown', fixture);

            expect(getItems().length).toBe(2);
        });

        it('Updating items brings focus to input', () => {
            testComponent.tuiTextfield.nativeFocusableElement!.focus();
            dispatchOnActive('arrowDown', fixture);

            testComponent.items = ['Item 3', 'Item 4'];

            expect(document.activeElement).toBe(
                testComponent.tuiTextfield.nativeFocusableElement,
            );
        });
    });

    describe('Direct Host Specification', () => {
        beforeEach(() => {
            testComponent.mode = 'targeted';
            fixture.detectChanges();
        });

        it('Clicking on the first focused element does not open the dropdown', () => {
            (testComponent.tuiButton.nativeFocusableElement as HTMLElement).click();
            fixture.detectChanges();

            expect(getItems().length).toBe(0);
        });

        it('An element with tuiHostedDropdownHost is used as a host, clicking on it opens a dropdown', () => {
            (testComponent.target.nativeFocusableElement as HTMLElement).click();
            fixture.detectChanges();

            expect(getItems().length).toBe(2);
        });
    });

    function getItems(): DebugElement[] {
        return pageObject.getAllByAutomationId('tui-menu-items__item');
    }
});
