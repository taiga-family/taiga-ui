import * as imageUrl from '!!file-loader!../../../../../assets/images/ts.svg';

import {Component, Inject} from '@angular/core';
import {tuiIconMaestro, tuiIconMastercard} from '@taiga-ui/addon-commerce';
import {TuiSvgService} from '@taiga-ui/core';
import {tuiIconTimeLarge} from '@taiga-ui/icons';
import {timer} from 'rxjs';
import {mapTo} from 'rxjs/operators';
import {changeDetection} from '../../../../../change-detection-strategy';
import {encapsulation} from '../../../../../view-encapsulation';

@Component({
    selector: 'tui-svg-example-1',
    templateUrl: './index.html',
    styleUrls: ['./index.less'],
    changeDetection,
    encapsulation,
})
export class TuiSvgExample1 {
    readonly timeout$ = timer(0).pipe(mapTo(true));

    readonly imageUrl = imageUrl + '#ts';

    readonly tuiIconTimeLarge = tuiIconTimeLarge;

    constructor(@Inject(TuiSvgService) svgService: TuiSvgService) {
        svgService.define({
            customTuiIconMaestro: tuiIconMaestro,
            customTuiIconMastercard: tuiIconMastercard,
        });
    }
}
