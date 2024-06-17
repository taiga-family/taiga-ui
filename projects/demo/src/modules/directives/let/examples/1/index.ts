import {AsyncPipe, isPlatformBrowser} from '@angular/common';
import {Component, inject, PLATFORM_ID} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLet} from '@taiga-ui/cdk';
import {TuiBadgeDirective} from '@taiga-ui/kit';
import {interval, NEVER, startWith} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiLet, TuiBadgeDirective, AsyncPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected timer$ = isPlatformBrowser(inject(PLATFORM_ID))
        ? interval(1000).pipe(startWith(0))
        : NEVER;
}
