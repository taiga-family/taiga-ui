import {NgTemplateOutlet} from '@angular/common';
import {
    type AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    inject,
    input,
    type OnDestroy,
    type TemplateRef,
} from '@angular/core';
import {WaIntersectionObservee} from '@ng-web-apis/intersection-observer';
import {type TuiContext} from '@taiga-ui/cdk/types';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

import {TuiScrollWheel} from './scroll-wheel.component';

@Component({
    selector: 'div:not(div)',
    imports: [NgTemplateOutlet],
    template: `
        <ng-container
            *ngTemplateOutlet="template() || null; context: {$implicit: index()}"
        />
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [
        {directive: WaIntersectionObservee, outputs: ['waIntersectionObservee']},
    ],
    host: {'(waIntersectionObservee)': 'onIntersection(!!$event[0]?.isIntersecting)'},
})
export class TuiScrollWheelItem implements AfterViewInit, OnDestroy {
    private readonly el = tuiInjectElement();
    private readonly scroll = inject(TuiScrollWheel);
    private height = this.el.clientHeight;

    public readonly index = input(0);
    public readonly template = input<TemplateRef<TuiContext<number>>>();

    public ngAfterViewInit(): void {
        this.height = this.el.clientHeight;

        if (this.index() < this.scroll.index()) {
            this.scroll.update(-this.height);
        }
    }

    public ngOnDestroy(): void {
        if (this.index() < this.scroll.index()) {
            this.scroll.update(this.height);
        }
    }

    protected onIntersection(isIntersecting: boolean): void {
        this.el.style.removeProperty('scroll-snap-align');
        this.scroll.onIntersection(isIntersecting, this.index());
    }
}
