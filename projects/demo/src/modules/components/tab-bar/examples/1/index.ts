import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiAlertService} from '@taiga-ui/core';

interface Item {
    text: string;
    icon: string;
    badge?: number;
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
            text: 'Favorites',
            icon: 'tuiIconHeartLarge',
            badge: 3,
        },
        {
            text: 'Calls',
            icon: 'tuiIconCallLarge',
            badge: 1234,
        },
        {
            text: 'Profile',
            icon: 'tuiIconFolderLarge',
        },
        {
            text: 'Settings and configuration',
            icon: 'tuiIconSettingsLarge',
            badge: 100,
        },
        {
            text: 'More',
            icon: 'tuiIconStructureLarge',
        },
    ];

    constructor(@Inject(TuiAlertService) private readonly alerts: TuiAlertService) {}

    onClick(item: Item): void {
        item.badge = 0;
        this.alerts.open(this.activeItemIndex, {label: item.text}).subscribe();
    }
}
