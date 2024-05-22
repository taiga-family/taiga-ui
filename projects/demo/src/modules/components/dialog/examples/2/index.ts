import {Component, inject, INJECTOR} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonDirective, TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {DialogExampleComponent} from './dialog-example/dialog-example.component';

@Component({
    standalone: true,
    imports: [TuiButtonDirective],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    private readonly dialogs = inject(TuiDialogService);
    private readonly injector = inject(INJECTOR);

    private readonly dialog = this.dialogs.open<number>(
        new PolymorpheusComponent(DialogExampleComponent, this.injector),
        {
            data: 237,
            dismissible: true,
            label: 'Heading',
        },
    );

    protected showDialog(): void {
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
