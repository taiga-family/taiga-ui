import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiAutoFocusDirective} from '@taiga-ui/cdk';
import type {TuiDialogContext} from '@taiga-ui/core';
import {TuiTextfield} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@taiga-ui/polymorpheus';

@Component({
    standalone: true,
    imports: [TuiTextfield, TuiAutoFocusDirective],
    templateUrl: './search-dialog-example.template.html',
    styleUrls: ['./search-dialog-example.component.less'],
    changeDetection,
})
export class SearchDialogExampleComponent {
    private readonly context = inject<TuiDialogContext<boolean>>(POLYMORPHEUS_CONTEXT);

    protected close(): void {
        this.context.completeWith(false);
    }
}
