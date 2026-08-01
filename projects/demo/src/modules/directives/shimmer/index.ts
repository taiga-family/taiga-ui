import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {DemoRoute} from '@demo/routes';
import {TuiDemo} from '@demo/utils';
import {TuiButton, TuiLink, TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar, TuiAvatarStack, TuiShimmer} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader} from '@taiga-ui/layout';

@Component({
    standalone: true,
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
        TuiSurface,
        TuiTitle,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class Page {
    protected readonly routes = DemoRoute;
    protected readonly examples = ['Basic', 'Disabled animations'];

    protected shimmer = true;
}
