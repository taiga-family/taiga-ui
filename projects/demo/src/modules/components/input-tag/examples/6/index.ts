import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-input-tag-example-6`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
})
export class TuiInputTagExample6 {
    value = [`not`, `unique`, `tags, with`, `custom`, `separator`, `separator`];
    customSeparator = `;`;
}
