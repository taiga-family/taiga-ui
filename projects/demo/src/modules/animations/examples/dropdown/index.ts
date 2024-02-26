import {Component, Input} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiPure} from '@taiga-ui/cdk';
import {tuiDropdownAnimation, TuiDurationOptions} from '@taiga-ui/core';

@Component({
    selector: 'tui-dropdown-example',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    animations: [tuiDropdownAnimation],
})
export class TuiDropdownExample {
    @Input()
    public speed = 0;

    protected isOpen = false;

    @tuiPure
    protected getAnimation(duration: number): TuiDurationOptions {
        return {value: '', params: {duration}};
    }
}
