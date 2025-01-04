import {AsyncPipe} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiDocAPI, TuiDocAPIItem} from '@taiga-ui/addon-doc';
import {TuiFallbackSrcPipe} from '@taiga-ui/core';
import {TuiAvatar, TuiBadgedContent, TuiBadgeNotification} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [
        AsyncPipe,
        TuiAvatar,
        TuiBadgedContent,
        TuiBadgeNotification,
        TuiDemo,
        TuiDocAPI,
        TuiDocAPIItem,
        TuiFallbackSrcPipe,
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
    ];
}
