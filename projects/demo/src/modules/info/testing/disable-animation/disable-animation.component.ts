import {Component} from '@angular/core';

@Component({
    selector: 'disable-animation',
    templateUrl: './disable-animation.template.html',
})
export class DisableAnimationComponent {
    readonly disableAnimationExample = import('./examples/disable-all-animation.md?raw');
}
