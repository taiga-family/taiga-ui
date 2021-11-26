import {Component} from '@angular/core';

import {default as disableAnimationExample} from '!!raw-loader!./examples/disable-all-animation.txt';

@Component({
    selector: 'disable-animation',
    templateUrl: './disable-animation.template.html',
})
export class DisableAnimationComponent {
    readonly disableAnimationExample = disableAnimationExample;
}
