import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, tuiDialog} from '@taiga-ui/core';

import {SearchDialogExample} from './search-example/search-dialog-example.component';

@Component({
    standalone: true,
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialog = tuiDialog(SearchDialogExample, {
        size: 'page',
        closeable: true,
        dismissible: true,
    });

    protected showDialog(): void {
        this.dialog().subscribe();
    }
}
