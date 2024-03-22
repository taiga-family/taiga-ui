import {Component, inject} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {assets} from '@demo/utils';
import {TUI_TRUE_HANDLER} from '@taiga-ui/cdk';
import {TUI_SANITIZER, TuiSvgService} from '@taiga-ui/core';
import {tuiIconClockLarge, tuiIconMaestro, tuiIconMastercard} from '@taiga-ui/icons';
import {NgDompurifySanitizer} from '@tinkoff/ng-dompurify';
import {map, timer} from 'rxjs';

import {INLINE_SVG} from './inline-svg';

@Component({
    selector: 'tui-icons-bundled-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    encapsulation,
    changeDetection,
    providers: [
        {
            provide: TUI_SANITIZER,
            useClass: NgDompurifySanitizer,
        },
    ],
})
export class TuiIconsBundledExample1 {
    protected readonly timeout$ = timer(0).pipe(map(TUI_TRUE_HANDLER));

    protected readonly imageUrl = assets`/images/ts.svg#ts`;

    protected readonly svg = INLINE_SVG;

    protected readonly tuiIconClockLarge =
        inject(DomSanitizer).bypassSecurityTrustHtml(tuiIconClockLarge);

    constructor() {
        inject(TuiSvgService).define({
            customTuiIconMaestro: tuiIconMaestro,
            customTuiIconMastercard: tuiIconMastercard,
        });
    }
}
