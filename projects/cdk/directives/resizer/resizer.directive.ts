import type {ElementRef} from '@angular/core';
import {
    Directive,
    EventEmitter,
    HostBinding,
    HostListener,
    inject,
    Input,
    Output,
} from '@angular/core';
import {tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';

import {TuiResizeableDirective} from './resizeable.directive';

@Directive({
    standalone: true,
    selector: '[tuiResizer]',
    host: {'[style.touchAction]': '"none"'},
})
export class TuiResizerDirective {
    private readonly resizeable: ElementRef<HTMLElement> = inject(TuiResizeableDirective);

    @Input()
    public tuiResizer: readonly [x: number, y: number] = [0, 0];

    @Output()
    public readonly tuiSizeChange = new EventEmitter<readonly [x: number, y: number]>();

    protected x = NaN;
    protected y = NaN;
    protected width = 0;
    protected height = 0;

    @HostBinding('style.cursor')
    protected get cursor(): string {
        if (!this.tuiResizer[0]) {
            return 'ns-resize';
        }

        if (!this.tuiResizer[1]) {
            return 'ew-resize';
        }

        if (this.tuiResizer[0] * this.tuiResizer[1] > 0) {
            return 'nwse-resize';
        }

        return 'nesw-resize';
    }

    @HostListener('pointerdown.silent.prevent', ['$event.x', '$event.y'])
    protected onPointerDown(x: number, y: number): void {
        this.x = x;
        this.y = y;
        this.width = this.resizeable.nativeElement.clientWidth;
        this.height = this.resizeable.nativeElement.clientHeight;
    }

    @HostListener('document:pointermove.silent', ['$event'])
    protected onPointerMove({x, y, buttons}: PointerEvent): void {
        if (!buttons) {
            this.onPointerUp();
        } else {
            this.onMove(x, y);
        }
    }

    @HostListener('document:pointerup.silent')
    protected onPointerUp(): void {
        this.x = NaN;
    }

    protected onMove(x: number, y: number): void {
        if (Number.isNaN(this.x)) {
            return;
        }

        const {style} = this.resizeable.nativeElement;
        const size = [
            this.width + this.tuiResizer[0] * (x - this.x),
            this.height + this.tuiResizer[1] * (y - this.y),
        ] as const;

        if (this.tuiResizer[0]) {
            style.width = tuiPx(size[0]);
        }

        if (this.tuiResizer[1]) {
            style.height = tuiPx(size[1]);
        }

        this.tuiSizeChange.emit(size);
    }
}
