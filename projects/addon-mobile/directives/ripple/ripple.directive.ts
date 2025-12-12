import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    Directive,
    inject,
    input,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiIsHTMLElement} from '@taiga-ui/cdk/utils/dom';
import {tuiPx, tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_ANIMATIONS_SPEED} from '@taiga-ui/core/tokens';
import {tuiGetDuration} from '@taiga-ui/core/utils/miscellaneous';
import {first, fromEvent, merge, race, switchMap, tap} from 'rxjs';

const TO = [{transform: 'scale(0)', opacity: '0.12'}, {opacity: '0.12'}];
const FROM = [{opacity: '0.12'}, {opacity: '0'}];

@Component({
    template: '',
    styleUrl: './ripple.style.less',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {class: 'tui-ripple'},
})
class Styles {}

@Directive({
    selector: '[tuiRipple]',
    host: {
        '(pointerdown.zoneless)':
            'start($event.clientX, $event.clientY, $event.target, $event.currentTarget)',
    },
})
export class TuiRipple {
    private readonly doc = inject(DOCUMENT);
    private readonly destroyRef = inject(DestroyRef);
    private readonly duration = tuiGetDuration(inject(TUI_ANIMATIONS_SPEED));

    protected readonly nothing = tuiWithStyles(Styles);

    public readonly tuiRipple = input('');

    protected start(x: number, y: number, target: HTMLElement, el: HTMLElement): void {
        const element = this.tuiRipple() ? target.closest(this.tuiRipple()) : el;

        if (!tuiIsHTMLElement(element)) {
            return;
        }

        const ripple = this.createRipple(x, y, element.getBoundingClientRect());
        const touchEnd$ = merge(
            fromEvent(element, 'pointerup'),
            fromEvent(element, 'pointercancel'),
            fromEvent(element, 'pointermove'),
        );

        element.appendChild(ripple);

        const animationEnd$ = fromEvent(ripple.animate(TO, this.duration), 'finish');

        race(
            touchEnd$.pipe(switchMap(() => animationEnd$)),
            animationEnd$.pipe(switchMap(() => touchEnd$)),
        )
            .pipe(
                first(),
                switchMap(() => fromEvent(ripple.animate(FROM, this.duration), 'finish')),
                first(),
                tap(() => element.removeChild(ripple)),
                takeUntilDestroyed(this.destroyRef),
            )
            .subscribe();
    }

    private createRipple(
        clientX: number,
        clientY: number,
        {width, height, top, left}: DOMRect,
    ): HTMLElement {
        const ripple: HTMLElement = this.doc.createElement('div');
        const radius = Math.sqrt(width * width + height * height);
        const dimension = radius * 2;
        const x = clientX - left - radius;
        const y = clientY - top - radius;

        Object.assign(ripple.style, {
            position: 'absolute',
            top: tuiPx(y),
            left: tuiPx(x),
            width: tuiPx(dimension),
            height: tuiPx(dimension),
            zIndex: 100,
            opacity: 0.12,
            borderRadius: '100%',
            background: 'var(--tui-ripple-background, currentColor)',
            animationFillMode: 'forwards',
            pointerEvents: 'none',
        });

        return ripple;
    }
}
