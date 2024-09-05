import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTabBar} from '@taiga-ui/addon-mobile';
import {TuiButton} from '@taiga-ui/core';

@Component({
    standalone: true,
    imports: [TuiTabBar, NgForOf, TuiButton],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly items = [
        {
            text: 'Home',
            icon: '@tui.home',
        },
        {
            text: 'Photos',
            icon: '@tui.image',
        },
        {
            text: 'Navigation',
            icon: '@tui.map-pin',
        },
    ];
}
