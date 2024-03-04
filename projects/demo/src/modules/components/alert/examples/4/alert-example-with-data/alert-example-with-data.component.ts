import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {type TuiPopover} from '@taiga-ui/cdk';
import {type TuiAlertOptions} from '@taiga-ui/core';
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

    protected value: number;

    constructor() {
        this.value = this.context.data;
    }

    protected increaseBalance(): void {
        this.value += 10;
    }

    protected submit(): void {
        this.context.completeWith(this.value);
    }
}
