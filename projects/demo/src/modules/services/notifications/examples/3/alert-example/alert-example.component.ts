import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiNotificationContentContext} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'tui-notifications-service-example',
    templateUrl: './alert-example.template.html',
    changeDetection,
})
export class AlertExampleComponent {
    constructor(
        @Inject(POLYMORPHEUS_CONTEXT)
        private readonly context: TuiNotificationContentContext<boolean>,
    ) {}

    ok() {
        this.context.emitAndCloseHook(true);
    }

    cancel() {
        this.context.emitAndCloseHook(false);
    }
}
