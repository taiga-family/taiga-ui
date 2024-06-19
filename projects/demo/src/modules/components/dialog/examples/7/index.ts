import {Component, inject, INJECTOR} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {SearchDialogExample} from './search-example/search-dialog-example.component';

@Component({
    standalone: true,
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialogs = inject(TuiDialogService);
    private readonly injector = inject(INJECTOR);

    protected showDialog(): void {
        this.dialogs
            .open(new PolymorpheusComponent(SearchDialogExample, this.injector), {
                size: 'page',
                closeable: true,
                dismissible: true,
            })
            .subscribe();
    }
}
