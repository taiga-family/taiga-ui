import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiBarSet} from '@taiga-ui/addon-charts';
import {TuiFormatNumberPipe} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiBarSet, TuiFormatNumberPipe, AsyncPipe],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly value = [451, 302, 203, 124, 65];
    protected readonly sum = this.value.reduce((a, b) => a + b, 0);
}
