import {AsyncPipe, isPlatformBrowser} from '@angular/common';
import {Component, inject, PLATFORM_ID} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {TuiLetDirective} from '@taiga-ui/cdk';
import {TuiBadgeDirective} from '@taiga-ui/kit';
import {interval, NEVER, startWith} from 'rxjs';

@Component({
    standalone: true,
    imports: [TuiLetDirective, TuiBadgeDirective, AsyncPipe],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class ExampleComponent {
    protected timer$ = isPlatformBrowser(inject(PLATFORM_ID))
        ? interval(1000).pipe(startWith(0))
        : NEVER;
}
