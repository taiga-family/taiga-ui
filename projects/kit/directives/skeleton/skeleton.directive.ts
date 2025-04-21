import type {OnChanges, SimpleChanges} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk/constants';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiPure, tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_ANIMATIONS_SPEED} from '@taiga-ui/core/tokens';
import {tuiGetDuration} from '@taiga-ui/core/utils/miscellaneous';

const SKELETON = [{opacity: 0.03}, {opacity: 0.06}];
const FADE = [{opacity: 0.06}, {opacity: 1}];

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./skeleton.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-skeleton-styles',
    },
})
class TuiSkeletonStyles {}

@Directive({
    standalone: true,
    selector: '[tuiSkeleton]',
    host: {
        tuiSkeleton: '',
        '[class._skeleton]': 'tuiSkeleton',
        '[attr.data-tui-skeleton]': 'getPlaceholder(tuiSkeleton)',
    },
})
export class TuiSkeleton implements OnChanges {
    private skeletonAnimation?: Animation;
    private fadeAnimation?: Animation;
    private readonly el = tuiInjectElement();
    private readonly fadeAnimationDuration =
        tuiGetDuration(inject(TUI_ANIMATIONS_SPEED)) * 2;

    private readonly skeletonAnimationDuration =
        this.fadeAnimationDuration === 0 ? 0 : 1000;

    protected readonly nothing = tuiWithStyles(TuiSkeletonStyles);

    @Input()
    public tuiSkeleton: boolean | number | string = false;

    public ngOnChanges({tuiSkeleton}: SimpleChanges): void {
        this.fadeAnimation?.cancel();

        if (tuiSkeleton?.currentValue) {
            this.skeletonAnimation = this.el.animate(SKELETON, {
                easing: 'ease-in-out',
                direction: 'alternate',
                iterations: Infinity,
                duration: this.skeletonAnimationDuration,
            });
        }

        if (!tuiSkeleton?.currentValue && !tuiSkeleton?.firstChange) {
            this.skeletonAnimation?.cancel();
            this.fadeAnimation = this.el.animate(FADE, this.fadeAnimationDuration);
        }
    }

    @tuiPure
    protected getPlaceholder(value: boolean | number | string): string | null {
        switch (typeof value) {
            case 'number':
                return Array.from({length: value})
                    .map(() => CHAR_NO_BREAK_SPACE.repeat(getLength()))
                    .join(' ');
            case 'string':
                return value;
            default:
                return null;
        }
    }
}

function getLength(): number {
    return Math.floor(Math.random() * (15 - 5 + 1)) + 5;
}
