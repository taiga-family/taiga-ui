import {
    ChangeDetectionStrategy,
    Component,
    computed,
    Directive,
    inject,
    input,
    type OnChanges,
    type SimpleChanges,
    ViewEncapsulation,
} from '@angular/core';
import {CHAR_NO_BREAK_SPACE} from '@taiga-ui/cdk/constants';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_ANIMATIONS_SPEED} from '@taiga-ui/core/tokens';
import {tuiGetDuration} from '@taiga-ui/core/utils/miscellaneous';

const FADE = [{opacity: 0.06}, {opacity: 1}];

@Component({
    template: '',
    styleUrl: './skeleton.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-skeleton'},
})
class Styles {}

@Directive({
    selector: '[tuiSkeleton]',
    host: {
        tuiSkeleton: '',
        '[attr.inert]': '!!tuiSkeleton() || null',
        '[class._skeleton]': 'tuiSkeleton()',
        '[attr.data-tui-skeleton]': 'placeholder()',
    },
})
export class TuiSkeleton implements OnChanges {
    private animation?: Animation;
    private readonly el = tuiInjectElement();
    private readonly duration = tuiGetDuration(inject(TUI_ANIMATIONS_SPEED)) * 2;

    protected readonly nothing = tuiWithStyles(Styles);
    protected readonly placeholder = computed((length = this.tuiSkeleton()) => {
        switch (typeof length) {
            case 'number':
                return Array.from({length}).map(getWord).join(' ');
            case 'string':
                return length;
            default:
                return null;
        }
    });

    public readonly tuiSkeleton = input<boolean | number | string>(false);

    public ngOnChanges({tuiSkeleton}: SimpleChanges): void {
        this.animation?.cancel();

        if (!tuiSkeleton?.currentValue && !tuiSkeleton?.firstChange) {
            this.animation = this.el.animate?.(FADE, this.duration);
        }
    }
}

function getWord(): string {
    return CHAR_NO_BREAK_SPACE.repeat(Math.floor(Math.random() * (15 - 5 + 1)) + 5);
}
