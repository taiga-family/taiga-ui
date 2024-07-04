import {Component, inject, INJECTOR} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {DialogExample} from './dialog-example/dialog-example.component';

@Component({
    standalone: true,
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialogs = inject(TuiDialogService);
    private readonly injector = inject(INJECTOR);

    private readonly dialog = this.dialogs.open<number>(
        new PolymorpheusComponent(DialogExample, this.injector),
        {
            data: 237,
            dismissible: true,
            label: 'Heading',
        },
    );

    protected showDialog(): void {
        this.dialog.subscribe({
            next: (data) => {
                console.info(`Dialog emitted data = ${data}`);
            },
            complete: () => {
                console.info('Dialog closed');
            },
        });
    }
}
