import {DestroyRef, Directive, inject} from '@angular/core';
import {EventManager} from '@angular/platform-browser';
import {WA_IS_MOBILE} from '@ng-web-apis/platform';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

import {TuiHintHover} from './hint-hover.directive';

/**
 * Synthesized `mouseenter` is not fired again until another element is tapped, so showing on mobile
 * cannot rely on it. On buttons and links we only show hint on longtap give tap is the main action.
 */
@Directive()
export class TuiHintMobile {
    constructor() {
        const el = tuiInjectElement();
        const hint = inject(TuiHintHover);
        const event = el.matches('a,button') ? 'longtap' : 'click';

        if (inject(WA_IS_MOBILE)) {
            el.style.setProperty('-webkit-touch-callout', 'none');
            inject(DestroyRef).onDestroy(
                // @ts-ignore
                inject(EventManager).addEventListener(el, event, () => hint.toggle()),
            );
        }
    }
}
