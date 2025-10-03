import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFormatNumberPipe} from '@taiga-ui/core';

@Component({
    imports: [AsyncPipe, TuiFormatNumberPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
