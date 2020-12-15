import {Component, Inject} from '@angular/core';
import {TUI_IS_ANDROID, TUI_IS_IOS} from '@taiga-ui/cdk';
import {TuiNotificationsService} from '@taiga-ui/core';
import {TUI_MOBILE_AWARE} from '@taiga-ui/kit';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-tabs-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
    providers: [
        {
            provide: TUI_MOBILE_AWARE,
            useValue: true,
        },
        {
            provide: TUI_IS_IOS,
            useValue: false,
        },
        {
            provide: TUI_IS_ANDROID,
            useValue: true,
        },
    ],
})
export class TuiTabsExample1 {
    readonly items = [
        {
            text: 'Карты',
            icon: 'tuiIconCard',
        },
        {
            text: 'Вызовы',
            icon: 'tuiIconCall',
        },
        {
            text: 'Тариф',
            icon: 'tuiIconSettings',
        },
    ];

    activeItemIndex = 0;

    constructor(
        @Inject(TuiNotificationsService)
        private readonly notifications: TuiNotificationsService,
    ) {}

    onClick(item: string) {
        this.notifications.show(item).subscribe();
    }
}
