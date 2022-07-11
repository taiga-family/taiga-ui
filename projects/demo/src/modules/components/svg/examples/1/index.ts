import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiSvgService} from '@taiga-ui/core';
import {tuiIconMaestro, tuiIconMastercard, tuiIconTimeLarge} from '@taiga-ui/icons';
import {timer} from 'rxjs';
import {mapTo} from 'rxjs/operators';

@Component({
    selector: 'tui-svg-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiSvgExample1 {
    readonly timeout$ = timer(0).pipe(mapTo(true));

    readonly imageUrl = `${new URL(
        '../../../../../assets/images/ts.svg',
        import.meta.url,
    )}#ts`;

    readonly tuiIconTimeLarge = tuiIconTimeLarge;

    constructor(@Inject(TuiSvgService) svgService: TuiSvgService) {
        svgService.define({
            customTuiIconMaestro: tuiIconMaestro,
            customTuiIconMastercard: tuiIconMastercard,
        });
    }
}
