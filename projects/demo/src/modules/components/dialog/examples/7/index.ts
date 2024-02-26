import {Component, inject, INJECTOR} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {SearchDialogExampleComponent} from './search-example/search-dialog-example.component';

@Component({
    selector: 'tui-dialog-example-7',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiDialogExampleComponent7 {
    private readonly dialogs = inject(TuiDialogService);
    private readonly injector = inject(INJECTOR);

    protected showDialog(): void {
        this.dialogs
            .open(
                new PolymorpheusComponent(SearchDialogExampleComponent, this.injector),
                {
                    size: 'page',
                    closeable: true,
                    dismissible: true,
                },
            )
            .subscribe();
    }
}
