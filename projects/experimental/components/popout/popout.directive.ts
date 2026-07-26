import {Directive, input} from '@angular/core';
import {tuiAsPortal, TuiPortalDirective} from '@taiga-ui/cdk/portals';

import {type TuiPopoutOptions} from './popout.component';
import {TuiPopoutService} from './popout.service';

@Directive({
    selector: 'ng-template[tuiPopout]',
    providers: [tuiAsPortal(TuiPopoutService)],
    hostDirectives: [
        {
            directive: TuiPortalDirective,
            inputs: ['options: tuiPopoutOptions', 'open: tuiPopout'],
            outputs: ['openChange: tuiPopoutChange'],
        },
    ],
})
export class TuiPopout {
    public readonly tuiPopoutOptions = input<Partial<TuiPopoutOptions>>({});
}
