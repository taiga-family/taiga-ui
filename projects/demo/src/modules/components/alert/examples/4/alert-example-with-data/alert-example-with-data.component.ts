import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiPopover} from '@taiga-ui/cdk';
import {TuiAlertOptions} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'tui-notifications-service-example-with-data',
    templateUrl: './alert-example-with-data.template.html',
    styleUrls: ['./alert-example-with-data.style.less'],
    changeDetection,
})
export class AlertExampleWithDataComponent {
    private readonly context =
        inject<TuiPopover<TuiAlertOptions<number>, number>>(POLYMORPHEUS_CONTEXT);

    value: number;

    constructor() {
        this.value = this.context.data;
    }

    increaseBalance(): void {
        this.value += 10;
    }

    submit(): void {
        this.context.completeWith(this.value);
    }
}
