import {NgForOf} from '@angular/common';
import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    standalone: true,
    imports: [NgForOf],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export default class Example {
    protected breakpoints = [
        'tui-mobile',
        'tui-mobile-min',
        'tui-mobile-interval',
        'tui-tablet',
        'tui-tablet-min',
        'tui-tablet-interval',
        'tui-desktop',
        'tui-desktop-min',
        'tui-desktop-interval',
        'tui-desktop-lg-min',
    ] as const;
}
