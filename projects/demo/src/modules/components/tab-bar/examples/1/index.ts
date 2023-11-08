import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService} from '@taiga-ui/core';

interface Item {
    badge?: number;
    icon: string;
    text: string;
}

@Component({
    selector: 'tui-tab-bar-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiTabBarExample1 {
    activeItemIndex = 1;

    readonly items = [
        {
            text: 'Favorites',
            icon: 'tuiIconHeartLarge',
            badge: 3,
        },
        {
            text: 'Calls',
            icon: 'tuiIconPhoneLarge',
            badge: 1234,
        },
        {
            text: 'Profile',
            icon: 'tuiIconUserLarge',
        },
        {
            text: 'Settings and configuration',
            icon: 'tuiIconSettingsLarge',
            badge: 100,
        },
        {
            text: 'More',
            icon: 'tuiIconMoreHorizontalLarge',
        },
    ];

    constructor(@Inject(TuiAlertService) private readonly alerts: TuiAlertService) {}

    onClick(item: Item): void {
        item.badge = 0;
        this.alerts.open(this.activeItemIndex, {label: item.text}).subscribe();
    }
}
