import {AsyncPipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiAppearance,
    TuiAutoColorPipe,
    TuiFallbackSrcPipe,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar, TuiAvatarStack} from '@taiga-ui/kit';
import {TuiCardMedium} from '@taiga-ui/layout';

@Component({
    imports: [
        AsyncPipe,
        NgForOf,
        TuiAppearance,
        TuiAutoColorPipe,
        TuiAvatar,
        TuiAvatarStack,
        TuiCardMedium,
        TuiFallbackSrcPipe,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly urls = [
        'https://avatars.githubusercontent.com/u/11832552',
        'https://avatars.githubusercontent.com/u/10106368',
        'https://avatars.githubusercontent.com/u/46284632',
    ];
}
