import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: `tui-lazy-loading-example-1`,
    templateUrl: `./index.html`,
    changeDetection,
    encapsulation,
})
export class TuiLazyLoadingExample1 {
    readonly array = Array.from(
        {length: 100},
        (_, i) => `https://picsum.photos/${250 + i}/200`,
    );
}
