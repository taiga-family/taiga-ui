import type {OnChanges, SimpleChanges} from '@angular/core';
import {Directive, ElementRef, Inject, Input} from '@angular/core';
import {CHAR_NO_BREAK_SPACE, TuiDirectiveStylesService, tuiPure} from '@taiga-ui/cdk';
import {TUI_ANIMATIONS_DURATION} from '@taiga-ui/core';

import {TuiSkeletonComponent} from './skeleton.component';

const FADE = [{opacity: 0.06}, {opacity: 1}];

@Directive({
    selector: '[tuiSkeleton]',
    host: {
        tuiSkeleton: '',
        '[class._skeleton]': 'tuiSkeleton',
        '[attr.data-tui-skeleton]': 'getPlaceholder(tuiSkeleton)',
    },
})
export class TuiSkeletonDirective implements OnChanges {
    private animation?: Animation;

    @Input()
    tuiSkeleton: boolean | number | string = false;

    constructor(
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Inject(TUI_ANIMATIONS_DURATION) private readonly duration: number,
        @Inject(TuiDirectiveStylesService) directiveStyles: TuiDirectiveStylesService,
    ) {
        directiveStyles.addComponent(TuiSkeletonComponent);
    }

    @tuiPure
    getPlaceholder(value: boolean | number | string): string | null {
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

    ngOnChanges({tuiSkeleton}: SimpleChanges): void {
        this.animation?.cancel();

        if (!tuiSkeleton.currentValue && !tuiSkeleton.firstChange) {
            this.animation = this.el.nativeElement.animate(FADE, this.duration * 2);
        }
    }
}

function getLength(): number {
    return Math.floor(Math.random() * (15 - 5 + 1)) + 5;
}
