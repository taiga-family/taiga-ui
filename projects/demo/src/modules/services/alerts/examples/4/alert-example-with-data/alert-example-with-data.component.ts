import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiNotificationContentContext} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: `tui-notifications-service-example-with-data`,
    templateUrl: `./alert-example-with-data.template.html`,
    styleUrls: [`./alert-example-with-data.style.less`],
    changeDetection,
})
export class AlertExampleWithDataComponent {
    value: number;

    constructor(
        @Inject(POLYMORPHEUS_CONTEXT)
        private readonly context: TuiNotificationContentContext<number, number>,
    ) {
        this.value = this.context.data;
    }

    increaseBalance(): void {
        this.value += 10;
    }

    submit(): void {
        this.context.emitAndCloseHook(this.value);
    }
}
