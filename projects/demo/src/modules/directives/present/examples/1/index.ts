import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';

@Component({
    selector: 'tui-present-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
})
export class TuiPresentExample1 {
    protected counterCSS = 0;

    protected counterIf = 0;

    protected hovered = false;

    protected onHovered(hovered: boolean): void {
        this.hovered = hovered;
    }

    protected onCSS(visible: boolean): void {
        this.counterCSS += visible ? 1 : -1;
    }

    protected onIf(visible: boolean): void {
        this.counterIf += visible ? 1 : -1;
    }
}
