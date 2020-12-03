import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {Subscription} from 'rxjs';
import {TuiNotificationsModule} from '../../notifications.module';
import {TuiNotificationsService} from '../../notifications.service';
import {TuiNotificationsHostComponent} from '../notifications-host.component';

describe('NotificationsHost', () => {
    @Component({
        template: ` <tui-notifications-host></tui-notifications-host> `,
    })
    class TestComponent {
        @ViewChild(TuiNotificationsHostComponent, {static: true})
        component: TuiNotificationsHostComponent;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiNotificationsHostComponent;
    let service: TuiNotificationsService;
    let subscription: Subscription;

    const label = 'Breaking news!';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TuiNotificationsModule, NoopAnimationsModule],
            declarations: [TestComponent],
            providers: [TuiNotificationsService],
        });

        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
        component = testComponent.component;
        service = TestBed.inject(TuiNotificationsService);
    });

    beforeEach(() => {
        subscription = service.showNotification(label, {label}).subscribe();
    });

    it('Слушает сервис для добавления нотификаций', () => {
        expect(component.items$.value[0].label).toBe(label);
    });

    it('Нотификации удаляются', () => {
        (component as any).removeItem(component.items$.value[0]);

        expect(component.items$.value.length).toBe(0);
    });

    it('Нотификации удаляются по unsubscribe', () => {
        subscription.unsubscribe();

        expect(component.items$.value.length).toBe(0);
    });
});
