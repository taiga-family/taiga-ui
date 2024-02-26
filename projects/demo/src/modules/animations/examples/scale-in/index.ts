import {Component, Input} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {tuiPure} from '@taiga-ui/cdk';
import {TuiDurationOptions, tuiScaleIn} from '@taiga-ui/core';

@Component({
    selector: 'tui-scale-in-example',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    animations: [tuiScaleIn],
})
export class TuiScaleInExample {
    @Input()
    public speed = 0;

    protected readonly todoTasks = [
        {title: 'Install Angular', completed: true},
        {title: 'Install Taiga UI', completed: false},
        {title: 'Look into "Getting Started"', completed: false},
    ];

    @tuiPure
    protected getAnimation(duration: number): TuiDurationOptions {
        return {value: '', params: {duration}};
    }
}
