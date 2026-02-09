import {Directive, inject, PLATFORM_ID} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {isPlatformBrowser} from '@angular/common';

@Directive({
    selector: '[tuiTransitioned]',
    host: {'[style.transition]': '"none"'},
})
export class TuiTransitioned {
    constructor() {
        const el = tuiInjectElement();

        if (isPlatformBrowser(inject(PLATFORM_ID))) {
            requestAnimationFrame(() => el.style.setProperty('transition', ''));
        }
    }
}
