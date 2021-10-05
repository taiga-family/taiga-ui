import {DOCUMENT} from '@angular/common';
import {Inject, Injectable, Renderer2} from '@angular/core';
import {TUI_DEFAULT_RENDERER} from '@taiga-ui/cdk/tokens';

/**
 * Service to use styles with directives
 * @dynamic
 */
@Injectable({
    providedIn: 'root',
})
export class TuiDirectiveStylesService {
    constructor(
        @Inject(DOCUMENT) private readonly documentRef: Document,
        @Inject(TUI_DEFAULT_RENDERER) private readonly renderer: Renderer2,
    ) {}

    addStyle(styles: string, attribute: string) {
        if (this.documentRef.head.querySelector(`style[${attribute}]`)) {
            return;
        }

        const style = this.renderer.createElement('style');

        this.renderer.setProperty(style, 'textContent', styles);
        this.renderer.setAttribute(style, attribute, '');
        this.documentRef.head.appendChild(style);
    }
}
