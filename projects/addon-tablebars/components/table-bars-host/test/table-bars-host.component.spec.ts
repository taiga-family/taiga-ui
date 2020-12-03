import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TuiBrightness} from '@taiga-ui/core';
import {PageObject} from '@taiga-ui/testing';
import {configureTestSuite} from 'ng-bullet';
import {Subscription} from 'rxjs';
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
        subscription = service.showTableBar(title).subscribe();
    });

    it('Слушает сервис для добавления tableBar', () => {
        expect(component.items$.value[0].content).toBe(title);
    });

    it('tableBar удаляются', () => {
        (component as any).removeItem(component.items$.value[0]);

        expect(component.items$.value.length).toBe(0);
    });

    it('tableBar удаляются по unsubscribe', () => {
        subscription.unsubscribe();

        expect(component.items$.value.length).toBe(0);
    });

    it('по умолчанию tableBar темный', () => {
        fixture.detectChanges();

        expect(getBar().nativeElement.classList.contains('bar_light')).toBe(false);
    });

    it('при mode: light tableBar светлый', () => {
        subscription = service
            .showTableBar(title, {mode: TuiBrightness.Light})
            .subscribe();
        fixture.detectChanges();

        expect(getBar().nativeElement.classList.contains('bar_light')).toBe(true);
    });

    it('по умолчанию кнопки закрытия нет', () => {
        fixture.detectChanges();

        expect(getCloseButton()).toBeNull();
    });

    it('при hasCloseButton: true tableBar кнопка закрытия есть', () => {
        subscription = service.showTableBar(title, {hasCloseButton: true}).subscribe();
        fixture.detectChanges();

        expect(getCloseButton()).not.toBeNull();
    });

    it('нажатие closeButton удаляет текущий tableBar', () => {
        subscription.unsubscribe();
        subscription = service.showTableBar(title, {hasCloseButton: true}).subscribe();
        fixture.detectChanges();

        getCloseButton().nativeElement.click();
        fixture.detectChanges();

        expect(component.items$.value.length).toBe(0);
    });
});
