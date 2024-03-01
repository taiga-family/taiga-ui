import {Directive, Input} from '@angular/core';
import {CHAR_NO_BREAK_SPACE, tuiPure, tuiWithStyles} from '@taiga-ui/cdk';

import {TuiSkeletonComponent} from './skeleton.component';

@Directive({
    standalone: true,
    selector: '[tuiSkeleton]',
    host: {
        tuiSkeleton: '',
        '[class._skeleton]': 'tuiSkeleton',
        '[attr.data-tui-skeleton]': 'getPlaceholder(tuiSkeleton)',
    },
})
export class TuiSkeletonDirective {
    protected readonly nothing = tuiWithStyles(TuiSkeletonComponent);

    @Input()
    public tuiSkeleton: boolean | number | string = false;

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
