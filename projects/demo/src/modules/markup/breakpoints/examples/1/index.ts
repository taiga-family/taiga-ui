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
