import"./chunk-HU6DUUP4.js";var o=`import {Component} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {TuiDemo} from '@demo/utils';
import {TuiMedia} from '@taiga-ui/cdk';

@Component({
    imports: [TuiDemo, TuiMedia],
    templateUrl: './index.html',
    changeDetection,
})
export default class Page {
    protected readonly volumeVariants: readonly number[] = [1, 0.5, 0.25, 0];

    protected playbackRate = 1;
    protected currentTime = 0;
    protected volume = this.volumeVariants[0]!;
    protected paused = true;
}
`;export{o as default};
