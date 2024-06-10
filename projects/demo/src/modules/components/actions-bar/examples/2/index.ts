import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButtonDirective} from '@taiga-ui/core';
import {TuiActionsBarComponent, TuiActionsBarDirective} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiButtonDirective, TuiActionsBarComponent, TuiActionsBarDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class ExampleComponent {
    protected open = false;
}
