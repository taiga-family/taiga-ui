import {DOCUMENT} from '@angular/common';
import {Directive, inject} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {tuiTypedFromEvent} from '@taiga-ui/cdk/observables';
import {tuiGetActualTarget, tuiIsElement} from '@taiga-ui/cdk/utils/dom';
import {filter, merge} from 'rxjs';

import {TuiTile} from './tile.component';

@Directive({
    selector: '[tuiTileHandle]',
    host: {'(pointerdown.zoneless.prevent)': 'onStart($event)'},
})
export class TuiTileHandle {
    private readonly doc = inject(DOCUMENT);
    private readonly tile = inject(TuiTile);
    private x = NaN;
    private y = NaN;

    protected readonly pointerSub = merge(
        tuiTypedFromEvent(this.doc, 'pointerup'),
        tuiTypedFromEvent(this.doc, 'pointermove'),
    )
        .pipe(
            filter(() => !Number.isNaN(this.x)),
            takeUntilDestroyed(),
        )
        .subscribe(({x, y, type}) => {
            if (type === 'pointerup') {
                this.onPointer();
            } else {
                this.tile.onDrag([x - this.x, y - this.y]);
            }
        });

    protected onPointer(x = NaN, y = NaN): void {
        const {left, top} = this.tile.element.getBoundingClientRect();

        this.x = x - left;
        this.y = y - top;
        this.tile.onDrag([NaN, NaN]);
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
