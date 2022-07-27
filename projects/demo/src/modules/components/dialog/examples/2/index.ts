import {Component, Inject, Injector} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {DialogExampleComponent} from './dialog-example/dialog-example.component';

@Component({
    selector: `tui-dialog-example-2`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiDialogExampleComponent2 {
    private readonly dialog = this.dialogService.open<number>(
        new PolymorpheusComponent(DialogExampleComponent, this.injector),
        {
            data: 237,
            dismissible: true,
            label: `Heading`,
        },
    );

    constructor(
        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
        @Inject(Injector) private readonly injector: Injector,
    ) {}

    showDialog(): void {
        this.dialog.subscribe({
            next: data => {
                console.info(`Dialog emitted data = ${data}`);
            },
            complete: () => {
                console.info(`Dialog closed`);
            },
        });
    }
}
