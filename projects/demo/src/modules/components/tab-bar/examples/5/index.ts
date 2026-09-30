import {NgForOf} from '@angular/common';
import {Component, inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiTabBar} from '@taiga-ui/addon-mobile';
import {TUI_PLATFORM} from '@taiga-ui/cdk';
import {TUI_LIQUID_GLASS, TuiAlertService} from '@taiga-ui/core';

interface Item {
    badge?: number;
    icon: string;
    text: string;
}

@Component({
    standalone: true,
    selector: 'tui-tab-bar-example-liquid',
    imports: [NgForOf, TuiTabBar],
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        {provide: TUI_LIQUID_GLASS, useValue: true},
        {provide: TUI_PLATFORM, useValue: 'ios'},
    ],
    host: {
        '[attr.data-platform]': '"ios"',
        '[class.tui-liquid-glass]': 'true',
    },
})
export default class Example {
    private readonly alerts = inject(TuiAlertService);

    protected activeItemIndex = 1;

    protected readonly items: Item[] = [
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

    protected onIndexChange(index: number): void {
        const item = this.items[index];

        this.activeItemIndex = index;

        if (item) {
            item.badge = 0;
            this.alerts.open(index, {label: item.text}).subscribe();
        }
    }
}
