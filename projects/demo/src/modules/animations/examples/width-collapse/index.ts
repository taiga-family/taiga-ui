import {Component, Input} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiWidthCollapse} from '@taiga-ui/core';

@Component({
    selector: 'tui-width-collapse-example',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
    animations: [tuiWidthCollapse],
})
export class TuiWidthCollapseExample {
    @Input()
    speed = 0;

    isOpen = true;

    get animation() {
        return {
            value: '',
            params: {duration: this.speed},
        } as const;
    }
}
