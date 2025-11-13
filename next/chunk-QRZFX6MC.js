import"./chunk-42JZD6NG.js";var a=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton} from '@taiga-ui/core';
import {tuiDialog} from '@taiga-ui/legacy';

import {SearchDialogExample} from './search-example/search-dialog-example.component';

@Component({
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialog = tuiDialog(SearchDialogExample, {
        size: 'page',
        closable: true,
        dismissible: true,
    });

    protected showDialog(): void {
        this.dialog().subscribe();
    }
}
`;export{a as default};
