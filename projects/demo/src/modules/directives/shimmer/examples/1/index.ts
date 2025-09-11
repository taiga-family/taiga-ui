import {NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiAppearance, TuiButton, TuiLabel, TuiTitle} from '@taiga-ui/core';
import {
    TuiAvatar,
    TuiAvatarStack,
    TuiShimmer,
    TuiSkeleton,
    TuiSwitch,
} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        NgFor,
        TuiAppearance,
        TuiAvatar,
        TuiAvatarStack,
        TuiButton,
        TuiCardLarge,
        TuiDemo,
        TuiHeader,
        TuiLabel,
        TuiShimmer,
        TuiSkeleton,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class Example {
    protected loading = true;

    protected readonly avatars = [
        'https://avatars.githubusercontent.com/mdlufy',
        'https://avatars.githubusercontent.com/splincode',
        'https://avatars.githubusercontent.com/nsbarsukov',
        'https://avatars.githubusercontent.com/vladimirpotekhin',
        'https://avatars.githubusercontent.com/marsibarsi',
        'https://avatars.githubusercontent.com/waterplea',
    ];
}
