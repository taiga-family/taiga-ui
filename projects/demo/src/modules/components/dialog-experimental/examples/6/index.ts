import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton} from '@taiga-ui/core';
import {TuiDialog} from '@taiga-ui/experimental';

@Component({
    standalone: true,
    imports: [TuiButton, TuiDialog],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export default class Example {
    protected augmented = false;
    protected custom = false;
}
