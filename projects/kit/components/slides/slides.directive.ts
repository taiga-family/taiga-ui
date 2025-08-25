import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {TuiAnimatedParent} from '@taiga-ui/cdk/directives/animated';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiInjectElement} from '@taiga-ui/cdk';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./slides.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-slides',
    },
})
class TuiSlidesStyles {}

@Directive({
    standalone: true,
    selector: '[tuiSlides]',
    hostDirectives: [TuiAnimatedParent],
    host: {
        tuiSlides: '',
        '[attr.data-direction]': 'sign',
        '(animationend)': 'onAnimation($event.target)',
    },
})
export class TuiSlides {
    private readonly el = tuiInjectElement();

    protected readonly nothing = tuiWithStyles(TuiSlidesStyles);

    @Input('tuiSlides')
    public direction: number | '' = '';

    protected get sign(): number {
        return Math.sign(this.direction || 0);
    }

    protected onAnimation(target: Element): void {
        Array.from(this.el.children)
            .find((element) => element === target)
            ?.classList.add('tui-slide');
    }
}
