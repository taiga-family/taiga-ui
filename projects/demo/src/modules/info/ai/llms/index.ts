import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiList} from '@taiga-ui/layout';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiList],
    templateUrl: './index.html',
    styleUrls: ['../styles.less'],
    changeDetection,
})
export default class Page {}
