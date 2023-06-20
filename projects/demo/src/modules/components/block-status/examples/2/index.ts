import {Component, Inject} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TUI_IS_MOBILE_RES, TuiSizeL} from '@taiga-ui/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'tui-block-status-example-2',
    templateUrl: './index.html',
    changeDetection,
    encapsulation,
})
export class TuiBlockStatusExample2 {
    size$: Observable<TuiSizeL> = this.isMobile$.pipe(
        map(isMobile => (isMobile ? 'm' : 'l')),
    );

    constructor(@Inject(TUI_IS_MOBILE_RES) readonly isMobile$: Observable<boolean>) {}
}
