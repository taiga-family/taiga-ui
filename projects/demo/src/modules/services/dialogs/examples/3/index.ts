import {Component, Inject} from '@angular/core';
import {TuiDialogContext, TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusTemplate} from '@tinkoff/ng-polymorpheus';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-dialog-example-3',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiDialogExampleComponent3 {
    money = 1000;

    constructor(
        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    ) {}

    showDialog(content: PolymorpheusTemplate<TuiDialogContext>) {
        this.dialogService.open(content).subscribe();
    }

    withdraw() {
        this.money -= 100;
    }
}
