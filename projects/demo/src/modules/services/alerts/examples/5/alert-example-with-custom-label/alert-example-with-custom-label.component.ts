import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiContextWithImplicit, tuiPure} from '@taiga-ui/cdk';
import {TuiNotification, TuiNotificationContentContext} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT, PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

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
        return this.context.$implicit;
    }

    constructor(
        @Inject(POLYMORPHEUS_CONTEXT)
        private readonly context: TuiNotificationContentContext<boolean>,
    ) {}
}
