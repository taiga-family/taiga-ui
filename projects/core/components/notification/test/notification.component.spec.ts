import {Component, DebugElement, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {TUI_NOTIFICATION_DEFAULT_OPTIONS, TUI_NOTIFICATION_OPTIONS} from '@taiga-ui/core';
import {configureTestSuite, TuiPageObject} from '@taiga-ui/testing';

import {TuiNotification} from '../../../enums/notification';
import {TuiSvgService} from '../../../services/svg.service';
import {TuiNotificationComponent} from '../notification.component';
import {TuiNotificationModule} from '../notification.module';

describe(`Notification`, () => {
    @Component({
        template: `
            <tui-notification
                *ngIf="hasCloseButton; else noClose"
                [status]="status"
                (close)="onClose()"
            >
                Short simple informational message
            </tui-notification>
            <ng-template #noClose>
                <tui-notification
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
        status: TuiNotification = TuiNotification.Info;

        onClose(): void {
        }
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

    let fixture: ComponentFixture<TestComponent>;
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
                        icon: null
                    },
                },
            ],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        pageObject = new TuiPageObject(fixture);
        fixture.detectChanges();
    });

    describe(`icon`, () => {
        it(`when icon = null is absent`, () => {
            expect(getIcon()).toBeNull();
        });
    });
});
