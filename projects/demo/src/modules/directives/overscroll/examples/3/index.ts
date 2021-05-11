import {Component} from '@angular/core';
import {TuiOverscrollMode} from '@taiga-ui/cdk';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-overscroll-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiOverscrollExample3 {
    get overscroll(): TuiOverscrollMode {
        return TuiOverscrollMode.All;
    }
}
