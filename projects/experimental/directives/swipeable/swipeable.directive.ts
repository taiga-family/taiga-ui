import {Directive, ElementRef, HostListener, Inject, Self} from '@angular/core';
import {tuiClamp, TuiDestroyService, TuiPanService} from '@taiga-ui/cdk';
import {Observable} from 'rxjs';
import {debounceTime, takeUntil} from 'rxjs/operators';

const DRAG = 0.1;

@Directive({
    selector: '[tuiSwipeable]',
    providers: [TuiPanService, TuiDestroyService],
})
export class TuiSwipeableDirective {
    private pointer = 0;
    private x = 0;
    private y = 0;
    private animation?: Animation;

    constructor(
        @Inject(TuiDestroyService) @Self() destroy$: Observable<unknown>,
        @Inject(TuiPanService) pan: Observable<readonly [number, number]>,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
    ) {
        pan.pipe(debounceTime(0), takeUntil(destroy$)).subscribe(([x, y]) => {
            const drag = this.pointer ? 0 : DRAG;
            const speed = Math.sqrt(x ** 2 + y ** 2);
            const time = speed / (drag || speed) || 1;
            const {height, width} = this.el.nativeElement.getBoundingClientRect();
            const host = this.el.nativeElement.parentElement!.getBoundingClientRect();
            const dx = x * time - (drag * time ** 2) / 2;
            const dy = y * time - (drag * time ** 2) / 2;

            x = this.x + dx || tuiClamp(this.x + dx, 0, host.width - width);
            y = this.y + dy || tuiClamp(this.y + dy, 0, host.height - height);

            this.move(x, y);

            if (!this.pointer) {
                this.animation = this.animate(x, y, time * 10);
            }

            this.x = x;
            this.y = y;
        });
    }

    @HostListener('pointerdown', ['1'])
    @HostListener('document:pointerup', ['-1'])
    @HostListener('pointercancel', ['-1'])
    onPointer(pointer: number): void {
        this.pointer = tuiClamp(this.pointer + pointer, 0, 1);
        this.animation?.pause();

        const current = this.el.nativeElement.getBoundingClientRect();

        this.move(0, 0);

        const initial = this.el.nativeElement.getBoundingClientRect();

        this.animation?.finish();
        this.x = current.left - initial.left;
        this.y = current.top - initial.top;
        this.move(this.x, this.y);
    }

    private move(x: number, y: number): void {
        this.el.nativeElement.style.transform = transform(x, y);
    }

    private animate(
        x: number,
        y: number,
        duration: number,
        easing = 'ease-out',
    ): Animation {
        return this.el.nativeElement.animate(
            [{transform: transform(this.x, this.y)}, {transform: transform(x, y)}],
            {duration, easing},
        );
    }
}

function transform(x: number, y: number): string {
    return `translate(${x}px, ${y}px)`;
}
