import {isPlatformBrowser} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    inject,
    input,
    type OnChanges,
    PLATFORM_ID,
    ViewEncapsulation,
} from '@angular/core';
import {provideStyles, TuiWithStyles} from '@taiga-ui/cdk/directives/with-styles';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

const OPTIONS = {duration: 1500, iterations: Infinity};

@Component({
    template: '',
    styleUrls: ['./shimmer.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-shimmer'},
})
class Styles {}

@Directive({
    selector: '[tuiShimmer]',
    providers: [provideStyles(Styles)],
    hostDirectives: [TuiWithStyles],
    host: {
        tuiShimmer: '',
        '[class._shimmer]': 'tuiShimmer()',
        '[class._disabled]': 'tuiShimmer() && disabled',
        '[attr.inert]': 'tuiShimmer() || null',
    },
})
export class TuiShimmer implements OnChanges {
    private readonly isBrowser = isPlatformBrowser(inject(PLATFORM_ID));
    private readonly el = tuiInjectElement();
    private animation?: Animation;

    protected disabled = false;

    public readonly tuiShimmer = input(false);

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
        this.animation = this.tuiShimmer()
            ? this.el.animate({opacity: [0.5, 0.25, 0.5, 0.5]}, OPTIONS)
            : this.el.animate([{opacity: 0, offset: 0.5}, {opacity: 1}], 800);
        this.animation.finished
            .then(() => {
                this.el.style.opacity = '';
            })
            .catch(() => {});
    }
}
