import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiFallbackSrcPipe} from '@taiga-ui/core';
import {TuiAvatar, TuiAvatarLabeledComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [AsyncPipe, TuiFallbackSrcPipe, TuiAvatarLabeledComponent, TuiAvatar],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
