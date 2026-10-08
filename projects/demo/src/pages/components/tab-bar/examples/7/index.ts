import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTabBar} from '@taiga-ui/addon-mobile';
import {TuiNotificationService} from '@taiga-ui/core';

interface Item {
    badge?: number;
    icon: string;
    text: string;
}

@Component({
    selector: 'tui-tab-bar-example-liquid-android',
    imports: [TuiTabBar],
    templateUrl: './index.html',
    styleUrl: './index.less',
    encapsulation,
    changeDetection,
    host: {
        '[attr.data-platform]': '"android"',
        // Not required if `provideTaiga({apis: {liquidGlass: true}})` is already set up
        '[class.tui-liquid-glass]': 'true',
    },
})
export default class Example {
    private readonly alerts = inject(TuiNotificationService);

    protected activeItemIndex = 1;

    protected readonly items = [
        {
            text: 'Favorites',
            icon: '@tui.heart',
            badge: 3,
        },
        {
            text: 'Calls',
            icon: '@tui.phone',
            badge: 1234,
        },
        {
            text: 'Profile',
            icon: '@tui.user',
        },
    ];

    protected onClick(item: Item): void {
        item.badge = 0;
        this.alerts.open(this.activeItemIndex, {label: item.text}).subscribe();
    }
}
