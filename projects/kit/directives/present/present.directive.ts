import {Directive, type OnDestroy, output} from '@angular/core';

@Directive({
    selector: '[tuiPresent]',
    host: {
        '[style.animation]': '"tuiPresent 1s infinite"',
        '(animationcancel.self)': 'tuiPresent.emit(false)',
        '(animationstart.self)': 'tuiPresent.emit(true)',
    },
})
export class TuiPresent implements OnDestroy {
    public readonly tuiPresent = output<boolean>();

    public ngOnDestroy(): void {
        this.tuiPresent.emit(false);
    }
}
