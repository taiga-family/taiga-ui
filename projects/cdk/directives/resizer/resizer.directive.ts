import {
    Directive,
    ElementRef,
    EventEmitter,
    HostBinding,
    HostListener,
    Inject,
    Input,
    Output,
} from '@angular/core';
import {tuiDefaultProp} from '@taiga-ui/cdk/decorators';
import {tuiPx} from '@taiga-ui/cdk/utils/format';

import {TuiResizeableDirective} from './resizeable.directive';

// TODO: Migrate to PointerEvent in 4.0
@Directive({
    selector: `[tuiResizer]`,
    host: {'[style.touchAction]': `"none"`},
})
export class TuiResizerDirective {
    @Input()
    @tuiDefaultProp()
    tuiResizer: readonly [x: number, y: number] = [0, 0];

    @Output()
    readonly tuiSizeChange = new EventEmitter<readonly [x: number, y: number]>();

    x = NaN;
    y = NaN;
    width = 0;
    height = 0;

    constructor(
        @Inject(TuiResizeableDirective)
        private readonly resizeable: ElementRef<HTMLElement>,
    ) {}

    @HostBinding(`style.cursor`)
    get cursor(): string {
        if (!this.tuiResizer[0]) {
            return `ns-resize`;
        }

        if (!this.tuiResizer[1]) {
            return `ew-resize`;
        }

        if (this.tuiResizer[0] * this.tuiResizer[1] > 0) {
            return `nwse-resize`;
        }

        return `nesw-resize`;
    }

    @HostListener(`touchstart.silent.passive`, [`$event`])
    onTouchStart({touches}: TouchEvent): void {
        this.onMouseDown(touches[0].clientX, touches[0].clientY);
    }

    @HostListener(`mousedown.silent.prevent`, [`$event.x`, `$event.y`])
    onMouseDown(x: number, y: number): void {
        this.x = x;
        this.y = y;
        this.width = this.resizeable.nativeElement.clientWidth;
        this.height = this.resizeable.nativeElement.clientHeight;
    }

    @HostListener(`document:mousemove.silent`, [`$event`])
    onMouseMove({x, y, buttons}: MouseEvent): void {
        if (!buttons) {
            this.onMouseUp();
        } else {
            this.onMove(x, y);
        }
    }

    @HostListener(`document:touchmove.silent`, [`$event`])
    onTouchMove({touches}: TouchEvent): void {
        this.onMove(touches[0].clientX, touches[0].clientY);
    }

    @HostListener(`document:mouseup.silent`)
    @HostListener(`document:touchend.silent`)
    onMouseUp(): void {
        this.x = NaN;
    }

    onMove(x: number, y: number): void {
        if (isNaN(this.x)) {
            return;
        }

        const {style} = this.resizeable.nativeElement;
        const size = [
            this.width + this.tuiResizer[0] * (x - this.x),
            this.height + this.tuiResizer[1] * (y - this.y),
        ] as const;

        style.width = tuiPx(size[0]);
        style.height = tuiPx(size[1]);
        this.tuiSizeChange.emit(size);
    }
}
