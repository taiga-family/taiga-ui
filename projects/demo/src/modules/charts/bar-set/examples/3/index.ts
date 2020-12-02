import {Component} from '@angular/core';
import {TuiColorHandler} from '@taiga-ui/addon-charts';
import {TuiBaseColor} from '@taiga-ui/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-bar-set-example-3',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiBarSetExample3 {
    readonly value = [30, -15];

    readonly solidColor: TuiColorHandler = () => TuiBaseColor.Primary;
}
