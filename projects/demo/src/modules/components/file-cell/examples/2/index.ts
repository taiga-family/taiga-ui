import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTitle} from '@taiga-ui/core';
import {TuiButtonClose, TuiFileCell, TuiProgress} from '@taiga-ui/kit';

@Component({
    imports: [TuiButtonClose, TuiFileCell, TuiProgress, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly sizes = ['l', 'm'] as const;
}
