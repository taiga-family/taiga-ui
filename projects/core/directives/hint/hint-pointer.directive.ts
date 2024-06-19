import {Directive, HostListener} from '@angular/core';
import {EMPTY_CLIENT_RECT, tuiPointToClientRect} from '@taiga-ui/cdk';
import type {TuiRectAccessor} from '@taiga-ui/core/classes';
import {tuiAsDriver, tuiAsRectAccessor} from '@taiga-ui/core/classes';

import {TuiHintHover} from './hint-hover.directive';

@Directive({
    standalone: true,
    selector: '[tuiHint][tuiHintPointer]',
    providers: [tuiAsRectAccessor(TuiHintPointer), tuiAsDriver(TuiHintPointer)],
})
export class TuiHintPointer extends TuiHintHover implements TuiRectAccessor {
    private currentRect = EMPTY_CLIENT_RECT;

    public getClientRect(): ClientRect {
        return this.currentRect;
    }

    @HostListener('mousemove.silent', ['$event'])
    protected onMove({clientX, clientY}: MouseEvent): void {
        this.currentRect = tuiPointToClientRect(clientX, clientY);
    }
}
