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
import {TUI_ANIMATIONS_DEFAULT_DURATION} from '@taiga-ui/core/utils/miscellaneous';

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
    private animation?: Animation;
    private readonly el = tuiInjectElement();
    private readonly duration =
        inject(TUI_ANIMATIONS_SPEED) * TUI_ANIMATIONS_DEFAULT_DURATION * 2;

    protected readonly nothing = tuiWithStyles(TuiSkeletonStyles);

    @Input()
    public tuiSkeleton: boolean | number | string = false;

    public ngOnChanges({tuiSkeleton}: SimpleChanges): void {
        this.animation?.cancel();

        if (!tuiSkeleton.currentValue && !tuiSkeleton.firstChange) {
            this.animation = this.el.animate(FADE, this.duration);
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
