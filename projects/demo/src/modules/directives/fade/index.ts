import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiFade} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiFade],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export default class Page {
    protected lineHeight = '100%';
    protected size = '1.5em';
    protected offset = '0em';
}
