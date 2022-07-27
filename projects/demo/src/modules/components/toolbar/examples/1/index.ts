import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-toolbar-example-1`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiToolbarExample1 {
    open = false;

    model = `<p>Lorem ipsum</p><p><b>Lorem ipsum</b></p>`;

    onActiveZone(active: boolean): void {
        this.open = active;
    }
}
