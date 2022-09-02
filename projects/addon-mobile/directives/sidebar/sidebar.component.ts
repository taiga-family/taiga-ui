import type {AnimationOptions} from '@angular/animations';
import type {DoCheck} from '@angular/core';
import {ChangeDetectionStrategy, Component, HostBinding, Inject} from '@angular/core';
import type {TuiAnimationOptions, TuiHorizontalDirection} from '@taiga-ui/core';
import {TUI_ANIMATION_OPTIONS, tuiSlideIn} from '@taiga-ui/core';
import type {PolymorpheusContent} from '@tinkoff/ng-polymorpheus';

import {TuiSidebarDirective} from './sidebar.directive';

@Component({
    selector: `aside[tuiSidebar]`,
    templateUrl: `./sidebar.template.html`,
    styleUrls: [`./sidebar.style.less`],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideIn],
})
export class TuiSidebarComponent implements DoCheck {
    private readonly left = {
        value: `left`,
        ...this.options,
    } as const;

    private readonly right = {
        value: `right`,
        ...this.options,
    } as const;

    constructor(
        @Inject(TUI_ANIMATION_OPTIONS) private readonly options: AnimationOptions,
        @Inject(TuiSidebarDirective) private readonly directive: TuiSidebarDirective,
    ) {}

    @HostBinding(`@tuiSlideIn`)
    get animation(): TuiAnimationOptions {
        return this.direction === `left` ? this.left : this.right;
    }

    @HostBinding(`class`)
    get directionHostClass(): string {
        return `t-${this.directive.direction}`;
    }

    get direction(): TuiHorizontalDirection {
        return this.directive.direction;
    }

    get content(): PolymorpheusContent {
        return this.directive.content;
    }

    get autoWidth(): boolean {
        return this.directive.autoWidth;
    }

    ngDoCheck(): void {
        this.directive.check();
    }
}
