import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-expand-example-1`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiExpandExample1 {
    expanded = false;

    subpages = [`page1`, `page2`, `page3`];

    toggle(): void {
        this.expanded = !this.expanded;
    }
}
