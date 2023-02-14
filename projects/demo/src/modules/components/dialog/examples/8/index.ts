import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDialogService} from '@taiga-ui/core';
import {TUI_PROMPT} from '@taiga-ui/kit';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'tui-dialog-example-8',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiDialogExampleComponent8 {
    readonly prompt = this.dialogService.open<boolean>(TUI_PROMPT, {
        label: 'Are you sure?',
        size: 's',
        closeable: false,
        dismissible: false,
        data: {
            content: 'Your data will be lost',
        },
    });

    constructor(
        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    ) {}

    onClick(content: PolymorpheusContent): void {
        this.dialogService
            .open(content, {closeable: this.prompt, dismissible: this.prompt})
            .subscribe();
    }
}
