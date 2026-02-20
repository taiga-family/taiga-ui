import"./chunk-HU6DUUP4.js";var a=`import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiButton, TuiLink, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiAvatarStack, TuiShimmer} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    imports: [
        FormsModule,
        TuiAvatar,
        TuiAvatarStack,
        TuiButton,
        TuiCardLarge,
        TuiDemo,
        TuiHeader,
        TuiLink,
        TuiShimmer,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrl: './index.less',
    changeDetection,
})
export default class Page {
    protected readonly routes = DemoRoute;
    protected readonly examples = ['Basic', 'Disabled animations'];

    protected readonly avatars = [
        'https://avatars.githubusercontent.com/mdlufy',
        'https://avatars.githubusercontent.com/splincode',
        'https://avatars.githubusercontent.com/nsbarsukov',
        'https://avatars.githubusercontent.com/vladimirpotekhin',
        'https://avatars.githubusercontent.com/marsibarsi',
        'https://avatars.githubusercontent.com/waterplea',
    ];

    protected shimmer = true;
}
`;export{a as default};
