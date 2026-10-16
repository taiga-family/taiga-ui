import {isPlatformServer} from '@angular/common';
import {Directive, inject, type OnDestroy, PLATFORM_ID} from '@angular/core';
import {outputFromObservable} from '@angular/core/rxjs-interop';
import {BehaviorSubject, distinctUntilChanged, skip} from 'rxjs';

@Directive({
    selector: '[tuiPresent]',
    host: {
        '[style.animation]': 'isServer ? "" : "tuiPresent 1s infinite"',
        '(animationcancel.self)': 'onVisible(false)',
        '(animationstart.self)': 'onVisible(true)',
    },
})
export class TuiPresent implements OnDestroy {
    private readonly visible$ = new BehaviorSubject(false);

    protected readonly isServer = isPlatformServer(inject(PLATFORM_ID));

    public readonly tuiPresent = outputFromObservable(
        this.visible$.pipe(distinctUntilChanged(), skip(1)),
    );

    public ngOnDestroy(): void {
        this.visible$.next(false);
    }

    protected onVisible(visible: boolean): void {
        this.visible$.next(visible);
    }
}
