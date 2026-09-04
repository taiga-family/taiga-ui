import {
    afterNextRender,
    type AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    contentChild,
    input,
    model,
    TemplateRef,
    viewChild,
    ViewContainerRef,
} from '@angular/core';
import {
    WaIntersectionObserverDirective,
    WaIntersectionRoot,
} from '@ng-web-apis/intersection-observer';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {TuiScrollRef} from '@taiga-ui/core/components/scrollbar';

import {TuiScrollWheelItem} from './scroll-wheel-item.component';

const OFFSET = 5_000_000;

/**
 * @deprecated: work in progress, do not use!
 */
@Component({
    selector: 'tui-scroll-wheel',
    template: '<ng-container #vcr /><ng-content />',
    styles: `
        :host {
            position: relative;
            display: block;
            overflow: hidden scroll;
            overscroll-behavior: none;
            scroll-snap-type: y mandatory;

            &::before {
                content: '';
                display: block;
                block-size: var(--t-offset, 1000000px);
            }
        }
    `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    hostDirectives: [TuiScrollRef, WaIntersectionObserverDirective, WaIntersectionRoot],
    host: {
        waIntersectionThreshold: '0.1',
        '(scroll.zoneless)': 'onScroll()',
        '(scrollend)': 'sync()',
    },
})
export class TuiScrollWheel implements AfterViewInit {
    protected readonly el = tuiInjectElement();
    protected readonly vcr = viewChild.required('vcr', {read: ViewContainerRef});
    protected readonly wrapper = viewChild.required(TemplateRef);
    protected readonly template = contentChild.required(TemplateRef);
    protected readonly visible = new Set<number>();
    protected offset = OFFSET;

    public readonly buffer = input(10);
    public readonly index = model(0);

    constructor() {
        // Safari does not always snap to a dynamically created item on initial load.
        afterNextRender(() => this.el.scrollTo({top: OFFSET, behavior: 'instant'}));
    }

    public ngAfterViewInit(): void {
        this.update(0);

        for (let i = 0; i < this.buffer() * 2 + 1; i++) {
            this.createItem(this.index() - this.buffer() + i);
        }
    }

    public onIntersection(isIntersecting: boolean, index: number): void {
        this.visible[isIntersecting ? 'add' : 'delete'](index);

        const current = [...this.visible].sort((a, b) => a - b)[0] ?? this.index();

        this.refreshItems(current - this.index());
        this.index.set(current);
    }

    public update(offset: number): void {
        this.offset = this.offset + offset;
        this.el.style.setProperty('--t-offset', `${this.offset}px`);
    }

    protected onScroll(): void {
        // Prevent momentum scrolling from outrunning rendered items and entering the spacer.
        if (this.el.scrollTop < this.offset) {
            this.el.scrollTo({top: this.offset, behavior: 'instant'});
        }
    }

    protected sync(): void {
        const offset = OFFSET - this.offset;
        const top = Math.max(this.el.scrollTop + offset, OFFSET);

        this.update(offset);
        this.el.scrollTo({top, behavior: 'instant'});
    }

    private refreshItems(delta: number): void {
        if (delta < 0) {
            for (let i = 1; i <= -delta; i++) {
                this.vcr().remove();
                this.createItem(this.index() - this.buffer() - i, 0);
            }
        } else if (delta > 0) {
            for (let i = 1; i <= delta; i++) {
                this.vcr().remove(0);
                this.createItem(this.index() + this.buffer() + i);
            }
        }
    }

    private createItem(context: number, index?: number): void {
        const ref = this.vcr().createComponent(TuiScrollWheelItem, {index});
        const align = context === this.index() ? 'start' : '';

        ref.setInput('index', context);
        ref.setInput('template', this.template());
        ref.location.nativeElement.style.setProperty('scroll-snap-align', align);
    }
}
