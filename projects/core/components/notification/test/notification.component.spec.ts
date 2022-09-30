import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
    TUI_NOTIFICATION_DEFAULT_OPTIONS,
    TUI_NOTIFICATION_OPTIONS,
} from '@taiga-ui/core/tokens';
import {configureTestSuite, TuiPageObject} from '@taiga-ui/testing';

import {TuiNotification} from '../../../enums/notification';
import {TuiSvgService} from '../../../services/svg.service';
import {STATUS_ICON, TuiNotificationComponent} from '../notification.component';
import {TuiNotificationModule} from '../notification.module';

describe(`Notification`, () => {
    @Component({
        template: `
            <tui-notification
                *ngIf="hasCloseButton; else noClose"
                [hasIcon]="hasIcon"
                [status]="status"
                (close)="onClose()"
            >
                Short simple informational message
            </tui-notification>
            <ng-template #noClose>
                <tui-notification
                    [hasIcon]="hasIcon"
                    [status]="status"
                >
                    Short simple informational message
                </tui-notification>
            </ng-template>
        `,
    })
    class TestComponent {
        @ViewChild(TuiNotificationComponent, {static: false})
        component!: TuiNotificationComponent;

        hasCloseButton = true;
        hasIcon = true;
        status: TuiNotification = TuiNotification.Info;

        onClose(): void {}
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: TuiPageObject<TestComponent>;

    function getIcon(): DebugElement {
        return pageObject.getByAutomationId(`tui-notification__icon`)!;
    }

    function getClose(): DebugElement {
        return pageObject.getByAutomationId(`tui-notification__close`)!;
    }

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, TuiNotificationModule],
            declarations: [TestComponent],
            providers: [TuiSvgService],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe(`icon`, () => {
        it(`present by default`, () => {
            expect(getIcon()).not.toBeNull();
        });

        it(`chosen correctly depending on the status`, () => {
            expect(testComponent.component.icon).toBe(STATUS_ICON[testComponent.status]);

            testComponent.status = TuiNotification.Success;
            fixture.detectChanges();
            expect(testComponent.component.icon).toBe(STATUS_ICON[testComponent.status]);

            testComponent.status = TuiNotification.Error;
            fixture.detectChanges();
            expect(testComponent.component.icon).toBe(STATUS_ICON[testComponent.status]);

            testComponent.status = TuiNotification.Warning;
            fixture.detectChanges();
            expect(testComponent.component.icon).toBe(STATUS_ICON[testComponent.status]);
        });

        it(`when hasIcon = false is absent`, () => {
            testComponent.hasIcon = false;
            fixture.detectChanges();

            expect(getIcon()).toBeNull();
        });
    });

    describe(`closing cross`, () => {
        it(`present when subscribing to close`, () => {
            expect(getClose()).not.toBeNull();
        });

        it(`without subscription to close is missing`, () => {
            testComponent.hasCloseButton = false;
            fixture.detectChanges();

            expect(getClose()).toBeNull();
        });
    });
});

describe(`Notification with TUI_NOTIFICATION_OPTIONS`, () => {
    @Component({
        template: `
            <tui-notification>Short simple informational message</tui-notification>
        `,
    })
    class TestComponent {
        @ViewChild(TuiNotificationComponent, {static: false})
        component!: TuiNotificationComponent;
    }

    const status = TuiNotification.Error;
    const hasIcon = false;

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;
    let pageObject: TuiPageObject<TestComponent>;

    function getIcon(): DebugElement {
        return pageObject.getByAutomationId(`tui-notification__icon`)!;
    }

    configureTestSuite(() => {
        TestBed.configureTestingModule({
            imports: [NoopAnimationsModule, TuiNotificationModule],
            declarations: [TestComponent],
            providers: [
                TuiSvgService,
                {
                    provide: TUI_NOTIFICATION_OPTIONS,
                    useValue: {
                        ...TUI_NOTIFICATION_DEFAULT_OPTIONS,
                        status,
                        hasIcon,
                    },
                },
            ],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new TuiPageObject(fixture);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    describe(`icon`, () => {
        it(`chosen correctly depending on the status`, () => {
            expect(testComponent.component.icon).toBe(STATUS_ICON[status]);
        });

        it(`when hasIcon = false is absent`, () => {
            expect(getIcon()).toBeNull();
        });
    });
});
