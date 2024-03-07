import {CommonModule} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiPopover} from '@taiga-ui/cdk';
import type {TuiAlertOptions} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT, PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

@Component({
    standalone: true,
    selector: 'tui-notifications-service-example-with-custom-label',
    imports: [CommonModule, PolymorpheusModule],
    templateUrl: './alert-example-with-custom-label.template.html',
    changeDetection,
})
export class AlertExampleWithCustomLabelComponent {
    protected readonly context =
        inject<TuiPopover<TuiAlertOptions<unknown>, boolean>>(POLYMORPHEUS_CONTEXT);
}
