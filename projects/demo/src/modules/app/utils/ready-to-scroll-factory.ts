import {ElementRef} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export function readyToScrollFactory(
    hostElement: ElementRef<HTMLElement>,
    resize$: Observable<unknown>,
): Observable<boolean> {
    return resize$.pipe(
        map(() => {
            const host = hostElement.nativeElement;
            const exampleElements = Array.from(host.querySelectorAll('tui-doc-example'));
            const codeElements = Array.from(host.querySelectorAll('tui-doc-code'));

            return (
                exampleElements.every(el => el.querySelector('.t-example')) &&
                codeElements.every(el => el.querySelector('.t-code'))
            );
        }),
    );
}
