import type {DebugElement} from '@angular/core';
import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {fakeAsync, TestBed, tick} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
    TuiTableBarsHostComponent,
    TuiTableBarsHostModule,
    TuiTableBarsService,
} from '@taiga-ui/addon-tablebars';
import {configureTestSuite, TuiPageObject} from '@taiga-ui/testing';
import type {Subscription} from 'rxjs';
import {timer} from 'rxjs';
import {skip, take, takeUntil} from 'rxjs/operators';

describe(`TableBarsHost`, () => {
    @Component({
        template: `
            <tui-table-bars-host></tui-table-bars-host>
        `,
    })
    class TestComponent {
        @ViewChild(TuiTableBarsHostComponent, {static: true})
        component!: TuiTableBarsHostComponent;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiTableBarsHostComponent;
    let pageObject: TuiPageObject<TestComponent>;
    let service: TuiTableBarsService;
    let subscription: Subscription;

    const title = `Breaking news!`;
    const testContext = {
        get prefix() {
            return `tui-table-bar__`;
        },
    };

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [TuiTableBarsHostModule, NoopAnimationsModule],
            declarations: [TestComponent],
            providers: [TuiTableBarsService],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        component = testComponent.component;
        service = TestBed.inject(TuiTableBarsService);
        service.bar$[`_events`] = [];
    });

    function getBar(): DebugElement {
        return pageObject.getByAutomationId(`${testContext.prefix}bar`)!;
    }

    function getCloseButton(): DebugElement {
        return pageObject.getByAutomationId(`${testContext.prefix}close-button`)!;
    }

    beforeEach(() => {
        if (subscription) {
            subscription.unsubscribe();
        }
    });

    it(`Listens to service for adding tableBar`, () => {
        let result: unknown;

        component.service.bar$.pipe(take(1)).subscribe(bar => {
            result = bar?.content;
        });

        service.open(title).pipe(take(1)).subscribe();

        expect(result).toBe(title);
    });

    it(`tableBar removed by unsubscribe`, fakeAsync(() => {
        let result: unknown;

        component.service.bar$.pipe(skip(1), take(1)).subscribe(bar => {
            result = bar;
        });

        service
            .open(title)
            .pipe(takeUntil(timer(1)))
            .subscribe();

        tick(100);

        expect(result).toBe(null);
    }));

    it(`the default tableBar is dark`, () => {
        service.open(title).pipe(take(1)).subscribe();

        fixture.detectChanges();

        expect(getBar().nativeElement.classList.contains(`t-bar_light`)).toBe(false);
    });

    it(`pi mode: light tableBar light`, () => {
        service.open(title, {mode: `onDark`}).pipe(take(1)).subscribe();
        fixture.detectChanges();

        expect(getBar().nativeElement.classList.contains(`t-bar_light`)).toBe(true);
    });

    it(`there is no close button by default`, () => {
        service.open(title).pipe(take(1)).subscribe();

        fixture.detectChanges();

        expect(getCloseButton()).toBeNull();
    });

    it(`when hasCloseButton: true tableBar there is a close button`, () => {
        service.open(title, {hasCloseButton: true}).pipe(take(1)).subscribe();
        fixture.detectChanges();

        expect(getCloseButton()).not.toBeNull();
    });

    it(`pressing closeButton removes the current tableBar`, () => {
        let result: unknown;

        service.bar$.pipe(skip(1), take(1)).subscribe(bar => {
            result = bar;
        });

        subscription = service.open(title, {hasCloseButton: true}).subscribe();
        fixture.detectChanges();

        getCloseButton().nativeElement.click();

        expect(result).toBe(null);
    });
});
