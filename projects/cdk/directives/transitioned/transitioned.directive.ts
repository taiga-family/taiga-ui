import {Directive, inject, NgZone} from '@angular/core';
import {tuiInjectElement} from '@taiga-ui/cdk/utils';

@Directive({
    standalone: true,
    selector: '[tuiTransitioned]',
    host: {
        '[style.transition]': '"none"',
    },
})
export class TuiTransitioned {
    constructor() {
        const el = tuiInjectElement();

        inject(NgZone).runOutsideAngular(() => {
            setTimeout(() => {
                el.style.transition = '';
            });
        });
    }
}
