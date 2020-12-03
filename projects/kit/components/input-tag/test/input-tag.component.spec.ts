import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
    ALWAYS_TRUE_HANDLER,
    CHAR_NO_BREAK_SPACE,
    TuiBooleanHandler,
    TuiFocusedModule,
} from '@taiga-ui/cdk';
import {
    TuiHintControllerModule,
    TuiRootModule,
    TuiSizeL,
    TuiSizeS,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {
    isActive,
    NativeInputPO,
    PageObject,
    testCleaner,
    testExampleText,
    testPlaceholder,
    testTooltip,
} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiInputTagComponent} from '../input-tag.component';
import {TuiInputTagModule} from '../input-tag.module';

const TAG = 'Tag';

describe('InputTag', () => {
    @Component({
        template: `
            <tui-root>
                <button>Focus stealer</button>
                <tui-input-tag
                    *ngIf="defaultInputs"
                    [formControl]="control"
                ></tui-input-tag>
                <tui-input-tag
                    *ngIf="!defaultInputs"
                    [formControl]="control"
                    [readOnly]="readOnly"
                    [allowSpaces]="allowSpaces"
                    [tagValidator]="tagValidator"
                    [tuiTextfieldCleaner]="cleaner"
                    [tuiTextfieldExampleText]="exampleText"
                    [tuiTextfieldLabelOutside]="labelOutside"
                    [tuiTextfieldSize]="size"
                    [tuiHintContent]="hintContent"
                ></tui-input-tag>
            </tui-root>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputTagComponent, {static: true})
        component: TuiInputTagComponent;

        control = new FormControl([TAG]);
        defaultInputs = false;
        cleaner = true;
        readOnly = false;
        allowSpaces = true;
        labelOutside = true;
        exampleText = 'Пример';
        size: TuiSizeS | TuiSizeL = 'm';
        hintContent: string | null = 'Подсказка';
        tagValidator: TuiBooleanHandler<string> = ALWAYS_TRUE_HANDLER;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiInputTagComponent;
    let pageObject: PageObject<TestComponent>;
    let focusStealer: HTMLElement;
    let inputPO: NativeInputPO;

    const testContext = {
        get pageObject() {
            return pageObject;
        },
        get fixture() {
            return fixture;
        },
        get testComponent() {
            return testComponent;
        },
        get inputPO() {
            return inputPO;
        },
        get prefix() {
            return 'tui-input-tag__';
        },
    };

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                ReactiveFormsModule,
                NoopAnimationsModule,
                TuiInputTagModule,
                TuiFocusedModule,
                TuiRootModule,
                TuiHintControllerModule,
                TuiTextfieldControllerModule,
            ],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        component = testComponent.component;
        focusStealer = document.querySelector<'button'>('button')!;

        inputPO = new NativeInputPO(fixture, `${testContext.prefix}native`);
    });

    describe('Добавление тэгов', () => {
        beforeEach(done => {
            inputPO.focus();
            fixture.detectChanges();
            inputPO.sendText('1234,567,89');
            fixture.whenStable().then(done);
        });

        it('Добавляет тэги введённые через запятую', () => {
            expect(component.value[1]).toEqual('1234');
            expect(component.value[2]).toEqual('567');
            expect(component.value.length).toBe(3);
        });

        it('Оставляет значение после последней запятой в поле ввода', () => {
            expect(inputPO.value).toEqual('89');
        });

        it('Не создаёт пустые тэги', () => {
            inputPO.sendText(' ,  ,,,');

            expect(component.value.length).toBe(3);
        });

        it('При выходе из поля добавляет ввод как тэг', done => {
            focusStealer.focus();
            fixture.detectChanges();

            fixture.whenStable().then(() => {
                expect(component.value.length).toBe(4);
                expect(component.value[3]).toBe('89');
                done();
            });
        });

        it('При выходе из поля не добавляет пустые тэги', () => {
            inputPO.sendText('   ');
            focusStealer.focus();
            fixture.detectChanges();

            expect(component.value.length).toBe(3);
        });

        it('При добавлении тэга по выходу из поля поле очищается', done => {
            focusStealer.focus();
            fixture.detectChanges();

            fixture.whenStable().then(() => {
                expect(inputPO.value).toBe('');
                done();
            });
        });

        it('При нажатии Enter на поле добавляет ввод как тэг', () => {
            inputPO.sendKeydown('enter');

            expect(component.value.length).toBe(4);
            expect(component.value[3]).toBe('89');
        });

        it('При нажатии Enter на поле не добавляет пустые тэги', () => {
            inputPO.sendText('   ');
            inputPO.sendKeydown('enter');

            expect(component.value.length).toBe(3);
        });

        it('При нажатии Enter на поле поле очищается', done => {
            inputPO.sendKeydown('enter');
            fixture.detectChanges();

            fixture.whenStable().then(() => {
                expect(inputPO.value).toBe('');
                done();
            });
        });

        it('При нажатии Enter не добавляет тег, если disabledItemHandler вернул false', () => {
            component.disabledItemHandler = item => item === 'Тег';
            inputPO.sendText('Тег');
            inputPO.sendKeydown('enter');

            expect(component.value.length).toBe(3);
        });
    });

    describe('Добавление тэгов c пробелами при включенной опции allowSpaces', () => {
        it('Пробелы сохраняются и не разделяют на теги', fakeAsync(() => {
            inputPO.focus();
            fixture.detectChanges();
            tick();
            inputPO.sendText('1234 567 89');
            focusStealer.focus();
            fixture.detectChanges();

            expect(component.value[1]).toEqual('1234 567 89');
        }));
    });

    describe('Добавление тэгов при выключенной опции allowSpaces', () => {
        beforeEach(() => {
            testComponent.allowSpaces = false;
            inputPO.focus();
            fixture.detectChanges();
        });

        it('разбивает на тэги по пробелу', () => {
            inputPO.sendText('1234 567 89');

            expect(component.value[1]).toEqual('1234');
            expect(component.value[2]).toEqual('567');
            expect(component.value.length).toBe(3);
        });

        it('разбивает на тэги по неразрывному пробелу', () => {
            inputPO.sendText(`1234${CHAR_NO_BREAK_SPACE}567${CHAR_NO_BREAK_SPACE}89`);

            expect(component.value[1]).toEqual('1234');
            expect(component.value[2]).toEqual('567');
            expect(component.value.length).toBe(3);
        });

        it('разбивает на тэги по запятой', () => {
            inputPO.sendText('1234,567,89');

            expect(component.value[1]).toEqual('1234');
            expect(component.value[2]).toEqual('567');
            expect(component.value.length).toBe(3);
        });

        it('При добавлении Space не добавляет тег и не изменяет значение, если tagValidator вернул false', () => {
            const savedLength = component.value.length;
            const newTag = 'new';

            component.tagValidator = item => item !== newTag;
            inputPO.sendText(newTag);
            inputPO.sendKeydown('Space');

            expect(inputPO.value).toBe(newTag);
            expect(component.value.length).toBe(savedLength);
        });

        it('При добавлении запятой не добавляет тег и не изменяет значение, если tagValidator вернул false', () => {
            const savedLength = component.value.length;
            const newTag = 'new';

            component.tagValidator = item => item !== newTag;
            inputPO.sendText(newTag);
            inputPO.sendKeydown(',');

            expect(inputPO.value).toBe(newTag);
            expect(component.value.length).toBe(savedLength);
        });

        it('Отбрасывает задизебленные теги, поданные через запятую или пробел', () => {
            const firstValidTag = 'first';
            const secondValidTag = 'second';
            const invalidTag = 'invalid';

            component.disabledItemHandler = item => item === invalidTag;
            inputPO.sendText(`${firstValidTag}, ${invalidTag}, ${secondValidTag}`);

            expect(component.value.find(tag => tag === invalidTag)).toBeUndefined();
        });
    });

    describe('Cleaner', () => {
        it('По умолчанию cleaner отсутствует', () => {
            testComponent.defaultInputs = true;
            fixture.detectChanges();

            expect(
                pageObject.getByAutomationId(`${testContext.prefix}cleaner`),
            ).toBeNull();
        });

        it('При cleaner === true и пустом поле без тэгов cleaner отсутствует', () => {
            testComponent.control.setValue([]);
            fixture.detectChanges();

            expect(
                pageObject.getByAutomationId(`${testContext.prefix}cleaner`),
            ).toBeNull();
        });

        it('При cleaner === true и не пустом поле cleaner присутствует', () => {
            testComponent.control.setValue([]);
            inputPO.sendText('123');

            expect(
                pageObject.getByAutomationId(`${testContext.prefix}cleaner`),
            ).not.toBeNull();
        });

        it('При cleaner === true и добавленных тэгах cleaner присутствует', () => {
            expect(
                pageObject.getByAutomationId(`${testContext.prefix}cleaner`),
            ).not.toBeNull();
        });

        it('При нажатии на cleaner очищается поле ввода и тэги', () => {
            inputPO.sendText('123');
            pageObject
                .getByAutomationId(`${testContext.prefix}cleaner`)!
                .nativeElement.click();

            expect(component.search).toBe('');
            expect(component.value).toEqual([]);
        });
    });

    describe('Редактирование тэгов', () => {
        it('Редактирует тэги', () => {
            component.onTagEdited('Hapica', TAG);
            fixture.detectChanges();

            expect(component.value[0]).toBe('Hapica');
        });

        it('Переводит фокус на поле ввода после редактирования', () => {
            component.onTagEdited('Hapica', TAG);
            fixture.detectChanges();

            expect(inputPO.focused).toBe(true);
        });
    });

    describe('Переход к тэгам', () => {
        it('Переходит к тэгам при нажатии arrowLeft', () => {
            inputPO.focus();
            inputPO.sendKeydown('ArrowLeft');

            expect(
                isActive(
                    pageObject.getByAutomationId(`${testContext.prefix}tag`)!
                        .nativeElement,
                ),
            ).toBe(true);
        });

        it('Не переходит к тэгам при нажатии arrowLeft, если поле ввода не пустое', () => {
            inputPO.focus();
            inputPO.sendText('123');
            inputPO.sendKeydown('ArrowLeft');

            expect(inputPO.focused).toBe(true);
        });

        it('Переходит к тэгам при нажатии backspace и пустом поле ввода', () => {
            inputPO.focus();
            inputPO.sendKeydown('backspace');

            expect(
                isActive(
                    pageObject.getByAutomationId(`${testContext.prefix}tag`)!
                        .nativeElement,
                ),
            ).toBe(true);
        });

        it('Не переходит к тэгам при нажатии backspace и не пустом поле ввода', () => {
            inputPO.focus();
            inputPO.sendText('123');
            inputPO.sendKeydown('backspace');

            expect(inputPO.focused).toBe(true);
        });
    });

    testExampleText(testContext, ['test'], []);

    testPlaceholder(testContext, ['test'], []);

    testCleaner(testContext, ['test'], []);

    testTooltip(testContext);
});
