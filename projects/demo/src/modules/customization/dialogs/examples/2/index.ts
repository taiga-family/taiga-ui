import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton} from '@taiga-ui/core';

import {CustomDialogDirective} from './custom-dialog/custom-dialog.directive';

@Component({
    standalone: true,
    selector: 'tui-dialogs-example-2',
    imports: [CustomDialogDirective, TuiButton],
    templateUrl: './index.html',
    changeDetection,
})
export class TuiDialogsExample2 {
    protected open = false;
}
