import {ChangeDetectionStrategy, Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {fakeAsync, TestBed, tick} from '@angular/core/testing';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {TuiDay, TuiMonth} from '@taiga-ui/cdk';
import {TuiRoot} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {TuiInputMonthComponent, TuiInputMonthModule} from '@taiga-ui/legacy';
import {TuiNativeInputPO, TuiPageObject} from '@taiga-ui/testing';

describe('InputMonth', () => {
    @Component({
        standalone: true,
        imports: [ReactiveFormsModule, TuiInputMonthModule, TuiRoot],
        template: `
            <tui-root>
                <tui-input-month [formControl]="control"></tui-input-month>
            </tui-root>
        `,
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
    class Test {
        @ViewChild(TuiInputMonthComponent, {static: true})
        public component!: TuiInputMonthComponent;

        public control = new FormControl<TuiMonth | null>(null);
    }

    let fixture: ComponentFixture<Test>;
    let pageObject: TuiPageObject<Test>;
    let testComponent: Test;
    let component: TuiInputMonthComponent;
    let inputPO: TuiNativeInputPO;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [Test],
            providers: [NG_EVENT_PLUGINS],
        });
        await TestBed.compileComponents();
        fixture = TestBed.createComponent(Test);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;
        component = testComponent.component;
        fixture.detectChanges();

        inputPO = new TuiNativeInputPO(fixture, 'tui-primitive-textfield__native-input');
    });

    describe('computedValue', () => {
        it('returns empty string if no value', () => {
            testComponent.control.setValue(null);

            expect(component.nativeFocusableElement?.value).toBe('');
        });

        it('returns the whole stringified value if there is', fakeAsync(() => {
            testComponent.control.setValue(new TuiMonth(2020, 4));

            fixture.detectChanges();

            tick(50);

            expect(component.nativeFocusableElement?.value).toBe('May 2020');
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
