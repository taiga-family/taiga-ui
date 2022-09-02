import {Component, Input} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiPure} from '@taiga-ui/cdk';
import type {TuiDurationOptions} from '@taiga-ui/core';
import {tuiHeightCollapse} from '@taiga-ui/core';

@Component({
    selector: `tui-height-collapse-example`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
    animations: [tuiHeightCollapse],
})
export class TuiHeightCollapseExample {
    @Input()
    speed = 0;

    isOpen = false;

    @tuiPure
    getAnimation(duration: number): TuiDurationOptions {
        return {value: ``, params: {duration}};
    }
}
