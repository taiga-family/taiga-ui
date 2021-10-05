import {Component} from '@angular/core';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-present-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiPresentExample1 {
    counterCSS = 0;

    counterIf = 0;

    hovered = false;

    onHovered(hovered: boolean) {
        this.hovered = hovered;
    }

    onCSS(visible: boolean) {
        this.counterCSS += visible ? 1 : -1;
    }

    onIf(visible: boolean) {
        this.counterIf += visible ? 1 : -1;
    }
}
