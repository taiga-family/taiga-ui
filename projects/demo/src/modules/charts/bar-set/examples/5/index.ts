import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-bar-set-example-5`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiBarSetExample5 {
    readonly value = [451, 302, 203, 124, 65];
    readonly sum = this.value.reduce((a, b) => a + b, 0);
}
