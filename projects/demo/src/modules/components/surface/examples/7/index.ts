import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAmountPipe, TuiThumbnailCard} from '@taiga-ui/addon-commerce';
import {
    TuiAppearance,
    TuiButton,
    TuiLabel,
    TuiLink,
    TuiScrollbar,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar, TuiBadge} from '@taiga-ui/kit';
import {TuiCardLarge, TuiSurface} from '@taiga-ui/layout';

@Component({
    imports: [
        TuiAmountPipe,
        TuiAppearance,
        TuiAvatar,
        TuiBadge,
        TuiButton,
        TuiCardLarge,
        TuiLabel,
        TuiLink,
        TuiScrollbar,
        TuiSurface,
        TuiThumbnailCard,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less', './surface.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly reviews = [
        {
            name: 'Alex Inkin',
            time: '2 days ago',
            body: 'It is an absolute blast!',
        },
        {
            name: 'Alex Inkin',
            time: '3 days ago',
            body: 'I am starting to kind of enjoy this library.',
        },
        {
            name: 'Alex Inkin',
            time: '4 days ago',
            body: 'This library seems interesting but I hesitate refactoring our entire codebase...',
        },
    ];
}
