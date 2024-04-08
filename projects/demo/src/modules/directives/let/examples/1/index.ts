import {isPlatformBrowser} from '@angular/common';
import {Component, inject, PLATFORM_ID} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {interval, NEVER, startWith} from 'rxjs';

@Component({
    selector: 'tui-let-example-1',
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export class TuiLetExample1 {
    protected timer$ = isPlatformBrowser(inject(PLATFORM_ID))
        ? interval(1000).pipe(startWith(0))
        : NEVER;
}
