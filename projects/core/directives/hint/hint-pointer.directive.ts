import {Directive} from '@angular/core';
import {EMPTY_CLIENT_RECT} from '@taiga-ui/cdk/constants';
import {tuiPointToClientRect} from '@taiga-ui/cdk/utils/dom';
import type {TuiRectAccessor} from '@taiga-ui/core/classes';
import {tuiAsDriver, tuiAsRectAccessor} from '@taiga-ui/core/classes';

import {TuiHintHover} from './hint-hover.directive';

@Directive({
    standalone: true,
    selector: '[tuiHint][tuiHintPointer]',
    providers: [tuiAsRectAccessor(TuiHintPointer), tuiAsDriver(TuiHintPointer)],
    host: {
        '(mousemove.zoneless)': 'onMove($event)',
    },
})
export class TuiHintPointer extends TuiHintHover implements TuiRectAccessor {
    private currentRect = EMPTY_CLIENT_RECT;

    public getClientRect(): DOMRect {
        return this.currentRect;
    }

    protected onMove({clientX, clientY}: MouseEvent): void {
        this.currentRect = tuiPointToClientRect(clientX, clientY);
    }
}
