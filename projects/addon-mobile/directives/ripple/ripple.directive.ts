import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    Directive,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {tuiIsHTMLElement} from '@taiga-ui/cdk/utils/dom';
import {tuiPx, tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import {TUI_ANIMATIONS_SPEED} from '@taiga-ui/core/tokens';
import {tuiGetDuration} from '@taiga-ui/core/utils/miscellaneous';
import {first, merge, race, switchMap, tap} from 'rxjs';

const TO_KEYFRAMES = [
    {
        transform: 'scale(0)',
        opacity: '0.12',
    },
    {
        opacity: '0.12',
    },
];
const FROM_KEYFRAMES = [
    {
        opacity: '0.12',
    },
    {
        opacity: '0',
    },
];

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./ripple.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-ripple-styles',
    },
})
class TuiRippleStyles {}

@Directive({
    standalone: true,
    selector: '[tuiRipple]',
    host: {
        '(pointerdown.zoneless)':
            'start($event.clientX, $event.clientY, $event.target, $event.currentTarget)',
    },
})
export class TuiRipple {
    private readonly document = inject(DOCUMENT);
    private readonly destroyRef = inject(DestroyRef);
    private readonly animationOptions = {
        duration: tuiGetDuration(inject(TUI_ANIMATIONS_SPEED)),
    };

    protected readonly nothing = tuiWithStyles(TuiRippleStyles);

    @Input()
    public tuiRipple = '';

    protected start(x: number, y: number, target: HTMLElement, el: HTMLElement): void {
        const element = this.tuiRipple ? target.closest(this.tuiRipple) : el;

        if (!tuiIsHTMLElement(element)) {
            return;
        }

        const ripple = this.createRipple(x, y, element.getBoundingClientRect());
        const touchEnd$ = merge(
            tuiTypedFromEvent(element, 'pointerup'),
            tuiTypedFromEvent(element, 'pointercancel'),
            tuiTypedFromEvent(element, 'pointermove'),
        );

        element.appendChild(ripple);

        const animationEndOn$ = tuiTypedFromEvent(
            ripple.animate(TO_KEYFRAMES, this.animationOptions),
            'finish',
        );

        race(
            touchEnd$.pipe(switchMap(() => animationEndOn$)),
            animationEndOn$.pipe(switchMap(() => touchEnd$)),
        )
            .pipe(
                first(),
                switchMap(() =>
                    tuiTypedFromEvent(
                        ripple.animate(FROM_KEYFRAMES, this.animationOptions),
                        'finish',
                    ),
                ),
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
        const ripple: HTMLElement = this.document.createElement('div');
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
