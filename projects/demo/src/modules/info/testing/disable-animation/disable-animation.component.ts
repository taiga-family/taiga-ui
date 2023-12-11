import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
    selector: 'disable-animation',
    templateUrl: './disable-animation.template.html',
    styleUrls: ['./disable-animation.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DisableAnimationComponent {
    readonly cypress = import('./examples/cypress.md?raw');
    readonly playwright = import('./examples/playwright.md?raw');
}
