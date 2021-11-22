import {CommonModule} from '@angular/common';
import {Component, Inject, NgModule, ViewChild} from '@angular/core';
import {ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';
import {
    TuiNotificationOptions,
    TuiNotificationOptionsWithData,
} from '@taiga-ui/core/interfaces';
import {
    NotificationTokenOptions,
    TUI_NOTIFICATION_DEFAULT_OPTIONS,
    TUI_NOTIFICATION_OPTIONS,
} from '@taiga-ui/core/tokens';
import {PageObject} from '@taiga-ui/testing';
import {
    POLYMORPHEUS_CONTEXT,
    PolymorpheusComponent,
    PolymorpheusContent,
} from '@tinkoff/ng-polymorpheus';
import {TuiNotificationContentContext} from '../../notification-content-context';
import {NotificationAlert} from '../Notification-alert';
import {TuiNotificationAlertComponent} from '../notification-alert.component';
import {TuiNotificationAlertModule} from '../notification-alert.module';

const label = 'I need you clothes';
const content = 'Your boots';
const data = 'And your motorcycle';

@Component({
    selector: 'alert-mock',
    template: `
        <button
            automation-id="tui-notification-alert__submit"
            (click)="submit()"
        ></button>
        <button
            automation-id="tui-notification-alert__complete"
            (click)="close()"
        ></button>
    `,
})
class AlertConstructorMock {
    constructor(
        @Inject(POLYMORPHEUS_CONTEXT)
        private readonly context: TuiNotificationContentContext<string, string>,
    ) {}

    submit() {
        this.context.emitHook(data);
    }

    close() {
        this.context.closeHook();
    }
}

@NgModule({
    imports: [CommonModule],
    declarations: [AlertConstructorMock],
    entryComponents: [AlertConstructorMock],
})
export class AlertTestModule {}

describe('NotificationAlertComponent', () => {
    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let component: TuiNotificationAlertComponent<string, string>;
    let pageObject: PageObject<TestComponent>;

    const nextSpy = jasmine.createSpy('next');
    const errorSpy = jasmine.createSpy('error');
    const completeSpy = jasmine.createSpy('complete');
    const observerMock = {
        next: nextSpy,
        error: errorSpy,
        complete: completeSpy,
    };
    const testContext = {
        get prefix() {
            return 'tui-notification-alert__';
        },
    };

    @Component({
        template: `
            <tui-notification-alert [item]="alert"></tui-notification-alert>
        `,
    })
    class TestComponent {
        @ViewChild(TuiNotificationAlertComponent, {static: true})
        component: TuiNotificationAlertComponent<string, string>;

        constructor(
            @Inject(TUI_NOTIFICATION_OPTIONS)
            public readonly options: NotificationTokenOptions,
        ) {
            this.setAlert(content, {label});
        }

        alert: NotificationAlert<string, string>;

        setAlert(
            content: PolymorpheusContent<TuiNotificationContentContext<string, string>>,
            params: TuiNotificationOptions | TuiNotificationOptionsWithData<string>,
        ) {
            this.alert = new NotificationAlert(observerMock, content, {
                ...this.options,
                ...params,
            });
        }
    }

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [TuiNotificationAlertModule, AlertTestModule],
            declarations: [TestComponent],
        });

        nextSpy.calls.reset();
        errorSpy.calls.reset();
        completeSpy.calls.reset();

        fixture = TestBed.createComponent(TestComponent);
        pageObject = new PageObject(fixture);
        testComponent = fixture.componentInstance;
        component = testComponent.component;
    });

    describe('Alert class', () => {
        beforeEach(() => {
            fixture.detectChanges();
        });

        it('Default status', () => {
            expect(component.item!.status).toBe('info');
        });

        it('Default autoclose', () => {
            expect(component.item!.autoClose).toBe(true);
        });
    });

    describe('Display', () => {
        beforeEach(() => {
            testComponent.setAlert(content, {label});
            fixture.detectChanges();
        });

        it('Shows the title', () => {
            expect(
                pageObject
                    .getByAutomationId(`${testContext.prefix}heading`)!
                    .nativeElement.textContent.trim(),
            ).toBe(label);
        });

        it('Shows text', () => {
            expect(
                pageObject
                    .getByAutomationId(`${testContext.prefix}content`)!
                    .nativeElement.textContent.trim(),
            ).toBe(content);
        });
    });

    it('display | Use label from TUI_NOTIFICATION_OPTIONS', () => {
        TestBed.resetTestingModule();
        TestBed.configureTestingModule({
            imports: [TuiNotificationAlertModule, AlertTestModule],
            declarations: [TestComponent],
            providers: [
                {
                    provide: TUI_NOTIFICATION_OPTIONS,
                    useValue: {
                        ...TUI_NOTIFICATION_DEFAULT_OPTIONS,
                        label,
                    },
                },
            ],
        });
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        pageObject = new PageObject(fixture);

        testComponent.setAlert(new PolymorpheusComponent(AlertConstructorMock), {data});
        fixture.detectChanges();

        expect(
            pageObject
                .getByAutomationId(`${testContext.prefix}heading`)!
                .nativeElement.textContent.trim(),
        ).toBe(label);
    });

    it('close | Close the Alert and notify the observer', () => {
        fixture.detectChanges();
        component.closeNotification();

        expect(nextSpy).not.toHaveBeenCalled();
        expect(completeSpy).toHaveBeenCalled();
    });

    it('close | Close the Alert after custom TUI_NOTIFICATION_OPTIONS autoClose timeout', fakeAsync(() => {
        const customTimeoutMs = 100;

        TestBed.resetTestingModule();
        TestBed.configureTestingModule({
            imports: [TuiNotificationAlertModule, AlertTestModule],
            declarations: [TestComponent],
            providers: [
                {
                    provide: TUI_NOTIFICATION_OPTIONS,
                    useValue: {
                        ...TUI_NOTIFICATION_DEFAULT_OPTIONS,
                        autoClose: customTimeoutMs,
                    },
                },
            ],
        });
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;

        testComponent.setAlert(new PolymorpheusComponent(AlertConstructorMock), {
            label,
            data,
        });
        fixture.detectChanges();

        expect(completeSpy).not.toHaveBeenCalled();
        tick(customTimeoutMs / 2);
        expect(completeSpy).not.toHaveBeenCalled();
        tick(customTimeoutMs / 2);
        expect(completeSpy).toHaveBeenCalled();
    }));

    it('close | Use autoClose timeout from NotificationAlert params', fakeAsync(() => {
        const customOptionsTimeoutMs = 100;
        const customTimeoutMs = 300;

        TestBed.resetTestingModule();
        TestBed.configureTestingModule({
            imports: [TuiNotificationAlertModule, AlertTestModule],
            declarations: [TestComponent],
            providers: [
                {
                    provide: TUI_NOTIFICATION_OPTIONS,
                    useValue: {
                        ...TUI_NOTIFICATION_DEFAULT_OPTIONS,
                        autoClose: customOptionsTimeoutMs,
                    },
                },
            ],
        });
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;

        testComponent.setAlert(new PolymorpheusComponent(AlertConstructorMock), {
            label,
            data,
            autoClose: customTimeoutMs,
        });
        fixture.detectChanges();

        expect(completeSpy).not.toHaveBeenCalled();
        tick(customTimeoutMs / 2);
        expect(completeSpy).not.toHaveBeenCalled();
        tick(customTimeoutMs / 2);
        expect(completeSpy).toHaveBeenCalled();
    }));

    it('close | Close the Alert after custom autoClose timeout', fakeAsync(() => {
        const customTimeoutMs = 500;

        testComponent.setAlert(new PolymorpheusComponent(AlertConstructorMock), {
            label,
            data,
            autoClose: customTimeoutMs,
        });
        fixture.detectChanges();

        expect(completeSpy).not.toHaveBeenCalled();
        tick(customTimeoutMs / 2);
        expect(completeSpy).not.toHaveBeenCalled();
        tick(customTimeoutMs / 2);
        expect(completeSpy).toHaveBeenCalled();
    }));

    describe('processComponent | Alert with custom template', () => {
        beforeEach(() => {
            testComponent.setAlert(new PolymorpheusComponent(AlertConstructorMock), {
                label,
                data,
                autoClose: false,
            });
            fixture.detectChanges();
        });

        it('Alert with custom template can transmit data', () => {
            pageObject
                .getByAutomationId(`${testContext.prefix}submit`)!
                .nativeElement.click();

            expect(nextSpy).toHaveBeenCalledWith(data);
        });

        it('Alert with custom template can close', () => {
            pageObject
                .getByAutomationId(`${testContext.prefix}complete`)!
                .nativeElement.click();

            expect(completeSpy).toHaveBeenCalled();
        });
    });
});
