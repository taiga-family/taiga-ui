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
                    <button id="native-button">Нативная кнопка</button>
                    <button tuiButton>Кнопка</button>
                </tui-hosted-dropdown>
                <tui-hosted-dropdown *ngIf="input" [content]="dropdown" [(open)]="open">
                    <tui-primitive-textfield> Поле ввода </tui-primitive-textfield>
                </tui-hosted-dropdown>
                <tui-hosted-dropdown
                    *ngIf="targeted"
                    [content]="dropdown"
                    [(open)]="open"
                >
                    <div>
                        <button tuiButton>Кнопка</button>
                        <button #host tuiButton tuiHostedDropdownHost>Стрелка</button>
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

    describe('Кнопки', () => {
        it('Первый фокусируемый элемент — хост, клик по нему открывает выпадашку', () => {
            nativeButton.click();
            fixture.detectChanges();

            expect(getItems().length).toBe(2);
        });

        it('Клик по другой кнопке не открывает выпадашку', () => {
            (testComponent.tuiButton.nativeFocusableElement as HTMLElement).click();
            fixture.detectChanges();

            expect(getItems().length).toBe(0);
        });

        it('Стрелка вниз открывает выпадашку', () => {
            nativeButton.focus();
            dispatchOnActive('arrowDown', fixture);

            expect(getItems().length).toBe(2);
        });

        it('Стрелка вниз на другой кнопке не открывает выпадашку', () => {
            testComponent.tuiButton.nativeFocusableElement!.focus();
            dispatchOnActive('arrowDown', fixture);

            expect(getItems().length).toBe(0);
        });

        it('Стрелка вниз переводит фокус на выпадашку', () => {
            nativeButton.focus();
            dispatchOnActive('arrowDown', fixture);
            dispatchOnActive('arrowDown', fixture);

            expect(document.activeElement).toBe(getItems()[0].nativeElement);
        });

        it('Escape закрывает выпадашку', () => {
            nativeButton.focus();
            dispatchOnActive('arrowDown', fixture);
            dispatchOnActive('escape', fixture);

            expect(getItems().length).toBe(0);
        });

        it('Escape в выпадашке закрывает её и переносит фокус на хост', () => {
            nativeButton.focus();
            dispatchOnActive('arrowDown', fixture);
            dispatchOnActive('arrowDown', fixture);
            dispatchOnActive('escape', fixture);

            expect(getItems().length).toBe(0);
            expect(document.activeElement).toBe(nativeButton);
        });

        it('Потеря фокуса закрывает выпадашку', () => {
            nativeButton.focus();
            dispatchOnActive('arrowDown', fixture);
            dispatchOnActive('arrowDown', fixture);
            testComponent.tuiButton.nativeFocusableElement!.focus();
            fixture.detectChanges();

            expect(getItems().length).toBe(0);
        });

        it('Стрелка вниз не открывает выпадашку, если canOpen === false', () => {
            testComponent.canOpen = false;
            fixture.detectChanges();
            nativeButton.focus();
            dispatchOnActive('arrowDown', fixture);

            expect(getItems().length).toBe(0);
        });

        it('Клик не открывает выпадашку, если canOpen === false', () => {
            testComponent.canOpen = false;
            fixture.detectChanges();
            nativeButton.click();
            fixture.detectChanges();

            expect(getItems().length).toBe(0);
        });
    });

    describe('Поле ввода', () => {
        beforeEach(() => {
            testComponent.mode = 'input';
            fixture.detectChanges();
        });

        it('Клик по хосту не открывает выпадашку', () => {
            (testComponent.tuiTextfield.nativeFocusableElement as HTMLElement).click();
            fixture.detectChanges();

            expect(getItems().length).toBe(0);
        });

        it('Стрелка вниз открывает выпадашку', () => {
            testComponent.tuiTextfield.nativeFocusableElement!.focus();
            dispatchOnActive('arrowDown', fixture);

            expect(getItems().length).toBe(2);
        });

        it('Обновление items переводит фокус на input', () => {
            testComponent.tuiTextfield.nativeFocusableElement!.focus();
            dispatchOnActive('arrowDown', fixture);

            testComponent.items = ['Item 3', 'Item 4'];

            expect(document.activeElement).toBe(
                testComponent.tuiTextfield.nativeFocusableElement,
            );
        });
    });

    describe('Прямое указание хоста', () => {
        beforeEach(() => {
            testComponent.mode = 'targeted';
            fixture.detectChanges();
        });

        it('Клик по по первому фокусируемому элементу не открывает выпадашку', () => {
            (testComponent.tuiButton.nativeFocusableElement as HTMLElement).click();
            fixture.detectChanges();

            expect(getItems().length).toBe(0);
        });

        it('Элемент с tuiHostedDropdownHost используется в качестве хоста, клик по нему открывает выпадашку', () => {
            (testComponent.target.nativeFocusableElement as HTMLElement).click();
            fixture.detectChanges();

            expect(getItems().length).toBe(2);
        });
    });

    function getItems(): DebugElement[] {
        return pageObject.getAllByAutomationId('tui-menu-items__item');
    }
});
