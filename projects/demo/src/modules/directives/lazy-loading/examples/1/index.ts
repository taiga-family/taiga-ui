import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-lazy-loading-example-1',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiLazyLoadingExample1 {
    readonly array = Array.from(
        {length: 100},
        (_, i) => 'https://picsum.photos/' + (250 + i) + '/200',
    );
}
