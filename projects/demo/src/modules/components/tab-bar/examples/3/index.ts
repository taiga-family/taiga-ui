import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTabBar} from '@taiga-ui/addon-mobile';

@Component({
    standalone: true,
    imports: [NgForOf, TuiTabBar],
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
