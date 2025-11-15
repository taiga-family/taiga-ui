import {Directive, model, type OnDestroy} from '@angular/core';

@Directive({
    selector: '[tuiPresentChange]',
    host: {
        '[style.animation]': '"tuiPresent 1s infinite"',
        '(animationcancel.self)': 'onAnimation(false)',
        '(animationstart.self)': 'onAnimation(true)',
    },
})
export class TuiPresent implements OnDestroy {
    public readonly tuiPresent = model(false);

    public ngOnDestroy(): void {
        this.tuiPresent.set(false);
    }

    protected onAnimation(visibility: boolean): void {
        this.tuiPresent.set(visibility);
    }
}
