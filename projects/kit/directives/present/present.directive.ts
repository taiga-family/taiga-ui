import {Directive, HostListener, OnDestroy, Output} from '@angular/core';
import {BehaviorSubject, distinctUntilChanged, skip} from 'rxjs';

@Directive({
    standalone: true,
    selector: '[tuiPresentChange]',
    host: {
        '[style.animation]': '"tuiPresent 1s infinite"',
    },
})
export class TuiPresentDirective implements OnDestroy {
    private readonly visibility$ = new BehaviorSubject(false);

    @Output()
    readonly tuiPresentChange = this.visibility$.pipe(distinctUntilChanged(), skip(1));

    @HostListener('animationcancel.self', ['false'])
    @HostListener('animationstart.self', ['true'])
    onAnimation(visibility: boolean): void {
        this.visibility$.next(visibility);
    }

    ngOnDestroy(): void {
        this.visibility$.next(false);
    }
}
