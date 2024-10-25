import type {AnimationOptions} from '@angular/animations';
import type {DoCheck} from '@angular/core';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiActiveZone} from '@taiga-ui/cdk/directives/active-zone';
import {tuiSlideIn} from '@taiga-ui/core/animations';
import {TUI_ANIMATIONS_SPEED} from '@taiga-ui/core/tokens';
import type {TuiHorizontalDirection} from '@taiga-ui/core/types';
import {tuiToAnimationOptions} from '@taiga-ui/core/utils/miscellaneous';
import type {PolymorpheusContent} from '@taiga-ui/polymorpheus';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {TuiSidebarDirective} from './sidebar.directive';

/**
 * @deprecated use {@link TuiDrawer} instead
 */
@Component({
    standalone: true,
    selector: 'aside[tuiSidebar]',
    imports: [PolymorpheusOutlet, TuiActiveZone],
    templateUrl: './sidebar.template.html',
    styleUrls: ['./sidebar.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideIn],
    host: {
        '[class]': '"t-" + direction',
        '[@tuiSlideIn]': 'animation',
    },
})
export class TuiSidebarComponent implements DoCheck {
    private readonly directive = inject(TuiSidebarDirective);
    private readonly options = tuiToAnimationOptions(inject(TUI_ANIMATIONS_SPEED));
    private readonly left = {...this.options, value: 'left'};
    private readonly right = {...this.options, value: 'right'};

    public ngDoCheck(): void {
        this.directive.check();
    }

    protected get animation(): AnimationOptions {
        return this.direction === 'left' ? this.left : this.right;
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
