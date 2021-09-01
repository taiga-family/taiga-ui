import {default as disableAnimationExample} from '!!raw-loader!./examples/disable-all-animation.txt';
import {Component} from '@angular/core';

@Component({
    selector: 'testing',
    templateUrl: './testing.template.html',
    styleUrls: ['./testing.style.less'],
})
export class TestingComponent {
    readonly disableAnimationExample = disableAnimationExample;
}
