import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-carousel-example-1`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiCarouselExample1 {
    index = 2;

    readonly items = [
        `John Cleese`,
        `Eric Idle`,
        `Michael Palin`,
        `Graham Chapman`,
        `Terry Gilliam`,
        `Terry Jones`,
    ];
}
