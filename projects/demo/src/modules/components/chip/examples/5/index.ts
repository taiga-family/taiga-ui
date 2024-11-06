import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAutoColorPipe} from '@taiga-ui/core';
import {TuiChip} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgForOf, TuiAutoColorPipe, TuiChip],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected chips = ['Free', 'Base', 'Pro', 'Enterprise'];
}
