import {type AfterViewInit, Directive, type OnDestroy} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

// Enter animation uses scale which breaks anchor positioning for an arrow inside
// We need to disable animation, read position and enable it back immediately
// Then while animation is disabled, a fallback ::before arrow is shown
@Directive()
export class TuiHintArrow implements AfterViewInit, OnDestroy {
    private readonly el = tuiInjectElement();

    public ngAfterViewInit(): void {
        this.el.classList.remove('tui-enter');
        this.sync();
        this.el.classList.add('tui-enter');
    }

    public ngOnDestroy(): void {
        this.sync();
    }

    private sync(): void {
        const arrows = Array.from(this.el.querySelectorAll<HTMLElement>('.t-arrow'));
        const arrow = arrows.find((e) => e.clientWidth && e.clientHeight);

        if (!arrow || !this.el.classList.contains('_anchored')) {
            return;
        }

        const rotate = arrow?.classList.contains('t-arrow_horizontal') ? '90deg' : '0deg';
        const rect = arrow.getBoundingClientRect();
        const {left, top} = this.el.getBoundingClientRect();
        const x = rect.left + arrow.clientWidth / 2 - left;
        const y = rect.top + arrow.clientHeight / 2 - top;

        this.el.style.setProperty('--t-top', `${y}px`);
        this.el.style.setProperty('--t-left', `${x}px`);
        this.el.style.setProperty('--t-rotate', rotate);
    }
}
