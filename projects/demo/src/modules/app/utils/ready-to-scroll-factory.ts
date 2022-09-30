import {ElementRef} from '@angular/core';
import {Observable} from 'rxjs';
import {debounceTime, map, startWith} from 'rxjs/operators';

export function readyToScrollFactory(
    hostElement: ElementRef<HTMLElement>,
    resize$: Observable<unknown>,
): Observable<boolean> {
    return resize$.pipe(
        startWith(null),
        debounceTime(0), // Synchronous scrollIntoView (after click) does not work https://stackoverflow.com/a/56971002
        map(() => {
            const host = hostElement.nativeElement;
            const exampleElements = Array.from(host.querySelectorAll(`tui-doc-example`));
            const codeElements = Array.from(host.querySelectorAll(`tui-doc-code`));

            return (
                exampleElements.every(el => el.querySelector(`.t-example`)) &&
                codeElements.every(el => el.querySelector(`.t-code`))
            );
        }),
    );
}
