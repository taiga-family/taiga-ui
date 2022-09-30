import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_ANDROID, TUI_IS_IOS} from '@taiga-ui/cdk';
import {TuiAlertService} from '@taiga-ui/core';

@Component({
    selector: `tui-tabs-example-2`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
    providers: [
        {
            provide: TUI_IS_IOS,
            useValue: true,
        },
        {
            provide: TUI_IS_ANDROID,
            useValue: false,
        },
    ],
})
export class TuiTabsExample2 {
    readonly items = [
        {
            text: `Maps`,
            icon: `tuiIconCard`,
        },
        {
            text: `Calls`,
            icon: `tuiIconCall`,
        },
        {
            text: `Settings`,
            icon: `tuiIconSettings`,
        },
    ];

    activeItemIndex = 0;

    constructor(@Inject(TuiAlertService) private readonly alerts: TuiAlertService) {}

    onClick(item: string): void {
        this.alerts.open(item).subscribe();
    }
}
