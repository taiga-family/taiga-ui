import {afterNextRender, Directive} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils';

@Directive({
    selector: '[tuiTransitioned]',
    host: {'[style.transition]': '"none"'},
})
export class TuiTransitioned {
    private readonly el = tuiInjectElement();

    constructor() {
        afterNextRender(() => this.el.style.setProperty('transition', ''));
    }
}
