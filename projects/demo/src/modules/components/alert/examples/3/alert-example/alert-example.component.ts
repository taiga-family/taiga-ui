import {CommonModule} from '@angular/common';
import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import type {TuiPopover} from '@taiga-ui/cdk';
import {type TuiAlertOptions, TuiButtonModule, TuiModeModule} from '@taiga-ui/core';
import {TuiSelectModule} from '@taiga-ui/kit';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

@Component({
    standalone: true,
    selector: 'tui-notifications-service-example',
    imports: [
        CommonModule,
        FormsModule,
        TuiButtonModule,
        TuiModeModule,
        TuiSelectModule,
        TuiAmountPipe,
    ],
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
