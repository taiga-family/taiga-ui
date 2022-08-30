import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: `disable-animation`,
    templateUrl: `./disable-animation.template.html`,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisableAnimationComponent {
    readonly disableAnimationExample = import(`./examples/disable-all-animation.md?raw`);
}
