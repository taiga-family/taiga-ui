import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-hovered-change-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiHoveredChangeExample1 {
    hovered = false;

    onHovered(hovered: boolean): void {
        this.hovered = hovered;
    }
}
