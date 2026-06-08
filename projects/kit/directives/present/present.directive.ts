import {isPlatformServer} from '@angular/common';
import {Directive, inject, type OnDestroy, output, PLATFORM_ID} from '@angular/core';

@Directive({
    selector: '[tuiPresent]',
    host: {
        '[style.animation]': 'isServer ? "" : "tuiPresent 1s infinite"',
        '(animationcancel.self)': 'tuiPresent.emit(false)',
        '(animationstart.self)': 'tuiPresent.emit(true)',
    },
})
export class TuiPresent implements OnDestroy {
    protected readonly isServer = isPlatformServer(inject(PLATFORM_ID));

    public readonly tuiPresent = output<boolean>();

    public ngOnDestroy(): void {
        this.tuiPresent.emit(false);
    }
}
