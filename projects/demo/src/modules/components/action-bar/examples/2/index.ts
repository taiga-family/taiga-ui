import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButtonDirective} from '@taiga-ui/core';
import {TuiActionBar} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiButtonDirective, TuiActionBar],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class ExampleComponent {
    protected open = signal(false);
}
