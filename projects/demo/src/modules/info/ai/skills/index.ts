import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiSurface, TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader, TuiList} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiAvatar, TuiCardLarge, TuiDemo, TuiHeader, TuiList, TuiSurface, TuiTitle],
    templateUrl: './index.html',
    styleUrls: ['../styles.less'],
    changeDetection,
})
export default class Page {
    protected readonly skill = import('./snippets/skill.md?raw');
    protected readonly all = import('./snippets/all.md?raw');
}
