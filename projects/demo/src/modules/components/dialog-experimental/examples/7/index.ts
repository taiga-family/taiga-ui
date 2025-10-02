import {Component, ViewEncapsulation} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiHeader, TuiTitle} from '@taiga-ui/core';
import {TuiDialog} from '@taiga-ui/experimental';

@Component({
    imports: [TuiButton, TuiDialog, TuiHeader, TuiTitle],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection,
})
export default class Example {
    protected augmented = false;
    protected custom = false;
}
