import {Component, Input} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiPure} from '@taiga-ui/cdk';
import {tuiDropdownAnimation, TuiDurationOptions} from '@taiga-ui/core';

@Component({
    selector: 'tui-dropdown-example',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
    animations: [tuiDropdownAnimation],
})
export class TuiDropdownExample {
    @Input()
    speed = 0;

    isOpen = false;

    @tuiPure
    getAnimation(duration: number): TuiDurationOptions {
        return {value: '', params: {duration}};
    }
}
