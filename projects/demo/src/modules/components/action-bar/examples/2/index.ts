import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButtonDirective} from '@taiga-ui/core';
import {TuiActionBarComponent, TuiActionBarDirective} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiButtonDirective, TuiActionBarComponent, TuiActionBarDirective],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class ExampleComponent {
    protected open = false;
}
