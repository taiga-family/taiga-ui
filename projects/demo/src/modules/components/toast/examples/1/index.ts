import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiPlatform} from '@taiga-ui/cdk';
import {TuiButton, TuiFallbackSrcPipe, TuiIcon, TuiLink, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge, TuiToast} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        TuiAvatar,
        TuiBadge,
        TuiButton,
        TuiFallbackSrcPipe,
        TuiIcon,
        TuiLink,
        TuiPlatform,
        TuiTitle,
        TuiToast,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {}
