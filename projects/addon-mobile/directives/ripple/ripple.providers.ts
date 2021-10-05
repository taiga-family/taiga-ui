import {ElementRef, InjectionToken, Provider, Renderer2} from '@angular/core';
import {
    isPresent,
    TUI_IS_ANDROID,
    TuiDestroyService,
    typedFromEvent,
} from '@taiga-ui/cdk';
import {EMPTY, Observable} from 'rxjs';
import {filter, map, takeUntil} from 'rxjs/operators';

export const RIPPLE_ON = 'tuiRippleOn';
export const RIPPLE_OFF = 'tuiRippleOff';
export const TUI_RIPPLE_START = new InjectionToken<Observable<HTMLElement>>(
    'Stream of ripple elements to add',
);
export const TUI_RIPPLE_END = new InjectionToken<Observable<HTMLElement>>(
    'Stream of ripple elements to remove',
);
export const TUI_RIPPLE_PROVIDERS: Provider[] = [
    TuiDestroyService,
    {
        provide: TUI_RIPPLE_START,
        deps: [TUI_IS_ANDROID, ElementRef, Renderer2],
        useFactory: rippleStartFactory,
    },
    {
        provide: TUI_RIPPLE_END,
        deps: [TUI_IS_ANDROID, ElementRef, TuiDestroyService],
        useFactory: rippleEndFactory,
    },
];

export function rippleStartFactory(
    isAndroid: boolean,
    {nativeElement}: ElementRef<HTMLElement>,
    renderer: Renderer2,
): Observable<HTMLElement> {
    return !isAndroid
        ? EMPTY
        : typedFromEvent(nativeElement, 'touchstart').pipe(
              map(({touches}) => {
                  const {clientX, clientY} = touches[touches.length - 1];
                  const {
                      width,
                      height,
                      top,
                      left,
                  } = nativeElement.getBoundingClientRect();
                  const radius = Math.sqrt(width * width + height * height);
                  const dimension = radius * 2;
                  const x = clientX - left - radius;
                  const y = clientY - top - radius;
                  const ripple = renderer.createElement('div');

                  renderer.addClass(ripple, 'tui-ripple');
                  renderer.setAttribute(
                      ripple,
                      'style',
                      `
                        width: ${dimension}px;
                        height: ${dimension}px;
                        left: ${x}px;
                        top: ${y}px;
                        animation-name: ${RIPPLE_ON};
                    `,
                  );

                  return ripple;
              }),
          );
}

export function rippleEndFactory(
    isAndroid: boolean,
    {nativeElement}: ElementRef<HTMLElement>,
    destroy$: Observable<void>,
): Observable<EventTarget> {
    return !isAndroid
        ? EMPTY
        : typedFromEvent(nativeElement, 'animationend').pipe(
              filter(({animationName}) => animationName === RIPPLE_OFF),
              map(({target}) => target),
              filter(isPresent),
              takeUntil(destroy$),
          );
}
