import {ElementRef} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export function readyToScrollFactory(
    hostElement: ElementRef<HTMLElement>,
    resize$: Observable<unknown>,
): Observable<boolean> {
    return resize$.pipe(
        map(() => {
            const exampleElements = Array.from(
                hostElement.nativeElement.querySelectorAll('tui-doc-example'),
            );

            return exampleElements.every(el => el.querySelector('.t-example'));
        }),
    );
}
