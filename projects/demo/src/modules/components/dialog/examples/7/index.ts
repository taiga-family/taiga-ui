import {Component, inject, INJECTOR} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButtonDirective, TuiDialogService} from '@taiga-ui/core';
import {PolymorpheusComponent} from '@taiga-ui/polymorpheus';

import {SearchDialogExampleComponent} from './search-example/search-dialog-example.component';

@Component({
    standalone: true,
    imports: [TuiButtonDirective],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
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
