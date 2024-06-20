import {Directive, inject, Input} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {TUI_IS_IOS} from '@taiga-ui/cdk/tokens';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {filter, map, race, switchMap, take, tap} from 'rxjs';

const STYLE = {
    transform: 'scale(0.95)',
    opacity: '0.6',
    background: 'rgba(146, 153, 162, 0.12)',
} as const;

export function tuiFindTouchIndex(touches: TouchList, id: number): number {
    for (let i = 0; i < touches.length; i++) {
        const {identifier} = touches[i];

        if (identifier === id) {
            return i;
        }
    }

    return -1;
}

@Directive({
    standalone: true,
    selector: '[tuiTouchable]',
})
export class TuiTouchable {
    private readonly isIOS = inject(TUI_IS_IOS);
    private readonly el = tuiInjectElement();

    @Input()
    public tuiTouchable: '' | 'background' | 'opacity' | 'transform' = '';

    constructor() {
        if (!this.isIOS) {
            return;
        }

        tuiTypedFromEvent(this.el, 'touchstart', {passive: true})
            .pipe(
                tap(() => this.onTouchStart()),
                map(({touches}) => touches[touches.length - 1].identifier),
                switchMap(identifier =>
                    race(
                        tuiTypedFromEvent(this.el, 'touchmove', {passive: true}).pipe(
                            filter(({touches}) =>
                                this.hasTouchLeft(this.el, touches, identifier),
                            ),
                        ),
                        tuiTypedFromEvent(this.el, 'touchend'),
                    ).pipe(take(1)),
                ),
                takeUntilDestroyed(),
            )
            .subscribe(() => {
                this.el.style.removeProperty('transform');
                this.el.style.removeProperty('opacity');
                this.el.style.removeProperty('background');
            });
    }

    protected get style(): 'background' | 'opacity' | 'transform' {
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

    private onTouchStart(): void {
        if (this.style !== 'transform') {
            this.el.style.removeProperty('transition');
        } else {
            this.el.style.setProperty('transition', 'transform 0.2s');
        }

        this.el.style.setProperty(this.style, STYLE[this.style]);
    }
}
