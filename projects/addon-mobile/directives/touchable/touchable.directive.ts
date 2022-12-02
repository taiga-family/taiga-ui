import {
    Directive,
    ElementRef,
    Inject,
    Input,
    Optional,
    Renderer2,
    Self,
} from '@angular/core';
import {TuiTouchMode} from '@taiga-ui/addon-mobile/types';
import {tuiFindTouchIndex} from '@taiga-ui/addon-mobile/utils';
import {
    TUI_IS_IOS,
    tuiDefaultProp,
    TuiDestroyService,
    tuiTypedFromEvent,
} from '@taiga-ui/cdk';
import {TUI_ELEMENT_REF} from '@taiga-ui/core';
import {race} from 'rxjs';
import {filter, map, switchMap, take, takeUntil, tap} from 'rxjs/operators';

const STYLE = {
    transform: `scale(0.95)`,
    opacity: `0.6`,
    background: `rgba(146, 153, 162, 0.12)`,
} as const;

@Directive({
    selector: `[tuiTouchable]`,
    providers: [TuiDestroyService],
})
export class TuiTouchableDirective {
    @Input()
    @tuiDefaultProp()
    tuiTouchable: TuiTouchMode | '' = ``;

    constructor(
        @Optional() @Inject(TUI_ELEMENT_REF) elementRef: ElementRef<HTMLElement> | null,
        @Inject(TUI_IS_IOS) isIos: boolean,
        @Inject(ElementRef) {nativeElement}: ElementRef<HTMLElement>,
        @Inject(Renderer2) renderer: Renderer2,
        @Self() @Inject(TuiDestroyService) destroy$: TuiDestroyService,
    ) {
        if (!isIos) {
            return;
        }

        const element = elementRef ? elementRef.nativeElement : nativeElement;

        tuiTypedFromEvent(element, `touchstart`, {passive: true})
            .pipe(
                tap(() => {
                    this.onTouchStart(renderer, element);
                }),
                map(({touches}) => touches[touches.length - 1].identifier),
                switchMap(identifier =>
                    race(
                        tuiTypedFromEvent(element, `touchmove`, {passive: true}).pipe(
                            filter(({touches}) =>
                                this.hasTouchLeft(element, touches, identifier),
                            ),
                        ),
                        tuiTypedFromEvent(element, `touchend`),
                    ).pipe(take(1)),
                ),
                takeUntil(destroy$),
            )
            .subscribe(() => {
                renderer.removeStyle(element, `transform`);
                renderer.removeStyle(element, `opacity`);
                renderer.removeStyle(element, `background`);
            });
    }

    get style(): TuiTouchMode {
        return this.tuiTouchable || `transform`;
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
        if (this.style !== `transform`) {
            renderer.removeStyle(element, `transition`);
        } else {
            renderer.setStyle(element, `transition`, `transform 0.2s`);
        }

        renderer.setStyle(element, this.style, STYLE[this.style]);
    }
}
