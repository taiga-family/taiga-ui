import {NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSegmented} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiSegmented, NgFor],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly buttons = ['Track active index', 'To color tabs', 'Differently'];
    protected active = 0;
}
