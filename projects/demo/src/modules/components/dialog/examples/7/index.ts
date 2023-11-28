import {Component, Inject, Injector} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDialogService} from '@taiga-ui/core';

import {SearchDialogExampleComponent} from './search-example/search-dialog-example.component';

@Component({
    selector: 'tui-dialog-example-7',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiDialogExampleComponent7 {
    constructor(
        @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
        @Inject(Injector) readonly injector: Injector,
    ) {}

    showDialog(): void {
        this.dialogs
            .open(SearchDialogExampleComponent, {
                size: 'page',
                closeable: true,
                dismissible: true,
            })
            .subscribe();
    }
}
