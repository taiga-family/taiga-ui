import {DOCUMENT} from '@angular/common';
import {Directive, inject, input} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {WA_IS_IOS} from '@ng-web-apis/platform';
import {tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {filter, map, race, switchMap, take, tap} from 'rxjs';

const STYLE = {
    scale: '0.95',
    opacity: '0.6',
    background: 'rgba(146, 153, 162, 0.12)',
} as const;

function findIndex(touches: TouchList, id = 0): number {
    for (let i = 0; i < touches.length; i++) {
        if (touches[i]?.identifier === id) {
            return i;
        }
    }

    return -1;
}

@Directive({selector: '[tuiTouchable]'})
export class TuiTouchable {
    private readonly isIOS = inject(WA_IS_IOS);
    private readonly el = tuiInjectElement();
    private readonly doc = inject(DOCUMENT);

    /** @deprecated 'transform' is deprecated in favor of 'scale', remove 'transform' in v6 */
    public readonly tuiTouchable = input<
        '' | 'background' | 'opacity' | 'scale' | 'transform'
    >('');

    constructor() {
        if (!this.isIOS) {
            return;
        }

        tuiTypedFromEvent(this.el, 'touchstart', {passive: true})
            .pipe(
                tap(() => this.onTouchStart()),
                map(({touches}) => touches[touches.length - 1]?.identifier),
                switchMap((id) =>
                    race(
                        tuiTypedFromEvent(this.el, 'touchend'),
                        tuiTypedFromEvent(this.el, 'touchmove', {passive: true}).pipe(
                            filter(({touches}) => this.hasTouches(this.el, touches, id)),
                        ),
                    ).pipe(take(1)),
                ),
                takeUntilDestroyed(),
            )
            .subscribe(() => {
                this.el.style.removeProperty('scale');
                this.el.style.removeProperty('opacity');
                this.el.style.removeProperty('background');
            });
    }

    private hasTouches(el: HTMLElement, touches: TouchList, id?: number): boolean {
        const index = findIndex(touches, id);
        const {clientX = 0, clientY = 0} = touches[index] ?? {};

        return index === -1 || !el.contains(this.doc.elementFromPoint(clientX, clientY));
    }

    private onTouchStart(): void {
        const value = this.tuiTouchable() || 'scale';
        const style = value === 'transform' ? 'scale' : value;

        if (style === 'scale') {
            this.el.style.setProperty('transition', 'scale 0.2s');
        } else {
            this.el.style.removeProperty('transition');
        }

        this.el.style.setProperty(style, STYLE[style]);
    }
}
