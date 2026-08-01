import {Directive, inject, NgZone} from '@angular/core';
import {tuiGetActualTarget, tuiIsElement} from '@taiga-ui/cdk/utils/dom';

import {TuiTile} from './tile.component';

@Directive({
    standalone: true,
    selector: '[tuiTileHandle]',
    host: {
        '(pointerdown.zoneless.prevent)': 'onStart($event)',
        '(document:pointerup.zoneless)': 'onPointer()',
        '(document:pointermove.zoneless)': 'onMove($event.x, $event.y)',
    },
})
export class TuiTileHandle {
    private readonly zone = inject(NgZone);
    private readonly tile = inject(TuiTile);
    private x = NaN;
    private y = NaN;

    protected onPointer(x = NaN, y = NaN): void {
        if (!Number.isNaN(x) || !Number.isNaN(this.x)) {
            this.zone.run(() => {
                const {left, top} = this.tile.element.getBoundingClientRect();

                this.x = x - left;
                this.y = y - top;
                this.tile.onDrag([NaN, NaN]);
            });
        }
    }

    protected onMove(x: number, y: number): void {
        if (!Number.isNaN(this.x)) {
            this.zone.run(() => {
                this.tile.onDrag([x - this.x, y - this.y]);
            });
        }
    }

    protected onStart(event: PointerEvent): void {
        const target = tuiGetActualTarget(event);
        const {x, y, pointerId} = event;

        if (tuiIsElement(target)) {
            target.releasePointerCapture(pointerId);
        }

        this.onPointer(x, y);
    }
}
