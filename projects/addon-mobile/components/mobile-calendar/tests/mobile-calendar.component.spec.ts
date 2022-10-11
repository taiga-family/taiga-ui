import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
    TuiMobileCalendarComponent,
    TuiMobileCalendarModule,
} from '@taiga-ui/addon-mobile';
import {
    ALWAYS_FALSE_HANDLER,
    TUI_FIRST_DAY,
    TUI_LAST_DAY,
    TuiDay,
    TuiDayRange,
} from '@taiga-ui/cdk';
import {TUI_CALENDAR_DATE_STREAM} from '@taiga-ui/kit';
import {configureTestSuite, TuiPageObject} from '@taiga-ui/testing';
import {of} from 'rxjs';

const today = TuiDay.currentLocal();
const tomorrow = today.append({day: 1});

describe(`MobileCalendar`, () => {
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
                provide: TUI_CALENDAR_DATE_STREAM,
                useValue: of(tomorrow),
            },
        ],
    })
    class TestComponent {
        @ViewChild(TuiMobileCalendarComponent, {static: true})
        component!: TuiMobileCalendarComponent;

        min = TUI_FIRST_DAY;
        max = TUI_LAST_DAY;
        disabledItemHandler = ALWAYS_FALSE_HANDLER;
        single = true;
        onCancel = jest.fn();
        onConfirm = jest.fn();
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: TuiPageObject<TestComponent>;

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, TuiMobileCalendarModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.autoDetectChanges();
    });

    function getToday(): HTMLElement {
        return pageObject
            .getAllByAutomationId(`tui-primitive-calendar-mobile__cell`)
            .find(item => item.classes[`t-cell_today`])?.nativeElement;
    }

    it(`the back button emits a cancel event`, () => {
        pageObject
            .getByAutomationId(`tui-mobile-calendar__cancel`)
            ?.nativeElement.click();

        expect(testComponent.onCancel).toHaveBeenCalled();
    });

    it(`single === true`, () => {
        expect(
            pageObject
                .getByAutomationId(`tui-mobile-calendar__label`)
                ?.nativeElement.textContent.trim(),
        ).toBe(`Choose day`);
    });

    it(`single === false`, fakeAsync(() => {
        testComponent.single = false;
        fixture.detectChanges();

        tick(100);

        expect(
            pageObject
                .getByAutomationId(`tui-mobile-calendar__label`)
                ?.nativeElement.textContent.trim(),
        ).toBe(`Choose range`);
    }));

    describe(`when the done button emits`, () => {
        // TODO: move to cypress
        // TypeError: el.scrollTo is not a function
        xit(`confirm event with selected day`, fakeAsync(() => {
            fixture.detectChanges();
            getToday().click();
            pageObject
                .getByAutomationId(`tui-mobile-calendar__confirm`)
                ?.nativeElement.click();

            const value = testComponent.onConfirm.mock.calls[0][0];

            expect(value.daySame(today)).toBe(true);
        }));

        xit(`confirm event at selected interval`, () => {
            fixture.detectChanges();
            testComponent.single = false;
            fixture.autoDetectChanges();
            getToday().click();
            pageObject
                .getByAutomationId(`tui-mobile-calendar__confirm`)!
                .nativeElement.click();

            const value = testComponent.onConfirm.mock.calls[0][0];

            expect(value instanceof TuiDayRange).toBe(true);
            expect(value.from.daySame(today)).toBe(true);
            expect(value.to.daySame(today)).toBe(true);
        });

        xit(`confirm event with selected interval with different dates`, fakeAsync(() => {
            testComponent.single = false;
            fixture.autoDetectChanges();
            tick(500);

            const days = pageObject.getAllByAutomationId(
                `tui-primitive-calendar-mobile__cell`,
            );

            days[0].nativeElement.click();
            days[1].nativeElement.click();
            pageObject
                .getByAutomationId(`tui-mobile-calendar__confirm`)!
                .nativeElement.click();

            const value = testComponent.onConfirm.mock.calls[0][0];

            expect(value.isSingleDay).toBe(false);
        }));

        xit(`cancel event if null`, fakeAsync(() => {
            testComponent.component.value = null;
            pageObject
                .getByAutomationId(`tui-mobile-calendar__confirm`)!
                .nativeElement.click();

            expect(testComponent.onConfirm).not.toHaveBeenCalled();
            expect(testComponent.onCancel).toHaveBeenCalled();
        }));
    });

    /**
     * TODO:
     * TypeError: el.scrollTo is not a function
     *       at CdkVirtualScrollViewport.Object.<anonymous>.CdkScrollable._applyScrollToOptions (../src/cdk/scrolling/scrollable.ts:133:10)
     *       at CdkVirtualScrollViewport.Object.<anonymous>.CdkScrollable.scrollTo (../src/cdk/scrolling/scrollable.ts:126:10)
     *       at CdkVirtualScrollViewport.Object.<anonymous>.CdkVirtualScrollViewport.scrollToOffset (../src/cdk/scrolling/virtual-scroll-viewport.ts:353:10)
     *       at FixedSizeVirtualScrollStrategy.Object.<anonymous>.FixedSizeVirtualScrollStrategy.scrollToIndex (../src/cdk/scrolling/fixed-size-virtual-scroll.ts:107:22)
     *       at CdkVirtualScrollViewport.Object.<anonymous>.CdkVirtualScrollViewport.scrollToIndex (../src/cdk/scrolling/virtual-scroll-viewport.ts:362:26)
     *       at TuiMobileCalendarComponent.scrollToActiveYear (projects/addon-mobile/components/mobile-calendar/mobile-calendar.component.ts:387:30)
     *       at TuiMobileCalendarComponent.setYear (projects/addon-mobile/components/mobile-calendar/mobile-calendar.component.ts:211:14)
     *       at projects/addon-mobile/components/mobile-calendar/tests/mobile-calendar.component.spec.ts:170:33
     *       at _ZoneDelegate.Object.<anonymous>._ZoneDelegate.invoke (node_modules/zone.js/bundles/zone-testing-bundle.umd.js:409:30)
     *       at ProxyZoneSpec.Object.<anonymous>.ProxyZoneSpec.onInvoke (node_modules/zone.js/bundles/zone-testing-bundle.umd.js:3830:43)
     *       at _ZoneDelegate.Object.<anonymous>._ZoneDelegate.invoke (node_modules/zone.js/bundles/zone-testing-bundle.umd.js:408:56)
     *       at Zone.Object.<anonymous>.Zone.run (node_modules/zone.js/bundles/zone-testing-bundle.umd.js:169:47)
     *       at Object.wrappedFunc (node_modules/zone.js/bundles/zone-testing-bundle.umd.js:4330:34)
     */
    xit(`Year selection scrolls through months`, done => {
        testComponent.component.setYear(1950);
        fixture.detectChanges();

        const waitCdkScrollToIndex = 300;

        setTimeout(() => {
            pageObject
                .getAllByAutomationId(`tui-primitive-calendar-mobile__cell`)[0]
                .nativeElement.click();

            pageObject
                .getByAutomationId(`tui-mobile-calendar__confirm`)
                ?.nativeElement.click();

            const value = testComponent.onConfirm.mock.calls[0][0];

            expect(value.year <= 1950).toBe(true);
            done();
        }, waitCdkScrollToIndex);
    });
});
