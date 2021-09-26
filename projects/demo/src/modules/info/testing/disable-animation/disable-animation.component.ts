import {default as disableAnimationExample} from '!!raw-loader!./examples/disable-all-animation.txt';

import {Component} from '@angular/core';

@Component({
    selector: 'disable-animation',
    templateUrl: './disable-animation.template.html',
})
export class DisableAnimationComponent {
    readonly disableAnimationExample = disableAnimationExample;
}
