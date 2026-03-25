import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiButtonX, TuiIcon, TuiLoader, TuiTitle} from '@taiga-ui/core';
import {TuiFile} from '@taiga-ui/experimental';
import {TuiProgress} from '@taiga-ui/kit';

@Component({
    imports: [TuiButton, TuiButtonX, TuiFile, TuiIcon, TuiLoader, TuiProgress, TuiTitle],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly content = [
        'icon',
        'button',
        'progress',
        'loader',
        'image',
        'error',
    ];
}
