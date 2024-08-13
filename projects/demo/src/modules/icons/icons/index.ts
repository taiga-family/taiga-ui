import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiIcon, TuiIconPipe} from '@taiga-ui/core';

import {IconsGroup} from '../../components/icons-group/icons-group.component';
import {IconsGroupTemplate} from '../../components/icons-group/icons-group.directive';
import {COLORED_ICONS, MONO_ICONS} from './icons.tokens';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiIcon, TuiIconPipe, IconsGroup, IconsGroupTemplate],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class Page {
    protected readonly assets = import('./assets.md?raw');

    protected readonly icons = {
        Mono: MONO_ICONS,
        Colored: COLORED_ICONS,
    } as const;
}
