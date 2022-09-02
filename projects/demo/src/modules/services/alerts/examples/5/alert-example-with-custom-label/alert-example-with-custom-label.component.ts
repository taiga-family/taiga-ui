import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiContextWithImplicit} from '@taiga-ui/cdk';
import {TuiDialog, tuiPure} from '@taiga-ui/cdk';
import type {TuiAlertOptions, TuiNotification} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: `tui-notifications-service-example-with-custom-label`,
    templateUrl: `./alert-example-with-custom-label.template.html`,
    changeDetection,
})
export class AlertExampleWithCustomLabelComponent {
    @tuiPure
    get label(): PolymorpheusContent<TuiContextWithImplicit<TuiNotification>> {
        return this.context.label;
    }

    @tuiPure
    get status(): TuiNotification {
        return this.context.status;
    }

    constructor(
        @Inject(POLYMORPHEUS_CONTEXT)
        private readonly context: TuiDialog<TuiAlertOptions<unknown>, boolean>,
    ) {}
}
