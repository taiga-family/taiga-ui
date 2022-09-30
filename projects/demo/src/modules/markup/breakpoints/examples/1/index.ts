import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `example-css-breakpoints-1`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class ExampleBreakpointsComponent1 {
    breakpoints = [
        `tui-mobile`,
        `tui-mobile-min`,
        `tui-mobile-interval`,
        `tui-tablet`,
        `tui-tablet-min`,
        `tui-tablet-interval`,
        `tui-desktop`,
        `tui-desktop-min`,
        `tui-desktop-interval`,
        `tui-desktop-lg-min`,
    ] as const;
}
