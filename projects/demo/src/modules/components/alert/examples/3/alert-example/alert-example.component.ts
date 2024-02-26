import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiPopover} from '@taiga-ui/cdk';
import {TuiAlertOptions} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'tui-notifications-service-example',
    templateUrl: './alert-example.template.html',
    changeDetection,
})
export class AlertExampleComponent {
    private readonly context =
        inject<TuiPopover<TuiAlertOptions<void>, boolean>>(POLYMORPHEUS_CONTEXT);

    protected ok(): void {
        this.context.completeWith(true);
    }

    protected cancel(): void {
        this.context.completeWith(false);
    }
}
