import {AsyncPipe, NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {
    TuiAutoColorPipe,
    TuiFallbackSrcPipe,
    TuiSurfaceDirective,
    TuiTitleDirective,
} from '@taiga-ui/core';
import {TuiAvatarComponent, TuiAvatarStackComponent} from '@taiga-ui/kit';
import {TuiCardMediumDirective} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiAvatarStackComponent,
        TuiAvatarComponent,
        TuiFallbackSrcPipe,
        AsyncPipe,
        TuiAutoColorPipe,
        NgForOf,
        TuiSurfaceDirective,
        TuiCardMediumDirective,
        TuiTitleDirective,
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
