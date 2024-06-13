import type {DoCheck} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {
    TUI_ANIMATIONS_SPEED,
    tuiFadeIn,
    tuiParentAnimation,
    tuiSlideInTop,
    tuiToAnimationOptions,
} from '@taiga-ui/core';
import {type PolymorpheusContent, PolymorpheusModule} from '@tinkoff/ng-polymorpheus';

import {TuiActionBarDirective} from './action-bar.directive';

@Component({
    standalone: true,
    selector: 'tui-actions-bars',
    imports: [PolymorpheusModule],
    template: `
        <ng-container *polymorpheusOutlet="content" />
    `,
    styles: [
        `
            :host {
                position: fixed;
                left: 0;
                bottom: 0;
                width: 100%;
                display: flex;
                justify-content: center;
            }
        `,
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiParentAnimation, tuiSlideInTop, tuiFadeIn],
    host: {
        '[@tuiFadeIn]': 'animation',
        '[@tuiSlideInTop]': 'animation',
    },
})
export class TuiActionsBarsComponent implements DoCheck {
    private readonly directive = inject(TuiActionBarDirective);
    protected readonly animation = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));

    public ngDoCheck(): void {
        this.directive.check();
    }

    protected get content(): PolymorpheusContent {
        return this.directive.content;
    }
}
