import {ChangeDetectorRef, ElementRef, inject, Injectable} from '@angular/core';
import {tuiFocusVisibleObservable, tuiWatch} from '@taiga-ui/cdk/observables';
import {Observable, takeUntil} from 'rxjs';

import {TuiDestroyService} from './destroy.service';

/**
 * Service to imitate :focus-visible
 * (https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
 * in browsers that do not support it
 */
@Injectable()
export class TuiFocusVisibleService extends Observable<boolean> {
    private readonly focusVisible$: Observable<boolean>;

    constructor() {
        super(subscriber => this.focusVisible$.subscribe(subscriber));

        this.focusVisible$ = tuiFocusVisibleObservable(
            inject(ElementRef<Element>).nativeElement,
        ).pipe(
            tuiWatch(inject(ChangeDetectorRef)),
            takeUntil(inject(TuiDestroyService, {self: true})),
        );
    }
}
