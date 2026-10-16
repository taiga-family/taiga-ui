import {Directive, type ElementRef, type OnDestroy} from '@angular/core';
import {EMPTY_CLIENT_RECT} from '@taiga-ui/cdk/constants';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {tuiPointToClientRect} from '@taiga-ui/cdk/utils/dom';
import {
    tuiAsDriver,
    tuiAsRectAccessor,
    type TuiRectAccessor,
} from '@taiga-ui/core/classes';
import {tuiAnchorDelegate} from '@taiga-ui/core/utils/dom';

import {TUI_HINT_ANCHOR} from './hint-anchor.directive';
import {TuiHintHover} from './hint-hover.directive';

@Directive({
    selector: '[tuiHint][tuiHintPointer]',
    providers: [
        tuiAsRectAccessor(TuiHintPointer),
        tuiAsDriver(TuiHintPointer),
        tuiProvide(TUI_HINT_ANCHOR, TuiHintPointer),
    ],
    host: {'(mousemove.zoneless)': 'onMove($event)'},
})
export class TuiHintPointer
    extends TuiHintHover
    implements TuiRectAccessor, ElementRef<HTMLElement>, OnDestroy
{
    private currentRect = EMPTY_CLIENT_RECT;

    public readonly nativeElement = tuiAnchorDelegate({width: '1px', height: '1px'});

    public ngOnDestroy(): void {
        this.nativeElement.parentNode?.removeChild(this.nativeElement);
    }

    public getClientRect(): DOMRect {
        return this.currentRect;
    }

    protected onMove({clientX, clientY}: MouseEvent): void {
        const {top, left} = this.el.getBoundingClientRect();

        this.currentRect = tuiPointToClientRect(clientX, clientY);
        this.nativeElement.style.top = `calc(anchor(top) + ${clientY - top}px)`;
        this.nativeElement.style.left = `calc(anchor(left) + ${clientX - left}px)`;
    }
}
