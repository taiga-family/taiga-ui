import type {DebugElement, Type} from '@angular/core';
import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {By} from '@angular/platform-browser';
import {TuiTime, TuiValueTransformer} from '@taiga-ui/cdk';
import type {TuiSizeL, TuiSizeS} from '@taiga-ui/core';
import {TuiHint, TuiRoot} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {TUI_TIME_VALUE_TRANSFORMER} from '@taiga-ui/kit';
import {
    TuiInputTimeComponent,
    TuiInputTimeModule,
    TuiTextfieldControllerModule,
} from '@taiga-ui/legacy';
import {tuiCreateKeyboardEvent, TuiNativeInputPO, TuiPageObject} from '@taiga-ui/testing';

const TIMES = [
    new TuiTime(0, 30),
    new TuiTime(1, 0),
    new TuiTime(1, 30),
    new TuiTime(2, 0),
    new TuiTime(2, 30),
    new TuiTime(3, 0),
];

describe('InputTime', () => {
    @Component({
        standalone: true,
        imports: [
            ReactiveFormsModule,
            TuiHint,
            TuiInputTimeModule,
            TuiRoot,
            TuiTextfieldControllerModule,
        ],
        template: `
            <tui-root>
                <tui-input-time
                    [formControl]="control"
                    [items]="items"
                    [readOnly]="readOnly"
                    [strict]="strict"
                    [tuiHintContent]="hintContent"
                    [tuiTextfieldCleaner]="cleaner"
                    [tuiTextfieldLabelOutside]="labelOutside"
                    [tuiTextfieldSize]="size"
                ></tui-input-time>
            </tui-root>
        `,
        // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
        changeDetection: ChangeDetectionStrategy.Default,
    })
    class Test {
        @ViewChild(TuiInputTimeComponent, {static: true})
        public component!: TuiInputTimeComponent;

        public control = new FormControl<TuiTime | string>(new TuiTime(12, 30));
        public cleaner = false;
        public readOnly = false;
        public items: TuiTime[] = [];
        public labelOutside = false;
        public size: TuiSizeL | TuiSizeS = 'l';
        public strict = false;
        public hintContent: string | null = 'prompt';
    }

    let fixture: ComponentFixture<Test>;
    let testComponent: Test;
    let component: TuiInputTimeComponent;
    let pageObject: TuiPageObject<Test>;
    let inputPO: TuiNativeInputPO;
    let input: HTMLInputElement;

    function getDropdown(): DebugElement | null {
        return pageObject.getByAutomationId('tui-input-time__dropdown');
    }

    const initializeEnvironment = async (
        componentType: Type<Test> = Test,
    ): Promise<void> => {
        fixture = TestBed.createComponent(componentType);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        component = testComponent.component;
        inputPO = new TuiNativeInputPO(fixture, 'tui-primitive-textfield__native-input');
        input = fixture.debugElement.query(By.css('input')).nativeElement;
        await fixture.whenStable();
        fixture.detectChanges();
    };

    describe('Initial value', () => {
        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [Test],
                providers: [NG_EVENT_PLUGINS],
            });
            await TestBed.compileComponents();
            await initializeEnvironment();
        });

        it('the value in the field is formatted by mask', async () => {
            await fixture.whenStable();

            expect(input.value).toBe('12:30');
        });

        it('the initial value in the formControl is issued as an object with the hours and minutes properties', () => {
            expect(testComponent.control.value).toEqual(new TuiTime(12, 30));
        });
    });

    describe('The value in the formControl changes outside', () => {
        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [Test],
                providers: [NG_EVENT_PLUGINS],
            });
            await TestBed.compileComponents();
            await initializeEnvironment();

            testComponent.control.setValue(new TuiTime(22, 30));
            fixture.detectChanges();
        });

        it('a new formatted value appears in the field', async () => {
            await fixture.whenStable();
            fixture.detectChanges();
            await fixture.whenStable();

            expect(input.value).toBe('22:30');
        });

        it('in the formControl is issued as an object with hours and minutes properties', () => {
            expect(testComponent.control.value).toEqual(new TuiTime(22, 30));
        });
    });

    describe('Short time input (less than 5 characters, including colon)', () => {
        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [Test],
                providers: [NG_EVENT_PLUGINS],
            });
            await TestBed.compileComponents();
            await initializeEnvironment();
        });

        it('the value of formControl is passed null', () => {
            component.onValueChange('11:1');
            fixture.detectChanges();

            expect(testComponent.control.value).toBeNull();
        });
    });

    describe('Keyboard control', () => {
        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [Test],
                providers: [NG_EVENT_PLUGINS],
            });
            await TestBed.compileComponents();
            await initializeEnvironment();

            await fixture.whenStable();
        });

        it('if the cursor is at position 0, then pressing UP increases the hour by 1', () => {
            input.focus();
            component.nativeFocusableElement?.setSelectionRange(0, 0);
            input.dispatchEvent(tuiCreateKeyboardEvent('ArrowUp', 'keydown'));
            fixture.detectChanges();

            expect(input.value).toBe('13:30');
            expect(testComponent.control.value).toEqual(new TuiTime(13, 30));
        });

        it('if the cursor is at position 4, then pressing UP increases the minute by 1', () => {
            input.focus();
            component.nativeFocusableElement?.setSelectionRange(4, 4);
            input.dispatchEvent(tuiCreateKeyboardEvent('ArrowUp', 'keydown'));
            fixture.detectChanges();

            expect(input.value).toBe('12:31');
            expect(testComponent.control.value).toEqual(new TuiTime(12, 31));
        });

        it('if the cursor is at position 0, then pressing DOWN decreases the hour by 1', () => {
            input.focus();
            component.nativeFocusableElement?.setSelectionRange(0, 0);
            input.dispatchEvent(tuiCreateKeyboardEvent('ArrowDown', 'keydown'));
            fixture.detectChanges();

            expect(input.value).toBe('11:30');
            expect(testComponent.control.value).toEqual(new TuiTime(11, 30));
        });

        it('if the cursor is at position 4, then pressing DOWN decreases the minute by 1', () => {
            input.focus();
            component.nativeFocusableElement?.setSelectionRange(4, 4);
            input.dispatchEvent(tuiCreateKeyboardEvent('ArrowDown', 'keydown'));
            fixture.detectChanges();

            expect(input.value).toBe('12:29');
            expect(testComponent.control.value).toEqual(new TuiTime(12, 29));
        });

        it('when readOnly is ignored', async () => {
            testComponent.readOnly = true;
            input.focus();
            fixture.detectChanges();
            component.nativeFocusableElement?.setSelectionRange(0, 0);
            await fixture.whenStable();

            input.dispatchEvent(tuiCreateKeyboardEvent('ArrowUp', 'keydown'));
            fixture.detectChanges();

            expect(input.value).toBe('12:30');
            expect(testComponent.control.value).toEqual(new TuiTime(12, 30));

            input.dispatchEvent(tuiCreateKeyboardEvent('ArrowDown', 'keydown'));
            fixture.detectChanges();

            expect(input.value).toBe('12:30');
            expect(testComponent.control.value).toEqual(new TuiTime(12, 30));
        });
    });

    describe('Drop-down list', () => {
        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [Test],
                providers: [NG_EVENT_PLUGINS],
            });
            await TestBed.compileComponents();
            await initializeEnvironment();

            testComponent.items = TIMES;

            fixture.detectChanges();
            input.focus();
        });

        describe('Dropdown appears', () => {
            it('down arrow', () => {
                input.dispatchEvent(tuiCreateKeyboardEvent('ArrowDown', 'keydown'));
                fixture.detectChanges();

                expect(getDropdown()).not.toBeNull();
            });

            it('when typing', () => {
                inputPO.sendText('1');

                expect(getDropdown()).not.toBeNull();
            });
        });

        describe('Dropdown does not appear', () => {
            it('dropdown does not appear on focus', () => {
                expect(getDropdown()).toBeNull();
            });

            it('down arrow when readonly is on', () => {
                testComponent.readOnly = true;
                fixture.detectChanges();
                input.dispatchEvent(tuiCreateKeyboardEvent('ArrowDown', 'keydown'));
                fixture.detectChanges();

                expect(getDropdown()).toBeNull();
            });
        });

        it('input filters items', () => {
            inputPO.sendText('03');
            fixture.detectChanges();

            expect(pageObject.getAllByAutomationId('tui-input-time__item').length).toBe(
                1,
            );
        });

        it('the value is substituted when selecting an item from the dropdown', () => {
            inputPO.sendText('03');
            fixture.detectChanges();
            pageObject.getByAutomationId('tui-input-time__item')!.nativeElement.click();

            expect(testComponent.control.value?.toString().trim()).toBe(
                TIMES[5]?.toString(),
            );
        });

        describe('strict mode', () => {
            it('by default it is false, and the entered value is freely exposed in the control', () => {
                inputPO.sendText('11:11');

                expect(testComponent.control.value?.toString().trim()).toBe('11:11');
            });

            it('with strict = true, the entered value is not set if it is absent in items', () => {
                testComponent.strict = true;
                fixture.detectChanges();
                inputPO.sendText('11:11');
                fixture.detectChanges();

                expect(testComponent.control.value?.toString().trim()).not.toBe('11:11');
            });

            it('with strict = true, the entered value is added if present in items', () => {
                testComponent.strict = true;
                fixture.detectChanges();
                inputPO.sendText('01:30');
                fixture.detectChanges();

                expect(testComponent.control.value?.toString().trim()).toBe('01:30');
            });

            it('with strict = true, the entered value is rounded to the nearest in items', () => {
                testComponent.strict = true;
                fixture.detectChanges();
                inputPO.sendText('01:20');
                fixture.detectChanges();

                expect(testComponent.control.value?.toString().trim()).toBe('01:30');
            });

            it('with strict = true, the entered value is rounded to the nearest in items (00:00)', () => {
                testComponent.strict = true;
                fixture.detectChanges();
                inputPO.sendText('00:00');
                fixture.detectChanges();

                expect(testComponent.control.value?.toString().trim()).toBe('00:30');
            });
        });
    });

    describe('InputTime + TUI_TIME_VALUE_TRANSFORMER', () => {
        @Component({
            standalone: true,
            imports: [ReactiveFormsModule, TuiInputTimeModule, TuiRoot],
            template: `
                <tui-root>
                    <tui-input-time
                        [formControl]="control"
                        [items]="items"
                    ></tui-input-time>
                </tui-root>
            `,
            changeDetection: ChangeDetectionStrategy.OnPush,
        })
        class TransformerTest extends Test {
            public override control = new FormControl('12:30');
        }

        class TestTransformer extends TuiValueTransformer<TuiTime | null, string> {
            public fromControlValue(controlValue: string): TuiTime | null {
                return controlValue ? TuiTime.fromString(controlValue) : null;
            }

            public toControlValue(componentValue: TuiTime | null): string {
                return componentValue ? componentValue.toString() : '';
            }
        }

        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [TransformerTest],
                providers: [
                    {provide: TUI_TIME_VALUE_TRANSFORMER, useClass: TestTransformer},
                ],
            });
            await TestBed.compileComponents();
            await initializeEnvironment(TransformerTest);

            testComponent.items = TIMES;
            fixture.detectChanges();
        });

        it('correctly transforms initial value', () => {
            expect(inputPO.value).toBe('12:30');
            expect(testComponent.control.value).toBe('12:30');
        });

        it('transforms typed value', () => {
            inputPO.sendText('12:00');
            fixture.detectChanges();

            expect(inputPO.value).toBe('12:00');
            expect(testComponent.control.value).toBe('12:00');
        });

        it('transforms empty value', () => {
            inputPO.sendText('');
            fixture.detectChanges();

            expect(testComponent.control.value).toBe('');
        });

        it('transforms selected value', () => {
            inputPO.sendText('03');
            fixture.detectChanges();
            pageObject.getByAutomationId('tui-input-time__item')!.nativeElement.click();

            expect(testComponent.control.value).toBe('03:00');
        });

        it('selected item has check mark', () => {
            inputPO.sendText('03:00');
            fixture.detectChanges();

            expect(
                pageObject.getByAutomationId('tui-select-option__checkmark'),
            ).toBeTruthy();
        });
    });
});
