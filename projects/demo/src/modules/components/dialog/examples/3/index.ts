import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDialogContext, TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

@Component({
    selector: `tui-dialog-example-3`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiDialogExampleComponent3 {
    money = 1000;

    constructor(
        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    ) {}

    showDialog(content: PolymorpheusContent<TuiDialogContext>): void {
        this.dialogService.open(content).subscribe();
    }

    withdraw(): void {
        this.money -= 100;
    }
}
