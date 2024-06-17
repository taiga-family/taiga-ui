import {Component, signal} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton} from '@taiga-ui/core';
import {TuiActionBar} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiButton, TuiActionBar],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class Example {
    protected open = signal(false);
}
