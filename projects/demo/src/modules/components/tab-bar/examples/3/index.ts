import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTabBar} from '@taiga-ui/addon-mobile';

@Component({
    standalone: true,
    imports: [TuiTabBar, NgForOf],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        {
            text: 'Home',
            icon: 'tuiIconHome',
        },
        {
            text: 'Photos',
            icon: 'tuiIconImage',
        },
        {
            text: 'Navigation',
            icon: 'tuiIconMapPin',
        },
    ];
}
