import {Directive, ElementRef, HostBinding, Inject, Input, NgZone} from '@angular/core';
import {tuiZonefree, typedFromEvent} from '@taiga-ui/cdk/observables';
import {TuiDestroyService} from '@taiga-ui/cdk/services';
import {TuiEventWith, TuiOverscrollMode} from '@taiga-ui/cdk/types';
import {canScroll, getScrollParent} from '@taiga-ui/cdk/utils/dom';
import {Observable} from 'rxjs';
import {filter, switchMap, takeUntil, tap} from 'rxjs/operators';

/**
 * Directive to isolate scrolling, i.e. prevent body scroll behind modal dialog
 * @dynamic
 */
@Directive({
    selector: `[tuiOverscroll]`,
    providers: [TuiDestroyService],
})
export class TuiOverscrollDirective {
    @Input(`tuiOverscroll`)
    mode: TuiOverscrollMode | '' = `scroll`;

    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLElement>,
        @Inject(NgZone) ngZone: NgZone,
        @Inject(TuiDestroyService) destroy$: Observable<void>,
    ) {
        typedFromEvent(nativeElement, `wheel`, {passive: false})
            .pipe(
                filter(() => this.enabled),
                tuiZonefree(ngZone),
                takeUntil(destroy$),
            )
            .subscribe(event => {
                this.processEvent(
                    event,
                    !!event.deltaY,
                    event.deltaY ? event.deltaY < 0 : event.deltaX < 0,
                );
            });

        typedFromEvent(nativeElement, `touchstart`, {passive: true})
            .pipe(
                switchMap(({touches}) => {
                    let {clientX, clientY} = touches[0];
                    let deltaX = 0;
                    let deltaY = 0;
                    let vertical: boolean;

                    return typedFromEvent(nativeElement, `touchmove`, {
                        passive: false,
                    }).pipe(
                        filter(() => this.enabled),
                        tap(event => {
                            // We have to have it in tap instead of subscribe due to variables in closure
                            const changedTouch = event.changedTouches[0];

                            deltaX = clientX - changedTouch.clientX;
                            deltaY = clientY - changedTouch.clientY;
                            clientX = changedTouch.clientX;
                            clientY = changedTouch.clientY;

                            if (vertical === undefined) {
                                vertical = Math.abs(deltaY) > Math.abs(deltaX);
                            }

                            this.processEvent(
                                event,
                                vertical,
                                vertical ? deltaY < 0 : deltaX < 0,
                            );
                        }),
                    );
                }),
                tuiZonefree(ngZone),
                takeUntil(destroy$),
            )
            .subscribe();
    }

    get enabled(): boolean {
        return this.mode !== `none`;
    }

    @HostBinding(`style.overscrollBehavior`)
    get overscrollBehavior(): 'contain' | null {
        return this.enabled ? `contain` : null;
    }

    private processEvent(
        event: TuiEventWith<Event, HTMLElement>,
        vertical: boolean,
        negative: boolean,
    ): void {
        const {target, currentTarget, cancelable} = event;

        // TODO: iframe warning
        if (
            !cancelable ||
            !(target instanceof Element) ||
            (target as HTMLInputElement)?.type === `range`
        ) {
            return;
        }

        // This is all what's needed in Chrome/Firefox thanks to CSS overscroll-behavior
        if (
            this.mode === `all` &&
            ((vertical && !currentTarget.contains(getScrollParent(target))) ||
                (!vertical && !currentTarget.contains(getScrollParent(target, false))))
        ) {
            event.preventDefault();

            return;
        }

        // This is Safari/IE/Edge fallback
        if (
            vertical &&
            ((negative && !canScroll(target, currentTarget, true, false)) ||
                (!negative && !canScroll(target, currentTarget, true, true)))
        ) {
            event.preventDefault();

            return;
        }

        if (
            !vertical &&
            ((negative && !canScroll(target, currentTarget, false, false)) ||
                (!negative && !canScroll(target, currentTarget, false, true)))
        ) {
            event.preventDefault();
        }
    }
}
