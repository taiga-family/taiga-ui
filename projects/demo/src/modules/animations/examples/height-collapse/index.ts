import {Component, Input} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiHeightCollapse} from '@taiga-ui/core';

@Component({
    selector: 'tui-height-collapse-example',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
    animations: [tuiHeightCollapse],
})
export class TuiHeightCollapseExample {
    @Input()
    speed = 0;

    isOpen = false;

    get animation() {
        return {
            value: '',
            params: {duration: this.speed},
        } as const;
    }
}
