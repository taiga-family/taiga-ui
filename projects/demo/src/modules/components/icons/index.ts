import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiIcon, TuiIconPipe, TuiLink, TuiNotification} from '@taiga-ui/core';

import {COLORED_ICONS, MONO_ICONS} from './icons.tokens';
import {IconsGroupComponent} from './icons-group/icons-group.component';
import {IconsGroup} from './icons-group/icons-group.directive';

@Component({
    standalone: true,
    imports: [
        TuiDemo,
        TuiIcon,
        TuiIconPipe,
        IconsGroupComponent,
        IconsGroup,
        TuiLink,
        TuiNotification,
    ],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class Page {
    protected readonly icons = {
        Mono: MONO_ICONS,
        Colored: COLORED_ICONS,
    } as const;
}
