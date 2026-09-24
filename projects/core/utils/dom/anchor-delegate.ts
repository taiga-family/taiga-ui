import {DOCUMENT} from '@angular/common';
import {afterNextRender, inject} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiGenerateId} from '@taiga-ui/cdk/utils/miscellaneous';
import {TuiPopupService} from '@taiga-ui/core/portals/popup';

const STYLE: Partial<CSSStyleDeclaration> = {position: 'fixed', pointerEvents: 'none'};

export function tuiAnchorDelegate(
    styles: Partial<CSSStyleDeclaration> = {},
): HTMLElement {
    const el = tuiInjectElement();
    const popups = inject(TuiPopupService);
    const anchor = inject(DOCUMENT).createElement('div');

    afterNextRender(() => {
        const anchorName = `--${tuiGenerateId()}`;
        const positionAnchor = el.dataset.tuiAnchor;

        Object.assign(anchor.style, {...STYLE, ...styles, positionAnchor, anchorName});
        anchor.dataset.tuiAnchor = anchorName;
        popups.add(anchor);
    });

    return anchor;
}
