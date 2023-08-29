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
    changeDetection,
    encapsulation,
})
export class TuiTabBarExample1 {
    activeItemIndex = 1;

    readonly items = [
        {
            badge: 3,
            icon: 'tuiIconHeartLarge',
            text: 'Favorites',
        },
        {
            badge: 1234,
            icon: 'tuiIconPhoneLarge',
            text: 'Calls',
        },
        {
            icon: 'tuiIconUserLarge',
            text: 'Profile',
        },
        {
            badge: 100,
            icon: 'tuiIconSettingsLarge',
            text: 'Settings and configuration',
        },
        {
            icon: 'tuiIconMoreHorizontalLarge',
            text: 'More',
        },
    ];

    constructor(@Inject(TuiAlertService) private readonly alerts: TuiAlertService) {}

    onClick(item: Item): void {
        item.badge = 0;
        this.alerts.open(this.activeItemIndex, {label: item.text}).subscribe();
    }
}
