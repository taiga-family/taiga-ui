import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: `example-css-breakpoints-1`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
})
export class ExampleCSSBreakpointsComponent1 {
    breakpoints = [
        `mobile-m`,
        `mobile-m-min`,
        `mobile-m-interval`,
        `tablet-lg`,
        `tablet-lg-min`,
        `tablet-lg-interval`,
        `desktop-s`,
        `desktop-s-min`,
        `desktop-s-interval`,
    ] as const;
}
