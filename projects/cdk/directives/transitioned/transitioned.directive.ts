import {afterNextRender, Directive} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';

@Directive({
    selector: '[tuiTransitioned]',
    host: {style: 'transition: none'},
})
export class TuiTransitioned {
    constructor() {
        const el = tuiInjectElement();

        afterNextRender(() =>
            requestAnimationFrame(() => el.style.setProperty('transition', '')),
        );
    }
}
