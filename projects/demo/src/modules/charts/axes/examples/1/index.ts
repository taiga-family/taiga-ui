import {Component} from '@angular/core';
import {TuiLineHandler, TuiLineType} from '@taiga-ui/addon-charts';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-axes-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiAxesExample1 {
    readonly axisXLabels = ['ЯНВ 2019', 'ФЕВ', 'МАР'];
    readonly axisYLabels = ['', '25%', '50%', '75%', '100%'];
    readonly axisYSecondaryLabels = ['80 тыс.', '100 тыс.', '120 тыс.'];
    readonly verticalLinesHandler: TuiLineHandler = (index, total) =>
        index === total - 1 ? TuiLineType.None : TuiLineType.Dashed;
}
