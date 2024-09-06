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
        TuiAppearance,
        TuiAvatar,
        TuiBreadcrumbs,
        TuiButton,
        TuiCardLarge,
        TuiHeader,
        TuiIcon,
        TuiItem,
        TuiLink,
        TuiNavigation,
        TuiRepeatTimes,
        TuiSurface,
        TuiTabs,
        TuiTitle,
    ],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {}
