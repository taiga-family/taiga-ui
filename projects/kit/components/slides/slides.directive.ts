import {
    ChangeDetectionStrategy,
    Component,
    computed,
    Directive,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {TuiAnimatedParent} from '@taiga-ui/cdk/directives/animated';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';

@Component({
    template: '',
    styleUrl: './slides.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-slides'},
})
class Styles {}

@Directive({
    selector: '[tuiSlides]',
    hostDirectives: [TuiAnimatedParent],
    host: {
        tuiSlides: '',
        '[attr.data-direction]': 'sign()',
        '(animationend)': 'onAnimation($event.target)',
    },
})
export class TuiSlides {
    protected readonly nothing = tuiWithStyles(Styles);
    protected readonly el = tuiInjectElement();
    protected readonly sign = computed(() => Math.sign(this.direction() || 0));

    public readonly direction = input<number | ''>('', {alias: 'tuiSlides'});

    protected onAnimation(target: Element): void {
        Array.from(this.el.children)
            .find((element) => element === target)
            ?.classList.add('tui-slide');
    }
}
