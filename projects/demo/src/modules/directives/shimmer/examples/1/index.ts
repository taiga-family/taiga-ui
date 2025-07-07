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
    standalone: true,
    imports: [
        FormsModule,
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

    public avatars = [
        {src: 'https://avatars.githubusercontent.com/mdlufy'},
        {src: 'https://avatars.githubusercontent.com/splincode'},
        {src: 'https://avatars.githubusercontent.com/nsbarsukov'},
        {src: 'https://avatars.githubusercontent.com/vladimirpotekhin'},
        {src: 'https://avatars.githubusercontent.com/marsibarsi'},
        {src: 'https://avatars.githubusercontent.com/waterplea'},
    ];
}
