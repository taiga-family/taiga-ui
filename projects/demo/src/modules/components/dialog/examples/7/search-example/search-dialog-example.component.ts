import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDialogContext} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'search-dialog-example',
    templateUrl: './search-dialog-example.template.html',
    styleUrls: ['./search-dialog-example.component.less'],
    changeDetection,
})
export class SearchDialogExampleComponent {
    constructor(
        @Inject(POLYMORPHEUS_CONTEXT) private readonly context: TuiDialogContext<boolean>,
    ) {}

    close(): void {
        this.context.completeWith(false);
    }
}
