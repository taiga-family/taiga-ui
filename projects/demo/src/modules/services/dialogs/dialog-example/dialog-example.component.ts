import {Component, Inject, TemplateRef} from '@angular/core';
import {TuiDialogContext, TuiDialogService} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import {changeDetection} from '../../../../change-detection-strategy';

@Component({
    selector: 'dialog-example',
    templateUrl: './dialog-example.template.html',
    styleUrls: ['./dialog-example.style.less'],
    changeDetection,
})
export class DialogExampleComponent {
    constructor(
        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
        @Inject(POLYMORPHEUS_CONTEXT)
        private readonly context: TuiDialogContext<boolean>,
    ) {}

    ok() {
        this.context.completeWith(true);
    }

    cancel() {
        this.context.completeWith(false);
    }

    showDialog(content: TemplateRef<TuiDialogContext<void>>) {
        this.dialogService.open(content, {dismissible: true}).subscribe();
    }
}
