import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-skeleton-example-2',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiSkeletonExample2 {
    protected skeleton = false;
}
