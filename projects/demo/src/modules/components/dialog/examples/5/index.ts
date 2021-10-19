import {Component, Inject} from '@angular/core';
import {TuiDialogContext, TuiDialogService, TuiDialogSize} from '@taiga-ui/core';
import {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-dialog-example-5',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiDialogExampleComponent5 {
    constructor(
        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    ) {}

    onClick(
        content: PolymorpheusContent<TuiDialogContext>,
        header: PolymorpheusContent,
        size: TuiDialogSize,
    ) {
        this.dialogService
            .open(content, {
                label: 'What a cool library set',
                header,
                size,
            })
            .subscribe();
    }
}
