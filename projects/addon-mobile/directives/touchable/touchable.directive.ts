import {Directive, ElementRef, inject, Input, Renderer2} from '@angular/core';
import {type TuiTouchMode} from '@taiga-ui/addon-mobile/types';
import {tuiFindTouchIndex} from '@taiga-ui/addon-mobile/utils';
import {TUI_IS_IOS, TuiDestroyService, tuiTypedFromEvent} from '@taiga-ui/cdk';
import {TUI_ELEMENT_REF} from '@taiga-ui/core';
import {filter, map, race, switchMap, take, takeUntil, tap} from 'rxjs';

const STYLE = {
    transform: 'scale(0.95)',
    opacity: '0.6',
    background: 'rgba(146, 153, 162, 0.12)',
} as const;

@Directive({
    selector: '[tuiTouchable]',
    providers: [TuiDestroyService],
})
export class TuiTouchableDirective {
    private readonly isIOS = inject(TUI_IS_IOS);
    private readonly renderer = inject(Renderer2);
    private readonly destroy$ = inject(TuiDestroyService, {self: true});
    private readonly el: HTMLElement = inject(ElementRef).nativeElement;
    private readonly elementRef?: HTMLElement = inject(TUI_ELEMENT_REF, {optional: true})
        ?.nativeElement;

    @Input()
    public tuiTouchable: TuiTouchMode | '' = '';

    constructor() {
        if (!this.isIOS) {
            return;
        }

        const element = this.elementRef || this.el;

        tuiTypedFromEvent(element, 'touchstart', {passive: true})
            .pipe(
                tap(() => {
                    this.onTouchStart(this.renderer, element);
                }),
                map(({touches}) => touches[touches.length - 1].identifier),
                switchMap(identifier =>
                    race(
                        tuiTypedFromEvent(element, 'touchmove', {passive: true}).pipe(
                            filter(({touches}) =>
                                this.hasTouchLeft(element, touches, identifier),
                            ),
                        ),
                        tuiTypedFromEvent(element, 'touchend'),
                    ).pipe(take(1)),
                ),
                takeUntil(this.destroy$),
            )
            .subscribe(() => {
                this.renderer.removeStyle(element, 'transform');
                this.renderer.removeStyle(element, 'opacity');
                this.renderer.removeStyle(element, 'background');
            });
    }

    protected get style(): TuiTouchMode {
        return this.tuiTouchable || 'transform';
    }

    private hasTouchLeft(
        element: HTMLElement,
        touches: TouchList,
        identifier: number,
    ): boolean {
        const {ownerDocument} = element;
        const id = tuiFindTouchIndex(touches, identifier);

        if (!ownerDocument || id === -1) {
            return true;
        }

        const {clientX, clientY} = touches[id];

        return !element.contains(ownerDocument.elementFromPoint(clientX, clientY));
    }

    private onTouchStart(renderer: Renderer2, element: HTMLElement): void {
        if (this.style !== 'transform') {
            renderer.removeStyle(element, 'transition');
        } else {
            renderer.setStyle(element, 'transition', 'transform 0.2s');
        }

        renderer.setStyle(element, this.style, STYLE[this.style]);
    }
}
