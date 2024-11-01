import {Directive, ElementRef, inject} from '@angular/core';

@Directive({
    standalone: true,
    selector: 'progress[tuiProgressBar][tuiProgressFixedGradient]',
    host: {
        '[style.--tui-progress-percent.%]': 'progressPercent',
    },
})
export class TuiProgressFixedGradientDirective {
    private readonly nativeElement = inject(ElementRef<HTMLProgressElement>);

    public get progressPercent(): number {
        const value = this.nativeElement.nativeElement.value;
        const max = this.nativeElement.nativeElement.max ?? 1;

        return Math.min((value / max) * 100, 100);
    }
}
