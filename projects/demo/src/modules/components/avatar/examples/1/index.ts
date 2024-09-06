import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFallbackSrcPipe, TuiIconPipe, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [AsyncPipe, TuiAvatar, TuiFallbackSrcPipe, TuiIconPipe, TuiTitle],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
