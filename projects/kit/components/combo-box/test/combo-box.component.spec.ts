import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
    TUI_DEFAULT_IDENTITY_MATCHER,
    TUI_DEFAULT_STRINGIFY,
    TuiStringHandler,
} from '@taiga-ui/cdk';
import {
    TuiDataListModule,
    TuiHintControllerModule,
    TuiRootModule,
    TuiSizeL,
    TuiSizeS,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiDataListWrapperModule} from '@taiga-ui/kit/components';
import {NativeInputPO, PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {TuiComboBoxComponent} from '../combo-box.component';
import {TuiComboBoxModule} from '../combo-box.module';

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

function stringify({trait}: Beast): string {
    return trait;
}

function identityMatcher(item1: Beast, item2: Beast): boolean {
    return item1.id === item2.id;
}

describe('ComboBox', () => {
    @Component({
        template: `
            <tui-root>
                <tui-combo-box
                    [formControl]="control"
                    [stringify]="stringify"
                    [identityMatcher]="identityMatcher"
                    [readOnly]="readOnly"
                    [tuiTextfieldSize]="size"
                    [tuiTextfieldCleaner]="cleaner"
                    [tuiTextfieldExampleText]="exampleText"
                    [tuiHintContent]="hintContent"
                >
                    Кто украл мячик?
                    <tui-data-list-wrapper
                        *tuiDataList
                        [items]="items"
                    ></tui-data-list-wrapper>
                </tui-combo-box>
            </tui-root>
        `,
    })
    class TestComponent {
        @ViewChild(TuiComboBoxComponent, {static: true})
        component!: TuiComboBoxComponent<string | Beast>;
        items = ITEMS;
        control = new FormControl();
        defaultInputs = false;
        cleaner = false;
        size: TuiSizeS | TuiSizeL = 'm';
        readOnly = false;
        hintContent: string | null = 'Подсказка';
        exampleText = 'exampleText';

        get stringify(): TuiStringHandler<Beast> {
            return this.defaultInputs ? TUI_DEFAULT_STRINGIFY : stringify;
        }

        get identityMatcher() {
            return this.defaultInputs ? TUI_DEFAULT_IDENTITY_MATCHER : identityMatcher;
        }
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: PageObject<TestComponent>;
    let inputPO: NativeInputPO;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                NoopAnimationsModule,
                ReactiveFormsModule,
                TuiComboBoxModule,
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

        inputPO = new NativeInputPO(fixture, `tui-primitive-textfield__native-input`);
    });

    describe('stringify', () => {
        beforeEach(() => {
            testComponent.defaultInputs = true;
            testComponent.control.setValue(ITEMS[0]);
            fixture.detectChanges();
        });

        it('Значение по умолчанию — String(item)', () => {
            expect(getValue()!.nativeElement.textContent.trim()).toBe(String(ITEMS[0]));
        });

        it('Кастомное значение', () => {
            testComponent.defaultInputs = false;
            fixture.detectChanges();

            expect(getValue()!.nativeElement.textContent.trim()).toBe(ITEMS[0].trait);
        });
    });

    it('При изменении items подставляет точное совпадение в контрол', done => {
        testComponent.defaultInputs = true;
        testComponent.items = [];
        testComponent.control.setValue(ITEMS[0]);
        fixture.detectChanges();
        inputPO.sendText('Хитрая кошка');

        expect(testComponent.control.value).toBeNull();

        testComponent.items = ITEMS;
        fixture.detectChanges();

        fixture.whenStable().then(() => {
            expect(testComponent.control.value).toBe(ITEMS[1]);
            done();
        });
    });

    describe('identityMatcher', () => {
        describe('Матчер по умолчанию', () => {
            beforeEach(() => {
                testComponent.defaultInputs = true;
                fixture.detectChanges();
                inputPO.sendKeydown('ArrowDown');
            });

            it('Считает один и тот же объект идентичным самому себе', () => {
                testComponent.control.setValue(ITEMS[0]);
                fixture.detectChanges();

                expect(getCheckmark()).not.toBeNull();
            });

            it('Не считает копии объектов идентичными', () => {
                testComponent.control.setValue(new Beast('мышка', 'Серая', '0'));
                fixture.detectChanges();

                expect(getCheckmark()).toBeNull();
            });
        });

        describe('Кастомный матчер (сверка по id)', () => {
            beforeEach(() => {
                inputPO.sendKeydown('ArrowDown');
            });

            it('Считает один и тот же объект идентичным самому себе', () => {
                testComponent.control.setValue(ITEMS[0]);
                fixture.detectChanges();

                expect(getCheckmark()).not.toBeNull();
            });

            it('Считает копии объектов идентичными', () => {
                testComponent.control.setValue(new Beast('мышка', 'Серая', '0'));
                fixture.detectChanges();

                expect(getCheckmark()).not.toBeNull();
            });
        });
    });

    function getValue(): DebugElement | null {
        return pageObject.getByAutomationId('tui-combo-box__template');
    }

    function getCheckmark(): DebugElement | null {
        return pageObject.getByAutomationId('tui-select-option__checkmark');
    }
});
