import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiButton, TuiHeader, TuiLabel, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiAvatarStack, TuiShimmer, TuiSwitch} from '@taiga-ui/kit';
import {TuiCardLarge} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiAvatar,
        TuiAvatarStack,
        TuiButton,
        TuiCardLarge,
        TuiHeader,
        TuiLabel,
        TuiShimmer,
        TuiSwitch,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
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
