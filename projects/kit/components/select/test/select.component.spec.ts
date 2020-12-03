import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TUI_DEFAULT_IDENTITY_MATCHER, TuiIdentityMatcher} from '@taiga-ui/cdk';
import {
    TuiDataListModule,
    TuiHintControllerModule,
    TuiRootModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiDataListWrapperModule} from '@taiga-ui/kit/components';
import {NativeInputPO, PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiSelectComponent} from '../select.component';
import {TuiSelectModule} from '../select.module';

class Beast {
    constructor(readonly species: string, readonly trait: string, readonly id: string) {}

    toString(): string {
        return `${this.trait} ${this.species}`;
    }
}

const ITEMS = [
    new Beast('мышка', 'Серая', '0'),
    new Beast('кошка', 'Хитрая', '1'),
    new Beast('енотик', 'Шкодливый', '2'),
];

const CHECKMARK = 'tui-select-option__checkmark';
const MATCHER: TuiIdentityMatcher<Beast> = (item1, item2) => item1.id === item2.id;

describe('Select', () => {
    @Component({
        template: `
            <tui-root>
                <tui-select
                    [tuiTextfieldCleaner]="cleaner"
                    [formControl]="control"
                    [identityMatcher]="identityMatcher"
                >
                    Кто украл мячик?
                    <tui-data-list-wrapper
                        *tuiDataList
                        [items]="items"
                    ></tui-data-list-wrapper>
                </tui-select>
            </tui-root>
        `,
    })
    class TestComponent {
        @ViewChild(TuiSelectComponent, {static: true})
        component!: TuiSelectComponent<string | Beast>;
        items = ITEMS;
        control = new FormControl();
        cleaner = false;
        identityMatcher: TuiIdentityMatcher<Beast> = TUI_DEFAULT_IDENTITY_MATCHER;
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
                TuiSelectModule,
                TuiRootModule,
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
        fixture.detectChanges();

        inputPO = new NativeInputPO(fixture, 'tui-primitive-textfield__native-input');
    });

    describe('Очистка поля', () => {
        beforeEach(() => {
            testComponent.cleaner = true;
            fixture.detectChanges();
        });

        it('клавиша delete очищает поле', () => {
            testComponent.control.setValue(ITEMS[0]);
            fixture.detectChanges();
            inputPO.sendKeydown('delete');

            expect(testComponent.control.value).toBeNull();
        });

        it('если крестик отключен, клавиша delete не очищает поле', () => {
            testComponent.cleaner = false;
            testComponent.control.setValue(ITEMS[0]);
            fixture.detectChanges();
            inputPO.sendKeydown('delete');

            expect(testComponent.control.value).not.toBeNull();
        });
    });

    describe('identityMatcher', () => {
        describe('Матчер по умолчанию', () => {
            beforeEach(() => {
                inputPO.sendKeydown('ArrowDown');
            });

            it('Считает один и тот же объект идентичным самому себе', () => {
                testComponent.control.setValue(ITEMS[0]);
                fixture.detectChanges();

                expect(pageObject.getByAutomationId(CHECKMARK)).not.toBeNull();
            });

            it('Не считает копии объектов идентичными', () => {
                testComponent.control.setValue(new Beast('мышка', 'Серая', '0'));
                fixture.detectChanges();

                expect(pageObject.getByAutomationId(CHECKMARK)).toBeNull();
            });
        });

        describe('Кастомный матчер (сверка по id)', () => {
            beforeEach(() => {
                testComponent.identityMatcher = MATCHER;
                fixture.detectChanges();
            });

            it('Считает один и тот же объект идентичным самому себе', () => {
                testComponent.control.setValue(ITEMS[0]);
                inputPO.sendKeydown('ArrowDown');

                expect(pageObject.getByAutomationId(CHECKMARK)).not.toBeNull();
            });

            it('Считает копии объектов идентичными', () => {
                testComponent.control.setValue(new Beast('мышка', 'Серая', '0'));
                inputPO.sendKeydown('ArrowDown');

                expect(pageObject.getByAutomationId(CHECKMARK)).not.toBeNull();
            });
        });
    });
});
