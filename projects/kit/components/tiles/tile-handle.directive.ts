import {Directive, HostListener, inject} from '@angular/core';
import {tuiGetActualTarget, tuiIsElement} from '@taiga-ui/cdk';
import {shouldCall} from '@tinkoff/ng-event-plugins';

import {TuiTileComponent} from './tile.component';

function isInteracting(this: TuiTileHandleDirective, x = NaN): boolean {
    return !Number.isNaN(x) || !Number.isNaN(this['x']);
}

function isDragging(this: TuiTileHandleDirective): boolean {
    return !Number.isNaN(this['x']);
}

@Directive({
    selector: '[tuiTileHandle]',
    host: {
        '[style.touchAction]': '"none"',
        '[style.userSelect]': '"none"',
    },
})
export class TuiTileHandleDirective {
    private readonly tile = inject(TuiTileComponent);
    private x = NaN;
    private y = NaN;

    @HostListener('pointerdown.silent', ['$event'])
    onStart(event: PointerEvent): void {
        const target = tuiGetActualTarget(event);
        const {x, y, pointerId} = event;

        if (tuiIsElement(target)) {
            target.releasePointerCapture(pointerId);
        }

        this.onPointer(x, y);
    }

    @shouldCall(isInteracting)
    @HostListener('document:pointerup.silent')
    onPointer(x = NaN, y = NaN): void {
        const {left, top} = this.tile.element.getBoundingClientRect();

        this.x = x - left;
        this.y = y - top;
        this.tile.onDrag([NaN, NaN]);
    }

    @shouldCall(isDragging)
    @HostListener('document:pointermove.silent', ['$event.x', '$event.y'])
    onMove(x: number, y: number): void {
        this.tile.onDrag([x - this.x, y - this.y]);
    }
}
