import {Component, type DebugElement, ViewChild} from '@angular/core';
import {type ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
    TUI_DEFAULT_IDENTITY_MATCHER,
    TUI_DEFAULT_STRINGIFY,
    type TuiIdentityMatcher,
    type TuiStringHandler,
} from '@taiga-ui/cdk';
import {
    TuiDataListModule,
    TuiHintModule,
    TuiRootModule,
    type TuiSizeL,
    type TuiSizeS,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TuiComboBoxComponent, TuiComboBoxModule} from '@taiga-ui/kit';
import {
    TUI_ARROW,
    TUI_ARROW_MODE,
    TuiDataListWrapperModule,
} from '@taiga-ui/kit/components';
import {TuiNativeInputPO, TuiPageObject} from '@taiga-ui/testing';

class Beast {
    constructor(
        public readonly species: string,
        public readonly trait: string,
        public readonly id: string,
    ) {}

    public toString(): string {
        return `${this.trait} ${this.species}`;
    }
}

const ITEMS = [
    new Beast('mouse', 'Gray', '0'),
    new Beast('cat', 'Sly', '1'),
    new Beast('raccoon', 'Naughty', '2'),
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
                    [identityMatcher]="identityMatcher"
                    [readOnly]="readOnly"
                    [stringify]="stringify"
                    [tuiHintContent]="hintContent"
                    [tuiTextfieldCleaner]="cleaner"
                    [tuiTextfieldSize]="size"
                >
                    Who stole the ball?
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
        public component!: TuiComboBoxComponent<Beast | string>;

        public items = ITEMS;
        public control = new FormControl();
        public defaultInputs = false;
        public cleaner = false;
        public size: TuiSizeL | TuiSizeS = 'm';
        public readOnly = false;
        public hintContent: string | null = 'prompt';

        public get stringify(): TuiStringHandler<Beast> {
            return this.defaultInputs ? TUI_DEFAULT_STRINGIFY : stringify;
        }

        public get identityMatcher(): TuiIdentityMatcher<Beast> {
            return this.defaultInputs ? TUI_DEFAULT_IDENTITY_MATCHER : identityMatcher;
        }
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: TuiPageObject<TestComponent>;
    let inputPO: TuiNativeInputPO;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [
                NoopAnimationsModule,
                ReactiveFormsModule,
                TuiComboBoxModule,
                TuiRootModule,
                TuiTextfieldControllerModule,
                TuiHintModule,
                TuiDataListModule,
                TuiDataListWrapperModule,
            ],
            declarations: [TestComponent],
            providers: [
                {
                    provide: TUI_ARROW_MODE,
                    useValue: {interactive: TUI_ARROW, disabled: ''},
                },
            ],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();

        inputPO = new TuiNativeInputPO(fixture, 'tui-primitive-textfield__native-input');
    });

    describe('stringify', () => {
        beforeEach(() => {
            testComponent.defaultInputs = true;
            testComponent.control.setValue(ITEMS[0]);
            fixture.detectChanges();
        });

        it('The default is String(item)', () => {
            expect(getValue()!.nativeElement.textContent.trim()).toBe(String(ITEMS[0]));
        });

        it('Custom value', () => {
            testComponent.defaultInputs = false;
            fixture.detectChanges();

            expect(getValue()!.nativeElement.textContent.trim()).toBe(ITEMS[0].trait);
        });
    });

    it('When changing items, substitutes an exact match in the control', async () => {
        testComponent.defaultInputs = true;
        testComponent.items = [];
        testComponent.control.setValue(ITEMS[0]);
        fixture.detectChanges();
        inputPO.sendText('Sly cat');

        expect(testComponent.control.value).toBeNull();

        testComponent.items = ITEMS;
        testComponent.component.toggle();
        fixture.detectChanges();
        inputPO.sendText('Sly cat');

        await fixture.whenStable();
        expect(testComponent.control.value).toBe(ITEMS[1]);
    });

    describe('identityMatcher', () => {
        describe('Default matcher', () => {
            beforeEach(() => {
                testComponent.defaultInputs = true;
                fixture.detectChanges();
                inputPO.sendKeydown('ArrowDown');
            });

            it('Considers the same object to be identical to itself', () => {
                testComponent.control.setValue(ITEMS[0]);
                fixture.detectChanges();

                expect(getCheckmark()).not.toBeNull();
            });

            it("Doesn't consider copies of objects identical", () => {
                testComponent.control.setValue(new Beast('mouse', 'Gray', '0'));
                fixture.detectChanges();

                expect(getCheckmark()).toBeNull();
            });
        });

        describe('Custom matcher (matching by id)', () => {
            beforeEach(() => {
                inputPO.sendKeydown('ArrowDown');
            });

            it('Considers the same object to be identical to itself', () => {
                testComponent.control.setValue(ITEMS[0]);
                fixture.detectChanges();

                expect(getCheckmark()).not.toBeNull();
            });

            it('Considers copies of objects identical', () => {
                testComponent.control.setValue(new Beast('mouse', 'Gray', '0'));
                fixture.detectChanges();

                expect(getCheckmark()).not.toBeNull();
            });
        });

        describe('dropdown', () => {
            it('empty value does not open dropdown', () => {
                testComponent.component.onValueChange('');
                fixture.detectChanges();
                expect(testComponent.component.open).toBe(false);
            });

            it('not empty value opens dropdown', () => {
                testComponent.component.onValueChange('raccoon');
                fixture.detectChanges();
                expect(testComponent.component.open).toBe(true);
            });
        });

        describe('readonly state', () => {
            beforeEach(() => {
                testComponent.readOnly = true;
                fixture.detectChanges();
            });

            it('should be no icon', () => {
                fixture.debugElement.query(By.css('.t-icon'));
                expect(fixture.debugElement.query(By.css('.t-icon'))).toBeFalsy();
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
