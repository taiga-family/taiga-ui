import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, tuiDialog} from '@taiga-ui/core';

import {DialogExample} from './dialog-example/dialog-example.component';

@Component({
    standalone: true,
    imports: [TuiButton],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    private readonly dialog = tuiDialog(DialogExample, {
        dismissible: true,
        label: 'Heading',
    });

    protected showDialog(): void {
        this.dialog(237).subscribe({
            next: (data) => {
                console.info(`Dialog emitted data = ${data}`);
            },
            complete: () => {
                console.info('Dialog closed');
            },
        });
    }
}
