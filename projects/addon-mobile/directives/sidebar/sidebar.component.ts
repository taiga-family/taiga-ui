import type {AnimationOptions} from '@angular/animations';
import type {DoCheck} from '@angular/core';
import {ChangeDetectionStrategy, Component, HostBinding, inject} from '@angular/core';
import type {TuiHorizontalDirection} from '@taiga-ui/core';
import {TUI_ANIMATIONS_SPEED, tuiSlideIn, tuiToAnimationOptions} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TuiSidebarDirective} from './sidebar.directive';

@Component({
    selector: 'aside[tuiSidebar]',
    templateUrl: './sidebar.template.html',
    styleUrls: ['./sidebar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideIn],
})
export class TuiSidebarComponent implements DoCheck {
    private readonly directive = inject(TuiSidebarDirective);
    private readonly options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    private readonly left = {...this.options, value: 'left'};
    private readonly right = {...this.options, value: 'right'};

    public ngDoCheck(): void {
        this.directive.check();
    }

    @HostBinding('@tuiSlideIn')
    protected get animation(): AnimationOptions {
        return this.direction === 'left' ? this.left : this.right;
    }

    @HostBinding('class')
    protected get directionHostClass(): string {
        return `t-${this.directive.direction}`;
    }

    protected get direction(): TuiHorizontalDirection {
        return this.directive.direction;
    }

    protected get content(): PolymorpheusContent {
        return this.directive.content;
    }

    protected get autoWidth(): boolean {
        return this.directive.autoWidth;
    }
}
