import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {DialogIosExampleComponent} from './dialog-example/dialog-example.component';

@Component({
    selector: 'tui-dialog-example-10',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export class TuiDialogExampleComponent10 {
    constructor(@Inject(TuiDialogService) readonly dialogs: TuiDialogService) {}

    showDialog(): void {
        this.dialogs
            .open(new PolymorpheusComponent(DialogIosExampleComponent), {
                appearance: 'ios-style',
            })
            .subscribe();
    }
}
