import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {PageObject} from '@taiga-ui/testing';
import {
    PolymorpheusComponent,
    PolymorpheusModule,
    PolymorpheusTemplate,
} from '@tinkoff/ng-polymorpheus';
import {configureTestSuite} from 'ng-bullet';
import {TuiRootModule} from '../../../components/root/root.module';
import {TuiNotification} from '../../../enums/notification';
import {NotificationAlert} from '../notification-alert/Notification-alert';
import {TuiNotificationContentContext} from '../notification-content-context';
import {TuiNotificationsModule} from '../notifications.module';
import {TuiNotificationsService} from '../notifications.service';

class NotificationConstructorMock {}

describe('TuiNotificationsService', () => {
    let expected: NotificationAlert<string, string>;
    let service: TuiNotificationsService;
    let fixture: ComponentFixture<TestComponent>;
    let pageObject: PageObject<TestComponent>;
    let testComponent: TestComponent;
    const label = 'Title';
    const content = 'Content';
    const component = new PolymorpheusComponent(NotificationConstructorMock);
    const testContext = {
        get prefix() {
            return 'tui-notification-alert__';
        },
    };

    @Component({
        template: `
            <tui-root>
                <ng-template polymorpheus>Контентище</ng-template>
            </tui-root>
        `,
    })
    class TestComponent {
        @ViewChild(PolymorpheusTemplate)
        content: PolymorpheusTemplate<TuiNotificationContentContext>;
    }

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [
                TuiRootModule,
                TuiNotificationsModule,
                NoopAnimationsModule,
                PolymorpheusModule,
            ],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        pageObject = new PageObject(fixture);

        service = TestBed.get(TuiNotificationsService);
        service.open$.subscribe(Notification => {
            expected = Notification;
        });

        fixture.detectChanges();
    });

    describe('Строка', () => {
        beforeEach(() => {
            service.showNotification(content, {label}).subscribe();
        });

        it('Передаёт Notification подписчикам', () => {
            expect(expected.label).toBe(label);
        });

        it('Значения по умолчанию', () => {
            expect(expected.autoClose).toBe(true);
            expect(expected.status).toBe(TuiNotification.Info);
        });

        it('status', () => {
            service
                .showNotification(content, {label, status: TuiNotification.Error})
                .subscribe();

            expect(expected.status).toBe(TuiNotification.Error);
        });

        it('autoclose', () => {
            service.showNotification(content, {label, autoClose: false}).subscribe();

            expect(expected.autoClose).toBe(false);
        });
    });

    describe('Компонент', () => {
        beforeEach(() => {
            service.showNotification(component, {label: content}).subscribe();
        });

        it('Передаёт Notification подписчикам', () => {
            expect(expected.label).toBe(content);
        });

        it('Значения по умолчанию', () => {
            expect(expected.autoClose).toBe(true);
            expect(expected.status).toBe(TuiNotification.Info);
        });

        it('status', () => {
            service
                .showNotification(component, {
                    status: TuiNotification.Error,
                })
                .subscribe();

            expect(expected.status).toBe(TuiNotification.Error);
        });

        it('autoclose', () => {
            service
                .showNotification(component, {
                    autoClose: false,
                })
                .subscribe();

            expect(expected.autoClose).toBe(false);
        });
    });

    describe('Шаблон', () => {
        beforeEach(() => {
            service
                .showNotification(testComponent.content, {label: 'Шаблон'})
                .subscribe();
        });

        it('Показывает нотификацию с шаблоном', () => {
            fixture.detectChanges();

            expect(
                pageObject
                    .getByAutomationId(`${testContext.prefix}content`)!
                    .nativeElement.textContent.trim(),
            ).toBe('Контентище');
        });

        it('Передаёт Notification подписчикам', () => {
            expect(expected.label).toBe('Шаблон');
        });

        it('Значения по умолчанию', () => {
            expect(expected.autoClose).toBe(true);
            expect(expected.status).toBe(TuiNotification.Info);
        });

        it('status', () => {
            service
                .showNotification(testComponent.content, {
                    status: TuiNotification.Error,
                })
                .subscribe();

            expect(expected.status).toBe(TuiNotification.Error);
        });

        it('autoclose', () => {
            service
                .showNotification(testComponent.content, {
                    autoClose: false,
                })
                .subscribe();

            expect(expected.autoClose).toBe(false);
        });
    });
});
