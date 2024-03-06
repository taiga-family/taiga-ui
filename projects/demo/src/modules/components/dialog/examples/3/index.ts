import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import type {TuiDialogContext} from '@taiga-ui/core';
import {TuiDialogService} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: 'tui-dialog-example-3',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiDialogExampleComponent3 {
    private readonly dialogs = inject(TuiDialogService);

    protected money = 1000;

    protected showDialog(content: PolymorpheusContent<TuiDialogContext>): void {
        this.dialogs.open(content).subscribe();
    }

    protected withdraw(): void {
        this.money -= 100;
    }
}
