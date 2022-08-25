import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_SIDEBAR_CONTAINER} from '@taiga-ui/addon-mobile';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';

import {MySidebarComponent} from './sidebar/my-sidebar.component';

@Component({
    selector: `tui-sidebar-example-2`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
    providers: [
        {
            provide: TUI_SIDEBAR_CONTAINER,
            useFactory: () => new PolymorpheusComponent(MySidebarComponent),
        },
    ],
})
export class TuiSidebarExample2 {
    open = false;

    modeState = [`over`, `side`] as const;
    mode = new FormControl(this.modeState[0]);

    backdropState = [true, false];
    backdrop = new FormControl(this.backdropState[0]);

    readonly tinkoff = [
        `Taiga-UI`,
        `ng-event-plugins`,
        `ng-polymorpheus`,
        `ng-dompurify`,
    ];

    toggle(open: boolean): void {
        this.open = open;
    }
}
