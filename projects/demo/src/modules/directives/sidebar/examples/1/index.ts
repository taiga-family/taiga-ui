import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-sidebar-example-1`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiSidebarExample1 {
    open = false;

    readonly webApis = [`Common`, `Audio`, `Canvas`, `Geolocation`, `MIDI`, `Workers`];

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
