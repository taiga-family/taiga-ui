import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-tab-bar-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiTabBarExample3 {
    readonly items = [
        {
            icon: 'tuiIconHomeLarge',
            text: 'Home',
        },
        {
            icon: 'tuiIconImageLarge',
            text: 'Photos',
        },
        {
            icon: 'tuiIconMapPinLarge',
            text: 'Navigation',
        },
    ];
}
