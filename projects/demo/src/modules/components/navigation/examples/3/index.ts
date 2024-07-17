import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiItem, TuiRepeatTimes} from '@taiga-ui/cdk';
import {
    TuiAppearance,
    TuiButton,
    TuiIcon,
    TuiLink,
    TuiSurface,
    TuiTitle,
} from '@taiga-ui/core';
import {TuiAvatar, TuiBreadcrumbs, TuiTabs} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader, TuiNavigation} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [
        TuiNavigation,
        TuiIcon,
        TuiAvatar,
        TuiBreadcrumbs,
        TuiItem,
        TuiLink,
        TuiAppearance,
        TuiCardLarge,
        TuiHeader,
        TuiTitle,
        TuiButton,
        TuiTabs,
        TuiSurface,
        TuiRepeatTimes,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
