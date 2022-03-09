import {Component, Inject, TemplateRef, ViewChild} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiNotificationContentContext,
    TuiNotificationsService,
    TuiSideDirection,
} from '@taiga-ui/core';

@Component({
    selector: 'tui-notifications-example-6',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiNotificationsExampleComponent6 {
    @ViewChild('notification')
    private readonly template!: TemplateRef<TuiNotificationContentContext>;

    private id = 0;

    readonly topRight = 'top-right' as const;
    readonly topLeft = 'top-left' as const;
    readonly bottomRight = 'bottom-right' as const;
    readonly bottomLeft = 'bottom-left' as const;

    constructor(
        @Inject(TuiNotificationsService)
        private readonly notificationsService: TuiNotificationsService,
    ) {}

    show(direction: TuiSideDirection) {
        this.id++;

        this.notificationsService
            .show(this.template, {direction, autoClose: false, data: this.id})
            .subscribe();
    }
}
