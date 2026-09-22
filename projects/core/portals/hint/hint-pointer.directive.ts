import {DOCUMENT} from '@angular/common';
import {
    afterNextRender,
    Directive,
    type ElementRef,
    inject,
    type OnDestroy,
} from '@angular/core';
import {EMPTY_CLIENT_RECT} from '@taiga-ui/cdk/constants';
import {tuiProvide} from '@taiga-ui/cdk/utils/di';
import {tuiPointToClientRect} from '@taiga-ui/cdk/utils/dom';
import {tuiGenerateId} from '@taiga-ui/cdk/utils/miscellaneous';
import {
    tuiAsDriver,
    tuiAsRectAccessor,
    type TuiRectAccessor,
} from '@taiga-ui/core/classes';

import {TUI_HINT_ANCHOR} from './hint-anchor.directive';
import {TuiHintHover} from './hint-hover.directive';

const STYLE: Partial<CSSStyleDeclaration> = {
    position: 'fixed',
    blockSize: '1px',
    inlineSize: '1px',
    pointerEvents: 'none',
};

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
    private readonly doc = inject(DOCUMENT);
    private currentRect = EMPTY_CLIENT_RECT;

    public readonly nativeElement = this.doc.createElement('div');

    constructor() {
        super();

        afterNextRender(() => {
            const anchorName = `--${tuiGenerateId()}`;
            const positionAnchor = this.el.getAttribute('data-tui-anchor');
            const style = {...STYLE, positionAnchor, anchorName};

            Object.assign(this.nativeElement.style, style);
            this.nativeElement.setAttribute('data-tui-anchor', anchorName);
            this.doc.body.appendChild(this.nativeElement);
        });
    }

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
