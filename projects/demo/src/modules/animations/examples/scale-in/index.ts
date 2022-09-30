import {Component, Input} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiPure} from '@taiga-ui/cdk';
import {TuiDurationOptions, tuiScaleIn} from '@taiga-ui/core';

@Component({
    selector: `tui-scale-in-example`,
    templateUrl: `./index.html`,
    styleUrls: [`./index.less`],
    changeDetection,
    encapsulation,
    animations: [tuiScaleIn],
})
export class TuiScaleInExample {
    @Input()
    speed = 0;

    readonly todoTasks = [
        {title: `Install Angular`, completed: true},
        {title: `Install Taiga UI`, completed: false},
        {title: `Look into "Getting Started"`, completed: false},
    ];

    @tuiPure
    getAnimation(duration: number): TuiDurationOptions {
        return {value: ``, params: {duration}};
    }
}
