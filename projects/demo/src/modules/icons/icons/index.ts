import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiIcon, TuiIconPipe} from '@taiga-ui/core';

import {IconsGroup} from '../../components/icons-group/icons-group.component';
import {IconsGroupTemplate} from '../../components/icons-group/icons-group.directive';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiIcon, TuiIconPipe, IconsGroup, IconsGroupTemplate],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class Page {
    protected readonly assets = import('./assets.md?raw');
}
