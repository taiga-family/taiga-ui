import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-cell-example-4',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiCellExample4 {
    readonly tooltipContent = `This example requires import of
        <strong>TuiBadgeAlertModule</strong>,
        <strong>TuiTooltipModule</strong>,
        <strong>TuiToggleModule</strong>
    `;
}
