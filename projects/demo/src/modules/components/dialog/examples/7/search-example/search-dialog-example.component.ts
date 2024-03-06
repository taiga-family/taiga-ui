import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import type {TuiDialogContext} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'search-dialog-example',
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
