import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiProgress} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [NgForOf, TuiProgress],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly sizes = ['xxs', 'xs', 's', 'm', 'l', 'xl', 'xxl'] as const;
}
