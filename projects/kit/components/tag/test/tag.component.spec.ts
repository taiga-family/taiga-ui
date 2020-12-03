import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiTagComponent} from '../tag.component';
import {TuiTagModule} from '../tag.module';

describe('Tag', () => {
    @Component({
        template: `
            <tui-tag
                *ngIf="default"
                automation-id="tui-tag__item"
                [value]="tag"
            ></tui-tag>
            <tui-tag
                *ngIf="!default"
                automation-id="tui-tag__item"
                [value]="tag"
                [removable]="removable"
                [editable]="editable"
                [autoColor]="autoColor"
                (edited)="editedSpy($event)"
            ></tui-tag>
        `,
    })
    class TestComponent {
        @ViewChild(TuiTagComponent, {static: true})
        component!: TuiTagComponent;

        default = false;
        tag = 'Tag';
        removable = true;
        editable = true;
        autoColor = false;
        editedSpy = jasmine.createSpy('edited');
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: PageObject<TestComponent>;
    const keydownEnter = new KeyboardEvent('keydown', {
        key: 'enter',
    });
    const testContext = {
        get prefix() {
            return 'tui-tag__';
        },
    };

    function getTag(): HTMLElement {
        return pageObject.getByAutomationId(`${testContext.prefix}item`)!.nativeElement;
    }

    function getTagDiv(): Element {
        return getTag().firstElementChild!;
    }

    function getInput(): HTMLInputElement {
        return pageObject.getByAutomationId(`${testContext.prefix}edit`)!.nativeElement;
    }

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiTagModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        testComponent.editedSpy.calls.reset();
        fixture.detectChanges();
    });

    describe('Значения по умолчанию:', () => {
        beforeEach(() => {
            testComponent.default = true;
            fixture.detectChanges();
        });

        it('Крестик не показан', () => {
            expect(
                pageObject.getByAutomationId(`${testContext.prefix}remove`),
            ).toBeNull();
        });

        it('Тэг не редактируется', () => {
            getTag().dispatchEvent(keydownEnter);
            fixture.detectChanges();

            expect(pageObject.getByAutomationId(`${testContext.prefix}edit`)).toBeNull();
        });
    });

    describe('Редактирование тэга, editable === true', () => {
        beforeEach(() => {
            getTag().dispatchEvent(keydownEnter);
            fixture.detectChanges();
        });

        it('Тэг редактируется', () => {
            expect(
                pageObject.getByAutomationId(`${testContext.prefix}edit`),
            ).not.toBeNull();
        });

        it('Эмиттит событие редактирования по enter', () => {
            getInput().value = 'Hapica';
            getInput().dispatchEvent(new Event('input'));
            fixture.detectChanges();
            getInput().dispatchEvent(keydownEnter);
            fixture.detectChanges();

            expect(testComponent.editedSpy).toHaveBeenCalledWith('Hapica');
        });

        it('Эмиттит событие редактирования по выходу из поля', () => {
            getInput().value = 'Hapica';
            getInput().dispatchEvent(new Event('input'));
            fixture.detectChanges();

            getInput().blur();
            fixture.detectChanges();

            expect(testComponent.editedSpy).toHaveBeenCalledWith('Hapica');
        });

        it('Эмиттит событие редактирования при вводе запятой', () => {
            getInput().value = 'Hapica, ogo';
            getInput().dispatchEvent(new Event('input'));
            fixture.detectChanges();

            expect(testComponent.editedSpy).toHaveBeenCalledWith('Hapica, ogo');
        });

        it('Эмиттит пустую строку при сохранении пустого тэга', () => {
            getInput().value = '';
            getInput().dispatchEvent(new Event('input'));
            fixture.detectChanges();

            getInput().blur();
            fixture.detectChanges();

            expect(testComponent.editedSpy).toHaveBeenCalledWith('');
        });
    });

    describe('Удаление тэга', () => {
        it('Крестик показан при removable === true', () => {
            expect(
                pageObject.getByAutomationId(`${testContext.prefix}remove`),
            ).not.toBeNull();
        });

        it('Эмиттит пустую строку по крестику', () => {
            pageObject
                .getByAutomationId(`${testContext.prefix}remove`)!
                .nativeElement.click();

            expect(testComponent.editedSpy).toHaveBeenCalledWith('');
        });

        it('При нажатии на backspace на тэге эмиттится пустая строка', () => {
            getTag().dispatchEvent(
                new KeyboardEvent('keydown', {
                    key: 'backspace',
                }),
            );

            expect(testComponent.editedSpy).toHaveBeenCalledWith('');
        });

        it('При нажатии на delete на тэге эмиттится пустая строка', () => {
            getTag().dispatchEvent(
                new KeyboardEvent('keydown', {
                    key: 'delete',
                }),
            );

            expect(testComponent.editedSpy).toHaveBeenCalledWith('');
        });
    });

    // TODO: переделать stringHashToHsl в stringHashToRgb и включить тест
    xdescribe('Цвет тэга', () => {
        it('при включении autoColor, цвет будет — rgb(241, 188, 229)', () => {
            testComponent.autoColor = true;
            fixture.detectChanges();
            expect(getComputedStyle(getTagDiv()).backgroundColor).toBe(
                'rgb(241, 188, 229)',
            );
        });
    });
});
