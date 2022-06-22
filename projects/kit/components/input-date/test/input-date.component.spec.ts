import {Component, DebugElement, Type, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
    TUI_DATE_FORMAT,
    TUI_DATE_SEPARATOR,
    TuiControlValueTransformer,
    TuiDay,
} from '@taiga-ui/cdk';
import {
    TuiHintControllerModule,
    TuiRootModule,
    TuiSizeL,
    TuiSizeS,
    TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import {TUI_DATE_VALUE_TRANSFORMER} from '@taiga-ui/kit/tokens';
import {configureTestSuite, TuiNativeInputPO, TuiPageObject} from '@taiga-ui/testing';

import {TuiInputDateComponent} from '../input-date.component';
import {TuiInputDateModule} from '../input-date.module';

@Component({
    template: `
        <tui-root>
            <tui-input-date
                [formControl]="control"
                [readOnly]="readOnly"
                [min]="min"
                [tuiTextfieldCleaner]="cleaner"
                [tuiTextfieldExampleText]="exampleText"
                [tuiTextfieldLabelOutside]="labelOutside"
                [tuiTextfieldSize]="size"
                [tuiHintContent]="hintContent"
            >
                Select date
            </tui-input-date>
        </tui-root>
    `,
})
class TestComponent {
    @ViewChild(TuiInputDateComponent)
    readonly component!: TuiInputDateComponent;

    control = new FormControl(new TuiDay(2017, 2, 1));

    cleaner = false;

    readOnly = false;

    min = new TuiDay(1900, 0, 1);

    labelOutside = false;

    size: TuiSizeS | TuiSizeL = 'm';

    hintContent: string | null = 'prompt';

    exampleText = '';
}

let fixture: ComponentFixture<TestComponent>;
let testComponent: TestComponent;
let pageObject: TuiPageObject<TestComponent>;
let inputPO: TuiNativeInputPO;

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
        return 'tui-input-date__';
    },
};

const DEFAULT_TESTING_MODULE_META = {
    imports: [
        TuiRootModule,
        NoopAnimationsModule,
        TuiInputDateModule,
        ReactiveFormsModule,
        TuiHintControllerModule,
        TuiTextfieldControllerModule,
    ],
    declarations: [TestComponent],
};

const initializeEnvironment = async (
    component: Type<TestComponent> = TestComponent,
): Promise<void> => {
    fixture = TestBed.createComponent(component);
    fixture.detectChanges();

    pageObject = new TuiPageObject(fixture);
    testComponent = fixture.componentInstance;
    inputPO = new TuiNativeInputPO(fixture, `tui-primitive-textfield__native-input`);

    await fixture.whenStable();
};

describe('InputDate (base cases when TUI_DATE_FORMAT = DMY)', () => {
    configureTestSuite(() => {
        TestBed.configureTestingModule(DEFAULT_TESTING_MODULE_META);
    });

    beforeEach(async () => {
        await initializeEnvironment();
    });

    it('If there is min and an initial value and an initial value less than min - keep the initial value', async () => {
        testComponent.min = new TuiDay(2018, 3, 11);
        fixture.detectChanges();

        await fixture.whenStable();

        fixture.detectChanges();
        await fixture.whenStable();

        expect(inputPO.value).toBe('01.03.2017');
    });

    it('sets valid day if date selected via calendar', async () => {
        mouseDownOnTextfield();

        expect(getCalendar()).not.toBeNull();

        const calendarCell = getCalendarCell(14);

        calendarCell?.nativeElement.click();
        fixture.detectChanges();
        await fixture.whenStable();

        expect(inputPO.value).toBe('14.03.2017');
    });

    describe('Keyboard input', () => {
        it('The passed date is inserted into the field', () => {
            inputPO.sendText('01.03.2017');

            expect(inputPO.value).toBe('01.03.2017');
        });

        it('If you enter an invalid date, the value is adjusted', () => {
            inputPO.sendText('32.12.2012');

            expect(inputPO.value).toBe('31.12.2012');
        });

        it('When entering an incomplete date, leaves it in the field', () => {
            inputPO.sendText('31.12.20');

            expect(inputPO.value).toBe('31.12.20');
        });

        it('When entering an incomplete date, the control value is null', () => {
            inputPO.sendText('31.12.20');

            expect(testComponent.control.value).toBeNull();
        });
    });

    describe('textfield', () => {
        describe('when mousedown on it', () => {
            describe('unless the field is locked and not read-only', () => {
                it('opens the calendar', () => {
                    mouseDownOnTextfield();

                    expect(getCalendar()).not.toBeNull();
                });

                it('on repeated mousedown will close the calendar', () => {
                    mouseDownOnTextfield();
                    mouseDownOnTextfield();

                    expect(getCalendar()).toBeNull();
                });

                describe('if the field is locked', () => {
                    it('the calendar does not open', () => {
                        testComponent.control.disable();
                        fixture.detectChanges();
                        mouseDownOnTextfield();

                        expect(getCalendar()).toBeNull();
                    });
                });

                describe('if the readOnly field', () => {
                    it('the calendar does not open', () => {
                        testComponent.readOnly = true;
                        fixture.detectChanges();
                        mouseDownOnTextfield();

                        expect(getCalendar()).toBeNull();
                    });
                });
            });
        });
    });
});

describe('InputDate + TUI_DATE_FORMAT = YMD integration', () => {
    configureTestSuite(() => {
        TestBed.configureTestingModule({
            ...DEFAULT_TESTING_MODULE_META,
            providers: [{provide: TUI_DATE_FORMAT, useValue: 'YMD'}],
        });
    });

    beforeEach(async () => {
        await initializeEnvironment();
    });

    it('accepts yyyy.mm.dd', () => {
        inputPO.sendText('2021.12.23');

        const typedDay = testComponent.control.value;

        expect(inputPO.value).toBe('2021.12.23');
        expect(typedDay.day).toBe(23);
        expect(typedDay.month).toBe(11);
        expect(typedDay.year).toBe(2021);
    });

    it('does not accept dd.mm.yyyy', () => {
        inputPO.sendText('23.12.2021');

        const typedDay = testComponent.control.value;

        expect(inputPO.value).toBe('2312.12.21');
        expect(typedDay.day).toBe(21);
        expect(typedDay.month).toBe(11);
        expect(typedDay.year).toBe(2312);
    });

    it('does not accept mm.dd.yyyy (and set min day if it is less min day)', () => {
        inputPO.sendText('12.23.2021');

        const typedDay = testComponent.control.value;

        expect(inputPO.value).toBe('1900.01.01');
        expect(typedDay.day).toBe(1);
        expect(typedDay.month).toBe(0);
        expect(typedDay.year).toBe(1900);
    });

    it('sets valid day if date selected via calendar', async () => {
        mouseDownOnTextfield();

        expect(getCalendar()).not.toBeNull();

        const calendarCell = getCalendarCell(22);

        calendarCell?.nativeElement.click();
        fixture.detectChanges();
        await fixture.whenStable();

        expect(inputPO.value).toBe('2017.03.22');
    });
});

describe('InputDate + TUI_DATE_FORMAT = MDY integration', () => {
    configureTestSuite(() => {
        TestBed.configureTestingModule({
            ...DEFAULT_TESTING_MODULE_META,
            providers: [{provide: TUI_DATE_FORMAT, useValue: 'MDY'}],
        });
    });

    beforeEach(async () => {
        await initializeEnvironment();
    });

    it('accepts mm.dd.yyyy', () => {
        inputPO.sendText('12.23.2021');

        const typedDay = testComponent.control.value;

        expect(inputPO.value).toBe('12.23.2021');
        expect(typedDay.day).toBe(23);
        expect(typedDay.month).toBe(11);
        expect(typedDay.year).toBe(2021);
    });

    it('does not accept dd.mm.yyyy', () => {
        inputPO.sendText('23.12.2021');

        const typedDay = testComponent.control.value;

        expect(inputPO.value).toBe('12.12.2021');
        expect(typedDay.day).toBe(12);
        expect(typedDay.month).toBe(11);
        expect(typedDay.year).toBe(2021);
    });

    it('does not accept yyyy.mm.dd (and set min day if it is less min day)', () => {
        inputPO.sendText('2021.12.23');

        const typedDay = testComponent.control.value;

        expect(inputPO.value).toBe('01.01.1900');
        expect(typedDay.day).toBe(1);
        expect(typedDay.month).toBe(0);
        expect(typedDay.year).toBe(1900);
    });

    it('sets valid day if date selected via calendar', async () => {
        mouseDownOnTextfield();

        expect(getCalendar()).not.toBeNull();

        const calendarCell = getCalendarCell(9);

        calendarCell?.nativeElement.click();
        fixture.detectChanges();
        await fixture.whenStable();

        expect(inputPO.value).toBe('03.09.2017');
    });
});

describe('InputDate + TUI_DATE_FORMAT="MDY" + TUI_DATE_SEPARATOR ="/" (USA format)', () => {
    configureTestSuite(() => {
        TestBed.configureTestingModule({
            ...DEFAULT_TESTING_MODULE_META,
            providers: [
                {provide: TUI_DATE_FORMAT, useValue: 'MDY'},
                {provide: TUI_DATE_SEPARATOR, useValue: '/'},
            ],
        });
    });

    beforeEach(async () => {
        await initializeEnvironment();
    });

    it('accepts valid mm/dd/yyyy', () => {
        inputPO.sendText('12272021');

        const typedDay = testComponent.control.value;

        expect(inputPO.value).toBe('12/27/2021');
        expect(typedDay.day).toBe(27);
        expect(typedDay.month).toBe(11);
        expect(typedDay.year).toBe(2021);
    });

    it('replaces dots by custom separator', () => {
        inputPO.sendText('05.14.1988');

        const typedDay = testComponent.control.value;

        expect(inputPO.value).toBe('05/14/1988');
        expect(typedDay.day).toBe(14);
        expect(typedDay.month).toBe(4);
        expect(typedDay.year).toBe(1988);
    });
});

describe('InputDate + TUI_DATE_VALUE_TRANSFORMER', () => {
    class TestTransformer
        implements TuiControlValueTransformer<TuiDay | null, Date | null>
    {
        fromControlValue(controlValue: Date | null): TuiDay | null {
            return controlValue && TuiDay.fromLocalNativeDate(controlValue);
        }

        toControlValue(componentValue: TuiDay | null): Date | null {
            return componentValue?.toLocalNativeDate() || null;
        }
    }

    class TransformerTestComponent extends TestComponent {
        control = new FormControl(new Date(2022, 0, 31));
    }

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            ...DEFAULT_TESTING_MODULE_META,
            declarations: [TransformerTestComponent],
            providers: [
                {
                    provide: TUI_DATE_VALUE_TRANSFORMER,
                    useClass: TestTransformer,
                },
            ],
        });
    });

    beforeEach(async () => {
        await initializeEnvironment(TransformerTestComponent);
    });

    it('correctly transforms initial value', () => {
        expect(inputPO.value).toBe('31.01.2022');
        expect(testComponent.control.value).toEqual(new Date(2022, 0, 31));
    });

    it('transforms typed value', () => {
        inputPO.sendText('09011905');

        expect(inputPO.value).toBe('09.01.1905');
        expect(testComponent.control.value).toEqual(new Date(1905, 0, 9));
    });

    it('transforms min day as output (if typed day is less than min day)', () => {
        inputPO.sendText('19.02.1861');

        expect(inputPO.value).toBe('01.01.1900');
        expect(testComponent.control.value).toEqual(new Date(1900, 0, 1));
    });

    it('transforms value which was selected via calendar', async () => {
        mouseDownOnTextfield();

        expect(getCalendar()).not.toBeNull();

        const calendarCell = getCalendarCell(20);

        calendarCell?.nativeElement.click();
        fixture.detectChanges();
        await fixture.whenStable();

        expect(inputPO.value).toBe('20.01.2022');
        expect(testComponent.control.value).toEqual(new Date(2022, 0, 20));
    });

    it('transforms value which was programmatically patched', () => {
        testComponent.control.patchValue(new Date(1991, 11, 26));

        expect(inputPO.value).toBe('26.12.1991');
        expect(testComponent.control.value).toEqual(new Date(1991, 11, 26));
    });
});

function mouseDownOnTextfield(): void {
    getTextfield()!.nativeElement.dispatchEvent(
        new MouseEvent('mousedown', {bubbles: true}),
    );
    getTextfield()!.nativeElement.click();
    fixture.detectChanges();
}

function getTextfield(): DebugElement | null {
    return pageObject.getByAutomationId('tui-input-date-range__textfield');
}

function getCalendar(): DebugElement | null {
    return pageObject.getByAutomationId(`${testContext.prefix}calendar`);
}

function getCalendarCell(dayNumber: number): DebugElement | null {
    return (
        pageObject
            .getAllByAutomationId('tui-primitive-calendar__cell')
            .find(el => Number(el.nativeElement.innerText.trim()) === dayNumber) || null
    );
}
