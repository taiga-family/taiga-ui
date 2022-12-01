import {ChangeDetectorRef, ElementRef, Inject, Injectable, Self} from '@angular/core';
import {tuiFocusVisibleObservable, tuiWatch} from '@taiga-ui/cdk/observables';
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

import {TuiDestroyService} from './destroy.service';

/**
 * Service to imitate :focus-visible
 * (https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible)
 * in browsers that do not support it
 */
@Injectable()
export class TuiFocusVisibleService extends Observable<boolean> {
    private readonly focusVisible$: Observable<boolean>;

    constructor(
        @Inject(ElementRef) {nativeElement}: ElementRef<Element>,
        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,
        @Self() @Inject(TuiDestroyService) destroy$: Observable<void>,
    ) {
        super(subscriber => this.focusVisible$.subscribe(subscriber));

        this.focusVisible$ = tuiFocusVisibleObservable(nativeElement).pipe(
            tuiWatch(changeDetectorRef),
            takeUntil(destroy$),
        );
    }
}
