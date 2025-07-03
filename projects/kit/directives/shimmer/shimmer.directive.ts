import {isPlatformBrowser} from '@angular/common';
import type {OnChanges} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    PLATFORM_ID,
    signal,
    ViewEncapsulation,
} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./shimmer.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-shimmer-styles',
    },
})
class TuiShimmerStyles {}

@Directive({
    standalone: true,
    selector: '[tuiShimmer]',
    host: {
        tuiShimmer: '',
        '[class._shimmer]': 'shimmer()',
    },
})
export class TuiShimmer implements OnChanges {
    private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    private readonly el = tuiInjectElement();
    private animation?: Animation;

    protected readonly nothing = tuiWithStyles(TuiShimmerStyles);

    public shimmer = signal(false);

    @Input('tuiShimmer')
    public set shimmerValue(cache: boolean) {
        this.shimmer.set(cache);
    }

    public ngOnChanges(): void {
        if (!this.isBrowser) {
            return;
        }

        this.animation?.commitStyles();
        this.animation?.cancel();

        if (this.shimmer()) {
            this.animation = this.el.animate(
                {opacity: [0.5, 0.25, 0.5, 0.5]},
                {duration: 1500, iterations: Infinity},
            );
        } else {
            this.animation = this.el.animate([{opacity: 0, offset: 0.5}, {opacity: 1}], {
                duration: 800,
            });

            this.animation.finished.then(() => {
                this.el.style.opacity = '';
            });
        }
    }
}
