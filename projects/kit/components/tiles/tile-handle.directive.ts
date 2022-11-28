import {Directive, HostListener, Inject} from '@angular/core';
import {tuiIsElement} from '@taiga-ui/cdk';

import {TuiTileComponent} from './tile.component';

@Directive({
    selector: `[tuiTileHandle]`,
    host: {
        '[style.touchAction]': `"none"`,
    },
})
export class TuiTileHandleDirective {
    private x = NaN;
    private y = NaN;

    constructor(@Inject(TuiTileComponent) private readonly tile: TuiTileComponent) {}

    @HostListener(`pointerdown.silent.prevent`, [`$event`])
    onStart({x, y, pointerId, target}: PointerEvent): void {
        if (tuiIsElement(target)) {
            target.releasePointerCapture(pointerId);
        }

        this.onPointer(x, y);
    }

    @HostListener(`document:pointerup.silent`)
    onPointer(x = NaN, y = NaN): void {
        this.x = x - this.tile.element.offsetLeft;
        this.y = y - this.tile.element.offsetTop;
        this.tile.onDrag(!Number.isNaN(x));
        this.tile.offset$.next([0, 0]);
    }

    @HostListener(`document:pointermove.silent`, [`$event.x`, `$event.y`])
    onMove(x: number, y: number): void {
        if (!Number.isNaN(this.x)) this.tile.offset$.next([x - this.x, y - this.y]);
    }
}
