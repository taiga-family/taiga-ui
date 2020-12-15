import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiBrightness} from '@taiga-ui/core';
import {PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {Subscription, timer} from 'rxjs';
import {skip, take, takeUntil} from 'rxjs/operators';
import {TuiTableBarsService} from '../../../services/table-bars.service';
import {TuiTableBarsHostComponent} from '../table-bars-host.component';
import {TuiTableBarsHostModule} from '../table-bars-host.module';

describe('TableBarsHost', () => {
    @Component({
        template: ` <tui-table-bars-host></tui-table-bars-host> `,
    })
    class TestComponent {
        @ViewChild(TuiTableBarsHostComponent, {static: true})
        component: TuiTableBarsHostComponent;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiTableBarsHostComponent;
    let pageObject: PageObject<TestComponent>;
    let service: TuiTableBarsService;
    let subscription: Subscription;

    const title = 'Breaking news!';
    const testContext = {
        get prefix() {
            return 'tui-table-bar__';
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
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        component = testComponent.component;
        service = TestBed.inject(TuiTableBarsService);
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

    it('Слушает сервис для добавления tableBar', done => {
        component.service.bar$.pipe(take(1)).subscribe(bar => {
            expect(bar && bar.content).toBe(title);
            done();
        });

        service.open(title).pipe(take(1)).subscribe();
    });

    it('tableBar удаляются по unsubscribe', done => {
        component.service.bar$.pipe(skip(1), take(1)).subscribe(bar => {
            expect(bar).toBe(null);
            done();
        });

        service
            .open(title)
            .pipe(takeUntil(timer(1)))
            .subscribe();
    });

    it('по умолчанию tableBar темный', () => {
        service.open(title).pipe(take(1)).subscribe();

        fixture.detectChanges();

        expect(getBar().nativeElement.classList.contains('bar_light')).toBe(false);
    });

    it('при mode: light tableBar светлый', () => {
        service.open(title, {mode: TuiBrightness.Light}).pipe(take(1)).subscribe();
        fixture.detectChanges();

        expect(getBar().nativeElement.classList.contains('bar_light')).toBe(true);
    });

    it('по умолчанию кнопки закрытия нет', () => {
        service.open(title).pipe(take(1)).subscribe();

        fixture.detectChanges();

        expect(getCloseButton()).toBeNull();
    });

    it('при hasCloseButton: true tableBar кнопка закрытия есть', () => {
        service.open(title, {hasCloseButton: true}).pipe(take(1)).subscribe();
        fixture.detectChanges();

        expect(getCloseButton()).not.toBeNull();
    });

    it('нажатие closeButton удаляет текущий tableBar', done => {
        service.bar$.pipe(skip(1), take(1)).subscribe(bar => {
            expect(bar).toBe(null);
            done();
        });

        subscription = service.open(title, {hasCloseButton: true}).subscribe();
        fixture.detectChanges();

        getCloseButton().nativeElement.click();
    });
});
