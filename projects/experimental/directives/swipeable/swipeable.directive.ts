import {
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    Inject,
    Input,
    OnChanges,
    Output,
    Self,
} from '@angular/core';
import {tuiClamp, TuiDestroyService, TuiPanService} from '@taiga-ui/cdk';
import {TuiPoint} from '@taiga-ui/core';
import {Observable} from 'rxjs';
import {debounceTime, map, takeUntil} from 'rxjs/operators';

const DRAG = 0.1;

@Directive({
    selector: '[tuiSwipeable]',
    providers: [TuiPanService, TuiDestroyService],
})
export class TuiSwipeableDirective implements OnChanges {
    private pointer = 0;
    private animation?: Animation;

    @Input('tuiSwipeable')
    point: TuiPoint = [0, 0];

    @Output()
    tuiSwipeableChange = new EventEmitter<TuiPoint>();

    constructor(
        @Inject(TuiDestroyService) @Self() destroy$: Observable<unknown>,
        @Inject(TuiPanService) pan: Observable<readonly [number, number]>,
        @Inject(ElementRef) private readonly el: ElementRef<HTMLElement>,
    ) {
        pan.pipe(
            map(([x, y]) => [this.point[0] + x, this.point[1] + y] as const),
            takeUntil(destroy$),
        ).subscribe(point => {
            this.move(...point);
            this.update(...point);
        });

        pan.pipe(debounceTime(0), takeUntil(destroy$)).subscribe(([x, y]) => {
            const speed = Math.sqrt(x ** 2 + y ** 2);
            const time = speed / DRAG;

            x = this.point[0] + (x * time) / 2;
            y = this.point[1] + (y * time) / 2;
            this.el.nativeElement.style.setProperty('--w', `${speed * 10}px`);
            this.el.nativeElement.style.setProperty('--r', `${Math.atan2(y, x)}rad`);

            if (this.pointer || !speed) {
                return;
            }

            this.move(x, y);
            this.animation = this.animate(x, y, time * 10);
            this.update(x, y);
        });
    }

    @HostListener('pointerdown', ['1'])
    @HostListener('document:pointerup', ['-1'])
    @HostListener('pointercancel', ['-1'])
    onPointer(pointer: number): void {
        this.pointer = tuiClamp(this.pointer + pointer, 0, 1);
        this.animation?.pause();

        const current = this.el.nativeElement.getBoundingClientRect();

        this.animation?.finish();
        this.move(0, 0);

        const initial = this.el.nativeElement.getBoundingClientRect();

        this.update(current.left - initial.left, current.top - initial.top);
        this.move(...this.point);
    }

    ngOnChanges(): void {
        this.move(...this.point);
    }

    private animate(
        x: number,
        y: number,
        duration: number,
        easing = 'ease-out',
    ): Animation {
        return this.el.nativeElement.animate(
            [{transform: transform(...this.point)}, {transform: transform(x, y)}],
            {duration, easing},
        );
    }

    private update(x: number, y: number): void {
        this.point = [x, y];
        this.tuiSwipeableChange.emit(this.point);
    }

    private move(x: number, y: number): void {
        this.el.nativeElement.style.transform = transform(x, y);
    }
}

function transform(x: number, y: number): string {
    return `translate(${x}px, ${y}px)`;
}
