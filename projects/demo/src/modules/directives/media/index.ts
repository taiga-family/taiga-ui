import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiMediaDirective} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    imports: [TuiDemo, TuiMediaDirective],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly volumeVariants: readonly number[] = [1, 0.5, 0.25, 0];

    protected playbackRate = 1;
    protected currentTime = 0;
    protected volume = this.volumeVariants[0];
    protected paused = true;
}
