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
    value: number | null = null;
    name = '';
    items = [10, 50, 100];

    constructor(
        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
        @Inject(POLYMORPHEUS_CONTEXT)
        private readonly context: TuiDialogContext<number, number>,
    ) {}

    get hasValue(): boolean {
        return this.value !== null;
    }

    get data(): number {
        return this.context.data;
    }

    submit() {
        if (this.value !== null) {
            this.context.completeWith(this.value);
        }
    }

    showDialog(content: TemplateRef<TuiDialogContext<void>>) {
        this.dialogService.open(content, {dismissible: true}).subscribe();
    }
}
