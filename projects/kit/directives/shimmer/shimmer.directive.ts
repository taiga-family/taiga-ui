import {isPlatformBrowser} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    Input,
    type OnChanges,
    PLATFORM_ID,
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
        '[class._shimmer]': 'shimmer',
        '[class._disabled]': 'shimmer && disabled',
        '[attr.inert]': 'shimmer || null',
    },
})
export class TuiShimmer implements OnChanges {
    private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    private readonly el = tuiInjectElement();
    private animation?: Animation;

    protected disabled = false;

    protected readonly nothing = tuiWithStyles(TuiShimmerStyles);

    @Input('tuiShimmer')
    public shimmer = false;

    public ngOnChanges(): void {
        if (!this.isBrowser) {
            return;
        }

        this.disabled = !parseFloat(
            getComputedStyle(this.el).getPropertyValue('--tui-duration'),
        );

        if (this.disabled) {
            return;
        }

        this.animation?.commitStyles();
        this.animation?.cancel();

        if (this.shimmer) {
            this.animation = this.el.animate(
                {opacity: [0.5, 0.25, 0.5, 0.5]},
                {duration: 1500, iterations: Infinity},
            );
        } else {
            this.animation = this.el.animate([{opacity: 0, offset: 0.5}, {opacity: 1}], {
                duration: 800,
            });

            this.animation.finished
                .then(() => {
                    this.el.style.opacity = '';
                })
                .catch(() => {});
        }
    }
}
