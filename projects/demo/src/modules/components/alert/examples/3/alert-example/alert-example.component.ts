import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiPopover} from '@taiga-ui/cdk';
import {type TuiAlertOptions, TuiButtonDirective, TuiModeModule} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

@Component({
    standalone: true,
    selector: 'tui-notifications-service-example',
    imports: [TuiButtonDirective, TuiModeModule],
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
