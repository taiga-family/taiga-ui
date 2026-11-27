import {type AfterViewInit, Directive} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

// Enter animation uses scale which breaks anchor positioning for an arrow inside
// We need to disable animation, read position and enable it back immediately
// Then while animation is disabled, a fallback ::before arrow is shown
@Directive({host: {'(tui-leave)': 'sync()'}})
export class TuiHintArrow implements AfterViewInit {
    private readonly el = tuiInjectElement();

    public ngAfterViewInit(): void {
        this.el.classList.remove('tui-enter');
        this.sync();
        this.el.classList.add('tui-enter');
    }

    protected sync(): void {
        const arrows = Array.from(this.el.querySelectorAll<HTMLElement>('.t-arrow'));
        const arrow = arrows.find((e) => e.clientWidth && e.clientHeight);

        if (!arrow || !this.el.classList.contains('_anchored')) {
            return;
        }

        const rotate = arrow.classList.contains('t-arrow_horizontal') ? '90deg' : '0deg';
        const rect = arrow.getBoundingClientRect();
        const {left, top} = this.el.getBoundingClientRect();
        const x = rect.left + rect.width / 2 - left;
        const y = rect.top + rect.height / 2 - top;

        this.el.style.setProperty('--t-top', `${y}px`);
        this.el.style.setProperty('--t-left', `${x}px`);
        this.el.style.setProperty('--t-rotate', rotate);
    }
}
