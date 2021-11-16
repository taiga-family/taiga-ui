import {Component, Inject} from '@angular/core';
import {TUI_IS_CYPRESS} from '@taiga-ui/cdk';
import {of, timer} from 'rxjs';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-progress-bar-example-2',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiProgressBarExample2 {
    readonly fastValue$ = this.isCypress ? of(80) : timer(500, 100);
    readonly slowValue$ = this.isCypress ? of(4) : timer(500, 2000);
    readonly colors = [
        'var(--tui-support-01)',
        'var(--tui-support-21)',
        'lightskyblue',
        '#3682db',
        'var(--tui-support-22)',
    ];

    constructor(@Inject(TUI_IS_CYPRESS) private readonly isCypress: boolean) {}
}
