import"./chunk-HU6DUUP4.js";var i=`import {AsyncPipe, isPlatformServer} from '@angular/common';
import {Component, inject, PLATFORM_ID} from '@angular/core';
import {changeDetection} from '@demo/emulate/change-detection';
import {encapsulation} from '@demo/emulate/encapsulation';
import {WA_IS_E2E} from '@ng-web-apis/platform';
import {TuiTitle} from '@taiga-ui/core';
import {TuiProgress} from '@taiga-ui/kit';
import {TuiHeader} from '@taiga-ui/layout';
import {map, of, startWith, takeWhile, timer} from 'rxjs';

@Component({
    imports: [AsyncPipe, TuiHeader, TuiProgress, TuiTitle],
    templateUrl: './index.html',
    encapsulation,
    changeDetection,
})
export default class Example {
    protected readonly max = 100;

    protected readonly value$ =
        inject(WA_IS_E2E) || isPlatformServer(inject(PLATFORM_ID))
            ? of(30)
            : timer(300, 200).pipe(
                  map((i) => i + 30),
                  startWith(30),
                  takeWhile((value) => value <= this.max),
              );
}
`;export{i as default};
