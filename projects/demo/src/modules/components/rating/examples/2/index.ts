import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: 'tui-rating-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export class TuiRatingExample2 {
    firstRate = 5;
    secondRate = 3;
    thirdRate = 4;
}
