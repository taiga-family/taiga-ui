import {Component, inject, Injector} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {DialogExampleComponent} from './dialog-example/dialog-example.component';

@Component({
    selector: 'tui-dialog-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiDialogExampleComponent2 {
    private readonly dialogs = inject(TuiDialogService);
    private readonly injector = inject(Injector);

    private readonly dialog = this.dialogs.open<number>(
        new PolymorpheusComponent(DialogExampleComponent, this.injector),
        {
            data: 237,
            dismissible: true,
            label: 'Heading',
        },
    );

    showDialog(): void {
        this.dialog.subscribe({
            next: data => {
                console.info(`Dialog emitted data = ${data}`);
            },
            complete: () => {
                console.info('Dialog closed');
            },
        });
    }
}
