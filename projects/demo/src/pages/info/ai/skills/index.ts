import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiTitle} from '@taiga-ui/core';
import {TuiAvatar} from '@taiga-ui/kit';
import {TuiCardLarge, TuiHeader, TuiList} from '@taiga-ui/layout';

@Component({
    imports: [TuiAvatar, TuiCardLarge, TuiDemo, TuiHeader, TuiList, TuiTitle],
    templateUrl: './index.html',
    styleUrl: '../styles.less',
    changeDetection,
})
export default class Page {
    protected readonly skill = import('./snippets/skill.md');
    protected readonly all = import('./snippets/all.md');
}
