import {NgFor} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiIcon} from '@taiga-ui/core';
import {TuiBadgeNotification, TuiSegmentedComponent} from '@taiga-ui/kit';

@Component({
    standalone: true,
    imports: [TuiSegmentedComponent, NgFor, TuiIcon, TuiBadgeNotification],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly sizes = ['s', 'm', 'l'] as const;
}
