import {Directive, ElementRef, inject} from '@angular/core';

@Directive({
    standalone: true,
    selector: 'progress[tuiProgressBar][tuiProgressFixedGradient]',
    host: {
        '[style.--tui-progress-percent]': "progressPercent + '%'",
    },
})
export class TuiProgressFixedGradientDirective {
    private nativeElement = inject(ElementRef<HTMLProgressElement>);

    public get progressPercent(): number {
        const value = this.nativeElement.nativeElement.value;
        const max = this.nativeElement.nativeElement.max;

        if (!max) {
            return 0;
        }

        return Math.min((value / max) * 100, 100);
    }
}
