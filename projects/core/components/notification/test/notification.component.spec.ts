import {NgIf} from '@angular/common';
import type {DebugElement} from '@angular/core';
import {Component, ViewChild} from '@angular/core';
import type {ComponentFixture} from '@angular/core/testing';
import {TestBed} from '@angular/core/testing';
import type {TuiNotificationStatus} from '@taiga-ui/core';
import {
    TUI_NOTIFICATION_DEFAULT_OPTIONS,
    TUI_NOTIFICATION_OPTIONS,
    TuiNotification,
} from '@taiga-ui/core';
import {NG_EVENT_PLUGINS} from '@taiga-ui/event-plugins';
import {TuiPageObject} from '@taiga-ui/testing';

describe('Notification', () => {
    describe('Without options', () => {
        @Component({
            standalone: true,
            imports: [TuiNotification, NgIf],
            template: `
                <tui-notification
                    *ngIf="hasCloseButton; else noClose"
                    [status]="status"
                    (close)="onClose()"
                >
                    Short simple informational message
                </tui-notification>
                <ng-template #noClose>
                    <tui-notification [status]="status">
                        Short simple informational message
                    </tui-notification>
                </ng-template>
            `,
        })
        class Test {
            @ViewChild(TuiNotification, {static: false})
            public component!: TuiNotification;

            public hasCloseButton = true;
            public status: TuiNotificationStatus = 'info';

            public onClose(): void {}
        }

        let fixture: ComponentFixture<Test>;
        let testComponent: Test;
        let pageObject: TuiPageObject<Test>;

        function getIcon(): DebugElement {
            return pageObject.getByAutomationId('tui-notification__icon')!;
        }

        function getClose(): DebugElement {
            return pageObject.getByAutomationId('tui-notification__close')!;
        }

        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [Test],
                providers: [NG_EVENT_PLUGINS],
            });
            await TestBed.compileComponents();
            fixture = TestBed.createComponent(Test);
            pageObject = new TuiPageObject(fixture);
            testComponent = fixture.componentInstance;
            fixture.detectChanges();
        });

        describe('icon', () => {
            it('present by default', () => {
                expect(getIcon()).not.toBeNull();
            });
        });

        describe('closing cross', () => {
            it('present when subscribing to close', () => {
                expect(getClose()).not.toBeNull();
            });

            it('without subscription to close is missing', () => {
                testComponent.hasCloseButton = false;
                fixture.detectChanges();

                expect(getClose()).toBeNull();
            });
        });
    });

    describe('With options', () => {
        @Component({
            standalone: true,
            imports: [TuiNotification],
            template: `
                <tui-notification>Short simple informational message</tui-notification>
            `,
        })
        class Test {
            @ViewChild(TuiNotification, {static: false})
            public component!: TuiNotification;
        }

        const status = 'error';

        let fixture: ComponentFixture<Test>;
        let pageObject: TuiPageObject<Test>;

        function getIcon(): DebugElement {
            return pageObject.getByAutomationId('tui-notification__icon')!;
        }

        beforeEach(async () => {
            TestBed.configureTestingModule({
                imports: [Test],
                providers: [
                    {
                        provide: TUI_NOTIFICATION_OPTIONS,
                        useValue: {
                            ...TUI_NOTIFICATION_DEFAULT_OPTIONS,
                            status,
                            icon: null,
                        },
                    },
                ],
            });
            await TestBed.compileComponents();

            fixture = TestBed.createComponent(Test);
            pageObject = new TuiPageObject(fixture);
            fixture.detectChanges();
        });

        describe('icon', () => {
            it('when icon = null is absent', () => {
                expect(getIcon()).toBeNull();
            });
        });
    });
});
