import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiDay, TuiMonth} from '@taiga-ui/cdk';
import {TuiRootModule} from '@taiga-ui/core';
import {TuiInputMonthComponent, TuiInputMonthModule} from '@taiga-ui/kit';
import {configureTestSuite, NativeInputPO, PageObject} from '@taiga-ui/testing';

describe('InputMonth', () => {
    @Component({
        template: `
            <tui-root>
                <tui-input-month [formControl]="control"></tui-input-month>
            </tui-root>
        `,
    })
    class TestComponent {
        @ViewChild(TuiInputMonthComponent, {static: true})
        component!: TuiInputMonthComponent;

        control = new FormControl(null);
    }

    let fixture: ComponentFixture<TestComponent>;
    let pageObject: PageObject<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiInputMonthComponent;
    let inputPO: NativeInputPO;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                TuiRootModule,
                ReactiveFormsModule,
                NoopAnimationsModule,
                TuiInputMonthModule,
            ],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        component = testComponent.component;
        fixture.detectChanges();

        inputPO = new NativeInputPO(fixture, `tui-primitive-textfield__native-input`);
    });

    describe('computedValue', () => {
        it('returns empty string if no value', () => {
            testComponent.control.setValue(null);

            expect(component.nativeFocusableElement!.value).toBe('');
        });

        it('returns the whole stringified value if there is', fakeAsync(() => {
            testComponent.control.setValue(new TuiMonth(2020, 4));

            fixture.detectChanges();

            tick(50);

            expect(component.nativeFocusableElement?.value).toBe(`May 2020`);
        }));
    });

    describe('onMonthClick', () => {
        it('set value', () => {
            const newMonth = new TuiMonth(2020, 5);

            component.onMonthClick(newMonth);

            expect(component.value).toBe(newMonth);
        });

        it('closes dropdown', () => {
            const newMonth = new TuiMonth(2020, 5);

            component.onMonthClick(newMonth);

            expect(component.open).toBe(false);
        });
    });

    describe('open calendar', () => {
        it('shows current year (if NO value is selected)', async () => {
            testComponent.control.setValue(null);
            fixture.detectChanges();
            inputPO.click();
            fixture.detectChanges();
            await fixture.whenStable();

            expect(getActiveYear()).toBe(`${TuiDay.currentLocal().year}`);
        });

        it('shows year of the selected value (control has selected value)', async () => {
            testComponent.control.setValue(new TuiMonth(2020, 4));
            fixture.detectChanges();
            inputPO.click();
            fixture.detectChanges();
            await fixture.whenStable();

            expect(getActiveYear()).toBe('2020');
        });
    });

    function getActiveYear(): string {
        return (
            pageObject
                .getByAutomationId('tui-calendar-month__active-year')
                ?.nativeElement?.textContent.trim() || ''
        );
    }
});
