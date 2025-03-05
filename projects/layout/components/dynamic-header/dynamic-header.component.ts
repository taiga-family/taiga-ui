import type {AnimationOptions} from '@angular/animations';
import {NgForOf, NgIf} from '@angular/common';
import {ChangeDetectionStrategy, Component, computed, inject} from '@angular/core';
import {tuiFadeIn} from '@taiga-ui/core/animations';
import {TUI_ANIMATIONS_SPEED} from '@taiga-ui/core/tokens';
import {tuiGetDuration, tuiToAnimationOptions} from '@taiga-ui/core/utils/miscellaneous';
import {PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import {tuiSlideInTopHeader} from './dynamic-header.animations';
import {TuiDynamicHeaderContainerDirective} from './dynamic-header-container.directive';

@Component({
    standalone: true,
    selector: '[tuiDynamicHeader]',
    imports: [NgForOf, NgIf, PolymorpheusOutlet],
    template: `
        <div
            *ngIf="!container.hiddenHeaders().length; else dynamic"
            [@tuiFadeIn]="fadeOptions"
            [@tuiSlideInTopHeader]="slideOptions()"
        >
            <ng-content />
        </div>
        <ng-template #dynamic>
            <ng-container
                *ngFor="let header of container.hiddenHeaders(); let last = last"
            >
                <div
                    *ngIf="last"
                    [@tuiFadeIn]="fadeOptions"
                    [@tuiSlideInTopHeader]="slideOptions()"
                >
                    <div *polymorpheusOutlet="header as text">{{ text }}</div>
                </div>
            </ng-container>
        </ng-template>
    `,
    styleUrls: ['./dynamic-header.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [tuiSlideInTopHeader, tuiFadeIn],
})
export class TuiDynamicHeaderComponent {
    protected speed = inject(TUI_ANIMATIONS_SPEED);
    protected readonly fadeOptions = tuiToAnimationOptions(this.speed);
    protected readonly container = inject(TuiDynamicHeaderContainerDirective);

    protected slideOptions = computed(() => {
        return this.getSlideOptions(this.container.scrollDir() || 'DOWN');
    });

    private getSlideOptions(direction: 'DOWN' | 'UP'): AnimationOptions {
        return {
            value: '',
            params: {
                duration: tuiGetDuration(this.speed),
                leaveEnd: 0,
                leaveStart: direction === 'UP' ? '200%' : '-200%',
                enterStart: direction === 'UP' ? '-200%' : '200%',
                enterEnd: 0,
            },
        } as unknown as AnimationOptions;
    }
}
