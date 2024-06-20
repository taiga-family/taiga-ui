import {Directive, HostListener, inject} from '@angular/core';
import {tuiGetActualTarget, tuiIsElement} from '@taiga-ui/cdk/utils/dom';
import {shouldCall} from '@taiga-ui/event-plugins';

import {TuiTile} from './tile.component';

function isInteracting(this: TuiTileHandle, x = NaN): boolean {
    return !Number.isNaN(x) || !Number.isNaN(this['x']);
}

function isDragging(this: TuiTileHandle): boolean {
    return !Number.isNaN(this['x']);
}

@Directive({
    standalone: true,
    selector: '[tuiTileHandle]',
    host: {
        '[style.touchAction]': '"none"',
        '[style.userSelect]': '"none"',
    },
})
export class TuiTileHandle {
    private readonly tile = inject(TuiTile);
    private x = NaN;
    private y = NaN;

    @HostListener('pointerdown.silent', ['$event'])
    protected onStart(event: PointerEvent): void {
        const target = tuiGetActualTarget(event);
        const {x, y, pointerId} = event;

        if (tuiIsElement(target)) {
            target.releasePointerCapture(pointerId);
        }

        this.onPointer(x, y);
    }

    @shouldCall(isInteracting)
    @HostListener('document:pointerup.silent')
    protected onPointer(x = NaN, y = NaN): void {
        const {left, top} = this.tile.element.getBoundingClientRect();

        this.x = x - left;
        this.y = y - top;
        this.tile.onDrag([NaN, NaN]);
    }

    @shouldCall(isDragging)
    @HostListener('document:pointermove.silent', ['$event.x', '$event.y'])
    protected onMove(x: number, y: number): void {
        this.tile.onDrag([x - this.x, y - this.y]);
    }
}
