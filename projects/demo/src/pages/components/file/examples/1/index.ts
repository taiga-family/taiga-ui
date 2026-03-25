import {UpperCasePipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiButton, TuiButtonX, TuiIcon, TuiTitle} from '@taiga-ui/core';
import {TuiFile} from '@taiga-ui/experimental';
import {TuiProgressCircle, TuiProgressLabel} from '@taiga-ui/kit';

@Component({
    imports: [TuiButtonX, TuiFile, TuiIcon, TuiTitle, UpperCasePipe, TuiButton, TuiProgressCircle, TuiProgressLabel],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly sizes = ['l', 'm', 's'] as const;
}
