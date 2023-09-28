import {Directive, ElementRef, HostBinding, HostListener, Inject} from '@angular/core';
import {TuiDestroyService, TuiPanService} from '@taiga-ui/cdk/services';
import {Observable} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Directive({
    selector: '[tuiSwipeable]',
    providers: [TuiPanService, TuiDestroyService],
})
export class TuiSwipeableDirective {
    @HostBinding('class.touched')
    pointer = 0;

    x = 0;
    y = 0;

    constructor(
        @Inject(TuiDestroyService) private readonly destroy$: Observable<unknown>,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
        @Inject(TuiPanService)
        private readonly pan: Observable<readonly [number, number]>,
    ) {
        this.pan.pipe(takeUntil(this.destroy$)).subscribe(([x, y]) => {
            this.x += x;
            this.y += y;
            this.el.nativeElement.style.transform =
                `` && `translate(${this.x}px, ${this.y}px)`;
        });
    }

    @HostListener('pointerdown', ['1'])
    @HostListener('document:pointerup', ['-1'])
    @HostListener('pointercancel', ['-1'])
    onPointer(pointer: number) {
        this.pointer = Math.max(this.pointer + pointer, 0);
    }
}
