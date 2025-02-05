import type {ElementRef} from '@angular/core';
import {Directive, EventEmitter, inject, Input, Output} from '@angular/core';
import {tuiPx} from '@taiga-ui/cdk/utils/miscellaneous';

import {TuiResizable} from './resizable.directive';

@Directive({
    standalone: true,
    selector: '[tuiResizer]',
    host: {
        '[style.cursor]': 'cursor',
        '[style.touchAction]': '"none"',
        '(pointerdown.zoneless.prevent)': 'onPointerDown($event.x, $event.y)',
        '(document:pointermove.zoneless)': 'onPointerMove($event)',
        '(document:pointerup.zoneless)': 'onPointerUp()',
    },
})
export class TuiResizer {
    private readonly resizable: ElementRef<HTMLElement> = inject(TuiResizable);

    protected x = NaN;
    protected y = NaN;
    protected width = 0;
    protected height = 0;

    @Input()
    public tuiResizer: readonly [x: number, y: number] = [0, 0];

    @Output()
    public readonly tuiSizeChange = new EventEmitter<readonly [x: number, y: number]>();

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

    protected onPointerDown(x: number, y: number): void {
        this.x = x;
        this.y = y;
        this.width = this.resizable.nativeElement.clientWidth;
        this.height = this.resizable.nativeElement.clientHeight;
    }

    protected onPointerMove({x, y, buttons}: PointerEvent): void {
        if (!buttons) {
            this.onPointerUp();
        } else {
            this.onMove(x, y);
        }
    }

    protected onPointerUp(): void {
        this.x = NaN;
    }

    protected onMove(x: number, y: number): void {
        if (Number.isNaN(this.x)) {
            return;
        }

        const {style} = this.resizable.nativeElement;
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
