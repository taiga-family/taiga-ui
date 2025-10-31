import {Directive, type OnDestroy, Output} from '@angular/core';
import {BehaviorSubject, distinctUntilChanged, skip} from 'rxjs';

@Directive({
    selector: '[tuiPresentChange]',
    host: {
        '[style.animation]': '"tuiPresent 1s infinite"',
        '(animationcancel.self)': 'onAnimation(false)',
        '(animationstart.self)': 'onAnimation(true)',
    },
})
export class TuiPresent implements OnDestroy {
    private readonly visibility$ = new BehaviorSubject(false);

    @Output()
    public readonly tuiPresentChange = this.visibility$.pipe(
        distinctUntilChanged(),
        skip(1),
    );

    public ngOnDestroy(): void {
        this.visibility$.next(false);
    }

    protected onAnimation(visibility: boolean): void {
        this.visibility$.next(visibility);
    }
}
