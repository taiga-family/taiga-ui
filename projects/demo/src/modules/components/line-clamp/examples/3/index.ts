import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WINDOW} from '@ng-web-apis/common';

@Component({
    selector: `tui-line-clamp-example-3`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiLineClampExample3 {
    constructor(@Inject(WINDOW) private readonly windowRef: Window) {}

    getDynamicLineHeight(element: HTMLDivElement): number {
        return parseInt(this.windowRef.getComputedStyle(element).lineHeight, 10);
    }

    getDynamicLineLimit(element: HTMLDivElement): number {
        return Math.floor(element.offsetHeight / 24);
    }
}
