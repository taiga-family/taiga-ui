import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe} from '@taiga-ui/addon-commerce';
import {TuiButton, TuiLoader} from '@taiga-ui/core';
import {TuiAvatar, TuiCarousel} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [AsyncPipe, TuiAmountPipe, TuiAvatar, TuiButton, TuiCarousel, TuiLoader],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
