import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiFallbackSrcPipe} from '@taiga-ui/core';
import {TuiAvatar, TuiBadgedContent, TuiBadgeNotification} from '@taiga-ui/kit';
import {TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        AsyncPipe,
        TuiAvatar,
        TuiBadgedContent,
        TuiBadgeNotification,
        TuiDemo,
        TuiFallbackSrcPipe,
        TuiHeader,
    ],
    templateUrl: './index.html',
    changeDetection,
})
export default class Example {
    protected radiusVariants = ['0.75rem', '50%'];
    protected radius = this.radiusVariants[0]!;

    protected readonly examples = [
        'Basic',
        'Rounded content',
        'With different components',
        'With image',
    ];
}
