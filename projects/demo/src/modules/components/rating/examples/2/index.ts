import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';

@Component({
    selector: 'tui-rating-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
})
export class TuiRatingExample2 {
    protected firstRate = 5;
    protected secondRate = 3;
    protected thirdRate = 4;
}
