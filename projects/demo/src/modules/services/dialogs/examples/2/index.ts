import {Component, Inject, Injector} from '@angular/core';
import {TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';
import {DialogExampleWithDataComponent} from '../../dialog-example-with-data/dialog-example-with-data.component';

@Component({
    selector: 'tui-dialog-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiDialogExampleComponent2 {
    private readonly dialog = this.dialogService.open<number>(
        new PolymorpheusComponent(DialogExampleWithDataComponent, this.injector),
        {
            data: 237,
            dismissible: true,
            label: 'Заголовочек',
        },
    );

    constructor(
        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
        @Inject(Injector) private readonly injector: Injector,
    ) {}

    showDialog() {
        this.dialog.subscribe({
            next: data => {
                console.log('Dialog emitted data = ' + data);
            },
            complete: () => {
                console.log('Dialog closed');
            },
        });
    }
}
