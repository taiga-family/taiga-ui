import {Component, Inject, Injector} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {SearchDialogExampleComponent} from './search-example/search-dialog-example.component';

@Component({
    selector: `tui-dialog-example-7`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiDialogExampleComponent7 {
    constructor(
        @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
        @Inject(Injector) private readonly injector: Injector,
    ) {}

    showDialog(): void {
        this.dialogService
            .open(
                new PolymorpheusComponent(SearchDialogExampleComponent, this.injector),
                {
                    size: `page`,
                    closeable: true,
                    dismissible: true,
                },
            )
            .subscribe();
    }
}
