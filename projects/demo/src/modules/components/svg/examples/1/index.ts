import {Component, Inject} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {assets} from '@demo/utils';
import {ALWAYS_TRUE_HANDLER} from '@taiga-ui/cdk';
import {TuiSvgService} from '@taiga-ui/core';
import {tuiIconMaestro, tuiIconMastercard, tuiIconTimeLarge} from '@taiga-ui/icons';
import {timer} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'tui-svg-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiSvgExample1 {
    readonly timeout$ = timer(0).pipe(map(ALWAYS_TRUE_HANDLER));

    readonly imageUrl = assets`/images/ts.svg#ts`;

    readonly tuiIconTimeLarge = this.sanitizer.bypassSecurityTrustHtml(tuiIconTimeLarge);

    constructor(
        @Inject(TuiSvgService) svgService: TuiSvgService,
        @Inject(DomSanitizer) private readonly sanitizer: DomSanitizer,
    ) {
        svgService.define({
            customTuiIconMaestro: tuiIconMaestro,
            customTuiIconMastercard: tuiIconMastercard,
        });
    }
}
