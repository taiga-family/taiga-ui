import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
    ALWAYS_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiDay,
    TuiDayRange,
} from '@taiga-ui/cdk';
import {TUI_CALENDAR_DATA_STREAM} from '@taiga-ui/kit';
import {PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {of} from 'rxjs';
import {TuiMobileCalendarComponent} from '../mobile-calendar.component';
import {TuiMobileCalendarModule} from '../mobile-calendar.module';

const today = TuiDay.currentLocal();
const tomorrow = today.append({day: 1});

describe('MobileCalendar', () => {
    @Component({
        template: `
            <tui-mobile-calendar
                style="height: 500px;"
                [min]="min"
                [max]="max"
                [disabledItemHandler]="disabledItemHandler"
                [single]="single"
                (cancel)="onCancel()"
                (confirm)="onConfirm($event)"
            ></tui-mobile-calendar>
        `,
        providers: [
            {
                provide: TUI_CALENDAR_DATA_STREAM,
                useValue: of(tomorrow),
            },
        ],
    })
    class TestComponent {
        @ViewChild(TuiMobileCalendarComponent, {static: true})
        component: TuiMobileCalendarComponent;

        min = TUI_FIRST_DAY;
        max = TUI_LAST_DAY;
        disabledItemHandler = ALWAYS_FALSE_HANDLER;
        single = true;
        onCancel = jasmine.createSpy('cancel');
        onConfirm = jasmine.createSpy('confirm');
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: PageObject<TestComponent>;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, TuiMobileCalendarModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(done => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.autoDetectChanges();
        fixture.whenStable().then(() => {
            done();
        });
    });

    function getToday(): HTMLElement {
        return pageObject
            .getAllByAutomationId('tui-primitive-calendar-mobile__cell')
            .find(item => item.classes['cell_today'])!.nativeElement;
    }

    it('the back button emits a cancel event', () => {
        pageObject
            .getByAutomationId('tui-mobile-calendar__cancel')!
            .nativeElement.click();

        expect(testComponent.onCancel).toHaveBeenCalled();
    });

    it('single === true', () => {
        expect(
            pageObject
                .getByAutomationId('tui-mobile-calendar__label')!
                .nativeElement.textContent.trim(),
        ).toBe('Choose day');
    });

    it('single === false', () => {
        testComponent.single = false;
        fixture.detectChanges();

        expect(
            pageObject
                .getByAutomationId('tui-mobile-calendar__label')!
                .nativeElement.textContent.trim(),
        ).toBe('Choose range');
    });

    describe('when the done button emits', () => {
        it('confirm event with selected day', done => {
            setTimeout(() => {
                fixture.detectChanges();
                getToday().click();
                pageObject
                    .getByAutomationId('tui-mobile-calendar__confirm')!
                    .nativeElement.click();

                const value = testComponent.onConfirm.calls.mostRecent().args[0];

                expect(value.daySame(today)).toBe(true);
                done();
            }, 100);
        });

        it('confirm event at selected interval', done => {
            setTimeout(() => {
                fixture.detectChanges();
                testComponent.single = false;
                fixture.autoDetectChanges();
                getToday().click();
                pageObject
                    .getByAutomationId('tui-mobile-calendar__confirm')!
                    .nativeElement.click();

                const value = testComponent.onConfirm.calls.mostRecent().args[0];

                expect(value instanceof TuiDayRange).toBe(true);
                expect(value.from.daySame(today)).toBe(true);
                expect(value.to.daySame(today)).toBe(true);
                done();
            }, 100);
        });

        it('confirm event with selected interval with different dates', fakeAsync(() => {
            testComponent.single = false;
            fixture.autoDetectChanges();
            tick(500);

            const days = pageObject.getAllByAutomationId(
                'tui-primitive-calendar-mobile__cell',
            );

            days[0].nativeElement.click();
            days[1].nativeElement.click();
            pageObject
                .getByAutomationId('tui-mobile-calendar__confirm')!
                .nativeElement.click();

            const value = testComponent.onConfirm.calls.mostRecent().args[0];

            expect(value.isSingleDay).toBe(false);
        }));

        it('cancel event if null', fakeAsync(() => {
            testComponent.component.value = null;
            pageObject
                .getByAutomationId('tui-mobile-calendar__confirm')!
                .nativeElement.click();

            expect(testComponent.onConfirm).not.toHaveBeenCalled();
            expect(testComponent.onCancel).toHaveBeenCalled();
        }));
    });

    // :hidethepain:
    it('Year selection scrolls through months', done => {
        setTimeout(() => {
            testComponent.component.setYear(1950);
            fixture.detectChanges();

            setTimeout(() => {
                fixture.detectChanges();

                setTimeout(() => {
                    fixture.detectChanges();

                    pageObject
                        .getAllByAutomationId('tui-primitive-calendar-mobile__cell')[0]
                        .nativeElement.click();
                    pageObject
                        .getByAutomationId('tui-mobile-calendar__confirm')!
                        .nativeElement.click();

                    const value = testComponent.onConfirm.calls.mostRecent().args[0];

                    expect(value.year <= 1950).toBe(true);
                    done();
                }, 100);
            }, 100);
        }, 100);
    });
});
