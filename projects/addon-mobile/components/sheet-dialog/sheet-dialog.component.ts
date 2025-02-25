import {NgForOf, NgIf} from '@angular/common';
import type {AfterViewInit, QueryList} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    inject,
    ViewChildren,
} from '@angular/core';
import {EMPTY_QUERY} from '@taiga-ui/cdk/constants';
import type {TuiPopover} from '@taiga-ui/cdk/services';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiProvide} from '@taiga-ui/cdk/utils/miscellaneous';
import {tuiSlideInTop} from '@taiga-ui/core/animations';
import {TUI_ANIMATIONS_SPEED, TUI_SCROLL_REF} from '@taiga-ui/core/tokens';
import {tuiGetDuration} from '@taiga-ui/core/utils/miscellaneous';
import {shouldCall} from '@taiga-ui/event-plugins';
import {injectContext, PolymorpheusOutlet} from '@taiga-ui/polymorpheus';

import type {TuiSheetDialogOptions} from './sheet-dialog.options';

// So we re-enter ngZone and trigger change detection
function isCloseable(this: TuiSheetDialogComponent<unknown>): boolean {
    return this.context.closeable === true;
}

@Component({
    standalone: true,
    selector: 'tui-sheet-dialog',
    imports: [NgForOf, NgIf, PolymorpheusOutlet],
    templateUrl: './sheet-dialog.template.html',
    styleUrls: ['./sheet-dialog.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [tuiProvide(TUI_SCROLL_REF, ElementRef)],
    animations: [tuiSlideInTop],
    host: {
        '[@tuiSlideInTop]': 'slideInTop',
        '[style.--tui-offset.px]': 'context.offset',
        '[class._closeable]': 'context.closeable === true',
        '(document:touchstart.passive.zoneless)': 'onPointerChange(1)',
        '(document:touchend.zoneless)': 'onPointerChange(-1)',
        '(document:touchcancel.zoneless)': 'onPointerChange(-1)',
        '(scroll.zoneless)': 'onPointerChange(0)',
        '(click.self)': 'close()',
    },
})
export class TuiSheetDialogComponent<I> implements AfterViewInit {
    @ViewChildren('stops')
    private readonly stops: QueryList<ElementRef<HTMLElement>> = EMPTY_QUERY;

    private readonly el = tuiInjectElement();
    private pointers = 0;

    protected readonly slideInTop = {
        value: '',
        params: {
            start: '100vh',
            duration: tuiGetDuration(inject(TUI_ANIMATIONS_SPEED)),
        },
    };

    protected readonly context =
        injectContext<TuiPopover<TuiSheetDialogOptions<I>, any>>();

    public ngAfterViewInit(): void {
        this.el.scrollTop =
            [
                ...this.stops.map((e) => e.nativeElement.offsetTop - this.context.offset),
                this.el.clientHeight ?? Infinity,
            ][this.context.initial] ?? 0;
    }

    @shouldCall(isCloseable)
    protected close(): void {
        this.context.$implicit.complete();
    }

    protected onPointerChange(delta: number): void {
        this.pointers = Math.max(this.pointers + delta, 0);

        if (!this.pointers && this.el.scrollTop <= 0) {
            this.close();
        }
    }
}
